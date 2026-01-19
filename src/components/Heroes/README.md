# Hero Section Components

Collection of hero/banner components for landing pages. Eye-catching sections to grab visitor attention.

## Components

### hero-1.tsx - Centered with Logos
- Centered text layout
- Dual CTA buttons
- Company logo showcase
- Gradient background
- Best for: SaaS landing pages, product launches

### hero-2.tsx - Split Layout with Stats
- Two column grid (text + image)
- Release badge
- Stats display (users, rating, uptime)
- Play button for video
- Best for: Product demos, feature showcases

### hero-3.tsx - Dark with Email Capture
- Dark background with pattern
- Email signup form
- Feature checkmarks
- Social proof with avatars
- Best for: Waitlist pages, product pre-launch

### hero-4.tsx - Features Highlight
- Two column layout
- Icon + feature list
- Gradient decorative elements
- Dual CTAs
- Best for: Developer tools, technical products

### hero-5.tsx - Premium with Badge
- Large centered layout
- Animated badge indicator
- Email waitlist signup
- Three key stats
- Best for: Premium products, enterprise solutions

## Usage

```tsx
import Hero1 from '@/src/components/Heroes/hero-1'

export default function Page() {
  return (
    <>
      <Hero1 />
      {/* Rest of your page */}
    </>
  )
}
```

## Features

- Fully responsive (mobile, tablet, desktop)
- Uses Tailwind CSS for styling
- Lucide React icons
- Gradient backgrounds
- Call-to-action buttons
