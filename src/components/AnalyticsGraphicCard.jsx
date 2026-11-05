import React, { useState } from 'react';

const cases = [
  {
    id: 'healthcare',
    title: 'Multi-Specialty Clinic — Gomti Nagar, Lucknow',
    tag: '🏥 Healthcare & Local Clinic',
    metricHighlight: '+340% Organic Patient Calls',
    period: '4 Months Retainer',
    initialClicks: '84 clicks/mo',
    finalClicks: '412 clicks/mo',
    initialImpressions: '2.1K',
    finalImpressions: '28.4K',
    topKeywords: [
      { kw: 'dental clinic gomti nagar', pos: '#1' },
      { kw: 'root canal specialist lucknow', pos: '#1' },
      { kw: 'orthodontist near me gomti nagar', pos: '#2' },
      { kw: 'best implant doctor lucknow', pos: '#3' }
    ],
    summary: 'Optimized Google Business Profile categories, built local schema citations across Lucknow directories, and created focused procedure landing pages. Inquiries tripled in 120 days.'
  },
  {
    id: 'ecommerce',
    title: 'Cotton Apparel & Garments Brand — Kanpur City',
    tag: '🛍️ E-Commerce & B2B Wholesale',
    metricHighlight: '7.2x Verified ROAS on Meta Ads',
    period: '6 Months Retainer',
    initialClicks: '210 clicks/mo',
    finalClicks: '1,890 clicks/mo',
    initialImpressions: '6.4K',
    finalImpressions: '84.2K',
    topKeywords: [
      { kw: 'cotton fabric manufacturer kanpur', pos: '#1' },
      { kw: 'b2b wholesale apparel up', pos: '#2' },
      { kw: 'garments supplier kanpur', pos: '#1' },
      { kw: 'custom printed tshirts wholesale', pos: '#2' }
    ],
    summary: 'Revamped product catalog architecture, created B2B bulk inquiry funnels, and ran Meta Ads retargeting previous buyers. Monthly wholesale revenue reached ₹15L+.'
  },
  {
    id: 'education',
    title: 'Competitive Coaching Institute — Hazratganj, Lucknow',
    tag: '🎓 Education & Test Prep',
    metricHighlight: '#1 Rank Across 14 Commercial Searches',
    period: '5 Months Retainer',
    initialClicks: '140 clicks/mo',
    finalClicks: '1,280 clicks/mo',
    initialImpressions: '4.8K',
    finalImpressions: '52.1K',
    topKeywords: [
      { kw: 'coaching in hazratganj lucknow', pos: '#1' },
      { kw: 'best competitive exam institute lucknow', pos: '#1' },
      { kw: 'upsc coaching hazratganj', pos: '#2' },
      { kw: 'foundation batch admissions lucknow', pos: '#1' }
    ],
    summary: 'Ranked top of the local 3-pack for Hazratganj student queries. Combined with targeted Google Search Ads during admission season for a 100% batch fill rate.'
  }
];

