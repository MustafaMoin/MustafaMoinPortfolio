import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BootLoader({ done }) {
  const lineRef = useRef(null);

  useEffect(() => {
    let active = true;
    const messages = [
      'INITIALIZING SECURE CONNECTION...',
      'VERIFYING IDENTITY...',
      'ACCESS GRANTED.'
    ];
    let index = 0;

    const tick = () => {
      if (!active) return;
      if (index < messages.length) {
        lineRef.current.textContent = messages[index++];
        setTimeout(tick, 500);
      } else {
        setTimeout(done, 350);
      }
    };

    tick();
    return () => {
      active = false;
    };
  }, [done]);

  return (
    <motion.div
      className="boot-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="radar">
        <i />
      </div>
      <p ref={lineRef}>INITIALIZING SECURE CONNECTION...</p>
    </motion.div>
  );
}
