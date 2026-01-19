'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import styles from './Hero.module.css';

/**
 * 3D Scene Component
 * Renders a field of animated particles (points) using Three.js.
 */
function ParticleScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    // Basic safety check for SSR and canvas availability
    if (typeof window === 'undefined' || !canvasRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // Transparent background to show CSS gradients underneath
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Particles (Point Cloud) ---
    const pointsCount = 2000; // Increased count for better visual density
    const posArray = new Float32Array(pointsCount * 3);
    
    // Randomly distribute particles in a wide 3D space
    for (let i = 0; i < pointsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const pointsMat = new THREE.PointsMaterial({ 
      size: 0.025, // Slightly larger dots for better visibility
      color: 0x00E690, 
      transparent: true, 
      opacity: 0.5 
    });
    
    const particles = new THREE.Points(pointsGeom, pointsMat);
    scene.add(particles);

    // --- Animation Loop ---
    const animate = () => {
      // Gentle rotation of the entire particle field
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0003;
      
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // --- Handle Window Resize ---
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} 
    />
  );
}

export function Hero() {
  const handleScrollToContent = () => {
    const contentSection = document.getElementById('catalog-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.heroContainer}>
      {/* Background Layer with Particles only */}
      <div className={styles.backgroundLayer}>
        <ParticleScene />
        
        {/* Supporting CSS Glows & Patterns */}
        <div className={styles.glowBlue} />
        <div className={styles.glowCyan} />
        <div className={styles.gridDots} />
        <div className={styles.vignette} />
      </div>

      {/* Hero Content */}
      <div className={styles.content} style={{ zIndex: 10, position: 'relative' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.title}
          dir="rtl"
        >
          קטלוג
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={styles.subtitle}
          dir="rtl"
        >
          אוסף מקיף של קומפוננטים מעוצבים ומוכנים לשימוש
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleScrollToContent}
          className={styles.ctaButton}
          dir="rtl"
        >
          גלה עכשיו
        </motion.button>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={styles.scrollIndicator}
        onClick={handleScrollToContent}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollText} dir="rtl">גלול למטה</span>
      </motion.div>

      <div className={styles.bottomFade} />
    </section>
  );
}