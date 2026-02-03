import React from 'react';
import { ComponentItem } from '../../data/catalogData';
import * as Buttons from '../CategoryButtons';
import { AccordionPreview } from '../Accordions/AccordionPreview';
import { CATEGORY_CONFIG } from './componentRegistry';
import styles from './ComponentCard.module.css';

interface PreviewProps {
  component: ComponentItem;
  thumbnail: string | null;
  compIndex: number;
}

/**
 * Renders a lightweight preview of the component.
 * Priority: Thumbnail -> Specific UI Type -> Generic Placeholder.
 */
export const ComponentPreview: React.FC<PreviewProps> = ({ component, thumbnail, compIndex }) => {
  const config = CATEGORY_CONFIG[component.category] || { emoji: '📦' };

  if (thumbnail) {
    return <img src={thumbnail} alt="" className={styles.thumbnailImage} />;
  }

  switch (component.category) {
    case 'color-palettes':
      return (
        <div className={styles.colorPalette}>
          {component.colors?.map((color, i) => (
            <div key={i} className={styles.colorSwatch} style={{ backgroundColor: color }}>
              <div className={styles.colorCode}>
                <span className={styles.colorValue}>{color}</span>
              </div>
            </div>
          ))}
        </div>
      );

    case 'buttons':
      const Btn = Object.values(Buttons)[compIndex];
      return Btn ? <Btn isActive={false} onClick={() => {}}>{component.nameHebrew}</Btn> : null;

    case 'fonts':
      // Map font names to their font-family CSS
      const fontFamilies: Record<string, string> = {
        'font-1': 'Noto Sans Hebrew',
        'font-2': 'Assistant',
        'font-3': 'Rubik',
        'font-4': 'Heebo',
        'font-5': 'Open Sans',
        'font-6': 'Playfair Display',
        'font-7': 'Montserrat',
        'font-8': 'Raleway',
        'font-9': 'Varela Round',
        'font-10': 'Frank Ruhl Libre',
        'font-11': 'Alef',
        'font-12': 'Miriam Libre',
        'font-13': 'Secular One',
        'font-14': 'Suez One',
        'font-15': 'Amatic SC',
        'font-16': 'David Libre',
        'font-17': 'Abraham',
        'font-18': 'Hadasim',
        'font-19': 'Drugulin',
        'font-20': 'Dorian',
        'font-21': 'Anka',
        'font-22': 'Asakim',
        'font-23': 'Gan',
        'font-24': 'Gladia',
        'font-25': 'Hillel',
        'font-26': 'Horev',
        'font-27': 'Makabiy',
        'font-28': 'Nachlieli',
        'font-29': 'Nehama',
        'font-30': 'Noot',
        'font-31': 'Stam Ashkenaz',
        'font-32': 'Trashim',
        'font-33': 'OS Aran',
      };

      const fontFamily = fontFamilies[component.id] || 'Heebo';

      return (
        <div className={styles.fontPreviewContainer}>
          <div className={styles.fontName}>{component.nameHebrew}</div>
          <div className={styles.fontSamples} style={{ fontFamily: `${fontFamily}, sans-serif` }}>
            <div className={styles.fontSample} style={{ fontWeight: 300 }}>
              טקסט בעברית
            </div>
            <div className={styles.fontSample} style={{ fontWeight: 500 }}>
              טקסט בעברית
            </div>
            <div className={styles.fontSample} style={{ fontWeight: 900 }}>
              טקסט בעברית
            </div>
          </div>
        </div>
      );

    case 'accordion':
      return <AccordionPreview variant={compIndex + 1} />;

    default:
      return (
        <div className={styles.placeholderContent}>
          <span className={styles.emojiLarge}>{config.emoji}</span>
          <div className={styles.previewTitle}>{component.nameHebrew}</div>
          <div className={styles.previewSubtitle}>Click to preview</div>
        </div>
      );
  }
};
