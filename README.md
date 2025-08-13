# Crunch - Bootstrap 5 Theme Demo

A comprehensive Bootstrap 5 theme demonstration for Crunchafi, showcasing a multi-theme design system with custom components and interactive features.

## Overview

This project demonstrates a complete Bootstrap 5 customization with three distinct themes:
- **Brand** - Core Crunchafi branding
- **Lease Accounting** - Purple-themed variant for lease accounting products
- **Data Extraction** - Orange-themed variant for data extraction products

## Features

- 🎨 **Multi-theme Support** - Dynamic theme switching with localStorage persistence
- 🎯 **Design System** - Generated SCSS variables from Figma design tokens
- 📱 **Responsive Components** - Full Bootstrap component library with custom styling
- ⚡ **Modern Build System** - Vite for fast development and optimized builds
- 🎪 **Interactive Demo** - Live component showcase with theme switcher

## Quick Start

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── js/
│   └── main.js          # Application entry point and interactions
└── scss/
    ├── bootstrap.scss   # Bootstrap imports and customizations
    ├── crunch.scss      # Generated design tokens from Figma
    └── custom.scss      # Additional custom styles
```

## Theme System

The project uses a sophisticated theming system with:

### Design Tokens
- **Colors**: Brand colors, UI neutrals, and semantic color scales
- **Typography**: Font families, sizes, and weights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Consistent border radius values

### Theme Variants
Each theme includes complete color mappings for:
- Primary and secondary actions
- Text colors and states
- Surface and background colors
- Border colors and emphasis levels
- Success, warning, danger, and info states

### Usage
Themes are applied via CSS custom properties and data attributes:

```html
<html data-theme="brand">
```

```css
:root {
  --action-primary-default: var(--crunch-color-ui-burgundy-800);
}
```

## Components Showcase

The demo includes comprehensive examples of:

- **Typography** - Headings, paragraphs, blockquotes
- **Buttons** - All variants, sizes, and states including radio button groups
- **Forms** - Inputs, selects, textareas, checkboxes with validation
- **Cards** - Various card layouts and content types
- **Alerts** - All alert types with auto-dismiss functionality
- **Navigation** - Responsive navbar with scroll behavior
- **Data Display** - Tables, badges, progress bars, list groups
- **Interactive** - Modals, accordions, tabs with smooth animations

## Custom Features

### Theme Switcher
Dynamic theme switching with dropdown selector:
```javascript
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
```

### Enhanced Interactions
- Smooth scrolling for anchor links
- Intersection Observer animations
- Auto-hiding alerts
- Loading button states
- Form validation enhancements

### Button Groups
Custom radio button group implementation:
```html
<div class="btn-group" role="radiogroup">
    <input id="option1" class="btn-check" type="radio" name="group" value="1">
    <label for="option1" class="btn btn-outline-primary">Option 1</label>
</div>
```

## Development

### Adding New Themes
1. Add theme variables to `crunch.scss`
2. Create CSS custom property mappings
3. Add theme option to the theme selector

### Customizing Components
Bootstrap components are customized through:
- SCSS variable overrides in `bootstrap.scss`
- Custom CSS in `custom.scss`
- JavaScript enhancements in `main.js`

## Browser Support

- Modern browsers supporting CSS Custom Properties
- Bootstrap 5 browser support requirements
- ES6+ JavaScript features

## Contributing

1. Follow existing code style and conventions
2. Test across all theme variants
3. Ensure responsive behavior
4. Update documentation for new features

## License

This project is part of the Crunchafi design system.