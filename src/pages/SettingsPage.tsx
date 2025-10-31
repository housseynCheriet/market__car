import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { FONT_SIZES, FONT_FAMILIES, LIGHT_THEMES, DARK_THEMES, applyAll, getSettings, saveSettings } from '@/lib/theme';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import { Palette, Type, Moon, Sun } from 'lucide-react';

export default function SettingsPage(): React.ReactElement {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [fontFamily, setFontFamily] = useState<string>("'Tajawal', sans-serif");
  const [fontSize, setFontSize] = useState<string>('16px');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === 'dark');
  const [selectedPalette, setSelectedPalette] = useState<string>('default');

  useEffect(() => {
    const settings = getSettings();
    
    setFontFamily(settings.fontFamily);
    setFontSize(settings.fontSize);
    
    const mode = theme === 'dark' ? 'dark' : 'light';
    const palette = mode === 'dark' ? settings.darkPalette : settings.lightPalette;
    setSelectedPalette(palette);
    
    const paletteToApply = palette === 'default' ? '' : palette;
    applyAll(mode, paletteToApply, settings.fontSize, settings.fontFamily);
  }, [theme]);

  const handleThemeToggle = (checked: boolean): void => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDarkMode(checked);
    
    // Load palette for the new mode
    const settings = getSettings();
    const palette = newTheme === 'dark' ? settings.darkPalette : settings.lightPalette;
    setSelectedPalette(palette);
    
    const paletteToApply = palette === 'default' ? '' : palette;
    applyAll(newTheme, paletteToApply, fontSize, fontFamily);
  };

  const handlePaletteChange = (palette: string): void => {
    setSelectedPalette(palette);
    
    // Save to mode-specific palette
    const mode = isDarkMode ? 'dark' : 'light';
    if (mode === 'dark') {
      saveSettings({ darkPalette: palette });
    } else {
      saveSettings({ lightPalette: palette });
    }
    
    const paletteToApply = palette === 'default' ? '' : palette;
    applyAll(mode, paletteToApply, fontSize, fontFamily);
  };

  const handleFontFamilyChange = (font: string): void => {
    setFontFamily(font);
    saveSettings({ fontFamily: font });
    const mode = isDarkMode ? 'dark' : 'light';
    const paletteToApply = selectedPalette === 'default' ? '' : selectedPalette;
    applyAll(mode, paletteToApply, fontSize, font);
  };

  const handleFontSizeChange = (size: string): void => {
    setFontSize(size);
    saveSettings({ fontSize: size });
    const mode = isDarkMode ? 'dark' : 'light';
    const paletteToApply = selectedPalette === 'default' ? '' : selectedPalette;
    applyAll(mode, paletteToApply, size, fontFamily);
  };

  return (
    <div className="min-h-screen bg-app-bg">
      {/* Header */}
      <Header variant="simple" />

      {/* Settings Content */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        {/* Appearance Section */}
        <Card className="mb-6 bg-app-surface border border-app-border shadow-sm">
          <CardHeader className="border-b border-app-border pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-app-primary/10 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-app-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-app-text">
                  Appearance & Behavior
                </CardTitle>
                <p className="text-sm text-app-text/70 mt-0.5">Customize colors, fonts, and display mode</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Theme Mode Toggle */}
            <div className="flex items-center justify-between p-4 bg-app-bg rounded-lg border border-app-border">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-app-text/10' : 'bg-app-warning/20'}`}>
                  {isDarkMode ? <Moon className="w-5 h-5 text-app-text" /> : <Sun className="w-5 h-5 text-app-warning" />}
                </div>
                <div>
                  <Label 
                    htmlFor="theme-mode" 
                    className="text-sm font-semibold text-app-text cursor-pointer block"
                  >
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </Label>
                  <p className="text-xs text-app-text/70">
                    {isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
                  </p>
                </div>
              </div>
              <Switch
                id="theme-mode"
                checked={isDarkMode}
                onCheckedChange={handleThemeToggle}
              />
            </div>

            {/* Theme Palette Selector */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-app-text flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Color Palette
              </Label>
              <Select value={selectedPalette} onValueChange={handlePaletteChange}>
                <SelectTrigger className="w-full bg-app-surface border-app-border text-app-text">
                  <SelectValue placeholder={isDarkMode ? "Default Dark Theme" : "Default Light Theme"} />
                </SelectTrigger>
                <SelectContent className="bg-app-surface border-app-border max-h-80">
                  {isDarkMode ? (
                    <>
                      <SelectItem value="default" className="text-app-text font-bold">
                        Default Dark Theme
                      </SelectItem>
                      {Object.keys(DARK_THEMES).map((themeName) => (
                        <SelectItem key={themeName} value={themeName} className="text-app-text">
                          {themeName}
                        </SelectItem>
                      ))}
                    </>
                  ) : (
                    <>
                      <SelectItem value="default" className="text-app-text font-bold">
                        Default Light Theme
                      </SelectItem>
                      {Object.keys(LIGHT_THEMES).map((themeName) => (
                        <SelectItem key={themeName} value={themeName} className="text-app-text">
                          {themeName}
                        </SelectItem>
                      ))}
                    </>
                  )}
                </SelectContent>
              </Select>
              <p className="text-xs text-app-text/70">
                {isDarkMode ? `${Object.keys(DARK_THEMES).length} dark themes available` : `${Object.keys(LIGHT_THEMES).length} light themes available`}
              </p>
            </div>

            {/* Font Size and Family Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-app-text flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </Label>
                <Select value={fontSize} onValueChange={handleFontSizeChange}>
                  <SelectTrigger className="w-full bg-app-surface border-app-border text-app-text">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-app-surface border-app-border">
                    {FONT_SIZES.map((size) => (
                      <SelectItem key={size} value={size} className="text-app-text">
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-app-text flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Font Family
                </Label>
                <Select value={fontFamily} onValueChange={handleFontFamilyChange}>
                  <SelectTrigger className="w-full bg-app-surface border-app-border text-app-text">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-app-surface border-app-border">
                    {FONT_FAMILIES.map((font) => (
                      <SelectItem key={font} value={font} className="text-app-text" style={{ fontFamily: font }}>
                        {font.replace(/'/g, '').split(',')[0]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
