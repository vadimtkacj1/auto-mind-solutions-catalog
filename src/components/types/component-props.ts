// Common types for customizable components

export interface NavItem {
  name: string;
  href: string;
  highlighted?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
}

export interface HeaderProps {
  logo?: string;
  logoText?: string;
  navigation?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  trustLogos?: string[];
  className?: string;
}

export interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
  bgColor?: string;
}

export interface FooterColumn {
  title: string;
  links: { name: string; href: string }[];
}

export interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  className?: string;
}
