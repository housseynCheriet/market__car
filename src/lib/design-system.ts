/**
 * ========================================
 * ReCars Design System v2.0
 * ========================================
 * 
 * SINGLE SOURCE OF TRUTH for all UI variables
 * 
 * This file centralizes ALL design tokens used across the application:
 * - Colors (primary, accent, background, text, borders, status)
 * - Typography (font sizes, weights, families, line heights)
 * - Spacing (padding, margins, gaps - all reduced by 50% for compact design)
 * - Border radius
 * - Shadows
 * - Button styles (sizes and variants)
 * - Input styles
 * - Card styles
 * - Badge styles
 * - Transitions & animations
 * - Breakpoints
 * - Z-index layers
 * 
 * ========================================
 * HOW TO USE THIS DESIGN SYSTEM
 * ========================================
 * 
 * 1. IMPORT THE DESIGN SYSTEM:
 *    import { designSystem, utilityClasses, getColor, getSpacing } from '@/lib/design-system';
 * 
 * 2. USE UTILITY CLASSES (Recommended):
 *    <div className={utilityClasses.container}>
 *      <h1 className={utilityClasses.heading1}>Title</h1>
 *      <div className={utilityClasses.card}>
 *        <div className={utilityClasses.cardPadding}>Content</div>
 *      </div>
 *    </div>
 * 
 * 3. USE DESIGN TOKENS DIRECTLY:
 *    const primaryColor = designSystem.colors.primary.DEFAULT;
 *    const cardPadding = designSystem.spacing.padding.card;
 *    const buttonHeight = designSystem.buttons.sizes.md.height;
 * 
 * 4. USE HELPER FUNCTIONS:
 *    const accentColor = getColor('accent.DEFAULT');
 *    const gapSize = getSpacing('gap.md');
 * 
 * 5. USE TAILWIND CLASSES (Auto-synced):
 *    <div className="text-xs font-semibold rounded-lg shadow-md">
 *      // These values come from designSystem via tailwind.config.js
 *    </div>
 * 
 * ========================================
 * ADDING NEW PAGES
 * ========================================
 * 
 * When creating new pages/components:
 * 1. Always import utilityClasses from this file
 * 2. Use predefined utility classes instead of inline Tailwind
 * 3. If you need custom values, add them to this file first
 * 4. Never hardcode colors, spacing, or typography values
 * 5. Use the theme-aware CSS variables (--app-bg, --app-text, etc.)
 * 
 * Example new page structure:
 * 
 * import { utilityClasses } from '@/lib/design-system';
 * 
 * export default function NewPage() {
 *   return (
 *     <div className={utilityClasses.container}>
 *       <div className={utilityClasses.sectionPadding}>
 *         <h1 className={utilityClasses.heading1}>Page Title</h1>
 *         <div className={utilityClasses.gridCols3}>
 *           <div className={utilityClasses.card}>
 *             <div className={utilityClasses.cardPadding}>
 *               Card content
 *             </div>
 *           </div>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * 
 * ========================================
 * THEME SYSTEM
 * ========================================
 * 
 * The app supports light/dark themes via CSS variables in index.css:
 * - --app-bg: Main background
 * - --app-surface: Cards, panels
 * - --app-primary: Primary brand color
 * - --app-text: Main text color
 * - --app-border: Border color
 * - --app-accent: Accent/highlight color
 * 
 * Always use these variables in Tailwind classes:
 * - bg-app-bg, bg-app-surface
 * - text-app-text
 * - border-app-border
 * - bg-app-primary, text-app-primary
 * 
 * ========================================
 * COMPACT DESIGN PHILOSOPHY
 * ========================================
 * 
 * All spacing values have been reduced by 50% for a compact, modern UI:
 * - Padding: 6px (was 12px), 8px (was 16px)
 * - Gaps: 4px (was 8px), 6px (was 12px)
 * - Container padding: 6px → 8px → 12px (responsive)
 * 
 * This creates a tighter, more information-dense interface while
 * maintaining visual hierarchy and usability.
 */

// ReCars Design System
// Centralized design tokens for consistent UI across all pages

