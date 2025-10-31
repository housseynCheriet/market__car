import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, MoreVertical, Gauge, Settings, Award, Fuel, Palette, Clock, Eye } from 'lucide-react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car } from '@/lib/database';

interface CarCardProps {
  car: Car;
  viewMode: 'grid' | 'list';
  onToggleFavorite: (carId: string) => void;
  onImageClick?: (carId: string) => void;
  onQuickActions?: (car: Car) => void;
}

export default function CarCard({ 
  car, 
  viewMode, 
  onToggleFavorite,
  onImageClick,
  onQuickActions,
}: CarCardProps): JSX.Element {
  const navigate = useNavigate();
  const [isSwipeActive, setIsSwipeActive] = useState<boolean>(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);
  const scale = useTransform(x, [-100, 0, 100], [0.95, 1, 0.95]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swiped right - add to favorites
        onToggleFavorite(car.id);
      } else {
        // Swiped left - show quick actions
        onQuickActions?.(car);
      }
    }
    
    setIsSwipeActive(false);
  };

  // Grid view: compact card with image on top
  if (viewMode === 'grid') {
    return (
      <motion.div
        style={{ x, opacity, scale }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsSwipeActive(true)}
        onDragEnd={handleDragEnd}
        className="bg-app-surface rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden relative"
      >
        {/* Swipe Indicators */}
        {isSwipeActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-app-primary/20 to-transparent z-10 flex items-center justify-start pl-4"
            >
              <Heart className="w-8 h-8 text-app-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-app-text/20 to-transparent z-10 flex items-center justify-end pr-4"
            >
              <MoreVertical className="w-8 h-8 text-app-text" />
            </motion.div>
          </>
        )}

        <div className="flex flex-col">
          {/* Car Image */}
          <div className="relative w-full h-48 bg-app-surface flex-shrink-0">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => navigate(`/car/${car.id}`)}
            />
            <button
              onClick={() => onToggleFavorite(car.id)}
              className="absolute top-2 right-2 w-7 h-7 bg-app-surface rounded-full flex items-center justify-center shadow-sm hover:shadow transition-all z-20"
            >
              <Heart
                className={`w-3.5 h-3.5 ${car.isFavorite ? 'fill-app-primary text-app-primary' : 'text-app-text/70'}`}
              />
            </button>
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-app-text text-[10px] font-semibold px-2 py-0.5 rounded-full">
                📷 {Math.floor(Math.random() * 5) + 1}
              </Badge>
            </div>
          </div>

          {/* Car Details */}
          <div className="p-1.5">
            <div className="flex items-start justify-between mb-1">
              <div className="flex-1">
                <h3 
                  className="text-sm font-bold text-app-text hover:text-app-text cursor-pointer mb-1 transition-colors leading-tight"
                  onClick={() => navigate(`/car/${car.id}`)}
                >
                  {car.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-app-text/60">
                  <span className="flex items-center gap-0.5">
                    <span className="font-semibold">Year:</span> {car.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Specs */}
            <div className="grid grid-cols-2 gap-1 mb-1.5">
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-app-text/70" />
                <span className="text-xs text-app-text/70">{car.mileage.toLocaleString()} mi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Fuel className="w-3.5 h-3.5 text-app-text/70" />
                <span className="text-xs text-app-text/70">{car.fuelType}</span>
              </div>
            </div>

            {/* Location & Condition */}
            <div className="flex flex-wrap items-center gap-0.5 mb-1.5">
              <Badge variant="outline" className="text-[10px] font-medium px-2 py-0.5">
                <MapPin className="w-3 h-3 mr-1" />
                {car.location}
              </Badge>
              <Badge 
                className={`text-[10px] font-medium px-2 py-0.5 border-0 ${
                  car.condition === 'Excellent' ? 'bg-green-100 text-green-600' :
                  car.condition === 'Good' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}
              >
                {car.condition}
              </Badge>
            </div>

            {/* Views & Price */}
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 text-app-text/70">
                <Eye className="w-4 h-4" />
                <span className="text-xs font-medium">
                  {(car.views || 0).toLocaleString()} views
                </span>
              </div>
              <div className="text-lg font-bold text-app-text">${car.price.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // List view: horizontal card with image on left
  return (
    <motion.div
      style={{ x, opacity, scale }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsSwipeActive(true)}
      onDragEnd={handleDragEnd}
      className="bg-app-surface rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden relative"
    >
      {/* Swipe Indicators */}
      {isSwipeActive && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-app-primary/20 to-transparent z-10 flex items-center justify-start pl-4"
          >
            <Heart className="w-8 h-8 text-app-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-app-text/20 to-transparent z-10 flex items-center justify-end pr-4"
          >
            <MoreVertical className="w-8 h-8 text-app-text" />
          </motion.div>
        </>
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Car Image */}
        <div className="relative lg:w-60 xl:w-64 h-40 sm:h-44 lg:h-40 bg-app-surface flex-shrink-0">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => navigate(`/car/${car.id}`)}
          />
          <button
            onClick={() => onToggleFavorite(car.id)}
            className="absolute top-2 right-2 w-7 h-7 bg-app-surface rounded-full flex items-center justify-center shadow-sm hover:shadow transition-all z-20"
          >
            <Heart
              className={`w-3.5 h-3.5 ${car.isFavorite ? 'fill-app-primary text-app-primary' : 'text-app-text/70'}`}
            />
          </button>
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
            <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm text-app-text text-[10px] font-semibold px-2 py-0.5 rounded-full">
              📷 {Math.floor(Math.random() * 5) + 1}
            </Badge>
          </div>
        </div>

        {/* Car Details */}
        <div className="flex-1 p-1.5 sm:p-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 
                className="text-sm sm:text-base font-bold text-app-text hover:text-app-text cursor-pointer mb-1 transition-colors leading-tight"
                onClick={() => navigate(`/car/${car.id}`)}
              >
                {car.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-app-text/60">
                <span className="flex items-center gap-0.5">
                  <span className="font-semibold">Seller:</span> {car.seller}
                </span>
                <span className="flex items-center gap-0.5">
                  <span className="font-semibold">Year:</span> {car.year}
                </span>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-1.5">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Gauge className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-app-text/50">Mileage</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.mileage.toLocaleString()} mi</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-app-text/50">Engine</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.engine}</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-app-text/50">Horsepower</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.horsepower} HP</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Fuel className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-app-text/50">Fuel</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.fuelType}</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-app-text/50">Transmission</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.transmission}</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 bg-app-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-3.5 h-3.5 text-app-text/70" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-gray-500">Color</div>
                <div className="text-xs font-semibold text-app-text truncate">{car.color}</div>
              </div>
            </div>
          </div>

          {/* Location & Condition Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <Badge variant="outline" className="text-[10px] font-medium px-2 py-0.5 border-gray-300">
              <MapPin className="w-3 h-3 mr-1" />
              {car.location}
            </Badge>
            <Badge 
              className={`text-[10px] font-medium px-2 py-0.5 border-0 ${
                car.condition === 'Excellent' ? 'bg-green-100 text-green-600' :
                car.condition === 'Good' ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}
            >
              {car.condition}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-medium px-2 py-0.5 border-gray-300">
              <Clock className="w-3 h-3 mr-1" />
              {car.year}
            </Badge>
          </div>

          {/* Views & Price */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-app-text/70" />
              <span className="text-sm text-app-text/70 font-medium">
                {(car.views || 0).toLocaleString()} views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xs flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Available
              </span>
              <div className="text-xl font-bold text-gray-900">${car.price.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}