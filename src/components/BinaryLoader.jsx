import React from 'react';

export default function BinaryLoader() {
  return (
    <div className="binary-loader" aria-label="Animated binary decoration">
      {['0', '1', '0', '1', '1', '0', '0', '1', '1'].map((d, i) => (
        <span style={{ animationDelay: `${i * 0.14}s` }} key={i}>
          {d}
        </span>
      ))}
      <div className="binary-glow" />
    </div>
  );
}
