'use client';

import React from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './GradientButton.module.css';

export function GradientButton({
  children,
  isActive,
  onClick,
  className = '',
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.gradientButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
      <div className={styles.gradientBg}></div>
    </button>
  );
}
