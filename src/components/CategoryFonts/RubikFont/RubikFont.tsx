import { CategoryFontProps } from '../CategoryFont.types';
import styles from './RubikFont.module.css';

export function RubikFont({ text, className = '' }: CategoryFontProps) {
  return (
    <div className={`${styles.fontContainer} ${className}`}>
      <p className={styles.fontText}>{text}</p>
    </div>
  );
}
