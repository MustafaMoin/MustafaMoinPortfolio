import React, { useState, useEffect } from 'react';

export default function TypeLoop() {
  const words = ['Cybersecurity Intern', 'SOC Analyst', 'Threat Detection Enthusiast'];
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWord((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={words[word]} className="type-word">
      {words[word]}
      <b>_</b>
    </span>
  );
}
