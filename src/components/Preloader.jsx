import React from 'react';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Preloader() {
  const { isLoading, loadingPct, isDone } = useLoader();
  const name = 'Anirudh Kumar';

  if (!isLoading && isDone) return null;

  return (
    <div id="loader" className={isDone ? 'done' : ''} style={{ pointerEvents: isDone ? 'none' : 'auto' }}>
      <div className="loader-name" id="loaderName">
        {name.split('').map((char, index) => (
          <span
            key={`${index}-${loadingPct > 0 ? 1 : 0}`}
            className="loader-char"
            style={{ animationDelay: `${0.04 * index}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="loader-bar-wrap">
        <div
          className="loader-bar"
          style={{ width: `${loadingPct}%`, transition: 'width 0.08s ease-out' }}
        ></div>
      </div>
      <div className="loader-pct" id="loaderPct">
        {loadingPct}%
      </div>
    </div>
  );
}
