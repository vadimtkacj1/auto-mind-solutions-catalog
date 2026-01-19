import { CategoryFontProps } from '../CategoryFont.types';
import styles from './NotoSansHebrewFont.module.css';

export function NotoSansHebrewFont({ text, className = '' }: CategoryFontProps) {
  return (
    <div className={`${styles.fontContainer} ${className}`}>
      <p className={styles.fontText}>{text}</p>
    </div>
  );
}
