import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, Phone, Mail, MapPin, Calendar, Shield, Award, Gauge, Fuel, Palette, Settings as SettingsIcon, Settings, Clock, Eye, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { db } from '@/lib/database';
import { utilityClasses } from '@/lib/design-system';
import Header from '@/components/Header';
import ImageLightbox from '@/components/ImageLightbox';
import ChatSection from '@/components/ChatSection';
import CommentsSection from '@/components/CommentsSection';
import { useToast } from '@/hooks/use-toast';

type LayoutType = 'classic' | 'modern' | 'mosaic' | 'carousel';

const LAYOUT_STORAGE_KEY = 'recars_preferred_layout';

export default function CarDetailsPage(): JSX.Element {
  const { carId } = useParams<{ carId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [layout, setLayout] = useState<LayoutType>(() => {
    const saved = localStorage.getItem(LAYOUT_STORAGE_KEY);
    return (saved as LayoutType) || 'modern';
  });
  
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [detailsExpanded, setDetailsExpanded] = useState<boolean>(true);

  const car = carId ? db.getCarById(carId) : undefined;

  useEffect(() => {
    if (!car) {
      navigate('/');
    } else {
      // Increment view count when user visits the details page
      db.incrementViews(car.id);
    }
  }, [car, navigate]);

  useEffect(() => {
    localStorage.setItem(LAYOUT_STORAGE_KEY, layout);
  }, [layout]);

  // Scroll to element from notification
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for components to render
      const timer = setTimeout(() => {
        const elementId = hash.substring(1); // Remove '#'
        const element = document.getElementById(elementId);
        
        if (element) {
          // If it's a reply, expand the parent comment first
          if (elementId.startsWith('reply-')) {
            const commentElements = document.querySelectorAll('[id^="comment-"]');
            commentElements.forEach((commentEl) => {
              if (commentEl.contains(element)) {
                // Click the expand button if it exists
                const expandButton = commentEl.querySelector('button[title*="Show"]');
                if (expandButton instanceof HTMLElement) {
                  expandButton.click();
                }
              }
            });
            
            // Wait a bit more for reply to expand
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              // Highlight the element briefly
              element.classList.add('ring-2', 'ring-orange-500', 'ring-offset-2');
              setTimeout(() => {
                element.classList.remove('ring-2', 'ring-orange-500', 'ring-offset-2');
              }, 2000);
            }, 300);
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight the element briefly
            element.classList.add('ring-2', 'ring-orange-500', 'ring-offset-2');
            setTimeout(() => {
              element.classList.remove('ring-2', 'ring-orange-500', 'ring-offset-2');
            }, 2000);
          }
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [window.location.hash]);

  if (!car) {
    return <></>;
  }

  const galleryImages = [
    car.image,
    `${car.image}&v=2`,
    `${car.image}&v=3`,
    `${car.image}&v=4`,
    `${car.image}&v=5`,
    `${car.image}&v=6`,
  ];

  const handleToggleFavorite = (): void => {
    db.toggleFavorite(car.id);
    toast({
      title: car.isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: car.name,
    });
  };

  const handleShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: car.name,
          text: `Check out this ${car.name} for $${car.price.toLocaleString()}`,
          url: window.location.href,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied!',
        description: 'Car link copied to clipboard',
      });
    }
  };

  const handleImageClick = (index: number): void => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (): void => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Removed renderStars - now using views count with Eye icon

  return (
    <div className="min-h-screen bg-app-bg">
      {/* Header */}
      <Header variant="simple" />

      {/* Layout Switcher & Actions */}
      <div className="bg-app-surface border-b border-app-border">
        <div className={utilityClasses.container}>
          <div className="py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-app-text/70">View Layout:</span>
              <div className="flex gap-1">
                <Button
                  variant={layout === 'classic' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('classic')}
                  className="text-xs"
                >
                  Classic
                </Button>
                <Button
                  variant={layout === 'modern' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('modern')}
                  className="text-xs"
                >
                  Modern
                </Button>
                <Button
                  variant={layout === 'mosaic' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('mosaic')}
                  className="text-xs"
                >
                  Mosaic Gallery
                </Button>
                <Button
                  variant={layout === 'carousel' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLayout('carousel')}
                  className="text-xs"
                >
                  Carousel Gallery
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={handleToggleFavorite}
                className="gap-2"
              >
                <Heart
                  className={`w-4 h-4 ${car.isFavorite ? 'fill-orange-500 text-orange-500' : ''}`}
                />
                {car.isFavorite ? 'Saved' : 'Save'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={utilityClasses.container}>
        <div className="py-1.5">
          {/* Toggle Details Button */}
          <div className="mb-1.5 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDetailsExpanded(!detailsExpanded)}
              className="gap-2"
            >
              {detailsExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Car Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Car Details
                </>
              )}
            </Button>
          </div>

          {/* Car Details Section - Collapsible */}
          <AnimatePresence>
            {detailsExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {layout === 'classic' && (
                    <motion.div
                      key="classic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ClassicLayout
                        car={car}
                        galleryImages={galleryImages}
                        onImageClick={handleImageClick}
                      />
                    </motion.div>
                  )}

                  {layout === 'modern' && (
                    <motion.div
                      key="modern"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ModernLayout
                        car={car}
                        galleryImages={galleryImages}
                        onImageClick={handleImageClick}
                      />
                    </motion.div>
                  )}

                  {layout === 'mosaic' && (
                    <motion.div
                      key="mosaic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MosaicLayout
                        car={car}
                        galleryImages={galleryImages}
                        onImageClick={handleImageClick}
                      />
                    </motion.div>
                  )}

                  {layout === 'carousel' && (
                    <motion.div
                      key="carousel"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CarouselLayout
                        car={car}
                        galleryImages={galleryImages}
                        currentImageIndex={currentImageIndex}
                        onPrevImage={prevImage}
                        onNextImage={nextImage}
                        onImageClick={handleImageClick}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat & Comments Section - Side by Side Grid */}
          <div className={detailsExpanded ? 'mt-2' : 'mt-0'}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {/* Private Chat */}
              <div>
                <ChatSection carId={car.id} sellerName={car.seller} />
              </div>
              
              {/* Public Comments */}
              <div>
                <CommentsSection carId={car.id} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

// ===== LAYOUT COMPONENTS =====
interface LayoutProps {
  car: any;
  galleryImages: string[];
  onImageClick: (index: number) => void;
}

function ClassicLayout({ car, galleryImages, onImageClick }: LayoutProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5">
      {/* Left Column - Images */}
      <div className="lg:col-span-2 space-y-1">
        {/* Main Image */}
        <div
          className="relative h-56 sm:h-72 lg:h-80 bg-app-surface rounded-lg overflow-hidden cursor-pointer"
          onClick={() => onImageClick(0)}
        >
          <img
            src={galleryImages[0]}
            alt={car.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 gap-1.5">
          {galleryImages.slice(1, 5).map((img, idx) => (
            <div
              key={idx}
              className="relative h-16 bg-app-surface rounded-md overflow-hidden cursor-pointer"
              onClick={() => onImageClick(idx + 1)}
            >
              <img
                src={img}
                alt={`${car.name} ${idx + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-app-surface rounded-lg p-1.5 space-y-1 border border-app-border">
          <h2 className="text-base font-bold text-app-text">Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            <SpecItem icon={<Gauge />} label="Mileage" value={`${car.mileage.toLocaleString()} mi`} />
            <SpecItem icon={<Settings />} label="Engine" value={car.engine} />
            <SpecItem icon={<Award />} label="Horsepower" value={`${car.horsepower} HP`} />
            <SpecItem icon={<Fuel />} label="Fuel Type" value={car.fuelType} />
            <SpecItem icon={<Settings />} label="Transmission" value={car.transmission} />
            <SpecItem icon={<Palette />} label="Color" value={car.color} />
          </div>
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="space-y-1">
        <CarInfoCard car={car} />
        <SellerCard car={car} />
      </div>
    </div>
  );
}

function ModernLayout({ car, galleryImages, onImageClick }: LayoutProps): JSX.Element {
  return (
    <div className="space-y-1.5">
      {/* Hero Section */}
      <div className="bg-app-surface rounded-lg overflow-hidden border border-app-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div
            className="relative h-56 sm:h-72 lg:h-80 bg-app-bg cursor-pointer"
            onClick={() => onImageClick(0)}
          >
            <img
              src={galleryImages[0]}
              alt={car.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info */}
          <div className="p-2 flex flex-col justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-app-text mb-2">{car.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-4 h-4 text-app-text/70" />
                <span className="text-sm text-app-text/70 font-medium">
                  {(car.views || 0).toLocaleString()} views
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                <Badge variant="outline" className="text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  {car.location}
                </Badge>
                <Badge className={`text-xs border-0 ${
                  car.condition === 'Excellent' ? 'bg-green-100 text-green-600' :
                  car.condition === 'Good' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {car.condition}
                </Badge>
              </div>

              <div className="text-2xl font-bold text-app-text">
                ${car.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs & Seller Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5">
        <div className="lg:col-span-2">
          <SpecsGrid car={car} />
        </div>
        <SellerCard car={car} />
      </div>
    </div>
  );
}

function MosaicLayout({ car, galleryImages, onImageClick }: LayoutProps): JSX.Element {
  return (
    <div className="space-y-1.5">
      {/* Mosaic Gallery */}
      <div className="grid grid-cols-4 grid-rows-2 gap-1.5 h-[320px]">
        {/* Large image - spans 2x2 */}
        <div
          className="col-span-2 row-span-2 bg-app-surface rounded-lg overflow-hidden cursor-pointer border border-app-border"
          onClick={() => onImageClick(0)}
        >
          <img
            src={galleryImages[0]}
            alt={car.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Small images */}
        {galleryImages.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="col-span-1 row-span-1 bg-app-surface rounded-md overflow-hidden cursor-pointer border border-app-border"
            onClick={() => onImageClick(idx + 1)}
          >
            <img
              src={img}
              alt={`${car.name} ${idx + 2}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5">
        <div className="lg:col-span-2 space-y-1">
          <CarInfoCard car={car} />
          <SpecsGrid car={car} />
        </div>
        <SellerCard car={car} />
      </div>
    </div>
  );
}

interface CarouselLayoutProps extends LayoutProps {
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
}

function CarouselLayout({
  car,
  galleryImages,
  currentImageIndex,
  onPrevImage,
  onNextImage,
  onImageClick,
}: CarouselLayoutProps): JSX.Element {
  return (
    <div className="space-y-1.5">
      {/* Carousel */}
      <div className="relative bg-app-surface rounded-lg overflow-hidden border border-app-border">
        <div className="relative h-56 sm:h-72 lg:h-80 bg-app-bg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={galleryImages[currentImageIndex]}
              alt={car.name}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => onImageClick(currentImageIndex)}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={onPrevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-app-surface/90 hover:bg-app-surface rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-app-text" />
          </button>
          <button
            onClick={onNextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-app-surface/90 hover:bg-app-surface rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronRight className="w-4 h-4 text-app-text" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-2.5 py-1 rounded-full text-xs font-medium">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-1.5 p-3 overflow-x-auto">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onImageClick(idx)}
              className={`flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border-2 transition-all ${
                idx === currentImageIndex ? 'border-app-primary' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 space-y-2">
          <CarInfoCard car={car} />
          <SpecsGrid car={car} />
        </div>
        <SellerCard car={car} />
      </div>
    </div>
  );
}

// ===== SHARED COMPONENTS =====

interface SpecItemProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

function SpecItem({ icon, label, value }: SpecItemProps): JSX.Element {
  return (
    <div className="flex items-start gap-2">
      <div className="w-7 h-7 bg-app-bg rounded-md flex items-center justify-center flex-shrink-0">
        {React.cloneElement(icon, { className: 'w-3.5 h-3.5 text-app-text' })}
      </div>
      <div className="min-w-0">
        <div className="text-xs text-app-text/70 leading-tight">{label}</div>
        <div className="text-sm font-semibold text-app-text truncate">{value}</div>
      </div>
    </div>
  );
}

function CarInfoCard({ car }: { car: any }): JSX.Element {
  return (
    <div className="bg-app-surface rounded-lg p-1.5 border border-app-border">
      <h1 className="text-lg sm:text-xl font-bold text-app-text mb-2">{car.name}</h1>
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Eye className="w-4 h-4 text-app-text/70" />
          <span className="text-xs text-app-text/70 font-medium">
            {(car.views || 0).toLocaleString()} views
          </span>
        </div>
        <div className="text-2xl font-bold text-app-text">${car.price.toLocaleString()}</div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <Badge variant="outline" className="text-xs py-0.5">
          <MapPin className="w-3 h-3 mr-1" />
          {car.location}
        </Badge>
        <Badge className={`text-xs py-0.5 border-0 ${
          car.condition === 'Excellent' ? 'bg-green-100 text-green-600' :
          car.condition === 'Good' ? 'bg-blue-100 text-blue-600' :
          'bg-purple-100 text-purple-600'
        }`}>
          {car.condition}
        </Badge>
        <Badge variant="outline" className="text-xs py-0.5">
          <Clock className="w-3 h-3 mr-1" />
          {car.year}
        </Badge>
      </div>
    </div>
  );
}

function SpecsGrid({ car }: { car: any }): JSX.Element {
  return (
    <div className="bg-app-surface rounded-lg p-1.5 space-y-1 border border-app-border">
      <h2 className="text-base font-bold text-app-text">Specifications</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
        <SpecItem icon={<Gauge />} label="Mileage" value={`${car.mileage.toLocaleString()} mi`} />
        <SpecItem icon={<Settings />} label="Engine" value={car.engine} />
        <SpecItem icon={<Award />} label="Horsepower" value={`${car.horsepower} HP`} />
        <SpecItem icon={<Fuel />} label="Fuel Type" value={car.fuelType} />
        <SpecItem icon={<Settings />} label="Transmission" value={car.transmission} />
        <SpecItem icon={<Palette />} label="Color" value={car.color} />
      </div>
    </div>
  );
}

function SellerCard({ car }: { car: any }): JSX.Element {
  const phoneNumber = '+1 (234) 567-8900';
  const whatsappNumber = '1234567890'; // WhatsApp format without special chars
  
  const handleWhatsAppCall = (): void => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  const handleWhatsAppMessage = (): void => {
    const message = encodeURIComponent(`Hi, I'm interested in your ${car.name} listed for ${car.price.toLocaleString()}`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="bg-app-surface rounded-lg p-1.5 space-y-1 border border-app-border">
      <h2 className="text-base font-bold text-app-text">Seller Information</h2>
      
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          {car.seller.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm text-app-text">{car.seller}</div>
          <div className="text-xs text-app-text/70">Verified Dealer</div>
        </div>
      </div>

      {/* Contact Actions - 3 Columns */}
      <div className="grid grid-cols-3 gap-1.5 pt-1">
        <button
          onClick={handleWhatsAppCall}
          className="bg-green-500 hover:bg-green-600 text-white rounded-md p-2 transition-all flex flex-col items-center justify-center gap-1 text-center"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">WhatsApp Call</span>
        </button>
        
        <button
          onClick={handleWhatsAppMessage}
          className="bg-green-500 hover:bg-green-600 text-white rounded-md p-2 transition-all flex flex-col items-center justify-center gap-1 text-center"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">Send Message</span>
        </button>

        <a
          href={`tel:${phoneNumber}`}
          className="bg-app-primary hover:bg-app-primary/90 text-white rounded-md p-2 transition-all flex flex-col items-center justify-center gap-1 text-center"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">Call Seller</span>
        </a>
      </div>
    </div>
  );
}
