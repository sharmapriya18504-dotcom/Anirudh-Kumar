import React from 'react';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Footer() {
  const { triggerPageLoad } = useLoader();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    triggerPageLoad(path);
  };

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="nav-logo"
              style={{
                marginBottom: '16px',
                color: 'var(--text)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
              }}
            >
              <img
                src="/Untitled design (12).png"
                alt="Anirudh Kumar, SEO expert in Lucknow"
                className="nav-portrait"
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FF6B00' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="nav-logo-text" style={{ fontSize: '1.75rem' }}>
                  ANIRUDH KUMAR
                </span>
                <span className="nav-logo-sub">
                  SEO EXPERT &amp; DIGITAL MARKETER
                </span>
              </div>
            </a>
            <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '360px' }}>
              Freelance SEO Expert &amp; Digital Marketer. Remote across India. On-site in Lucknow, Kanpur and Noida.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="bi bi-telephone-fill" style={{ color: '#FF6B00' }}></i>
                <span>Call:</span> <a href="tel:+918604625862" style={{ color: '#FF6B00', fontWeight: 600 }}>+91 86046 25862</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="bi bi-whatsapp" style={{ color: '#FF6B00' }}></i>
                <span>WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/918604625862"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FF6B00', fontWeight: 600 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="bi bi-envelope-fill" style={{ color: '#FF8800' }}></i>
                <span>Email:</span> <a href="mailto:anirudhkumarseo@gmail.com" style={{ color: '#FF8800', fontWeight: 600 }}>anirudhkumarseo@gmail.com</a>
              </div>
            </div>

            <div className="footer-social mt-6" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <a
                href="https://www.linkedin.com/in/anirudhkumar"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/anirudhkumar"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com/anirudhkumar"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="Twitter"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://wa.me/918604625862"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 style={{ color: '#FF6B00', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Services</h4>
            <ul>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Technical &amp; On-Page SEO</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Local SEO &amp; Google Business Profile</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Google Ads &amp; Meta Ads</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Social Media Marketing</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Website Development</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>Growth Advisory</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: '#FF6B00', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Where I Work</h4>
            <ul>
              <li><a href="/seo-expert-lucknow" onClick={(e) => handleLinkClick(e, '/seo-expert-lucknow')}>SEO Expert Lucknow (On-Site)</a></li>
              <li><a href="/seo-expert-kanpur" onClick={(e) => handleLinkClick(e, '/seo-expert-kanpur')}>SEO Expert Kanpur (On-Site)</a></li>
              <li><a href="/seo-expert-noida" onClick={(e) => handleLinkClick(e, '/seo-expert-noida')}>SEO Expert Noida (On-Site / Hybrid)</a></li>
              <li><a href="/remote-seo-services" onClick={(e) => handleLinkClick(e, '/remote-seo-services')}>Remote SEO (Pan-India)</a></li>
              <li><a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')}>Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: '#FF6B00', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Quick Links</h4>
            <ul>
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>About Me</a></li>
              <li><a href="/pricing" onClick={(e) => handleLinkClick(e, '/pricing')}>Transparent Pricing</a></li>
              <li><a href="/blog" onClick={(e) => handleLinkClick(e, '/blog')}>Blog &amp; Local Guides</a></li>
              <li><a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Get Free SEO Audit</a></li>
              <li><a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</a></li>
              <li><a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid var(--border2)', marginTop: '40px', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'var(--text3)', fontSize: '0.82rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Anirudh Kumar. All rights reserved. Professional Freelance SEO &amp; Digital Marketing Consultant.
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem' }}>
            <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} style={{ color: 'var(--text3)' }}>Privacy Policy</a>
            <span style={{ color: 'var(--text3)' }}>•</span>
            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} style={{ color: 'var(--text3)' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
