'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComponentItem } from '../../data/catalogData';
import { ComponentModal } from '../ComponentModal';
import { useComponentState } from './useComponentState';
import { ComponentPreview } from './ComponentPreview';
import { ComponentFullView } from './ComponentFullView';
import styles from './ComponentCard.module.css';

interface Props {
  component: ComponentItem;
  index: number;
}

export const ComponentCard = React.memo(({ component, index }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const { isFav, thumbnail, toggleFav } = useComponentState(component.id);

  // Extract index from ID (e.g., "hero-1" -> index 0)
  const compIndex = parseInt(component.id.split('-')[1]) - 1;

  // Generate code string for color palettes
  const generatePaletteCode = (colors?: string[]) => {
    if (!colors) return '';
    return `const colors = ${JSON.stringify(colors, null, 2)};`;
  };

  const handleCardClick = () => {
    if (component.category === 'color-palettes') {
      // Copy code to clipboard
      const code = generatePaletteCode(component.colors);
      navigator.clipboard.writeText(code).then(() => {
        setShowCopiedToast(true);
        setTimeout(() => setShowCopiedToast(false), 2000);
      });
    } else if (component.category === 'fonts') {
      // Don't open modal for fonts
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFav(e);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03 }}
        className={styles.card}
        onClick={handleCardClick}
      >
        <div className={styles.preview}>
          <ComponentPreview
            component={component}
            thumbnail={thumbnail}
            compIndex={compIndex}
          />

          {/* Copied toast notification */}
          {showCopiedToast && (
            <div className={styles.copiedToast}>
              ✓ הקוד הועתק!
            </div>
          )}

          <button
            className={`${styles.favoriteBtn} ${isFav ? styles.favoriteBtnActive : ''}`}
            onClick={handleFavoriteClick}
            aria-label="Toggle Favorite"
          >
            {isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div className={styles.footer}>
          <span className={styles.componentId}>#{component.id}</span>
        </div>

        <div className={styles.glow} />
      </motion.div>

      {component.category !== 'color-palettes' && component.category !== 'fonts' && (
        <ComponentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          componentId={component.id}
        >
          <ComponentFullView component={component} compIndex={compIndex} />
        </ComponentModal>
      )}
    </>
  );
});