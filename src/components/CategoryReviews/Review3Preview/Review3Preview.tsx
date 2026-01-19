import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review3Preview.module.css';

export function Review3Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      {[1, 2].map((i) => (
        <div key={i} className={styles.card}>
          <div className={styles.image} />
          <div className={styles.content}>
            <div className={styles.title} />
            <div className={styles.text} />
            <div className={styles.author} />
          </div>
        </div>
      ))}
    </div>
  );
}
