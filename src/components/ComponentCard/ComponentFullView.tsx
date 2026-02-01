import React, { Suspense } from 'react';
import { ComponentItem } from '../../data/catalogData';
import * as Fonts from '../CategoryFonts';
import * as Reviews from '../CategoryReviews';
import { LAZY_COMPONENTS } from './componentRegistry';
import styles from './ComponentCard.module.css';

interface FullViewProps {
  component: ComponentItem;
  compIndex: number;
}

/**
 * Detailed view for color palettes.
 */
const PaletteFull: React.FC<{ colors?: string[]; title: string }> = ({ colors, title }) => (
  <div className={styles.paletteFullContainer}>
    <h2>{title}</h2>
    <div className={styles.paletteGrid}>
      {colors?.map((c) => (
        <div key={c} className={styles.paletteItem}>
          <div style={{ backgroundColor: c }} className={styles.colorBox} />
          <code>{c}</code>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Renders the full version of the component inside the modal.
 * Uses React Suspense for heavy components.
 */
export const ComponentFullView: React.FC<FullViewProps> = ({ component, compIndex }) => {
  // 1. Check for heavy/lazy-loaded categories
  const LazyComp = LAZY_COMPONENTS[component.category]?.[compIndex];
  if (LazyComp) {
    return (
      <Suspense fallback={<div className={styles.loader}>Loading component...</div>}>
        <LazyComp />
      </Suspense>
    );
  }

  // 2. Handle static/simple categories
  if (component.category === 'color-palettes') {
    return <PaletteFull colors={component.colors} title={component.nameHebrew} />;
  }

  if (component.category === 'fonts') {
    const Font = Object.values(Fonts)[compIndex];
    return Font ? <Font /> : null;
  }

  if (component.category === 'review') {
    const FullReview = Object.values(Reviews)[compIndex + 6]; // Offset for Full views
    return FullReview ? <FullReview /> : null;
  }

  return <div className={styles.fullViewFallback}>{component.nameHebrew}</div>;
};
