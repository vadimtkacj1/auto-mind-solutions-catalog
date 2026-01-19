# Call-to-Action (CTA) Components

Collection of CTA sections designed to drive conversions and user engagement.

## Components

### cta-1.tsx - Simple Primary
- Centered layout
- Primary brand color background
- Two CTA buttons (primary + secondary)
- Clean and direct
- Best for: General conversions, newsletter signups

### cta-2.tsx - Email Capture with Offer
- Gradient background with pattern
- Limited time offer badge
- Email input + submit button
- Visual emphasis
- Best for: Promotional offers, special deals

### cta-3.tsx - Feature Checklist
- Two column layout
- Feature list with checkmarks
- Pricing highlight ($0 trial)
- Visual split design
- Best for: Free trial signups, feature highlights

### cta-4.tsx - Contact/Support
- Horizontal layout
- Message icon badge
- Dual action buttons
- Question/support focused
- Best for: Contact pages, support sections

### cta-5.tsx - Dark Launch CTA
- Dark background with icon
- Stats display (setup time, support, satisfaction)
- Rocket icon
- Glassmorphism card
- Best for: Product launches, major announcements

## Usage

```tsx
import CTA1 from '@/src/components/CTAs/cta-1'

export default function Page() {
  return (
    <>
      {/* Your content */}
      <CTA1 />
      {/* More content */}
    </>
  )
}
```

## Best Practices

- Place CTAs strategically throughout your page
- Use contrasting colors for primary actions
- Keep copy short and action-oriented
- Test different variations for conversions
- Make buttons large enough for easy clicking

## Customization

Modify the following in each component:
- Heading text
- Button labels
- Background colors
- Feature lists
- Input placeholders