export const designSystem = {
  // ===== COLORS =====
  colors: {
    // Primary Colors
    primary: {
      DEFAULT: '#171717', // gray-900
      light: '#262626',   // gray-800
      dark: '#0a0a0a',    // gray-950
    },
    
    // Accent Colors
    accent: {
      DEFAULT: '#fb923c',  // orange-400
      light: '#fdba74',    // orange-300
      dark: '#f97316',     // orange-500
      darker: '#ea580c',   // orange-600
    },
    
    // Background Colors
    background: {
      DEFAULT: '#f5f5f5',  // gray-100
      light: '#fafafa',    // gray-50
      card: '#ffffff',     // white
      hover: '#f9fafb',    // gray-50
    },
    
    // Text Colors
    text: {
      primary: '#171717',   // gray-900
      secondary: '#525252', // gray-600
      muted: '#737373',     // gray-500
      light: '#a3a3a3',     // gray-400
      white: '#ffffff',
    },
    
    // Border Colors
    border: {
      DEFAULT: '#e5e5e5',  // gray-200
      light: '#f5f5f5',    // gray-100
      dark: '#d4d4d4',     // gray-300
    },
    
    // Status Colors
    status: {
      success: '#22c55e',  // green-500
      warning: '#f59e0b',  // amber-500
      error: '#ef4444',    // red-500
      info: '#3b82f6',     // blue-500
    },
    
    // Condition Colors
    condition: {
      excellent: {
        text: '#16a34a',   // green-600
        bg: '#f0fdf4',     // green-50
        border: '#16a34a',
      },
      good: {
        text: '#2563eb',   // blue-600
        bg: '#eff6ff',     // blue-50
        border: '#2563eb',
      },
      new: {
        text: '#9333ea',   // purple-600
        bg: '#faf5ff',     // purple-50
        border: '#9333ea',
      },
    },
  },

  // ===== TYPOGRAPHY =====
  typography: {
    fontFamily: {
      sans: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    
    fontSize: {
      // Extra Small
      xs: '0.625rem',      // 10px
      xs2: '0.75rem',      // 12px
      
      // Small
      sm: '0.875rem',      // 14px
      
      // Base
      base: '1rem',        // 16px
      
      // Large
      lg: '1.125rem',      // 18px
      xl: '1.25rem',       // 20px
      '2xl': '1.5rem',     // 24px
      '3xl': '1.875rem',   // 30px
      '4xl': '2.25rem',    // 36px
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  // ===== SPACING ===== (REDUCED BY 50% FOR COMPACT DESIGN)
  spacing: {
    // Component Spacing
    component: {
      xs: '0.25rem',    // 4px (was 8px)
      sm: '0.375rem',   // 6px (was 12px)
      md: '0.5rem',     // 8px (was 16px)
      lg: '0.75rem',    // 12px (was 24px)
      xl: '1rem',       // 16px (was 32px)
      '2xl': '1.5rem',  // 24px (was 48px)
    },
    
    // Padding
    padding: {
      card: '0.375rem',          // 6px (was 12px) - sm:0.5rem (8px)
      section: '0.375rem',       // 6px (was 12px) - sm:0.5rem (8px) - lg:0.75rem (12px)
      container: '0.375rem',     // 6px (was 12px) - sm:0.5rem (8px) - lg:0.75rem (12px)
    },
    
    // Gaps
    gap: {
      xs: '0.1875rem',   // 3px (was 6px)
      sm: '0.25rem',     // 4px (was 8px)
      md: '0.375rem',    // 6px (was 12px)
      lg: '0.5rem',      // 8px (was 16px)
      xl: '0.75rem',     // 12px (was 24px)
    },
  },

  // ===== BORDER RADIUS =====
  borderRadius: {
    none: '0',
    sm: '0.375rem',    // 6px
    DEFAULT: '0.5rem', // 8px
    md: '0.625rem',    // 10px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    full: '9999px',
  },

  // ===== SHADOWS =====
  shadows: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.04)',
    DEFAULT: '0 2px 8px rgba(0, 0, 0, 0.04)',
    md: '0 4px 16px rgba(0, 0, 0, 0.06)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.08)',
    xl: '0 12px 32px rgba(0, 0, 0, 0.1)',
  },

  // ===== BUTTON STYLES =====
  buttons: {
    sizes: {
      xs: {
        height: '1.75rem',    // 28px
        padding: '0 0.75rem', // 12px
        fontSize: '0.625rem', // 10px
      },
      sm: {
        height: '2rem',       // 32px
        padding: '0 1rem',    // 16px
        fontSize: '0.75rem',  // 12px
      },
      md: {
        height: '2.25rem',    // 36px
        padding: '0 1.25rem', // 20px
        fontSize: '0.875rem', // 14px
      },
      lg: {
        height: '2.5rem',     // 40px
        padding: '0 1.5rem',  // 24px
        fontSize: '1rem',     // 16px
      },
    },
    
    variants: {
      primary: {
        bg: '#171717',
        bgHover: '#262626',
        text: '#ffffff',
        border: 'transparent',
      },
      secondary: {
        bg: '#ffffff',
        bgHover: '#f5f5f5',
        text: '#171717',
        border: '#e5e5e5',
      },
      outline: {
        bg: 'transparent',
        bgHover: '#171717',
        text: '#171717',
        textHover: '#ffffff',
        border: '#171717',
      },
      accent: {
        bg: '#fb923c',
        bgHover: '#f97316',
        text: '#ffffff',
        border: 'transparent',
      },
    },
  },

  // ===== INPUT STYLES =====
  inputs: {
    height: {
      sm: '2rem',      // 32px
      md: '2.25rem',   // 36px
      lg: '2.5rem',    // 40px
    },
    
    padding: {
      sm: '0.5rem 0.75rem',   // 8px 12px
      md: '0.625rem 1rem',    // 10px 16px
      lg: '0.75rem 1.25rem',  // 12px 20px
    },
    
    fontSize: {
      sm: '0.75rem',   // 12px
      md: '0.875rem',  // 14px
      lg: '1rem',      // 16px
    },
  },

  // ===== CARD STYLES =====
  cards: {
    padding: '0.375rem',       // 6px (was 12px) - sm:0.5rem (8px)
    borderRadius: '0.75rem',   // 12px
    shadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    shadowHover: '0 4px 16px rgba(0, 0, 0, 0.06)',
  },

  // ===== BADGE STYLES =====
  badges: {
    padding: '0.125rem 0.5rem',  // 2px 8px
    fontSize: '0.625rem',        // 10px
    borderRadius: '9999px',
    fontWeight: '600',
  },

  // ===== TRANSITIONS =====
  transitions: {
    fast: '150ms ease-in-out',
    DEFAULT: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  // ===== BREAKPOINTS =====
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ===== Z-INDEX =====
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

// ===== UTILITY CLASSES =====
// These are the recommended Tailwind classes to use throughout the app

export const utilityClasses = {
  // Container (50% reduced padding)
  container: 'max-w-[1920px] mx-auto px-1.5 sm:px-2 lg:px-3',
  
  // Section Padding (50% reduced)
  sectionPadding: 'py-1.5 sm:py-2',
  
  // Card (50% reduced padding)
  card: 'bg-white rounded-xl shadow-sm hover:shadow-md transition-all',
  cardPadding: 'p-1.5 sm:p-2',
  
  // Button Primary
  btnPrimary: 'bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all',
  btnPrimarySm: 'bg-gray-900 hover:bg-gray-800 text-white font-semibold h-8 px-4 rounded-lg transition-all text-xs',
  btnPrimaryMd: 'bg-gray-900 hover:bg-gray-800 text-white font-semibold h-9 px-5 rounded-lg transition-all text-sm',
  
  // Button Secondary
  btnSecondary: 'bg-white hover:bg-gray-50 text-gray-900 font-semibold border border-gray-200 rounded-lg transition-all',
  
  // Button Outline
  btnOutline: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all',
  btnOutlineSm: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold h-8 px-4 rounded-lg transition-all text-xs',
  
  // Button Accent
  btnAccent: 'bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all',
  
  // Input
  input: 'border border-gray-200 rounded-lg focus:border-gray-900 focus:ring-gray-900 transition-all',
  inputSm: 'h-8 px-3 text-xs',
  inputMd: 'h-9 px-4 text-sm',
  
  // Badge
  badge: 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold',
  badgeDefault: 'bg-gray-100 text-gray-900',
  badgeAccent: 'bg-orange-100 text-orange-600',
  badgeSuccess: 'bg-green-100 text-green-600',
  
  // Text
  heading1: 'text-2xl sm:text-3xl font-bold text-gray-900',
  heading2: 'text-xl sm:text-2xl font-bold text-gray-900',
  heading3: 'text-lg sm:text-xl font-bold text-gray-900',
  heading4: 'text-base sm:text-lg font-semibold text-gray-900',
  
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600',
  textMuted: 'text-gray-500',
  textLight: 'text-gray-400',
  
  // Spacing (50% reduced gaps)
  gapXs: 'gap-0.75',
  gapSm: 'gap-1',
  gapMd: 'gap-1.5',
  gapLg: 'gap-2',
  
  // Grid
  gridCols2: 'grid grid-cols-1 sm:grid-cols-2',
  gridCols3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gridCols4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  
  // Flex
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexStart: 'flex items-center justify-start',
  flexEnd: 'flex items-center justify-end',
  
  // Transitions
  transition: 'transition-all duration-200 ease-in-out',
  transitionFast: 'transition-all duration-150 ease-in-out',
  transitionSlow: 'transition-all duration-300 ease-in-out',
} as const;

// ===== HELPER FUNCTIONS =====

/**
 * Get color value from design system
 */
export function getColor(path: string): string {
  const keys = path.split('.');
  let value: any = designSystem.colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return '#000000';
  }
  
  return typeof value === 'string' ? value : value.DEFAULT || '#000000';
}

/**
 * Get spacing value from design system
 */
export function getSpacing(path: string): string {
  const keys = path.split('.');
  let value: any = designSystem.spacing;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return '0';
  }
  
  return typeof value === 'string' ? value : '0';
}

/**
 * Combine utility classes
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}