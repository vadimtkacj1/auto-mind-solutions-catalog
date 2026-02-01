import React from 'react';
import { ComponentItem } from '../../data/catalogData';
import * as Buttons from '../CategoryButtons';
import * as Fonts from '../CategoryFonts';
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
              <div className={styles.colorCode}>{color}</div>
            </div>
          ))}
        </div>
      );

    case 'buttons':
      const Btn = Object.values(Buttons)[compIndex];
      return Btn ? <Btn isActive={false} onClick={() => {}}>{component.nameHebrew}</Btn> : null;

    case 'fonts':
      const Font = Object.values(Fonts)[compIndex];
      return Font ? <div className={styles.fontScaleWrapper}><Font /></div> : null;

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
