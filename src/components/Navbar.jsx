import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { triggerPageLoad } = useLoader();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    triggerPageLoad(path);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled glass-panel' : ''} style={{ transition: 'all 0.3s ease' }}>
        <div className="container nav-inner">
          <a
            className="nav-logo"
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            title="Anirudh Kumar - Home"
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src="/Untitled design (12).png"
                alt="Anirudh Kumar, SEO expert in Lucknow"
                className="nav-portrait"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 14px rgba(255, 107, 0, 0.4)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '1px',
                  right: '1px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#FF6B00',
                  border: '2px solid var(--bg)',
                }}
              ></span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="nav-logo-text">
                ANIRUDH KUMAR
              </span>
              <span className="nav-logo-sub">
                SEO EXPERT &amp; DIGITAL MARKETER
              </span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="/"
                className={isActive('/') && location.pathname === '/' ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className={isActive('/about') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/about')}
              >
                About
              </a>
            </li>

            <li className="nav-item-dropdown">
              <a
                href="/services"
                className={isActive('/services') || isActive('/seo-expert') || isActive('/remote-seo') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/services')}
              >
                Services <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </a>
              <div className="dropdown-menu">
                <a href="/services" onClick={(e) => handleNavClick(e, '/services')}>
                  <span>All 6 Services Overview</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <div style={{ height: '1px', background: 'var(--border2)', margin: '6px 0' }}></div>
                <a href="/seo-expert-lucknow" onClick={(e) => handleNavClick(e, '/seo-expert-lucknow')}>
                  <span><i className="bi bi-geo-alt" style={{ marginRight: '6px', color: '#FF6B00' }}></i> Lucknow SEO (On-Site)</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/seo-expert-kanpur" onClick={(e) => handleNavClick(e, '/seo-expert-kanpur')}>
                  <span><i className="bi bi-geo-alt" style={{ marginRight: '6px', color: '#FF6B00' }}></i> Kanpur SEO (On-Site)</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/seo-expert-noida" onClick={(e) => handleNavClick(e, '/seo-expert-noida')}>
                  <span><i className="bi bi-geo-alt" style={{ marginRight: '6px', color: '#FF6B00' }}></i> Noida SEO (On-Site / Hybrid)</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/remote-seo-services" onClick={(e) => handleNavClick(e, '/remote-seo-services')}>
                  <span><i className="bi bi-globe" style={{ marginRight: '6px', color: '#FF6B00' }}></i> Remote SEO (Pan-India)</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
              </div>
            </li>

            <li>
              <a
                href="/case-studies"
                className={isActive('/case-studies') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/case-studies')}
              >
                Case Studies
              </a>
            </li>

            <li>
              <a
                href="/pricing"
                className={isActive('/pricing') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/pricing')}
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="/blog"
                className={isActive('/blog') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/blog')}
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className={isActive('/contact') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <i className="bi bi-brightness-high-fill" style={{ color: '#FFB800' }}></i>
              ) : (
                <i className="bi bi-moon-stars-fill" style={{ color: '#FF6B00' }}></i>
              )}
            </button>
            <a
              className="btn btn-primary nav-cta"
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              style={{
                padding: '9px 20px',
                fontSize: '0.86rem',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Get Free SEO Audit</span>
              <i className="bi bi-arrow-right-short" style={{ fontSize: '1.2rem' }}></i>
            </a>
            <div
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Open mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <button
          onClick={toggleMenu}
          className="mobile-close-btn"
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="mobile-menu-links">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderRadius: '30px',
              border: '1px solid var(--border)',
              background: 'var(--bg2)',
              color: 'var(--text)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: '16px',
              width: '100%'
            }}
          >
            {theme === 'dark' ? (
              <>
                <i className="bi bi-brightness-high-fill" style={{ color: '#FFB800', fontSize: '1.2rem' }}></i>
                <span>Switch to Light Mode</span>
              </>
            ) : (
              <>
                <i className="bi bi-moon-stars-fill" style={{ color: '#FF6B00', fontSize: '1.2rem' }}></i>
                <span>Switch to Dark Mode</span>
              </>
            )}
          </button>
          <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
          <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>About</a>
          <a href="/services" onClick={(e) => handleNavClick(e, '/services')}>Services Overview</a>
          <a href="/seo-expert-lucknow" onClick={(e) => handleNavClick(e, '/seo-expert-lucknow')}>Lucknow SEO (On-Site)</a>
          <a href="/seo-expert-kanpur" onClick={(e) => handleNavClick(e, '/seo-expert-kanpur')}>Kanpur SEO (On-Site)</a>
          <a href="/seo-expert-noida" onClick={(e) => handleNavClick(e, '/seo-expert-noida')}>Noida SEO (On-Site / Hybrid)</a>
          <a href="/remote-seo-services" onClick={(e) => handleNavClick(e, '/remote-seo-services')}>Remote SEO (Pan-India)</a>
          <a href="/case-studies" onClick={(e) => handleNavClick(e, '/case-studies')}>Case Studies</a>
          <a href="/pricing" onClick={(e) => handleNavClick(e, '/pricing')}>Pricing</a>
          <a href="/blog" onClick={(e) => handleNavClick(e, '/blog')}>Blog</a>
          <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact</a>
          <a className="btn btn-primary mobile-cta" href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
            Get Free SEO Audit
          </a>
        </div>
      </div>
    </>
  );
}
