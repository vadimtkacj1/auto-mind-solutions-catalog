import { CategoryFontProps } from '../CategoryFont.types';
import styles from './AssistantFont.module.css';

export function AssistantFont({ text, className = '' }: CategoryFontProps) {
  return (
    <div className={`${styles.fontContainer} ${className}`}>
      <p className={styles.fontText}>{text}</p>
    </div>
  );
}
