'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ComponentItem } from '../../data/catalogData';
import {
  ScaleButton,
  SlideButton,
  RotateButton,
  MorphButton,
  RippleButton,
  BounceButton,
  GlowButton,
  NeonButton,
  GradientButton,
  ShineButton,
} from '../CategoryButtons';
import {
  NotoSansHebrewFont,
  AssistantFont,
  RubikFont,
} from '../CategoryFonts';
import {
  Review1Preview,
  Review2Preview,
  Review3Preview,
  Review4Preview,
  Review5Preview,
  Review6Preview,
} from '../CategoryReviews';
import styles from './ComponentCard.module.css';

interface ComponentCardProps {
  component: ComponentItem;
  index: number;
}

const buttonComponents = [
  ScaleButton,
  SlideButton,
  RotateButton,
  MorphButton,
  RippleButton,
  BounceButton,
  GlowButton,
  NeonButton,
  GradientButton,
  ShineButton,
];

const fontComponents = [
  NotoSansHebrewFont,
  AssistantFont,
  RubikFont,
];

const reviewComponents = [
  Review1Preview,
  Review2Preview,
  Review3Preview,
  Review4Preview,
  Review5Preview,
  Review6Preview,
];

export function ComponentCard({ component, index }: ComponentCardProps) {
  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      'header': '📌',
      'hero': '🎯',
      'carousel': '🔄',
      'review': '⭐',
      'cta': '🎯',
      'contact-form': '📝',
      'faq': '❓',
      'animations': '✨',
      'footer': '📍',
      'color-palettes': '🎨',
      'fonts': '✍️',
      'buttons': '🔘',
    };
    return emojiMap[category] || '📦';
  };

  const renderPreview = () => {
    if (component.colors) {
      return (
        <div className={styles.colorPalette}>
          {component.colors.map((color, idx) => (
            <div
              key={idx}
              className={styles.colorSwatch}
              style={{ backgroundColor: color }}
            >
              <div className={styles.colorCode}>{color}</div>
            </div>
          ))}
        </div>
      );
    }

    // Render actual button components for buttons category
    if (component.category === 'buttons') {
      const buttonIndex = parseInt(component.id.split('-')[1]) - 1;
      const ButtonComponent = buttonComponents[buttonIndex];

      if (ButtonComponent) {
        return (
          <div className={styles.buttonPreview}>
            <ButtonComponent
              isActive={false}
              onClick={() => console.log('Preview click')}
            >
              {component.nameHebrew}
            </ButtonComponent>
          </div>
        );
      }
    }

    // Render actual font components for fonts category
    if (component.category === 'fonts') {
      const fontIndex = parseInt(component.id.split('-')[1]) - 1;
      const FontComponent = fontComponents[fontIndex];

      if (FontComponent) {
        return (
          <div className={styles.fontPreview}>
            <FontComponent text="הדגמת טקסט בעברית" />
          </div>
        );
      }
    }

    // Render review preview components for review category
    if (component.category === 'review') {
      const reviewIndex = parseInt(component.id.split('-')[1]) - 1;
      const ReviewComponent = reviewComponents[reviewIndex];

      if (ReviewComponent) {
        return (
          <div className={styles.reviewPreview}>
            <ReviewComponent />
          </div>
        );
      }
    }

    // Enhanced preview for other categories
    return (
      <div className={styles.previewPlaceholder}>
        <div className={styles.emojiLarge}>
          {getCategoryEmoji(component.category)}
        </div>
        <div className={styles.previewTitle} dir="rtl">
          {component.nameHebrew}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className={styles.card}
    >
      {/* Preview Area */}
      <div className={styles.preview}>
        {renderPreview()}

        {/* Category Badge */}
        {component.category !== 'buttons' && (
          <div className={styles.categoryBadge}>
            {component.category.replace('-', ' ')}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content} dir="rtl">
        <div className={styles.header}>
          <span className={styles.componentId}>#{component.id}</span>
        </div>

        {component.description && (
          <p className={styles.description}>{component.description}</p>
        )}
      </div>

      {/* Glow Effect */}
      <div className={styles.glow} />
    </motion.div>
  );
}
