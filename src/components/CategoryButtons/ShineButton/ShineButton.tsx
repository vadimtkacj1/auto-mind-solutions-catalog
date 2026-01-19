'use client';

import React from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './ShineButton.module.css';

export function ShineButton({
  children,
  isActive,
  onClick,
  className = '',
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.shineButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
      <div className={styles.shine}></div>
    </button>
  );
}
