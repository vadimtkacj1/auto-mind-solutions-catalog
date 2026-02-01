
import { lazy } from 'react';

/**
 * Configuration for UI categories including their display icons.
 */
export const CATEGORY_CONFIG: Record<string, { emoji: string }> = {
  'header': { emoji: '📌' },
  'hero': { emoji: '🎯' },
  'carousel': { emoji: '🔄' },
  'review': { emoji: '⭐' },
  'cta': { emoji: '🎯' },
  'contact-form': { emoji: '📝' },
  'faq': { emoji: '❓' },
  'accordion': { emoji: '📋' },
  'animations': { emoji: '✨' },
  'footer': { emoji: '📍' },
  'color-palettes': { emoji: '🎨' },
  'fonts': { emoji: '✍️' },
  'buttons': { emoji: '🔘' },
};


export const LAZY_COMPONENTS: Record<string, any[]> = {
  hero: [1, 2, 3, 4, 5].map(i => lazy(() => import(/* @vite-ignore */ `../Heroes/hero-${i}.tsx`))),
  header: Array.from({ length: 15 }, (_, i) => lazy(() => import(/* @vite-ignore */ `../Headers/header-${i + 1}.tsx`))),
  cta: [1, 2, 3, 4, 5].map(i => lazy(() => import(/* @vite-ignore */ `../CTAs/cta-${i}.tsx`))),
  footer: [1, 2, 3, 4, 5].map(i => lazy(() => import(/* @vite-ignore */ `../Footers/footer-${i}.tsx`))),
  'contact-form': [1, 2, 3].map(i => lazy(() => import(/* @vite-ignore */ `../ContactForms/contact-${i}.tsx`))),
  carousel: [1, 2, 3, 4, 5, 6, 7, 8].map(i => lazy(() => import(/* @vite-ignore */ `../Carousels/carousel-${i}.tsx`))),
  faq: [1, 2, 3, 4, 5].map(i => lazy(() => import(/* @vite-ignore */ `../FAQs/faq-${i}.tsx`))),
  accordion: [1, 2, 3, 4, 5].map(i => lazy(() => import(/* @vite-ignore */ `../Accordions/accordion-${i}.tsx`))),
};