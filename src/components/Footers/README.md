# Footer Components

Collection of footer components for websites. Each component serves different needs and styles.

## Components

### footer-1.tsx - Classic Four Column
- Company info with social links
- Four column layout (Products, Company, Legal)
- Facebook, Twitter, Instagram, LinkedIn icons
- Copyright notice
- Best for: Corporate sites, SaaS platforms

### footer-2.tsx - Contact & Newsletter
- Contact information (address, phone, email)
- Quick links grid
- Newsletter subscription form
- Best for: Service businesses, agencies

### footer-3.tsx - Dark Footer
- Dark background with light text
- Six column layout
- CTA button in branding section
- Best for: Modern SaaS, tech companies

### footer-4.tsx - Centered Footer
- Centered layout design
- Logo at top
- Horizontal navigation
- Social media icons
- Best for: Minimal sites, portfolios

### footer-5.tsx - Newsletter Banner + Footer
- Prominent newsletter section at top
- Five column grid layout
- Email signup integration
- Best for: Content sites, blogs, marketing sites

## Usage

```tsx
import Footer1 from '@/src/components/Footers/footer-1'

export default function Page() {
  return (
    <>
      {/* Your page content */}
      <Footer1 />
    </>
  )
}
```

## Icons

Components use `lucide-react` icons. Install if needed:
```bash
npm install lucide-react
```
