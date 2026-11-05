import React from 'react';
import { Link } from 'react-router-dom';
import InteractivePricing from '../components/InteractivePricing.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';

export default function PricingPage() {
  return (
    <div className="page-wrapper pricing-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Transparent Retainers
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: '#f0f4fc',
            }}
          >
            Simple, Clear <span className="gradient-text">Pricing</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#98a7c6', lineHeight: 1.65, marginBottom: '20px' }}>
            Every package starts with a free SEO audit. No hidden charges. Prices in INR. No long-term lock-in contract—work is month-to-month.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <InteractivePricing />
        </div>
      </section>

      {/* FAQ Related to Pricing */}
      <section style={{ padding: '60px 0 80px', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(41, 121, 255, 0.15)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="tag">Pricing FAQs</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ color: '#98a7c6', fontSize: '0.94rem' }}>
              Common questions about budgeting, contracts, and expectations.
            </p>
          </div>
          <InteractiveFaq />
        </div>
      </section>
    </div>
  );
}
