import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame, width, height, drops;
    const alphabet = '01アカサタナハマヤラワ0123456789';

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drops = Array(Math.ceil(width / 18))
        .fill(1)
        .map(() => (Math.random() * height) / 15);
    };

    const render = () => {
      ctx.fillStyle = 'rgba(5,5,5,.07)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#00ff88';
      ctx.font = '12px monospace';
      drops.forEach((y, i) => {
        ctx.fillText(
          alphabet[Math.floor(Math.random() * alphabet.length)],
          i * 18,
          y * 15
        );
        if (y * 15 > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.42;
      });
      frame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
