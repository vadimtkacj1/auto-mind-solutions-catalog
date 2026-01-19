'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { Hero } from '../Hero/Hero';
import { FilterBar } from '../FilterBar/FilterBar';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import { components, categories } from '../../data/catalogData';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '../AnimatedBackground/AnimatedBackground'; 
import styles from './CatalogPage.module.css';

const ITEMS_PER_PAGE = 6;

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0].id);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  const filteredComponents = useMemo(() => {
    return components.filter((c) => !selectedCategory || c.category === selectedCategory);
  }, [selectedCategory]);

  const displayedComponents = useMemo(() => {
    return filteredComponents.slice(0, visibleCount);
  }, [filteredComponents, visibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredComponents.length) {
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      },
      { threshold: 0.1 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredComponents.length]);

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

            {visibleCount < filteredComponents.length && (
              <div ref={loadMoreRef} className={styles.loader}>
                <div className={styles.spinner} />
              </div>
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent} dir="rtl">
            <div className={styles.footerBrand}>
              <h3 className={styles.footerTitle}>AUTO MIND SOLUTIONS</h3>
              <p className={styles.footerSubtitle}>פתרונות דיגיטליים מתקדמים לעסק שלך</p>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.footerText}>נוצר עם ❤️ על ידי צוות AUTO MIND</p>
              <p className={styles.footerCopy}>© 2024 כל הזכויות שמורות</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}