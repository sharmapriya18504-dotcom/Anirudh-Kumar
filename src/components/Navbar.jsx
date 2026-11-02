import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
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
      setIsScrolled(window.scrollY > 40);
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
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
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
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a
            className="nav-logo"
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            title="Anirudh Kumar - Home"
          >
            <img src="/Untitled design (12).png" alt="Anirudh Kumar" className="nav-portrait" />
            <span className="nav-logo-text">ANIRUDH KUMAR</span>
          </a>

          <ul className="nav-links">
            <li>
              <a
                href="/"
                className={isActive('/') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/')}
              >
                Home
              </a>
            </li>

            <li className="nav-item-dropdown">
              <a
                href="/services"
                className={isActive('/services') || isActive('/seo-') || isActive('/smm-') || isActive('/ads-') || isActive('/web-dev') || isActive('/marketing-') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/services')}
              >
                Services <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </a>
              <div className="dropdown-menu">
                <a href="/seo-lucknow" onClick={(e) => handleNavClick(e, '/seo-lucknow')}>
                  <span>SEO Services Lucknow</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/smm-lucknow" onClick={(e) => handleNavClick(e, '/smm-lucknow')}>
                  <span>Social Media Marketing</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/ads-lucknow" onClick={(e) => handleNavClick(e, '/ads-lucknow')}>
                  <span>Google &amp; Meta Ads</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/web-dev-lucknow" onClick={(e) => handleNavClick(e, '/web-dev-lucknow')}>
                  <span>Website Development</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/marketing-kanpur" onClick={(e) => handleNavClick(e, '/marketing-kanpur')}>
                  <span>Digital Marketing Kanpur</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/seo-consultant" onClick={(e) => handleNavClick(e, '/seo-consultant')}>
                  <span>SEO Consultant</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
              </div>
            </li>

            <li className="nav-item-dropdown">
              <a
                href="/results"
                className={isActive('/results') || isActive('/testimonials') || isActive('/case-studies') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/results')}
              >
                Results <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </a>
              <div className="dropdown-menu">
                <a href="/testimonials" onClick={(e) => handleNavClick(e, '/testimonials')}>
                  <span>Client Reviews</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/case-studies" onClick={(e) => handleNavClick(e, '/case-studies')}>
                  <span>Case Studies</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
              </div>
            </li>

            <li className="nav-item-dropdown">
              <a
                href="/about"
                className={isActive('/about') || isActive('/why-choose-us') ? 'active-nav-link' : ''}
                onClick={(e) => handleNavClick(e, '/about')}
              >
                About <i className="bi bi-chevron-down" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
              </a>
              <div className="dropdown-menu">
                <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>
                  <span>My Story</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
                <a href="/why-choose-us" onClick={(e) => handleNavClick(e, '/why-choose-us')}>
                  <span>Why Choose Us</span> <i className="bi bi-arrow-right dropdown-arrow"></i>
                </a>
              </div>
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
            <a
              className="nav-cta"
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
            >
              Free SEO Audit
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
          <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
          <a href="/services" onClick={(e) => handleNavClick(e, '/services')}>Services</a>
          <a href="/results" onClick={(e) => handleNavClick(e, '/results')}>Results</a>
          <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>About</a>
          <a href="/blog" onClick={(e) => handleNavClick(e, '/blog')}>Blog</a>
          <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact</a>
          <a className="btn btn-primary mobile-cta" href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
            Free SEO Audit
          </a>
        </div>
      </div>
    </>
  );
}
