'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import { components } from '../../data/catalogData';
import { getFavorites, clearAllFavorites } from '../../lib/favorites';
import { AnimatedBackground } from '../AnimatedBackground/AnimatedBackground';
import styles from './FavoritesPage.module.css';

export function FavoritesPage({ onBackToCatalog }: { onBackToCatalog?: () => void }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  // Sync state with local storage
  const loadFavorites = () => setFavoriteIds(getFavorites());

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favoritesChanged', loadFavorites);
    return () => window.removeEventListener('favoritesChanged', loadFavorites);
  }, []);

  // Filter components based on stored favorite IDs
  const favoriteComponents = useMemo(() => 
    components.filter(c => favoriteIds.includes(c.id)), 
  [favoriteIds]);

  // Handle the "Clear All" logic after confirmation
  const handleClearAll = () => {
    clearAllFavorites();
    loadFavorites();
    setShowClearConfirm(false);
    window.dispatchEvent(new Event('favoritesChanged'));
  };

  // Export the list of component IDs to the clipboard
  const handleExportMessage = () => {
    if (favoriteComponents.length === 0) return;
    let message = "MY FAVORITE COMPONENTS LIST\n\n";
    favoriteComponents.forEach(c => { message += `• ${c.id}\n`; });

    navigator.clipboard.writeText(message).then(() => {
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 3000);
    });
  };

  return (
    <div className={styles.page} dir="rtl">
      <AnimatedBackground />

      {/* MODAL POPUP: Confirmation for clearing all favorites */}
      <AnimatePresence>
        {showClearConfirm && (
          <div className={styles.modalOverlay} onClick={() => setShowClearConfirm(false)}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the box itself
            >
              <div className={styles.modalIcon}>🗑️</div>
              <h3 className={styles.modalTitle}>למחוק הכל?</h3>
              <p className={styles.modalText}>האם אתה בטוח שברצונך להסיר את כל הפריטים מהמועדפים?</p>
              <div className={styles.modalActions}>
                <button onClick={handleClearAll} className={styles.confirmBtn}>כן, מחק</button>
                <button onClick={() => setShowClearConfirm(false)} className={styles.cancelBtn}>ביטול</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            
            {/* TITLE SECTION: Fills the empty space on the right */}
            <div className={styles.titleSection}>
              <h1 className={styles.title}>
                <span className={styles.bigHeart}>❤️</span>
                המועדפים שלי
              </h1>
              <p className={styles.subtitle}>{favoriteComponents.length} רכיבים שמורים</p>
            </div>

            {/* ACTION GROUP: Export and Clear All buttons (Always Visible) */}
            <div className={styles.leftGroup}>
              <div className={styles.actionRow}>
                <button 
                  onClick={handleExportMessage} 
                  className={`${styles.btn} ${styles.btnExport}`}
                  disabled={favoriteComponents.length === 0}
                >
                  ייצוא רשימה📋
                </button>
                
                <button 
                  onClick={() => setShowClearConfirm(true)} 
                  className={`${styles.btn} ${styles.btnClear}`}
                  disabled={favoriteComponents.length === 0}
                >
                  נקה הכל🗑️
                </button>

                {onBackToCatalog && (
                  <button onClick={onBackToCatalog} className={styles.backBtn}>
                    חזרה לקטלוג <span className={styles.arrow}>←</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className={styles.mainContent}>
          <AnimatePresence mode="popLayout">
            {favoriteComponents.length > 0 ? (
              <motion.div 
                key="grid"
                className={styles.grid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {favoriteComponents.map((component, index) => (
                  <div key={component.id}>
                    <ComponentCard component={component} index={index} />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                className={styles.emptyContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>💔</div>
                  <h2 className={styles.emptyTitle}>עדיין לא שמרת קומפוננטים</h2>
                  <p className={styles.emptyText}>התחל להוסיף פריטים מהקטלוג כדי לראות אותם כאן</p>
                  <button onClick={onBackToCatalog} className={styles.backLink}>
                    חזרה לקטלוג <span className={styles.arrow}>←</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* TOAST: Notification for clipboard copy */}
      <AnimatePresence>
        {showCopyNotification && (
          <motion.div 
            className={styles.notification}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            ✓ הרשימה הועתקה ללוח
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}