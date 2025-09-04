"use client"

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (isMobile) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e) => {
      // Use transform for better performance
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.type === 'submit' ||
          target.classList.contains('clickable') ||
          target.closest('a') ||
          target.closest('button')) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          cursor.classList.add('hover');
        }
      } else {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          cursor.classList.remove('hover');
        }
      }
    };

    const handleMouseDown = () => {
      if (!isClickingRef.current) {
        isClickingRef.current = true;
        cursor.classList.add('click');
      }
    };

    const handleMouseUp = () => {
      if (isClickingRef.current) {
        isClickingRef.current = false;
        cursor.classList.remove('click');
      }
    };

    // Use passive listeners for better performance
    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        background: 'linear-gradient(135deg, #f626af, #8228ec)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
        boxShadow: '0 0 20px rgba(246, 38, 175, 0.5)',
        willChange: 'transform',
      }}
    />
  );
}