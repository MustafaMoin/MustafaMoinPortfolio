import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, index, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        className="section-intro"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">
          0{index} / {eyebrow}
        </span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
