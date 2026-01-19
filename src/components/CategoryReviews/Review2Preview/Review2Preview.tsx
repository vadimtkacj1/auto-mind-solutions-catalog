import { CategoryReviewProps } from '../CategoryReview.types';
import styles from './Review2Preview.module.css';

export function Review2Preview({ className = '' }: CategoryReviewProps) {
  return (
    <div className={`${styles.preview} ${className}`}>
      <div className={styles.container}>
        {[1, 2].map((i) => (
          <div key={i} className={styles.quote}>
            <div className={styles.quoteIcon}>"</div>
            <div className={styles.text} />
            <div className={styles.textShort} />
            <div className={styles.author} />
          </div>
        ))}
      </div>
    </div>
  );
}