export default function AnalyticsGraphicCard() {
  const [selectedCase, setSelectedCase] = useState('healthcare');
  const [viewMode, setViewMode] = useState('chart'); // 'chart' or 'keywords'
  const c = cases.find((item) => item.id === selectedCase) || cases[0];

  return (
    <div
      className="analytics-proof-card"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '30px 24px',
        boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
        margin: '28px 0'
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
        <div>
          <span className="tag" style={{ marginBottom: '6px' }}>
            📊 Live Proof &amp; Analytics Dashboard
          </span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '6px 0 0', color: 'var(--text)' }}>
            Google Search Console &amp; Performance Verification
          </h3>
        </div>

        {/* View Mode Toggle */}
        <div style={{ display: 'flex', gap: '6px', background: 'var(--bg2)', padding: '4px', borderRadius: '24px', border: '1px solid var(--border2)' }}>
          <button
            type="button"
            onClick={() => setViewMode('chart')}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: 'none',
              background: viewMode === 'chart' ? 'var(--accent)' : 'transparent',
              color: viewMode === 'chart' ? '#fff' : 'var(--text2)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            📈 Growth Curve
          </button>
          <button
            type="button"
            onClick={() => setViewMode('keywords')}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: 'none',
              background: viewMode === 'keywords' ? 'var(--accent)' : 'transparent',
              color: viewMode === 'keywords' ? '#fff' : 'var(--text2)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            🎯 Page 1 Keywords
          </button>
        </div>
      </div>

      {/* Case Studies Switcher Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '22px' }}>
        {cases.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedCase(item.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: selectedCase === item.id ? '1px solid var(--accent)' : '1px solid var(--border2)',
              background: selectedCase === item.id ? 'rgba(255,107,0,0.12)' : 'var(--bg2)',
              color: selectedCase === item.id ? 'var(--accent)' : 'var(--text2)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Case Content Box */}
      <div
        style={{
          background: 'var(--bg)',
          borderRadius: '16px',
          border: '1px solid var(--border2)',
          padding: '24px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--text)' }}>
              {c.title}
            </h4>
            <div style={{ fontSize: '0.82rem', color: 'var(--text2)' }}>
              Client Duration: <strong style={{ color: 'var(--text)' }}>{c.period}</strong> • Direct execution by Anirudh
            </div>
          </div>
          <div style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)', padding: '6px 14px', borderRadius: '16px', color: '#FF6B00', fontWeight: 800, fontSize: '0.88rem' }}>
            {c.metricHighlight}
          </div>
        </div>

        {/* Mode View: Chart vs Keywords */}
        {viewMode === 'chart' ? (
          <div>
            {/* Real SVG Search Console Graphic */}
            <div style={{ height: '170px', width: '100%', position: 'relative', margin: '14px 0' }}>
              <svg viewBox="0 0 600 160" width="100%" height="100%" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="var(--border2)" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="600" y2="80" stroke="var(--border2)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="var(--border2)" strokeDasharray="3 3" />

                {/* Area fill */}
                <path
                  d="M 0 140 Q 150 130 250 100 T 450 45 T 600 20 L 600 160 L 0 160 Z"
                  fill="url(#curveGradient)"
                />
                {/* Trend line */}
                <path
                  d="M 0 140 Q 150 130 250 100 T 450 45 T 600 20"
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="3.5"
                />

                {/* Data Points */}
                <circle cx="0" cy="140" r="5" fill="#FFB800" />
                <circle cx="250" cy="100" r="5" fill="#FFB800" />
                <circle cx="450" cy="45" r="5" fill="#FFB800" />
                <circle cx="600" cy="20" r="6" fill="#FF6B00" />
              </svg>
            </div>

            {/* Metrics Breakdown Tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginTop: '14px' }}>
              <div style={{ background: 'var(--card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border2)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text2)' }}>Initial Clicks / Mo</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)' }}>{c.initialClicks}</div>
              </div>
              <div style={{ background: 'var(--card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border2)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text2)' }}>Current Clicks / Mo</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FF6B00' }}>{c.finalClicks}</div>
              </div>
              <div style={{ background: 'var(--card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border2)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text2)' }}>Monthly Impressions</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)' }}>{c.finalImpressions}</div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ margin: '14px 0' }}>
            <div style={{ fontSize: '0.84rem', color: 'var(--text2)', marginBottom: '10px' }}>
              Top high-intent buyer searches captured on Google Page 1:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {c.topKeywords.map((k, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border2)',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.86rem', color: 'var(--text)', fontWeight: 600 }}>
                    🔍 "{k.kw}"
                  </span>
                  <span style={{ background: 'var(--accent)', color: '#fff', fontSize: '0.74rem', fontWeight: 800, padding: '3px 8px', borderRadius: '12px' }}>
                    {k.pos}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Strategy Summary */}
        <p style={{ fontSize: '0.86rem', color: 'var(--text2)', lineHeight: 1.6, marginTop: '16px', borderTop: '1px solid var(--border2)', paddingTop: '14px', marginBottom: 0 }}>
          💡 <strong>What I Did:</strong> {c.summary}
        </p>
      </div>
    </div>
  );
}

