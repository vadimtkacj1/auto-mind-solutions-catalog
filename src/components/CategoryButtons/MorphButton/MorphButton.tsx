import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './MorphButton.module.css';

export function MorphButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.morphButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.morphShape}></span>
      <span className={styles.content}>{children}</span>
    </button>
  );
}
