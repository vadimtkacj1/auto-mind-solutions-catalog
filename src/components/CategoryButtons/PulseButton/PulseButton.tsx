import { CategoryButtonProps } from '../CategoryButton.types';
import styles from './PulseButton.module.css';

export function PulseButton({ children, isActive, onClick, className = '' }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.pulseButton} ${isActive ? styles.active : ''} ${className}`}
    >
      <span className={styles.pulse}></span>
      <span className={styles.content}>{children}</span>
    </button>
  );
}
