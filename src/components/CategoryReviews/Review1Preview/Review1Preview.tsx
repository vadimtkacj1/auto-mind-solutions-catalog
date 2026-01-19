import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review1Preview.module.css';

export function Review1Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.grid}>
        {/* Render two preview cards to represent the grid */}
        {[1, 2].map((i) => (
          <div key={i} className={styles.card}>
            {/* User identification section */}
            <div className={styles.header}>
              <div className={styles.avatar} />
              <div className={styles.info}>
                <div className={styles.name} />
                <div className={styles.role} />
              </div>
            </div>
            
            {/* Rating display with neon accents */}
            <div className={styles.stars}>
              {[...Array(5)].map((_, idx) => (
                <span key={idx} className={styles.star}>★</span>
              ))}
            </div>
            
            {/* Skeleton text lines with pulse animation */}
            <div className={styles.text} />
            <div className={styles.textShort} />
          </div>
        ))}
      </div>
    </div>
  );
}