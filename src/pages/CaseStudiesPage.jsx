import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  return (
    <div className="page-wrapper case-studies-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Verified Results Policy
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '20px',
              color: '#f0f4fc',
            }}
          >
            Project Case <span className="gradient-text">Studies &amp; Results</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#98a7c6', lineHeight: 1.65, marginBottom: '28px' }}>
            I believe in 100% authentic data. In digital marketing, unverified claims and template screenshots damage trust. Here is how I evaluate, document, and publish project outcomes.
          </p>
        </div>
      </section>

      {/* Verification Framework */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="glass-panel" style={{ padding: '40px', marginBottom: '35px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.5rem', color: '#00E5FF' }}>🔒</span>
              <h2 style={{ fontSize: '1.5rem', color: '#f0f4fc', margin: 0 }}>
                Client Privacy &amp; Verified Reporting Standards
              </h2>
            </div>
            <p style={{ color: '#98a7c6', lineHeight: 1.7, margin: '0 0 16px 0' }}>
              Many of my private clients in healthcare, industrial manufacturing, and professional services sign Non-Disclosure Agreements (NDAs). To respect their competitive advantage and privacy, I publish detailed case studies only with explicit written consent and verified Google Search Console / GBP insights.
            </p>
            <p style={{ color: '#98a7c6', lineHeight: 1.7, margin: 0 }}>
              If you would like to see anonymized traffic growth curves, keyword progression logs, or relevant sector examples during my initial strategy consultation, I am glad to walk you through live Search Console dashboards.
            </p>
          </div>

          {/* Framework Template Card */}
          <div className="glass-panel" style={{ padding: '36px', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#00E5FF', marginBottom: '16px' }}>
              The 4-Part Framework for Every Project
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(5, 8, 20, 0.65)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(41, 121, 255, 0.2)' }}>
                <div style={{ color: '#ff4757', fontWeight: 700, marginBottom: '6px' }}>1. The Initial Problem</div>
                <p style={{ color: '#98a7c6', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  What was stopping the business from appearing in search? Missing pages, penalty, or map misconfigurations.
                </p>
              </div>
              <div style={{ background: 'rgba(5, 8, 20, 0.65)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(41, 121, 255, 0.2)' }}>
                <div style={{ color: '#2979FF', fontWeight: 700, marginBottom: '6px' }}>2. Specific Actions Taken</div>
                <p style={{ color: '#98a7c6', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  Precise technical fixes, on-page optimization, content cluster creation, and local citation building.
                </p>
              </div>
              <div style={{ background: 'rgba(5, 8, 20, 0.65)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(41, 121, 255, 0.2)' }}>
                <div style={{ color: '#00d68f', fontWeight: 700, marginBottom: '6px' }}>3. Real Measurement</div>
                <p style={{ color: '#98a7c6', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  Calls, form fills, and direction requests tracked over a realistic 3 to 6-month timeframe.
                </p>
              </div>
              <div style={{ background: 'rgba(5, 8, 20, 0.65)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(41, 121, 255, 0.2)' }}>
                <div style={{ color: '#00E5FF', fontWeight: 700, marginBottom: '6px' }}>4. Plain Language Reports</div>
                <p style={{ color: '#98a7c6', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  Direct metrics tying rankings to business revenue rather than vanity impressions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', background: 'rgba(14, 21, 52, 0.5)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(41, 121, 255, 0.2)' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#f0f4fc', marginBottom: '12px' }}>
              Want to see how your site compares?
            </h3>
            <p style={{ color: '#98a7c6', fontSize: '0.96rem', maxWidth: '540px', margin: '0 auto 24px' }}>
              Send me your website link. I will personally review your search presence and show you live ranking opportunities in your niche.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                Request My Free SEO Audit
              </Link>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20case%20studies%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 24px' }}
              >
                💬 Chat on WhatsApp (+91 86046 25862)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
