import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './SlideButton.module.css';

export function SlideButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.slideButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.background}></span>
      <span className={styles.content}>{children}</span>
    </button>
  );
}
