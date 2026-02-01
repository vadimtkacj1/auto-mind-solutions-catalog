'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

export function Toast({ message, isVisible, onClose, type = 'success', duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`${styles.toast} ${styles[type]}`}
        >
          <div className={styles.icon}>
            {type === 'success' && '✓'}
            {type === 'error' && '✕'}
            {type === 'info' && 'ℹ'}
          </div>
          <div className={styles.message}>{message}</div>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
