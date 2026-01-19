import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review4Preview.module.css';

export function Review4Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.card}>
        <div className={styles.quoteIcon}>"</div>
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.textShort} />
        <div className={styles.footer}>
          <div className={styles.avatar} />
          <div className={styles.author} />
        </div>
      </div>
    </div>
  );
}
