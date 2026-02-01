'use client';

import { useState, useEffect } from 'react';
import { getFavoritesCount } from '../../lib/favorites';
import styles from './FavoritesButton.module.css';

interface FavoritesButtonProps {
  onClick: () => void;
  isOnFavoritesPage?: boolean;
}

export function FavoritesButton({ onClick, isOnFavoritesPage = false }: FavoritesButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCount(getFavoritesCount());
    };

    updateCount();

    window.addEventListener('favoritesChanged', updateCount);
    
    return () => {
      window.removeEventListener('favoritesChanged', updateCount);
    };
  }, []);

  return (
    <button
      className={styles.favoritesBtn}
      onClick={onClick}
      aria-label={isOnFavoritesPage ? 'חזרה לקטלוג' : `Favorites (${count})`}
      title={isOnFavoritesPage ? 'חזרה לקטלוג' : 'הקומפוננטים האהובים שלי'}
    >
      <span className={styles.icon}>{isOnFavoritesPage}</span>
      <span className={styles.label} dir="rtl">
        {isOnFavoritesPage ? 'קטלוג' : 'האהובים שלי'}
      </span>
      {!isOnFavoritesPage && count > 0 && (
        <span className={styles.badge}>{count}</span>
      )}
    </button>
  );
}
