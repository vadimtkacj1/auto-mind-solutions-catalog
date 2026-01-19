'use client';

import React from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './NeonButton.module.css';

export function NeonButton({
  children,
  isActive,
  onClick,
  className = '',
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.neonButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
    </button>
  );
}
