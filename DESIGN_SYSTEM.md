# ReCars Design System Documentation

**Version:** 2.0  
**Last Updated:** 2024  
**Purpose:** Single source of truth for all UI variables and design patterns

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Design Tokens](#design-tokens)
4. [Usage Patterns](#usage-patterns)
5. [Theme System](#theme-system)
6. [Component Guidelines](#component-guidelines)
7. [Best Practices](#best-practices)
8. [Migration Guide](#migration-guide)

---

## 🎯 Overview

The ReCars Design System is a comprehensive, unified design language that ensures consistency across all pages and components. All UI variables are centralized in `src/lib/design-system.ts` and automatically synced with Tailwind CSS via `tailwind.config.js`.

### Key Features

- ✅ **Single Source of Truth** - All design tokens in one place
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Theme-Aware** - Automatic light/dark mode support
- ✅ **Compact Design** - 50% reduced spacing for modern UI
- ✅ **Auto-Synced** - Tailwind config imports from design system
- ✅ **Future-Proof** - Easy to extend and maintain

---

## 🚀 Quick Start

### Installation

The design system is already installed. Just import it:

```typescript
import { designSystem, utilityClasses, getColor, getSpacing } from '@/lib/design-system';
```

### Basic Usage

```tsx
import { utilityClasses } from '@/lib/design-system';

export default function MyPage() {
  return (
    <div className={utilityClasses.container}>
      <div className={utilityClasses.sectionPadding}>
        <h1 className={utilityClasses.heading1}>Page Title</h1>
        <div className={utilityClasses.card}>
          <div className={utilityClasses.cardPadding}>
            Content goes here
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎨 Design Tokens

### Colors

All colors are theme-aware and automatically adapt to light/dark mode.

#### Primary Colors
```typescript
designSystem.colors.primary.DEFAULT  // #171717 (gray-900)
designSystem.colors.primary.light    // #262626 (gray-800)
designSystem.colors.primary.dark     // #0a0a0a (gray-950)
```

#### Accent Colors
```typescript
designSystem.colors.accent.DEFAULT   // #fb923c (orange-400)
designSystem.colors.accent.light     // #fdba74 (orange-300)
designSystem.colors.accent.dark      // #f97316 (orange-500)
designSystem.colors.accent.darker    // #ea580c (orange-600)
```

#### Background Colors
```typescript
designSystem.colors.background.DEFAULT  // #f5f5f5 (gray-100)
designSystem.colors.background.light    // #fafafa (gray-50)
designSystem.colors.background.card     // #ffffff (white)
designSystem.colors.background.hover    // #f9fafb (gray-50)
```

#### Text Colors
```typescript
designSystem.colors.text.primary     // #171717 (gray-900)
designSystem.colors.text.secondary   // #525252 (gray-600)
designSystem.colors.text.muted       // #737373 (gray-500)
designSystem.colors.text.light       // #a3a3a3 (gray-400)
designSystem.colors.text.white       // #ffffff
```

#### Status Colors
```typescript
designSystem.colors.status.success   // #22c55e (green-500)
designSystem.colors.status.warning   // #f59e0b (amber-500)
designSystem.colors.status.error     // #ef4444 (red-500)
designSystem.colors.status.info      // #3b82f6 (blue-500)
```

### Typography

#### Font Sizes
```typescript
designSystem.typography.fontSize.xs    // 0.625rem (10px)
designSystem.typography.fontSize.xs2   // 0.75rem (12px)
designSystem.typography.fontSize.sm    // 0.875rem (14px)
designSystem.typography.fontSize.base  // 1rem (16px)
designSystem.typography.fontSize.lg    // 1.125rem (18px)
designSystem.typography.fontSize.xl    // 1.25rem (20px)
designSystem.typography.fontSize['2xl'] // 1.5rem (24px)
designSystem.typography.fontSize['3xl'] // 1.875rem (30px)
designSystem.typography.fontSize['4xl'] // 2.25rem (36px)
```

#### Font Weights
```typescript
designSystem.typography.fontWeight.light      // 300
designSystem.typography.fontWeight.normal     // 400
designSystem.typography.fontWeight.medium     // 500
designSystem.typography.fontWeight.semibold   // 600
designSystem.typography.fontWeight.bold       // 700
designSystem.typography.fontWeight.extrabold  // 800
designSystem.typography.fontWeight.black      // 900
```

### Spacing (50% Reduced)

#### Component Spacing
```typescript
designSystem.spacing.component.xs    // 0.25rem (4px)
designSystem.spacing.component.sm    // 0.375rem (6px)
designSystem.spacing.component.md    // 0.5rem (8px)
designSystem.spacing.component.lg    // 0.75rem (12px)
designSystem.spacing.component.xl    // 1rem (16px)
designSystem.spacing.component['2xl'] // 1.5rem (24px)
```

#### Padding
```typescript
designSystem.spacing.padding.card       // 0.375rem (6px)
designSystem.spacing.padding.section    // 0.375rem (6px)
designSystem.spacing.padding.container  // 0.375rem (6px)
```

#### Gaps
```typescript
designSystem.spacing.gap.xs   // 0.1875rem (3px)
designSystem.spacing.gap.sm   // 0.25rem (4px)
designSystem.spacing.gap.md   // 0.375rem (6px)
designSystem.spacing.gap.lg   // 0.5rem (8px)
designSystem.spacing.gap.xl   // 0.75rem (12px)
```

### Border Radius
```typescript
designSystem.borderRadius.none     // 0
designSystem.borderRadius.sm       // 0.375rem (6px)
designSystem.borderRadius.DEFAULT  // 0.5rem (8px)
designSystem.borderRadius.md       // 0.625rem (10px)
designSystem.borderRadius.lg       // 0.75rem (12px)
designSystem.borderRadius.xl       // 1rem (16px)
designSystem.borderRadius['2xl']   // 1.5rem (24px)
designSystem.borderRadius.full     // 9999px
```

### Shadows
```typescript
designSystem.shadows.none     // none
designSystem.shadows.sm       // 0 1px 3px rgba(0, 0, 0, 0.04)
designSystem.shadows.DEFAULT  // 0 2px 8px rgba(0, 0, 0, 0.04)
designSystem.shadows.md       // 0 4px 16px rgba(0, 0, 0, 0.06)
designSystem.shadows.lg       // 0 8px 24px rgba(0, 0, 0, 0.08)
designSystem.shadows.xl       // 0 12px 32px rgba(0, 0, 0, 0.1)
```

### Buttons

#### Sizes
```typescript
designSystem.buttons.sizes.xs  // h: 28px, p: 12px, fs: 10px
designSystem.buttons.sizes.sm  // h: 32px, p: 16px, fs: 12px
designSystem.buttons.sizes.md  // h: 36px, p: 20px, fs: 14px
designSystem.buttons.sizes.lg  // h: 40px, p: 24px, fs: 16px
```

#### Variants
- `primary` - Dark background, white text
- `secondary` - White background, border
- `outline` - Transparent with border
- `accent` - Orange accent color

### Transitions
```typescript
designSystem.transitions.fast     // 150ms ease-in-out
designSystem.transitions.DEFAULT  // 200ms ease-in-out
designSystem.transitions.slow     // 300ms ease-in-out
```

### Z-Index
```typescript
designSystem.zIndex.dropdown       // 1000
designSystem.zIndex.sticky         // 1020
designSystem.zIndex.fixed          // 1030
designSystem.zIndex.modalBackdrop  // 1040
designSystem.zIndex.modal          // 1050
designSystem.zIndex.popover        // 1060
designSystem.zIndex.tooltip        // 1070
```

---

## 💡 Usage Patterns

### 1. Utility Classes (Recommended)

```tsx
import { utilityClasses } from '@/lib/design-system';

<div className={utilityClasses.container}>
  <h1 className={utilityClasses.heading1}>Title</h1>
  <button className={utilityClasses.btnPrimary}>Click</button>
</div>
```

**Available Utility Classes:**
- Layout: `container`, `sectionPadding`, `flexCenter`, `flexBetween`, `gridCols2`, `gridCols3`, `gridCols4`
- Cards: `card`, `cardPadding`
- Buttons: `btnPrimary`, `btnPrimarySm`, `btnPrimaryMd`, `btnSecondary`, `btnOutline`, `btnAccent`
- Inputs: `input`, `inputSm`, `inputMd`
- Badges: `badge`, `badgeDefault`, `badgeAccent`, `badgeSuccess`
- Typography: `heading1`, `heading2`, `heading3`, `heading4`, `textPrimary`, `textSecondary`, `textMuted`, `textLight`
- Spacing: `gapXs`, `gapSm`, `gapMd`, `gapLg`
- Transitions: `transition`, `transitionFast`, `transitionSlow`

### 2. Design Tokens

```tsx
import { designSystem } from '@/lib/design-system';

const buttonStyle = {
  height: designSystem.buttons.sizes.md.height,
  padding: designSystem.buttons.sizes.md.padding,
  fontSize: designSystem.typography.fontSize.sm,
  borderRadius: designSystem.borderRadius.lg,
};
```

### 3. Helper Functions

```tsx
import { getColor, getSpacing } from '@/lib/design-system';

const accentColor = getColor('accent.DEFAULT');
const cardPadding = getSpacing('padding.card');
```

### 4. Tailwind Classes (Auto-Synced)

```tsx
// These use values from designSystem via tailwind.config.js
<div className="text-xs font-semibold rounded-lg shadow-md p-1.5">
  Content
</div>
```

### 5. Theme-Aware CSS Variables

```tsx
// Always use these for theme compatibility
<div className="bg-app-bg text-app-text border-app-border">
  <div className="bg-app-surface">
    <button className="bg-app-primary text-white">Button</button>
  </div>
</div>
```

---

## 🌓 Theme System

### CSS Variables (index.css)

The app uses CSS variables for theme-aware colors:

```css
:root {
  --app-bg: 220 18% 97%;       /* Main background */
  --app-surface: 0 0% 100%;    /* Cards, panels */
  --app-primary: 262 83% 58%;  /* Primary brand */
  --app-text: 220 13% 26%;     /* Main text */
  --app-border: 220 13% 91%;   /* Borders */
  --app-accent: 221 83% 53%;   /* Accents */
}

.dark {
  --app-bg: 222 47% 11%;       /* Dark background */
  --app-surface: 217 33% 17%;  /* Dark cards */
  --app-primary: 262 83% 70%;  /* Light purple */
  --app-text: 210 20% 82%;     /* Light text */
  --app-border: 217 19% 27%;   /* Dark borders */
  --app-accent: 217 91% 60%;   /* Bright blue */
}
```

### Using Theme Variables

```tsx
// ✅ Correct - Theme-aware
<div className="bg-app-bg text-app-text">Content</div>

// ❌ Wrong - Hardcoded colors
<div className="bg-gray-100 text-gray-900">Content</div>
```

---

## 🧩 Component Guidelines

### Creating New Components

1. **Always import utilityClasses**
```tsx
import { utilityClasses } from '@/lib/design-system';
```

2. **Use predefined utility classes**
```tsx
<div className={utilityClasses.card}>
  <div className={utilityClasses.cardPadding}>
    Content
  </div>
</div>
```

3. **Use theme-aware variables**
```tsx
<div className="bg-app-surface border-app-border">
  <h2 className="text-app-text">Title</h2>
</div>
```

4. **Follow spacing patterns**
```tsx
// ✅ Correct - Uses design system spacing
<div className="p-1.5 sm:p-2 gap-1.5">

// ❌ Wrong - Random spacing
<div className="p-4 gap-3">
```

### Example Component

```tsx
import React from 'react';
import { utilityClasses } from '@/lib/design-system';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps): JSX.Element {
  return (
    <div className={utilityClasses.card}>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className={utilityClasses.cardPadding}>
        <h3 className={utilityClasses.heading3}>{title}</h3>
        <p className={utilityClasses.textSecondary}>${price}</p>
        <Button className="mt-2 w-full">Add to Cart</Button>
      </div>
    </div>
  );
}
```

---

## ✅ Best Practices

### DO ✅

- Use `utilityClasses` for consistent styling
- Use theme-aware CSS variables (`bg-app-bg`, `text-app-text`)
- Import design tokens from `@/lib/design-system`
- Follow the 50% reduced spacing pattern
- Use semantic color names (`app-primary`, `app-accent`)
- Use predefined button/input/badge styles
- Test in both light and dark modes

### DON'T ❌

- Hardcode colors (`#171717`, `rgb(23, 23, 23)`)
- Use random spacing values (`p-7`, `gap-5`)
- Create custom utility classes outside design system
- Override theme variables inline
- Use non-semantic color names
- Mix design system and custom styles

### Examples

```tsx
// ✅ GOOD
import { utilityClasses } from '@/lib/design-system';

<div className={utilityClasses.container}>
  <div className={utilityClasses.card}>
    <div className={utilityClasses.cardPadding}>
      <h1 className={utilityClasses.heading1}>Title</h1>
      <button className={utilityClasses.btnPrimary}>Click</button>
    </div>
  </div>
</div>

// ❌ BAD
<div className="max-w-7xl mx-auto px-8">
  <div className="bg-white rounded-2xl shadow-xl">
    <div className="p-6">
      <h1 className="text-4xl font-black text-gray-900">Title</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
        Click
      </button>
    </div>
  </div>
</div>
```

---

## 🔄 Migration Guide

### Migrating Existing Components

1. **Import the design system**
```tsx
import { utilityClasses, designSystem } from '@/lib/design-system';
```

2. **Replace hardcoded colors**
```tsx
// Before
<div className="bg-gray-100 text-gray-900">

// After
<div className="bg-app-bg text-app-text">
```

3. **Replace custom spacing**
```tsx
// Before
<div className="p-6 gap-4">

// After
<div className="p-1.5 sm:p-2 gap-1.5">
// Or better:
<div className={utilityClasses.cardPadding}>
```

4. **Use utility classes**
```tsx
// Before
<h1 className="text-3xl font-bold text-gray-900">

// After
<h1 className={utilityClasses.heading1}>
```

5. **Update button styles**
```tsx
// Before
<button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">

// After
<button className={utilityClasses.btnPrimary}>
```

---

## 📚 Additional Resources

- **Design System File:** `src/lib/design-system.ts`
- **Tailwind Config:** `tailwind.config.js`
- **Global Styles:** `src/index.css`
- **Theme Provider:** `src/components/theme-provider.tsx`
- **Theme Settings:** `src/lib/theme.ts`

---

## 🤝 Contributing

When adding new design tokens:

1. Add them to `src/lib/design-system.ts`
2. Update `tailwind.config.js` if needed
3. Create utility classes in `utilityClasses` object
4. Document them in this file
5. Test in light and dark modes

---

**Made with ❤️ for ReCars**
