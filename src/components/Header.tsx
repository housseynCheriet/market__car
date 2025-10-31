import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Heart, User, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import NotificationDropdown from '@/components/NotificationDropdown';
import { db } from '@/lib/database';

interface HeaderProps {
  variant?: 'full' | 'simple';
}

const CURRENT_USER_ID = 'user_123';

export default function Header({ 
  variant = 'full'
}: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  
  const isDarkMode = theme === 'dark';
  
  const handleThemeToggle = (): void => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const updateUnreadCount = (): void => {
    const count = db.getUnreadNotificationCount(CURRENT_USER_ID);
    setUnreadCount(count);
  };

  useEffect(() => {
    updateUnreadCount();
    // Poll for new notifications every 5 seconds
    const interval = setInterval(updateUnreadCount, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNotificationToggle = (open: boolean): void => {
    setNotificationOpen(open);
    if (!open) {
      // Refresh count when closing
      updateUnreadCount();
    }
  };

  if (variant === 'simple') {
    return (
      <header className="bg-app-surface border-b border-app-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-1.5 sm:px-2 lg:px-3 py-2">
          <div className="flex items-center justify-between gap-2">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-app-text">ReCars</h1>
            </div>
            
            <div className="flex items-center space-x-1">
              <Popover open={notificationOpen} onOpenChange={handleNotificationToggle}>
                <PopoverTrigger asChild>
                  <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all relative">
                    <Bell className="w-5 h-5 text-app-text/70" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1 right-1 min-w-[18px] h-[18px] bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                        {unreadCount > 99 ? '99+' : unreadCount}
                      </span>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-auto p-0 border-0 shadow-none">
                  <NotificationDropdown />
                </PopoverContent>
              </Popover>
              <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all">
                <Heart className="w-5 h-5 text-app-text/70" />
              </button>
              <button 
                onClick={handleThemeToggle}
                className="p-2.5 hover:bg-app-bg rounded-lg transition-all"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-app-text/70" />
                ) : (
                  <Moon className="w-5 h-5 text-app-text/70" />
                )}
              </button>
              <button 
                onClick={() => navigate('/settings')}
                className="p-2.5 hover:bg-app-bg rounded-lg transition-all"
                title="Settings"
              >
                <Settings className="w-5 h-5 text-app-text/70" />
              </button>
              <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all">
                <User className="w-5 h-5 text-app-text/70" />
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Full header with navigation
  return (
    <header className="bg-app-surface border-b border-app-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-1.5 sm:px-2 lg:px-3 py-2">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Navigation */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-app-text">ReCars</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                className="text-sm font-medium text-app-text/70 hover:text-app-text transition-colors relative group"
              >
                Browse
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-primary transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                className="text-sm font-semibold text-app-text relative"
              >
                Search
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-app-primary"></span>
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-app-text/70 hover:text-app-text transition-colors relative group"
              >
                Shipping
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-primary transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-app-text/70 hover:text-app-text transition-colors relative group"
              >
                Profile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-primary transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-app-text/70 hover:text-app-text transition-colors relative group"
              >
                Help
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-primary transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-app-text/70 hover:text-app-text transition-colors relative group"
              >
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-app-primary transition-all group-hover:w-full"></span>
              </a>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-1">
            <Popover open={notificationOpen} onOpenChange={handleNotificationToggle}>
              <PopoverTrigger asChild>
                <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all relative">
                  <Bell className="w-5 h-5 text-app-text/70" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 min-w-[18px] h-[18px] bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                      {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-0 border-0 shadow-none">
                <NotificationDropdown />
              </PopoverContent>
            </Popover>
            <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all">
              <Heart className="w-5 h-5 text-app-text/70" />
            </button>
            <button 
              onClick={handleThemeToggle}
              className="p-2.5 hover:bg-app-bg rounded-lg transition-all"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-app-text/70" />
              ) : (
                <Moon className="w-5 h-5 text-app-text/70" />
              )}
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="p-2.5 hover:bg-app-bg rounded-lg transition-all"
              title="Settings"
            >
              <Settings className="w-5 h-5 text-app-text/70" />
            </button>
            <button className="p-2.5 hover:bg-app-bg rounded-lg transition-all">
              <User className="w-5 h-5 text-app-text/70" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
