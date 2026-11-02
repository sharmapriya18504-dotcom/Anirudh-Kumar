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

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <Link className="nav-logo" to="/">
            <img src="/Untitled design (12).png" alt="Anirudh Kumar" className="nav-portrait" />
            ANIRUDH KUMAR
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li className="nav-item-dropdown">
              <Link to="/services">
                Services <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/seo-lucknow">SEO Services Lucknow</Link>
                <Link to="/smm-lucknow">Social Media Marketing</Link>
                <Link to="/ads-lucknow">Google & Meta Ads</Link>
                <Link to="/web-dev-lucknow">Website Development</Link>
                <Link to="/marketing-kanpur">Digital Marketing Kanpur</Link>
                <Link to="/seo-consultant">SEO Consultant</Link>
              </div>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/results">
                Results <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/testimonials">Client Reviews</Link>
                <Link to="/case-studies">Case Studies</Link>
              </div>
            </li>
            <li className="nav-item-dropdown">
              <Link to="/about">
                About <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link to="/about">My Story</Link>
                <Link to="/why-choose-us">Why Choose Us</Link>
              </div>
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
            <Link className="nav-cta" to="/contact">Free SEO Audit</Link>
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
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/results" onClick={toggleMenu}>Results</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link className="btn btn-primary" to="/contact" onClick={toggleMenu}>Free SEO Audit</Link>
      </div>
    </>
  );
}

