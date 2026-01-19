import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review5Preview.module.css';

export function Review5Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.list}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.item}>
            <div className={styles.avatar} />
            <div className={styles.content}>
              <div className={styles.name} />
              <div className={styles.text} />
            </div>
            <div className={styles.badge}>✓</div>
          </div>
        ))}
      </div>
    </div>
  );
}
