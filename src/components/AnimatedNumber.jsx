import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'animejs';

export default function AnimatedNumber({ value, label, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(ref.current, {
        innerHTML: [0, value],
        round: 1,
        duration: 1100,
        ease: 'outExpo'
      });
    }
  }, [inView, value]);

  return (
    <div className="stat">
      <strong ref={ref}>0</strong>
      <span>{suffix}</span>
      <small>{label}</small>
    </div>
  );
}
