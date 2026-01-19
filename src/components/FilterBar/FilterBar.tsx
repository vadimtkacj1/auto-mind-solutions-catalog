'use client';

import { useRef, useState } from 'react';
import { categories } from '../../data/catalogData';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export function FilterBar({
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle the start of the drag gesture
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Stop dragging
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Calculate movement and scroll the container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <nav className={styles.filterBar}>
      <div className={styles.container}>
        <h2 className={styles.header}>קטגוריות</h2>

        <div className={styles.scrollWrapper}>
          <div 
            className={`${styles.categories} ${isDragging ? styles.dragging : ''}`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseUp={handleMouseUpOrLeave}
            onMouseMove={handleMouseMove}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  // Prevent click if we were dragging
                  if (!isDragging) onCategoryChange(category.id);
                }}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.id ? styles.active : ''
                }`}
              >
                {category.nameHebrew}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}