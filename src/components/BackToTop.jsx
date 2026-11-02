import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setPercent(pct);
      setVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const degree = (percent / 100) * 360;

  return (
    <button
      className={`btt ${visible ? 'visible' : ''}`}
      id="btt"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        background: `conic-gradient(#f08770 ${degree}deg, rgba(255,255,255,0.08) ${degree}deg)`
      }}
    >
      <span id="scrollPercent">{percent}%</span>
    </button>
  );
}

