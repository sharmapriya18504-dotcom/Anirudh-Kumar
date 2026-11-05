import React from 'react';

const certs = [
  {
    title: 'Google Analytics 4 Certified',
    issuer: 'Google Skillshop',
    id: 'GA4-PRO-VERIFIED',
    icon: '📊',
    color: '#FFB800',
    skills: 'Tracking, Conversion Funnels & GA4 Events'
  },
  {
    title: 'Google Ads Search & Display',
    issuer: 'Google Skillshop',
    id: 'G-ADS-SEARCH-2026',
    icon: '🎯',
    color: '#FF6B00',
    skills: 'PPC Lead Generation, Quality Score & High-ROI Ads'
  },
  {
    title: 'Meta Certified Marketing Associate',
    issuer: 'Meta Blueprint',
    id: 'META-BLUEPRINT-CERT',
    icon: '📱',
    color: '#00E5FF',
    skills: 'Instagram & Facebook Ads, Audience Retargeting & ROAS'
  },
  {
    title: 'HubSpot Inbound Marketing & SEO',
    issuer: 'HubSpot Academy',
    id: 'HUBSPOT-SEO-CERT',
    icon: '🏆',
    color: '#00D68F',
    skills: 'Technical SEO, Content Architecture & Organic Lead Generation'
  }
];

export default function CertificationsTrustBar() {
  return (
    <div
      className="certifications-trust-bar"
      style={{
        margin: '32px 0 24px',
        padding: '24px 20px',
        background: 'var(--card)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '18px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.2rem' }}>🎖️</span>
          <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '0.5px' }}>
            VERIFIED INDUSTRY CREDENTIALS &amp; CERTIFICATIONS
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', color: '#00d68f', fontWeight: 700, background: 'rgba(0,214,143,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
          ✓ 100% Verified Credentials
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px'
        }}
      >
        {certs.map((c, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border2)',
              borderRadius: '12px',
              padding: '16px',
              position: 'relative',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1.25 }}>
                  {c.title}
                </div>
                <div style={{ fontSize: '0.72rem', color: c.color, fontWeight: 700, marginTop: '2px' }}>
                  {c.issuer}
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.76rem', color: 'var(--text2)', lineHeight: 1.4, marginTop: '6px' }}>
              {c.skills}
            </div>

            <div
              style={{
                marginTop: '10px',
                fontSize: '0.7rem',
                color: 'var(--text3)',
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border2)',
                paddingTop: '6px'
              }}
            >
              <span>Verified ID: {c.id}</span>
              <span style={{ color: '#00d68f' }}>● Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
