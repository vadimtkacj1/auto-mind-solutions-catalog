'use client';

import React from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './GlowButton.module.css';

export function GlowButton({
  children,
  isActive,
  onClick,
  className = '',
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.glowButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
      <div className={styles.glow}></div>
    </button>
  );
}
