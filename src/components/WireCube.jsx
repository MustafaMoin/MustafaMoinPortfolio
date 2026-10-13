import React from 'react';

export default function WireCube() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube">
        <i className="front" />
        <i className="back" />
        <i className="right" />
        <i className="left" />
        <i className="top" />
        <i className="bottom" />
      </div>
      <span className="cube-orbit" />
    </div>
  );
}
