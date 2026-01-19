# Header Components

Collection of navigation header components for websites. Each component is a standalone building block.

## Components

### header-1.tsx - Classic Navigation
- Simple horizontal navigation with mobile menu
- Logo, nav links, CTA button
- Hamburger menu for mobile
- Best for: Basic websites, portfolios

### header-2.tsx - Fixed Header with Dropdown
- Fixed/sticky header with backdrop blur
- Dropdown menu for products
- Centered navigation
- Best for: SaaS, product websites

### header-3.tsx - E-commerce Header
- Top promotional banner
- Search bar integration
- Shopping cart icon with badge
- Category navigation
- Best for: Online stores, e-commerce sites

### header-4.tsx - Centered Pill Navigation
- Centered logo with tagline
- Pill-style navigation buttons
- Clean, minimal design
- Best for: Creative agencies, portfolios

### header-5.tsx - Business Header
- Top contact bar with phone/email
- Two-tier navigation
- Professional styling with gradients
- Request demo + get started CTAs
- Best for: B2B, enterprise, corporate sites

## Usage

```tsx
import Header1 from '@/src/components/Headers/header-1'

export default function Page() {
  return <Header1 />
}
```

## Customization

All components use Tailwind CSS classes and can be customized by:
- Changing color schemes via CSS variables
- Modifying navigation items in the component
- Adjusting breakpoints for responsive behavior
