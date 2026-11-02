import React from 'react';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Footer() {
  const { triggerPageLoad } = useLoader();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    triggerPageLoad(path);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="nav-logo"
              style={{
                fontSize: '2rem',
                marginBottom: '20px',
                color: 'var(--text2)',
                transition: 'color var(--transition)',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <img
                src="/Untitled design (12).png"
                alt="Anirudh Kumar"
                className="nav-portrait"
                style={{ width: '60px', height: '60px' }}
              />
              ANIRUDH KUMAR
            </a>
            <p>
              Lucknow &amp; Kanpur ka trusted Digital Marketing Expert. SEO, Social Media, Ads, Website — everything you need
              to grow your business online.
            </p>
            <div className="footer-social mt-6">
              <a href="#" className="social-btn" title="Instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-btn" title="LinkedIn" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-btn" title="Twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-btn" title="YouTube" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="10 15 15 12 10 9 10 15"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/seo-lucknow" onClick={(e) => handleLinkClick(e, '/seo-lucknow')}>SEO Services Lucknow</a></li>
              <li><a href="/smm-lucknow" onClick={(e) => handleLinkClick(e, '/smm-lucknow')}>Social Media Marketing</a></li>
              <li><a href="/ads-lucknow" onClick={(e) => handleLinkClick(e, '/ads-lucknow')}>Google &amp; Meta Ads</a></li>
              <li><a href="/web-dev-lucknow" onClick={(e) => handleLinkClick(e, '/web-dev-lucknow')}>Website Development</a></li>
              <li><a href="/marketing-kanpur" onClick={(e) => handleLinkClick(e, '/marketing-kanpur')}>Digital Marketing Kanpur</a></li>
              <li><a href="/seo-consultant" onClick={(e) => handleLinkClick(e, '/seo-consultant')}>SEO Consultant</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Results</h4>
            <ul>
              <li><a href="/testimonials" onClick={(e) => handleLinkClick(e, '/testimonials')}>Client Reviews</a></li>
              <li><a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')}>Case Studies</a></li>
              <li><a href="/blog" onClick={(e) => handleLinkClick(e, '/blog')}>Latest Articles</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>My Story</a></li>
              <li><a href="/why-choose-us" onClick={(e) => handleLinkClick(e, '/why-choose-us')}>Why Choose Us</a></li>
              <li><a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Free SEO Audit</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Anirudh Kumar | Professional Digital Marketer</span>
          <span>Made with ❤️ in Lucknow, UP 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
