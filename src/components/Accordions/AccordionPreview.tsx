import React from 'react';
import styles from './AccordionPreview.module.css';

interface AccordionPreviewProps {
  variant: number;
}

/**
 * Mini preview component for accordions in the catalog cards.
 * Shows a scaled-down visual representation of the accordion style.
 */
export const AccordionPreview: React.FC<AccordionPreviewProps> = ({ variant }) => {
  // Different preview styles based on the accordion variant
  const renderPreview = () => {
    switch (variant) {
      case 1: // Simple Line Accordion
        return (
          <div className={styles.previewContainer}>
            <div className={styles.lineItem}>
              <span className={styles.lineTitle}>שאלה ראשונה</span>
            </div>
            <div className={`${styles.lineItem} ${styles.open}`}>
              <span className={styles.lineTitle}>שאלה שנייה</span>
              <div className={styles.lineContent}>תוכן התשובה</div>
            </div>
            <div className={styles.lineItem}>
              <span className={styles.lineTitle}>שאלה שלישית</span>
            </div>
          </div>
        );

      case 2: // Card Accordion
        return (
          <div className={styles.previewContainer}>
            <div className={styles.cardItem}>כותרת אחת</div>
            <div className={`${styles.cardItem} ${styles.cardOpen}`}>
              <div>כותרת שתיים</div>
              <div className={styles.cardContent}>תוכן מלא</div>
            </div>
            <div className={styles.cardItem}>כותרת שלוש</div>
          </div>
        );

      case 3: // Large Symbol Accordion
        return (
          <div className={styles.previewContainer}>
            <div className={styles.symbolItem}>
              <span className={styles.symbol}>+</span>
              <span className={styles.symbolTitle}>פריט ראשון</span>
            </div>
            <div className={`${styles.symbolItem} ${styles.symbolOpen}`}>
              <span className={styles.symbol}>−</span>
              <span className={styles.symbolTitle}>פריט שני</span>
              <div className={styles.symbolContent}>מידע על הפריט</div>
            </div>
            <div className={styles.symbolItem}>
              <span className={styles.symbol}>+</span>
              <span className={styles.symbolTitle}>פריט שלישי</span>
            </div>
          </div>
        );

      case 4: // Bold Border Accordion
        return (
          <div className={styles.previewContainer}>
            <div className={styles.boldHeader}>תוכן</div>
            <div className={styles.boldItem}>נושא אחד</div>
            <div className={`${styles.boldItem} ${styles.boldOpen}`}>
              <div>נושא שני</div>
              <div className={styles.boldContent}>תשובה כאן</div>
            </div>
            <div className={styles.boldItem}>נושא שלישי</div>
          </div>
        );

      case 5: // Circle Icon Accordion
        return (
          <div className={styles.previewContainer}>
            <div className={styles.circleItem}>
              <span className={styles.circleIcon}>+</span>
              <span className={styles.circleTitle}>סעיף ראשון</span>
            </div>
            <div className={`${styles.circleItem} ${styles.circleOpen}`}>
              <span className={styles.circleIcon}>−</span>
              <span className={styles.circleTitle}>סעיף שני</span>
              <div className={styles.circleContent}>פרטים נוספים</div>
            </div>
            <div className={styles.circleItem}>
              <span className={styles.circleIcon}>+</span>
              <span className={styles.circleTitle}>סעיף שלישי</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className={styles.wrapper}>{renderPreview()}</div>;
};
