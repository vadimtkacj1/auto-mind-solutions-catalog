'use client';

import { useState, useMemo, useEffect } from 'react';
import { Hero } from '../Hero/Hero';
import { FilterBar } from '../FilterBar/FilterBar';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import { components, categories } from '../../data/catalogData';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '../AnimatedBackground/AnimatedBackground'; 
import styles from './CatalogPage.module.css';

const ITEMS_PER_PAGE = 9;

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredComponents = useMemo(() => {
    return components.filter((c) => !selectedCategory || c.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredComponents.length / ITEMS_PER_PAGE);
  }, [filteredComponents.length]);

  const displayedComponents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredComponents.slice(startIndex, endIndex);
  }, [filteredComponents, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to catalog content
    const catalogElement = document.getElementById('catalog-content');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.page}>
      <AnimatedBackground />

      <div className={styles.contentWrapper}>
        <Hero />

        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <main className={styles.mainContent} id="catalog-content">
          <div className={styles.contentArea}>
            <div className={styles.resultsHeader} dir="rtl">
              <h2 className={styles.resultsTitle}>
                {selectedCategory
                  ? components.find((c) => c.category === selectedCategory)?.category || 'קטגוריה'
                  : 'כל הקומפוננטים'}
              </h2>
            </div>

            <AnimatePresence mode="popLayout">
              {displayedComponents.length > 0 ? (
                <div className={styles.grid}>
                  {displayedComponents.map((component, index) => (
                    <motion.div
                      key={component.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: (index % ITEMS_PER_PAGE) * 0.05 }}
                    >
                      <ComponentCard component={component} index={index} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.emptyState}>
                  <div className={styles.emptyIcon}>🔍</div>
                  <h3 className={styles.emptyTitle} dir="rtl">אין פריטים בקטגוריה זו</h3>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  className={styles.paginationButton}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="עמוד קודם"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>

                <div className={styles.paginationNumbers}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    const showEllipsis = 
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 && currentPage < totalPages - 2);

                    if (showEllipsis) {
                      return (
                        <span key={page} className={styles.paginationEllipsis}>
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        className={`${styles.paginationNumber} ${
                          page === currentPage ? styles.paginationNumberActive : ''
                        }`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  className={styles.paginationButton}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="עמוד הבא"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </main>

      <footer className={styles.footer}>
          <div className={styles.footerContent} dir="rtl">
            <div className={styles.footerBrand}>
              <h3 className={styles.footerTitle}>Aiterra</h3>
              <p className={styles.footerSubtitle}>פתרונות דיגיטליים מתקדמים לעסק שלך</p>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.footerText}>נוצר עם ❤️ על ידי צוות Aiterra</p>
              {/* Год теперь обновляется автоматически */}
              <p className={styles.footerCopy}>© {new Date().getFullYear()} כל הזכויות שמורות</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}