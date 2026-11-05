import React from 'react';

/**
 * HeroPortrait
 * Clean, Simple & Ultra-Responsive Portrait for Anirudh Kumar
 * - Minimal, elegant studio frame featuring Anirudh Kumar's real photo
 * - High-craft subtle obsidian backdrop with warm orange rim lighting
 * - 100% lightweight & fast: zero heavy WebGL lag, zero horizontal scroll
 * - Pristine on all devices: iPhone, Android, Tablet, and Desktop
 */
export default function HeroAbstract3D() {
  return (
    <div className="hero-portrait-container">
      <div className="hero-portrait-frame">
        <div className="hero-portrait-ambient-glow" />

        <img
          src="/Untitled design (12).png"
          alt="Anirudh Kumar - SEO Expert & Digital Marketer"
          className="hero-portrait-image"
          loading="eager"
        />

        <div className="hero-portrait-bottom-fade" />

        <div className="hero-portrait-badge">
          <span className="hero-pulse-dot" />
          <span className="hero-badge-text">Anirudh Kumar • Lucknow &amp; Remote</span>
        </div>
      </div>
    </div>
  );
}
