import React from 'react';
import { useLoader } from '../context/LoaderContext.jsx';

export default function Footer() {
  const { triggerPageLoad } = useLoader();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    triggerPageLoad(path);
  };

  return (
    <footer style={{ background: '#03050d', borderTop: '1px solid rgba(41, 121, 255, 0.15)', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="nav-logo"
              style={{
                fontSize: '1.8rem',
                marginBottom: '16px',
                color: '#f0f4fc',
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
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #00E5FF' }}
              />
              ANIRUDH KUMAR
            </a>
            <p style={{ color: '#98a7c6', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '360px' }}>
              Freelance SEO Expert &amp; Digital Marketer. Remote across India. On-site in Lucknow, Kanpur and Noida.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: '#98a7c6' }}>
              <div>
                📞 Call: <a href="tel:+918604625862" style={{ color: '#00E5FF', fontWeight: 600 }}>+91 86046 25862</a>
              </div>
              <div>
                💬 WhatsApp:{' '}
                <a
                  href="https://wa.me/918604625862"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#00d68f', fontWeight: 600 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div>
                ✉️ Email: <a href="mailto:anirudhkumarseo@gmail.com" style={{ color: '#2979FF', fontWeight: 600 }}>anirudhkumarseo@gmail.com</a>
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
            <h4 style={{ color: '#00E5FF', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Services</h4>
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
            <h4 style={{ color: '#00E5FF', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Where I Work</h4>
            <ul>
              <li><a href="/seo-expert-lucknow" onClick={(e) => handleLinkClick(e, '/seo-expert-lucknow')}>SEO Expert Lucknow (On-Site)</a></li>
              <li><a href="/seo-expert-kanpur" onClick={(e) => handleLinkClick(e, '/seo-expert-kanpur')}>SEO Expert Kanpur (On-Site)</a></li>
              <li><a href="/seo-expert-noida" onClick={(e) => handleLinkClick(e, '/seo-expert-noida')}>SEO Expert Noida (On-Site / Hybrid)</a></li>
              <li><a href="/remote-seo-services" onClick={(e) => handleLinkClick(e, '/remote-seo-services')}>Remote SEO (Pan-India)</a></li>
              <li><a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')}>Case Studies</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: '#00E5FF', fontSize: '0.95rem', letterSpacing: '0.5px', marginBottom: '16px' }}>Quick Links</h4>
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

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '40px', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#657599', fontSize: '0.82rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Anirudh Kumar. All rights reserved. Professional Freelance SEO &amp; Digital Marketing Consultant.
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem' }}>
            <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} style={{ color: '#657599' }}>Privacy Policy</a>
            <span style={{ color: '#334155' }}>•</span>
            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} style={{ color: '#657599' }}>Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
