'use client';

import React from 'react';
import { Search, X, Layers, Package, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../../data/catalogData';
import styles from './Sidebar.module.css';

interface SidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalComponents: number;
  filteredCount: number;
  onToggle: () => void;
  isOpen: boolean;
}

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalComponents,
  filteredCount,
  onToggle,
  isOpen,
}: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} dir="rtl">
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={styles.toggleButton}
        aria-label="סגור תפריט"
      >
        <ChevronRight className={styles.toggleIcon} />
      </button>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <Layers className={styles.logoIcon} />
          <h2 className={styles.logoText}>קטלוג</h2>
        </div>
        <div className={styles.stats}>
          <span className={styles.count}>{filteredCount}</span>
          <span className={styles.total}>/ {totalComponents}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="חיפוש קומפוננטים..."
            className={styles.searchInput}
          />
          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onSearchChange('')}
                className={styles.clearButton}
              >
                <X className={styles.clearIcon} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.categoriesSection}>
        <h3 className={styles.sectionTitle}>
          <Package className={styles.sectionIcon} />
          קטגוריות
        </h3>

        <div className={styles.categories}>
          {/* All Categories */}
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(null)}
            className={`${styles.categoryButton} ${
              selectedCategory === null ? styles.categoryButtonActive : ''
            }`}
          >
            <span className={styles.categoryDot} />
            <span className={styles.categoryName}>הכל</span>
            <span className={styles.categoryCount}>{totalComponents}</span>
          </motion.button>

          {/* Category Buttons */}
          {categories.map((category) => {
            const count = totalComponents; // You can calculate per category if needed
            return (
              <motion.button
                key={category.id}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onCategoryChange(category.id)}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.id ? styles.categoryButtonActive : ''
                }`}
              >
                <span className={styles.categoryDot} />
                <span className={styles.categoryName}>{category.nameHebrew}</span>
                <span className={styles.categoryCount}>
                  {Math.floor(Math.random() * 5) + 2}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className={styles.footer}>
        <div className={styles.footerCard}>
          <div className={styles.footerIcon}>✨</div>
          <p className={styles.footerText}>
            בחר קומפוננטים מתאימים לפרויקט שלך
          </p>
        </div>
      </div>
    </aside>
  );
}
