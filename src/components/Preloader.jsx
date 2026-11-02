import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  const name = 'Anirudh Kumar';

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + Math.random() * 8 + 3);
      setPct(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'auto';
          setTimeout(() => {
            setHidden(true);
          }, 800);
        }, 400);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="loader" className={isDone ? 'done' : ''}>
      <div className="loader-name" id="loaderName">
        {name.split('').map((char, index) => (
          <span
            key={index}
            className="loader-char"
            style={{ animationDelay: `${0.05 * index}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="loader-bar-wrap">
        <div
          className="loader-bar"
          style={{ width: `${pct}%`, transition: 'width 0.1s ease-out' }}
        ></div>
      </div>
      <div className="loader-pct" id="loaderPct">
        {pct}%
      </div>
    </div>
  );
}

