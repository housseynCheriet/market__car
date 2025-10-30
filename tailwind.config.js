import { designSystem } from './src/lib/design-system';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [designSystem.typography.fontFamily.sans],
      },
      fontSize: {
        xs: designSystem.typography.fontSize.xs,
        xs2: designSystem.typography.fontSize.xs2,
        sm: designSystem.typography.fontSize.sm,
        base: designSystem.typography.fontSize.base,
        lg: designSystem.typography.fontSize.lg,
        xl: designSystem.typography.fontSize.xl,
        '2xl': designSystem.typography.fontSize['2xl'],
        '3xl': designSystem.typography.fontSize['3xl'],
        '4xl': designSystem.typography.fontSize['4xl'],
      },
      fontWeight: {
        light: designSystem.typography.fontWeight.light,
        normal: designSystem.typography.fontWeight.normal,
        medium: designSystem.typography.fontWeight.medium,
        semibold: designSystem.typography.fontWeight.semibold,
        bold: designSystem.typography.fontWeight.bold,
        extrabold: designSystem.typography.fontWeight.extrabold,
        black: designSystem.typography.fontWeight.black,
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      colors: {
        // Simplified color system - Light Mode (6 main colors)
        'app-bg': 'hsl(var(--app-bg))',           // Main background
        'app-surface': 'hsl(var(--app-surface))', // Cards, panels
        'app-primary': 'hsl(var(--app-primary))', // Primary brand color
        'app-text': 'hsl(var(--app-text))',       // Main text
        'app-border': 'hsl(var(--app-border))',   // Borders
        'app-accent': 'hsl(var(--app-accent))',   // Accents, highlights
        
        // Semantic colors (theme-aware)
        'app-success': 'hsl(var(--app-success))',      // Green for success
        'app-warning': 'hsl(var(--app-warning))',      // Orange for warnings
        'app-error': 'hsl(var(--app-error))',          // Red for errors
        'app-info': 'hsl(var(--app-info))',            // Blue for info
        
        // Extended theme variables
        'app-disabled': 'hsl(var(--app-disabled))',           // Disabled text color
        'app-disabled-bg': 'hsl(var(--app-disabled-bg))',     // Disabled background
        'app-card-bg': 'hsl(var(--app-card-bg))',             // Card background
        'app-input-bg': 'hsl(var(--app-input-bg))',           // Input background
        'app-input-border-hover': 'hsl(var(--app-input-border-hover))', // Input border hover
        
        // Shadcn UI compatibility (mapped to our simplified system)
        border: "hsl(var(--app-border))",
        input: "hsl(var(--app-border))",
        ring: "hsl(var(--app-primary))",
        background: "hsl(var(--app-bg))",
        foreground: "hsl(var(--app-text))",
        primary: {
          DEFAULT: "hsl(var(--app-primary))",
          foreground: "hsl(var(--app-bg))",
        },
        secondary: {
          DEFAULT: "hsl(var(--app-surface))",
          foreground: "hsl(var(--app-text))",
        },
        destructive: {
          DEFAULT: "hsl(0, 72%, 51%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(var(--app-surface))",
          foreground: "hsl(var(--app-text))",
        },
        accent: {
          DEFAULT: "hsl(var(--app-accent))",
          foreground: "hsl(var(--app-bg))",
        },
        popover: {
          DEFAULT: "hsl(var(--app-surface))",
          foreground: "hsl(var(--app-text))",
        },
        card: {
          DEFAULT: "hsl(var(--app-surface))",
          foreground: "hsl(var(--app-text))",
        },
      },
      borderRadius: {
        none: designSystem.borderRadius.none,
        sm: designSystem.borderRadius.sm,
        DEFAULT: designSystem.borderRadius.DEFAULT,
        md: designSystem.borderRadius.md,
        lg: designSystem.borderRadius.lg,
        xl: designSystem.borderRadius.xl,
        '2xl': designSystem.borderRadius['2xl'],
        full: designSystem.borderRadius.full,
      },
      boxShadow: {
        none: designSystem.shadows.none,
        sm: designSystem.shadows.sm,
        DEFAULT: designSystem.shadows.DEFAULT,
        md: designSystem.shadows.md,
        lg: designSystem.shadows.lg,
        xl: designSystem.shadows.xl,
        // Legacy names for compatibility
        'soft': designSystem.shadows.DEFAULT,
        'card': designSystem.shadows.md,
        'hover': designSystem.shadows.lg,
      },
      transitionDuration: {
        fast: '150',
        DEFAULT: '200',
        slow: '300',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      zIndex: {
        dropdown: designSystem.zIndex.dropdown,
        sticky: designSystem.zIndex.sticky,
        fixed: designSystem.zIndex.fixed,
        'modal-backdrop': designSystem.zIndex.modalBackdrop,
        modal: designSystem.zIndex.modal,
        popover: designSystem.zIndex.popover,
        tooltip: designSystem.zIndex.tooltip,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
