import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid3x3, List, RefreshCw, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toaster } from '@/components/ui/toaster';
import { db, Car, FilterOptions } from '@/lib/database';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import CarCard from '@/components/CarCard';
import CarCardSkeleton from '@/components/CarCardSkeleton';
import MobileFilterDrawer from '@/components/MobileFilterDrawer';
import ImageLightbox from '@/components/ImageLightbox';
import QuickActionsSheet from '@/components/QuickActionsSheet';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { usePullToRefresh } from '@/hooks/usePullToRefresh';

type ViewMode = 'grid' | 'list';
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'year-desc' | 'year-asc';

export default function HomePage(): JSX.Element {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<FilterOptions>({});
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('recars_view_mode');
    return (saved as ViewMode) || 'grid';
  });
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [displayedItems, setDisplayedItems] = useState<number>(10);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lightboxCarId, setLightboxCarId] = useState<string | null>(null);
  const [quickActionsCar, setQuickActionsCar] = useState<Car | null>(null);

  // Save viewMode to localStorage whenever it changes
  const handleViewModeChange = (mode: ViewMode): void => {
    setViewMode(mode);
    localStorage.setItem('recars_view_mode', mode);
  };

  // Get and filter cars
  const allCars = db.getAllCars();
  
  const filteredAndSortedCars = useMemo(() => {
    let cars = allCars;

    // Apply search
    if (searchQuery.trim()) {
      cars = db.searchCars(searchQuery);
    }

    // Apply filters
    if (Object.keys(filters).length > 0) {
      cars = db.filterCars(filters);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        cars = [...cars].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        cars = [...cars].sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        cars = [...cars].sort((a, b) => b.year - a.year);
        break;
      case 'year-asc':
        cars = [...cars].sort((a, b) => a.year - b.year);
        break;
      default:
        break;
    }

    return cars;
  }, [allCars, searchQuery, filters, sortBy]);

  const handleToggleFavorite = (carId: string): void => {
    db.toggleFavorite(carId);
    // Force re-render by updating a state
    setFilters({ ...filters });
  };

  const clearFilters = (): void => {
    setFilters({});
    setSearchQuery('');
  };

  const handleMakeChange = (make: string, checked: boolean): void => {
    const currentMakes = filters.make || [];
    const newMakes = checked
      ? [...currentMakes, make]
      : currentMakes.filter(m => m !== make);
    setFilters({ ...filters, make: newMakes.length > 0 ? newMakes : undefined });
  };

  const handleBodyTypeChange = (type: string, checked: boolean): void => {
    const currentTypes = filters.bodyType || [];
    const newTypes = checked
      ? [...currentTypes, type]
      : currentTypes.filter(t => t !== type);
    setFilters({ ...filters, bodyType: newTypes.length > 0 ? newTypes : undefined });
  };

  const handleFuelTypeChange = (fuel: string, checked: boolean): void => {
    const currentFuels = filters.fuelType || [];
    const newFuels = checked
      ? [...currentFuels, fuel]
      : currentFuels.filter(f => f !== fuel);
    setFilters({ ...filters, fuelType: newFuels.length > 0 ? newFuels : undefined });
  };

  // Infinite scroll handler
  const handleLoadMore = (): void => {
    if (displayedItems < filteredAndSortedCars.length) {
      setIsLoading(true);
      setTimeout(() => {
        setDisplayedItems((prev) => Math.min(prev + 10, filteredAndSortedCars.length));
        setIsLoading(false);
      }, 500);
    }
  };

  // Pull to refresh handler
  const handleRefresh = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setDisplayedItems(10);
        setFilters({ ...filters }); // Force re-render
        resolve();
      }, 1000);
    });
  };

  // Image lightbox handler
  const handleImageClick = (carId: string): void => {
    setLightboxCarId(carId);
  };

  // Quick actions handler
  const handleQuickActions = (car: Car): void => {
    setQuickActionsCar(car);
  };

  // Hooks
  const loadMoreRef = useInfiniteScroll({
    hasMore: displayedItems < filteredAndSortedCars.length,
    isLoading,
    onLoadMore: handleLoadMore,
    threshold: 300,
  });

  const { pullDistance, isRefreshing, containerRef } = usePullToRefresh({
    onRefresh: handleRefresh,
    threshold: 80,
    resistance: 2.5,
  });

  // Get lightbox images
  const lightboxCar = lightboxCarId ? filteredAndSortedCars.find(c => c.id === lightboxCarId) : null;
  const lightboxImages = lightboxCar ? [lightboxCar.image] : [];

  return (
    <div ref={containerRef} className="min-h-screen bg-app-bg">
      {/* Pull to Refresh Indicator */}
      <AnimatePresence>
        {(pullDistance > 0 || isRefreshing) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: pullDistance / 2 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4"
          >
            <div className="bg-app-surface rounded-full p-3 shadow-lg">
              <RefreshCw
                className={`w-5 h-5 text-app-text ${isRefreshing ? 'animate-spin' : ''}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <Header variant="full" />

      <div className="max-w-[1920px] mx-auto px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2">
        <div className="flex flex-col lg:flex-row gap-1.5 lg:gap-2">
          {/* Filters Sidebar - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0">
            <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-full">
            {/* Unified Search and Controls Section */}
            <div className="bg-app-surface rounded-xl shadow-md p-1.5 sm:p-2 mb-2 border border-app-border">
              {/* Row 1: Search + Filters Button */}
              <div className="flex items-center gap-1 mb-1.5">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-app-text/40" />
                  <Input
                    type="text"
                    placeholder="Search by make, model, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 h-11 rounded-lg border-app-border focus:border-app-primary focus:ring-2 focus:ring-app-primary/20 text-sm font-medium transition-all"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="gap-2 h-11 px-4 rounded-lg border-2 border-app-primary text-app-text text-sm font-semibold lg:hidden hover:bg-app-primary hover:text-white transition-all whitespace-nowrap"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                </Button>
              </div>

              {/* Row 2: Results Count + Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                {/* Left: Results Count */}
                <div className="flex items-center gap-1">
                  <h2 className="text-base sm:text-lg font-bold text-app-text">
                    Search Results
                  </h2>
                  <span className="text-xs sm:text-sm text-app-text/70">
                    Found <span className="font-semibold text-app-text">{filteredAndSortedCars.length}</span> vehicles
                  </span>
                </div>

                {/* Right: Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 w-full sm:w-auto">
                  {/* View Mode Toggle */}
                  <div className="hidden sm:flex items-center gap-0.5 bg-app-bg rounded-lg p-0.5">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => handleViewModeChange('grid')}
                      className="h-8 px-2.5 rounded-md transition-all"
                    >
                      <Grid3x3 className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => handleViewModeChange('list')}
                      className="h-8 px-2.5 rounded-md transition-all"
                    >
                      <List className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                  {/* Per Page and Sort in One Row */}
                  <div className="flex items-center gap-1 w-full sm:w-auto">
                    {/* Per Page Selector */}
                    <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                      <SelectTrigger className="w-28 h-9 text-xs font-medium rounded-lg border-app-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 Per Page</SelectItem>
                        <SelectItem value="20">20 Per Page</SelectItem>
                        <SelectItem value="50">50 Per Page</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Sort Dropdown */}
                    <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                      <SelectTrigger className="flex-1 sm:w-40 h-9 text-xs font-medium rounded-lg border-app-border">
                        <SelectValue placeholder="Date (Oldest)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Date (Oldest)</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="year-desc">Year: Newest</SelectItem>
                        <SelectItem value="year-asc">Year: Oldest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Active Filters Display (Optional 3rd row when filters are active) */}
              {(filters.make?.length || filters.bodyType?.length || filters.fuelType?.length) && (
                <div className="flex flex-wrap items-center gap-1 pt-1.5 mt-1.5 border-t border-app-border">
                  <span className="text-xs font-semibold text-app-text/70">Active:</span>
                  {filters.make?.map((make) => (
                    <span key={make} className="inline-flex items-center gap-1 px-2.5 py-1 bg-app-primary text-white rounded-full text-xs font-medium">
                      {make}
                      <button onClick={() => handleMakeChange(make, false)} className="hover:bg-app-primary/80 rounded-full">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {filters.bodyType?.map((type) => (
                    <span key={type} className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                      {type}
                      <button onClick={() => handleBodyTypeChange(type, false)} className="hover:bg-orange-600 rounded-full">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {filters.fuelType?.map((fuel) => (
                    <span key={fuel} className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
                      {fuel}
                      <button onClick={() => handleFuelTypeChange(fuel, false)} className="hover:bg-blue-600 rounded-full">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Car Listings */}
            <motion.div 
              className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2' : 'space-y-2'}
              layout
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredAndSortedCars.slice(0, displayedItems).map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <CarCard
                      car={car}
                      viewMode={viewMode}
                      onToggleFavorite={handleToggleFavorite}
                      onImageClick={handleImageClick}
                      onQuickActions={handleQuickActions}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading Skeletons */}
              {isLoading && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <CarCardSkeleton key={`skeleton-${i}`} />
                  ))}
                </>
              )}
            </motion.div>

            {/* Infinite Scroll Trigger */}
            {displayedItems < filteredAndSortedCars.length && (
              <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
                <span className="text-xs text-app-text/50">Loading more...</span>
              </div>
            )}

            {/* No Results Message */}
            {filteredAndSortedCars.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-app-surface rounded-xl shadow-sm p-12 text-center border border-app-border"
              >
                <div className="w-16 h-16 bg-app-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-app-text/40" />
                </div>
                <h3 className="text-lg font-bold text-app-text mb-2">No vehicles found</h3>
                <p className="text-sm text-app-text/70 mb-6">We couldn't find any cars matching your search criteria. Try adjusting your filters.</p>
                <Button 
                  variant="outline" 
                  className="h-11 px-6 rounded-lg border-2 border-app-primary text-app-text text-sm font-semibold hover:bg-app-primary hover:text-white transition-all"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}

            {/* End of Results Message */}
            {displayedItems >= filteredAndSortedCars.length && filteredAndSortedCars.length > 0 && (
              <div className="bg-app-surface rounded-xl shadow-sm p-6 text-center border border-app-border mt-4">
                <div className="flex items-center justify-center gap-2 text-sm text-app-text/70">
                  <div className="w-16 h-px bg-app-border"></div>
                  <p className="font-medium">
                    You've reached the end • Showing all <span className="font-semibold text-app-text">{filteredAndSortedCars.length}</span> results
                  </p>
                  <div className="w-16 h-px bg-app-border"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={0}
        isOpen={lightboxCarId !== null}
        onClose={() => setLightboxCarId(null)}
      />

      {/* Quick Actions Sheet */}
      <QuickActionsSheet
        car={quickActionsCar}
        isOpen={quickActionsCar !== null}
        onClose={() => setQuickActionsCar(null)}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
