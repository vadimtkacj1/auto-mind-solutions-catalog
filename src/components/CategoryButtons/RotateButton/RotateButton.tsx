import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './RotateButton.module.css';

export function RotateButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.rotateButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.front}>
        <span className={styles.content}>{children}</span>
      </span>
      <span className={styles.back}>
        <span className={styles.content}>{children}</span>
      </span>
    </button>
  );
}
