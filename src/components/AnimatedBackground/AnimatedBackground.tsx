'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const shapes = ['hexagon', 'cross', 'circle', 'square'] as const;

interface FloatingShape {
  id: number;
  shape: typeof shapes[number];
  initialX: number;
  initialY: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  rotateDirection: 1 | -1;
}

const colors = ['#00E690', '#0070FF', '#9333EA', '#ffffff'];

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingShape[]>([]);

  useEffect(() => {
    // Increased to 25 shapes for better density
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: Math.random() * 50 + 25, 
      duration: Math.random() * 15 + 15, // Slightly faster for more "life"
      delay: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotateDirection: Math.random() > 0.5 ? 1 : -1,
    }));
    setElements(generated);
  }, []);

  const renderSvgShape = (shapeType: string, color: string) => {
    // Increased strokeWidth to 2 and added a drop-shadow glow
    const shadowStyle = { filter: `drop-shadow(0 0 8px ${color})` };
    
    switch (shapeType) {
      case 'hexagon':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={shadowStyle}>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
          </svg>
        );
      case 'cross':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={shadowStyle}>
            <path d="M12 5V19M5 12H19" />
          </svg>
        );
      case 'circle':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={shadowStyle}>
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      case 'square':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={shadowStyle}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#040608', // Slightly darker to make neon pop
      }}
    >
      {elements.map((el) => (
        <motion.div
          key={el.id}
          style={{
            position: 'absolute',
            left: `${el.initialX}%`,
            top: `${el.initialY}%`,
            width: el.size,
            height: el.size,
            opacity: 0.25, // Increased opacity from 0.12 to 0.25
          }}
          animate={{
            y: [0, -150, 70, -200, 0], // Wider range of movement
            x: [0, 100, -80, 150, 0],
            rotate: [0, 360 * el.rotateDirection],
          }}
          transition={{
            duration: el.duration,
            ease: "linear",
            repeat: Infinity,
            delay: el.delay,
          }}
        >
          {renderSvgShape(el.shape, el.color)}
        </motion.div>
      ))}

      {/* Light radial overlay - let shapes shine through more */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 20%, rgba(4, 6, 8, 0.6) 100%)',
          zIndex: 1,
        }}
      />
    </div>
  );
}