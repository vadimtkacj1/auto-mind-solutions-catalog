'use client';

import React from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './BounceButton.module.css';

export function BounceButton({
  children,
  isActive,
  onClick,
  className = '',
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.bounceButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
    </button>
  );
}
