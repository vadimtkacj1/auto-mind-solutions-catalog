'use client';

import { useState, MouseEvent } from 'react';
import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './RippleButton.module.css';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.rippleButton} ${isActive ? styles.active : ''} ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={styles.ripple}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
      <span className={styles.content}>{children}</span>
    </button>
  );
}
