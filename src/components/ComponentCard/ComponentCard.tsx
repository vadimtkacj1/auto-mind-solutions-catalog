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
  const { isFav, thumbnail, toggleFav } = useComponentState(component.id);

  // Extract index from ID (e.g., "hero-1" -> index 0)
  const compIndex = parseInt(component.id.split('-')[1]) - 1;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03 }}
        className={styles.card}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={styles.preview}>
          <ComponentPreview
            component={component}
            thumbnail={thumbnail}
            compIndex={compIndex}
          />

          <button
            className={`${styles.favoriteBtn} ${isFav ? styles.favoriteBtnActive : ''}`}
            onClick={toggleFav}
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

      <ComponentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        componentId={component.id}
      >
        <ComponentFullView component={component} compIndex={compIndex} />
      </ComponentModal>
    </>
  );
});