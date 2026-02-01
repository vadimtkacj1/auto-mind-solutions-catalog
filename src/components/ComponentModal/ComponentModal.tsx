'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng } from 'html-to-image';
import { isFavorite, toggleFavorite } from '../../lib/favorites';
import { uploadThumbnail } from '../../lib/api';
import { Toast } from '../Toast';
import styles from './ComponentModal.module.css';

interface ComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  componentId?: string;
}

type ViewportSize = 'desktop' | 'tablet' | 'mobile';

const viewportSizes = {
  desktop: { width: '100%', label: 'דסקטופ', icon: '🖥️' },
  tablet: { width: '768px', label: 'טאבלט', icon: '📱' },
  mobile: { width: '375px', label: 'נייד', icon: '📱' },
};

export function ComponentModal({ isOpen, onClose, children, componentId }: ComponentModalProps) {
  const [viewport, setViewport] = useState<ViewportSize>('desktop');
  const [isFav, setIsFav] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Check favorite status when modal opens or componentId changes
  useEffect(() => {
    if (componentId) {
      setIsFav(isFavorite(componentId));
    }
  }, [componentId, isOpen]);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (componentId) {
      const newState = toggleFavorite(componentId);
      setIsFav(newState);

      // Dispatch event so other components know favorites changed
      window.dispatchEvent(new Event('favoritesChanged'));
    }
  };

  const handleScreenshot = async () => {
    if (!contentRef.current) return;

    try {
      // Capture with html-to-image
      const dataUrl = await toPng(contentRef.current, {
        quality: 1,
        pixelRatio: 2,
        cacheBust: true,
      });

      // Download the image
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${componentId || 'component'}-screenshot.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to capture screenshot:', error);
    }
  };

  const handleSetThumbnail = async () => {
    if (!contentRef.current || !componentId) return;

    try {
      setToast({ message: 'מכין צילום מסך...', type: 'success' });

      // Temporarily switch to desktop mode for screenshot
      const originalViewport = viewport;
      if (viewport !== 'desktop') {
        setViewport('desktop');
        // Wait for re-render and layout recalculation
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Capture with html-to-image (same as screenshot button)
      const dataUrl = await toPng(contentRef.current, {
        quality: 1,
        pixelRatio: 2,
        cacheBust: true,
      });

      // Restore original viewport
      if (originalViewport !== 'desktop') {
        setViewport(originalViewport);
      }

      // Convert data URL to blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();

      console.log('Thumbnail blob size:', blob.size, 'bytes');

      // Upload blob to backend
      await uploadThumbnail(componentId, blob);

      // Dispatch event so components can react to thumbnail changes
      window.dispatchEvent(new CustomEvent('thumbnailChanged', { detail: { componentId } }));

      // Show success feedback
      setToast({ message: 'תמונה נשמרה בהצלחה!', type: 'success' });
    } catch (error) {
      console.error('Failed to set thumbnail:', error);
      setToast({ message: 'שגיאה בשמירת תמונה', type: 'error' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.backdrop}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.modal}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.titleWrapper}>
                  <span className={styles.dimensionBadge}>
                    {viewportSizes[viewport].width === '100%'
                      ? '1920px+'
                      : viewportSizes[viewport].width}
                  </span>
                </div>

                {/* Viewport Switcher */}
                <div className={styles.viewportSwitcher}>
                  {(Object.keys(viewportSizes) as ViewportSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setViewport(size)}
                      className={`${styles.viewportButton} ${
                        viewport === size ? styles.viewportButtonActive : ''
                      }`}
                      aria-label={`Switch to ${viewportSizes[size].label} view`}
                    >
                      <span className={styles.viewportIcon}>
                        {viewportSizes[size].icon}
                      </span>
                      <span className={styles.viewportLabel}>
                        {viewportSizes[size].label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.headerActions}>
                {/* Set Thumbnail Button */}
                <button
                  onClick={handleSetThumbnail}
                  className={styles.thumbnailButton}
                  aria-label="הגדר כתמונה ראשית"
                  title="הגדר כתמונה ראשית בקטלוג"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </button>

                {/* Screenshot Button */}
                <button
                  onClick={handleScreenshot}
                  className={styles.screenshotButton}
                  aria-label="צלם מסך"
                  title="צלם מסך של הקומפוננטה"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </button>

                {/* Favorite Button */}
                {componentId && (
                  <button
                    onClick={handleToggleFavorite}
                    className={`${styles.favoriteButton} ${isFav ? styles.favoriteButtonActive : ''}`}
                    aria-label={isFav ? 'הסר מאהובים' : 'הוסף לאהובים'}
                    title={isFav ? 'הסר מאהובים' : 'הוסף לאהובים'}
                  >
                    {isFav ? '❤️' : '🤍'}
                  </button>
                )}

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={styles.closeButton}
                  aria-label="Close modal"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content with Viewport Container */}
            <div className={styles.contentWrapper}>
              <motion.div
                key={viewport}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={styles.viewportContainer}
                style={{
                  maxWidth: viewportSizes[viewport].width,
                  width: '100%',
                }}
              >
                <div className={styles.content} ref={contentRef}>
                  {children}
                </div>
              </motion.div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toast
        message={toast?.message || ''}
        isVisible={!!toast}
        onClose={() => setToast(null)}
        type={toast?.type || 'success'}
      />
    </>
  );
}
