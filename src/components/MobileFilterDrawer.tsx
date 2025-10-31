import React from 'react';
import { X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FilterOptions } from '@/lib/database';
import FilterSidebar from './FilterSidebar';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export default function MobileFilterDrawer({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange 
}: MobileFilterDrawerProps): JSX.Element {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:w-96 p-0 overflow-y-auto">
        <SheetHeader className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters</SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="p-4">
          <FilterSidebar 
            filters={filters} 
            onFiltersChange={onFiltersChange}
            isMobile={true}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
