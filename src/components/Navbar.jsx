import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <Link className="nav-logo" to="/" onClick={scrollToTop}>
            <img src="/Untitled design (12).png" alt="Anirudh Kumar" className="nav-portrait" />
            ANIRUDH KUMAR
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/services" onClick={scrollToTop}>
                Services <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/seo-lucknow" onClick={scrollToTop}>SEO Services Lucknow</Link>
                <Link to="/smm-lucknow" onClick={scrollToTop}>Social Media Marketing</Link>
                <Link to="/ads-lucknow" onClick={scrollToTop}>Google & Meta Ads</Link>
                <Link to="/web-dev-lucknow" onClick={scrollToTop}>Website Development</Link>
                <Link to="/marketing-kanpur" onClick={scrollToTop}>Digital Marketing Kanpur</Link>
                <Link to="/seo-consultant" onClick={scrollToTop}>SEO Consultant</Link>
              </div>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/results" onClick={scrollToTop}>
                Results <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/testimonials" onClick={scrollToTop}>Client Reviews</Link>
                <Link to="/case-studies" onClick={scrollToTop}>Case Studies</Link>
              </div>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/about" onClick={scrollToTop}>
                About <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/about" onClick={scrollToTop}>My Story</Link>
                <Link to="/why-choose-us" onClick={scrollToTop}>Why Choose Us</Link>
              </div>
            </li>
            <li>
              <Link to="/blog" onClick={scrollToTop}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Dark/Light Mode"
            >
              {theme === 'dark' ? (
                <i className="bi bi-brightness-high-fill"></i>
              ) : (
                <i className="bi bi-moon-stars-fill"></i>
              )}
            </button>
            <Link className="nav-cta" to="/contact" onClick={scrollToTop}>
              Free SEO Audit
            </Link>
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
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Close menu"
        >
          ✕
        </button>
        <Link to="/" onClick={scrollToTop}>Home</Link>
        <Link to="/services" onClick={scrollToTop}>Services</Link>
        <Link to="/results" onClick={scrollToTop}>Results</Link>
        <Link to="/about" onClick={scrollToTop}>About</Link>
        <Link to="/blog" onClick={scrollToTop}>Blog</Link>
        <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        <Link className="btn btn-primary" to="/contact" onClick={scrollToTop}>Free SEO Audit</Link>
      </div>
    </>
  );
}
