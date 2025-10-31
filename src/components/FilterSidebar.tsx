import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Save, Trash2, Star, SlidersHorizontal, DollarSign, Calendar, Gauge, Award, Fuel, Settings, Palette, Shield, Car as CarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FilterOptions, db, FilterPreset } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isMobile?: boolean;
}

export default function FilterSidebar({ filters, onFiltersChange, isMobile = false }: FilterSidebarProps): JSX.Element {
  const { toast } = useToast();
  const [sections, setSections] = useState<Record<string, boolean>>({
    presets: false,
    make: true,
    bodyType: true,
    fuelType: true,
    transmission: true,
    condition: true,
    price: true,
    year: true,
    mileage: true,
    horsepower: true,
    color: true
  });

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2016, 2024]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([0, 100000]);
  const [horsepowerRange, setHorsepowerRange] = useState<[number, number]>([100, 1000]);
  
  const [presets, setPresets] = useState<FilterPreset[]>([]);
  const [presetName, setPresetName] = useState<string>('');
  const [showSaveDialog, setShowSaveDialog] = useState<boolean>(false);

  useEffect(() => {
    setPresets(db.getFilterPresets());
  }, []);

  const toggleSection = (section: string): void => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleMakeChange = (make: string, checked: boolean): void => {
    const currentMakes = filters.make || [];
    const newMakes = checked
      ? [...currentMakes, make]
      : currentMakes.filter(m => m !== make);
    onFiltersChange({ ...filters, make: newMakes });
  };

  const handleBodyTypeChange = (type: string, checked: boolean): void => {
    const currentTypes = filters.bodyType || [];
    const newTypes = checked
      ? [...currentTypes, type]
      : currentTypes.filter(t => t !== type);
    onFiltersChange({ ...filters, bodyType: newTypes });
  };

  const handleFuelTypeChange = (type: string, checked: boolean): void => {
    const currentTypes = filters.fuelType || [];
    const newTypes = checked
      ? [...currentTypes, type]
      : currentTypes.filter(t => t !== type);
    onFiltersChange({ ...filters, fuelType: newTypes });
  };

  const handleConditionChange = (condition: string, checked: boolean): void => {
    const currentConditions = filters.condition || [];
    const newConditions = checked
      ? [...currentConditions, condition]
      : currentConditions.filter(c => c !== condition);
    onFiltersChange({ ...filters, condition: newConditions });
  };

  const handleColorChange = (color: string, checked: boolean): void => {
    const currentColors = filters.color || [];
    const newColors = checked
      ? [...currentColors, color]
      : currentColors.filter(c => c !== color);
    onFiltersChange({ ...filters, color: newColors });
  };

  const applyPriceRange = (): void => {
    onFiltersChange({
      ...filters,
      priceRange: { min: priceRange[0], max: priceRange[1] }
    });
  };

  const applyYearRange = (): void => {
    onFiltersChange({
      ...filters,
      yearRange: { min: yearRange[0], max: yearRange[1] }
    });
  };

  const clearFilters = (): void => {
    onFiltersChange({});
    setPriceRange([0, 300000]);
    setYearRange([2016, 2024]);
    setMileageRange([0, 100000]);
    setHorsepowerRange([100, 1000]);
  };

  const handleTransmissionChange = (transmission: string, checked: boolean): void => {
    const currentTransmissions = filters.transmission || [];
    const newTransmissions = checked
      ? [...currentTransmissions, transmission]
      : currentTransmissions.filter(t => t !== transmission);
    onFiltersChange({ ...filters, transmission: newTransmissions });
  };

  const applyMileageRange = (): void => {
    onFiltersChange({
      ...filters,
      mileageRange: { min: mileageRange[0], max: mileageRange[1] }
    });
  };

  const applyHorsepowerRange = (): void => {
    onFiltersChange({
      ...filters,
      horsepowerRange: { min: horsepowerRange[0], max: horsepowerRange[1] }
    });
  };

  const handleSavePreset = (): void => {
    if (!presetName.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a preset name',
        variant: 'destructive'
      });
      return;
    }
    
    db.saveFilterPreset(presetName, filters);
    setPresets(db.getFilterPresets());
    setPresetName('');
    setShowSaveDialog(false);
    toast({
      title: 'Success',
      description: `Filter preset "${presetName}" saved!`
    });
  };

  const handleLoadPreset = (presetId: string): void => {
    const loadedFilters = db.loadFilterPreset(presetId);
    if (loadedFilters) {
      onFiltersChange(loadedFilters);
      toast({
        title: 'Success',
        description: 'Filter preset loaded!'
      });
    }
  };

  const handleDeletePreset = (presetId: string): void => {
    db.deleteFilterPreset(presetId);
    setPresets(db.getFilterPresets());
    toast({
      title: 'Success',
      description: 'Filter preset deleted!'
    });
  };

  return (
    <div className="w-full bg-app-surface rounded-xl shadow-sm p-2 h-fit lg:sticky lg:top-20 border border-app-border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-app-text flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-app-primary to-app-accent rounded-lg flex items-center justify-center shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-white" />
          </div>
          Filters
        </h3>
        <button
          onClick={clearFilters}
          className="text-xs text-app-primary hover:text-app-accent font-semibold transition-colors hover:underline"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-3">
        {/* Filter Presets */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('presets')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Star className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Saved Presets
            </span>
            {sections.presets ? (
              <ChevronUp className="w-4 h-4 text-app-text/50" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/50" />
            )}
          </button>
          {sections.presets && (
            <div className="space-y-2 pl-10">
              {presets.length > 0 ? (
                presets.map((preset) => (
                  <div key={preset.id} className="flex items-center justify-between p-2 bg-app-bg rounded-lg hover:bg-app-bg/80 transition-colors">
                    <button
                      onClick={() => handleLoadPreset(preset.id)}
                      className="flex-1 text-left text-xs font-medium text-app-text/70 hover:text-app-primary transition-colors"
                    >
                      {preset.name}
                    </button>
                    <button
                      onClick={() => handleDeletePreset(preset.id)}
                      className="p-1 hover:bg-red-500/10 rounded transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-xs text-app-text/50">No saved presets</p>
              )}
              <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full h-9 text-xs font-medium">
                    <Save className="w-3.5 h-3.5 mr-1.5" />
                    Save Current Filters
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Filter Preset</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Enter preset name"
                      value={presetName}
                      onChange={(e) => setPresetName(e.target.value)}
                    />
                    <Button onClick={handleSavePreset} className="w-full">
                      Save Preset
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>

        <Separator />

        {/* Make Filter */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('make')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <CarIcon className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Make
            </span>
            {sections.make ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.make && (
            <div className="grid grid-cols-2 gap-1.5 pl-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {['Mercedes-Benz', 'BMW', 'Audi', 'Tesla', 'Porsche', 'Toyota', 'Lexus', 'Land Rover', 'Ford', 'Chevrolet', 
                'Honda', 'Mazda', 'Jaguar', 'Volkswagen', 'Subaru', 'Nissan', 'Acura', 'Volvo', 'Cadillac', 'Genesis', 
                'Alfa Romeo', 'Infiniti', 'Kia', 'Hyundai'].map((make) => (
                <div key={make} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`make-${make}`}
                    checked={filters.make?.includes(make)}
                    onCheckedChange={(checked) => handleMakeChange(make, checked as boolean)}
                  />
                  <Label htmlFor={`make-${make}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium group-hover/item:text-app-primary transition-colors leading-tight">
                    {make}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Body Type Filter */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('bodyType')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Shield className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Body Type
            </span>
            {sections.bodyType ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.bodyType && (
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {['Sedan', 'SUV', 'Coupe', 'Hatchback'].map((type) => (
                <div key={type} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`body-${type}`}
                    checked={filters.bodyType?.includes(type)}
                    onCheckedChange={(checked) => handleBodyTypeChange(type, checked as boolean)}
                  />
                  <Label htmlFor={`body-${type}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium group-hover/item:text-app-primary transition-colors leading-tight">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Fuel Type Filter */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('fuelType')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Fuel className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Fuel Type
            </span>
            {sections.fuelType ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.fuelType && (
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((type) => (
                <div key={type} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`fuel-${type}`}
                    checked={filters.fuelType?.includes(type)}
                    onCheckedChange={(checked) => handleFuelTypeChange(type, checked as boolean)}
                  />
                  <Label htmlFor={`fuel-${type}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium group-hover/item:text-app-primary transition-colors leading-tight">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Price Range */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <DollarSign className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Price Range
            </span>
            {sections.price ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.price && (
            <div className="space-y-3 pl-2">
              <Slider
                min={0}
                max={300000}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Min</div>
                  <div className="text-sm font-bold text-app-text">${priceRange[0].toLocaleString()}</div>
                </div>
                <div className="text-app-text/40">—</div>
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Max</div>
                  <div className="text-sm font-bold text-app-text">${priceRange[1].toLocaleString()}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Year Range */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('year')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Year
            </span>
            {sections.year ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.year && (
            <div className="space-y-3 pl-2">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="text-[10px] text-app-text/50 mb-1">From</div>
                  <select
                    value={yearRange[0]}
                    onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                    className="w-full px-3 py-2 border border-app-border rounded-lg text-sm font-medium bg-app-surface text-app-text focus:border-app-primary focus:ring-2 focus:ring-app-primary/20 transition-all"
                  >
                    {Array.from({ length: 10 }, (_, i) => 2015 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="text-app-text/40 mt-5">—</div>
                <div className="flex-1">
                  <div className="text-[10px] text-app-text/50 mb-1">To</div>
                  <select
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 border border-app-border rounded-lg text-sm font-medium bg-app-surface text-app-text focus:border-app-primary focus:ring-2 focus:ring-app-primary/20 transition-all"
                  >
                    {Array.from({ length: 10 }, (_, i) => 2015 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Mileage Range */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('mileage')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Gauge className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Mileage
            </span>
            {sections.mileage ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.mileage && (
            <div className="space-y-3 pl-2">
              <Slider
                min={0}
                max={150000}
                step={1000}
                value={mileageRange}
                onValueChange={(value) => setMileageRange(value as [number, number])}
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Min</div>
                  <div className="text-sm font-bold text-app-text">{mileageRange[0].toLocaleString()} mi</div>
                </div>
                <div className="text-app-text/40">—</div>
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Max</div>
                  <div className="text-sm font-bold text-app-text">{mileageRange[1].toLocaleString()} mi</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Horsepower Range */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('horsepower')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Award className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Horsepower
            </span>
            {sections.horsepower ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.horsepower && (
            <div className="space-y-3 pl-2">
              <Slider
                min={100}
                max={1100}
                step={10}
                value={horsepowerRange}
                onValueChange={(value) => setHorsepowerRange(value as [number, number])}
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Min</div>
                  <div className="text-sm font-bold text-app-text">{horsepowerRange[0]} HP</div>
                </div>
                <div className="text-app-text/40">—</div>
                <div className="flex-1 bg-app-bg rounded-lg p-2">
                  <div className="text-[10px] text-app-text/50 mb-0.5">Max</div>
                  <div className="text-sm font-bold text-app-text">{horsepowerRange[1]} HP</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Transmission Filter */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('transmission')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Settings className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Transmission
            </span>
            {sections.transmission ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.transmission && (
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {['Automatic', 'Manual'].map((transmission) => (
                <div key={transmission} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`transmission-${transmission}`}
                    checked={filters.transmission?.includes(transmission)}
                    onCheckedChange={(checked) => handleTransmissionChange(transmission, checked as boolean)}
                  />
                  <Label htmlFor={`transmission-${transmission}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium group-hover/item:text-app-primary transition-colors leading-tight">
                    {transmission}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Condition */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('condition')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Shield className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Condition
            </span>
            {sections.condition ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.condition && (
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {['Excellent', 'Good', 'New Vehicle'].map((condition) => (
                <div key={condition} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`condition-${condition}`}
                    checked={filters.condition?.includes(condition)}
                    onCheckedChange={(checked) => handleConditionChange(condition, checked as boolean)}
                  />
                  <Label htmlFor={`condition-${condition}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium group-hover/item:text-app-primary transition-colors leading-tight">
                    {condition}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Color */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection('color')}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <span className="font-semibold text-sm text-app-text flex items-center gap-2">
              <div className="w-7 h-7 bg-app-bg rounded-lg flex items-center justify-center group-hover:bg-app-primary/10 transition-all group-hover:shadow-sm">
                <Palette className="w-3.5 h-3.5 text-app-text/70 group-hover:text-app-primary transition-colors" />
              </div>
              Color
            </span>
            {sections.color ? (
              <ChevronUp className="w-4 h-4 text-app-text/40" />
            ) : (
              <ChevronDown className="w-4 h-4 text-app-text/40" />
            )}
          </button>
          {sections.color && (
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {[
                { name: 'Black', color: 'bg-black' },
                { name: 'Blue', color: 'bg-blue-600' },
                { name: 'Green', color: 'bg-green-600' },
                { name: 'Red', color: 'bg-red-600' },
                { name: 'White', color: 'bg-white border border-gray-300' }
              ].map((color) => (
                <div key={color.name} className="flex items-center space-x-1.5 px-2 py-1.5 rounded-lg hover:bg-app-primary/5 hover:shadow-sm transition-all group/item">
                  <Checkbox
                    id={`color-${color.name}`}
                    checked={filters.color?.includes(color.name)}
                    onCheckedChange={(checked) => handleColorChange(color.name, checked as boolean)}
                  />
                  <Label htmlFor={`color-${color.name}`} className="text-[11px] text-app-text/70 cursor-pointer font-medium flex items-center gap-1.5 group-hover/item:text-app-primary transition-colors leading-tight">
                    <div className={`w-3.5 h-3.5 rounded-full ${color.color} shadow-sm`} />
                    {color.name}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Apply Filters Button */}
        <Button 
          onClick={() => {
            applyPriceRange();
            applyYearRange();
            applyMileageRange();
            applyHorsepowerRange();
          }}
          className="w-full bg-gradient-to-r from-app-text to-app-text/90 hover:from-app-text/90 hover:to-app-text/80 text-app-surface font-bold h-11 rounded-lg transition-all text-sm shadow-md hover:shadow-lg mt-2"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}