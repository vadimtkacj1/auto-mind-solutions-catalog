import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review6Preview.module.css';

export function Review6Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.masonry}>
        <div className={`${styles.card} ${styles.tall}`}>
          <div className={styles.text} />
          <div className={styles.text} />
          <div className={styles.author} />
        </div>
        <div className={styles.card}>
          <div className={styles.text} />
          <div className={styles.author} />
        </div>
        <div className={`${styles.card} ${styles.medium}`}>
          <div className={styles.text} />
          <div className={styles.text} />
          <div className={styles.author} />
        </div>
      </div>
    </div>
  );
}
