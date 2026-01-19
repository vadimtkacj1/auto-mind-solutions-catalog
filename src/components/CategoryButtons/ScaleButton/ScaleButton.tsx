import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './ScaleButton.module.css';

export function ScaleButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.scaleButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.content}>{children}</span>
    </button>
  );
}
