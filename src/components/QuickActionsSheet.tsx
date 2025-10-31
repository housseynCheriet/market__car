import React from 'react';
import { Heart, Share2, Calendar, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Car } from '@/lib/database';

interface QuickActionsSheetProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (carId: string) => void;
}

export default function QuickActionsSheet({
  car,
  isOpen,
  onClose,
  onToggleFavorite,
}: QuickActionsSheetProps): JSX.Element {
  if (!car) return <></>;

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
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleScheduleViewing = (): void => {
    alert('Schedule viewing feature coming soon!');
    onClose();
  };

  const handleContactSeller = (): void => {
    alert('Contact seller feature coming soon!');
    onClose();
  };

  const handleReportIssue = (): void => {
    alert('Report issue feature coming soon!');
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader className="border-b border-gray-200 pb-4">
          <DrawerTitle className="text-base font-bold text-gray-900">
            Quick Actions
          </DrawerTitle>
          <p className="text-xs text-gray-600 mt-1">{car.name}</p>
        </DrawerHeader>

        <div className="p-4 space-y-2">
          {/* Toggle Favorite */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
            onClick={() => {
              onToggleFavorite(car.id);
              onClose();
            }}
          >
            <Heart
              className={`w-5 h-5 ${car.isFavorite ? 'fill-orange-500 text-orange-500' : 'text-gray-700'}`}
            />
            {car.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>

          {/* Share */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 text-gray-700" />
            Share this car
          </Button>

          {/* Schedule Viewing */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
            onClick={handleScheduleViewing}
          >
            <Calendar className="w-5 h-5 text-gray-700" />
            Schedule a viewing
          </Button>

          {/* View Location */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
          >
            <MapPin className="w-5 h-5 text-gray-700" />
            View location: {car.location}
          </Button>

          {/* Contact Seller */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
            onClick={handleContactSeller}
          >
            <Phone className="w-5 h-5 text-gray-700" />
            Contact seller
          </Button>

          {/* Email Seller */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold"
          >
            <Mail className="w-5 h-5 text-gray-700" />
            Email seller
          </Button>

          {/* Report Issue */}
          <Button
            variant="outline"
            className="w-full justify-start gap-3 h-12 text-sm font-semibold text-red-600 border-red-200 hover:bg-red-50"
            onClick={handleReportIssue}
          >
            <AlertCircle className="w-5 h-5 text-red-600" />
            Report an issue
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
