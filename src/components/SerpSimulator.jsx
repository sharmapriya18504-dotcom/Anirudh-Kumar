import React, { useState } from 'react';

const sampleQueries = [
  {
    id: 'clinic',
    query: 'Best Dental Clinic in Gomti Nagar Lucknow',
    businessName: 'Dr. Mishra Dental & Implant Centre',
    url: 'https://mishradental.in/gomti-nagar',
    rank: '#1 on Google Search',
    beforeRank: 'Page 5 (Position #48)',
    beforeClicks: '12 clicks/mo',
    afterClicks: '380 clicks/mo (+3,060%)',
    snippet: 'Top rated dental clinic in Gomti Nagar, Lucknow. Painless root canal, smile design & dental implants by certified specialists. 1,200+ satisfied patients. Book appointment online or call today.',
    sitelinks: ['Root Canal Treatment', 'Dental Implants', 'Book Appointment', 'Patient Reviews'],
    rating: '4.9',
    reviews: '142'
  },
  {
    id: 'garments',
    query: 'Cotton Garments Manufacturer Kanpur',
    businessName: 'Kanpur Textile & Apparel Works',
    url: 'https://kanpurapparel.com/b2b-export',
    rank: '#1 on Google Search',
    beforeRank: 'Page 4 (Position #39)',
    beforeClicks: '25 clicks/mo',
    afterClicks: '520 clicks/mo (+1,980%)',
    snippet: 'Leading B2B cotton garments manufacturer & exporter based in Kanpur, UP. Bulk orders, premium combed cotton, custom stitching & pan-India delivery. Inquire for wholesale pricing.',
    sitelinks: ['Wholesale Catalog', 'Fabric Quality', 'Request Sample', 'Factory Tour'],
    rating: '4.8',
    reviews: '89'
  },
  {
    id: 'coaching',
    query: 'Best Coaching Institute in Hazratganj Lucknow',
    businessName: 'Apex Academy Lucknow',
    url: 'https://apexacademylko.com/admissions',
    rank: '#1 on Google Search',
    beforeRank: 'Page 3 (Position #27)',
    beforeClicks: '40 clicks/mo',
    afterClicks: '740 clicks/mo (+1,750%)',
    snippet: 'Premier coaching institute in Hazratganj, Lucknow for competitive exams. Experienced faculty, small batches, daily practice tests & proven results. New admission batches starting now.',
    sitelinks: ['Batch Timings', 'Fee Structure', 'Demo Class', 'Toppers List'],
    rating: '4.9',
    reviews: '210'
  }
];

export default function SerpSimulator() {
  const [selectedId, setSelectedId] = useState('clinic');
  const [isAfterMode, setIsAfterMode] = useState(true);
  const [customQuery, setCustomQuery] = useState('');

  const current = sampleQueries.find((q) => q.id === selectedId) || sampleQueries[0];
  const displayQuery = customQuery.trim() || current.query;

  return (
    <div
      className="serp-simulator-wrapper"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '32px 24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
        margin: '40px 0'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span className="tag" style={{ marginBottom: '10px' }}>
          Interactive Google SERP Simulator
        </span>
        <h3 style={{ fontSize: '1.85rem', fontWeight: 800, margin: '10px 0 8px' }}>
          See What <span className="gradient-text">Ranking #1 on Google</span> Looks Like
        </h3>
        <p style={{ color: 'var(--text2)', fontSize: '0.92rem', maxWidth: '620px', margin: '0 auto' }}>
          85% of customer enquiries go to the top 3 Google positions. Test this interactive simulator to see the dramatic difference between being invisible vs dominating page 1.
        </p>
      </div>

      {/* Preset Query Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '24px'
        }}
      >
        {sampleQueries.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelectedId(item.id);
              setCustomQuery('');
            }}
            style={{
              padding: '8px 16px',
              borderRadius: '24px',
              border: selectedId === item.id && !customQuery ? '1px solid var(--accent)' : '1px solid var(--border2)',
              background: selectedId === item.id && !customQuery ? 'rgba(255, 107, 0, 0.15)' : 'var(--bg2)',
              color: selectedId === item.id && !customQuery ? 'var(--accent)' : 'var(--text2)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {item.query}
          </button>
        ))}
      </div>

      {/* Before / After Toggle Switch */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '24px'
        }}
      >
        <span
          style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: !isAfterMode ? '#ff4d4f' : 'var(--text2)',
            cursor: 'pointer'
          }}
          onClick={() => setIsAfterMode(false)}
        >
          ❌ Without SEO (Invisible)
        </span>
        <button
          type="button"
          onClick={() => setIsAfterMode(!isAfterMode)}
          aria-label="Toggle before and after SEO"
          style={{
            width: '60px',
            height: '32px',
            borderRadius: '20px',
            background: isAfterMode ? 'var(--accent)' : '#ff4d4f',
            border: 'none',
            position: 'relative',
            cursor: 'pointer',
            padding: '3px',
            transition: 'background 0.3s ease'
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: '#fff',
              transform: isAfterMode ? 'translateX(28px)' : 'translateX(0)',
              transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
            }}
          />
        </button>
        <span
          style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: isAfterMode ? 'var(--accent)' : 'var(--text2)',
            cursor: 'pointer'
          }}
          onClick={() => setIsAfterMode(true)}
        >
          🚀 With Anirudh's SEO (Rank #1)
        </span>
      </div>

      {/* Google Search Mockup Box */}
      <div
        style={{
          background: 'var(--bg)',
          borderRadius: '16px',
          border: '1px solid var(--border2)',
          padding: '24px',
          maxWidth: '780px',
          margin: '0 auto',
          boxShadow: isAfterMode ? '0 0 25px rgba(255, 107, 0, 0.12)' : 'none'
        }}
      >
        {/* Fake Google Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '30px',
            padding: '10px 18px',
            marginBottom: '16px'
          }}
        >
          <i className="bi bi-search" style={{ color: 'var(--accent)', fontSize: '0.95rem' }}></i>
          <input
            type="text"
            value={displayQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            placeholder="Type any search query..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: '0.92rem',
              fontWeight: 500
            }}
          />
          <span style={{ fontSize: '0.75rem', color: 'var(--text2)', background: 'var(--bg2)', padding: '3px 8px', borderRadius: '10px' }}>
            Live Preview
          </span>
        </div>

        {/* Search Results Meta */}
        <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '18px', paddingLeft: '4px' }}>
          About 14,800,000 results (0.38 seconds)
        </div>

        {/* The Result Card */}
        {isAfterMode ? (
          <div
            style={{
              background: 'rgba(255, 107, 0, 0.04)',
              border: '1.5px solid var(--accent)',
              borderRadius: '12px',
              padding: '20px',
              position: 'relative'
            }}
          >
            {/* Rank Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                background: 'var(--accent)',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 12px',
                borderRadius: '20px',
                letterSpacing: '0.5px'
              }}
            >
              👑 RANK #1 POSITION
            </div>

            {/* URL & Favicon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.68rem',
                  fontWeight: 800
                }}
              >
                G
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>
                {current.url}
              </div>
            </div>

            {/* Page Title */}
            <h4
              style={{
                color: 'var(--accent)',
                fontSize: '1.22rem',
                fontWeight: 700,
                lineHeight: 1.35,
                margin: '0 0 6px',
                cursor: 'pointer'
              }}
            >
              {current.businessName} — {displayQuery}
            </h4>

            {/* Rating Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#FFB800', marginBottom: '8px' }}>
              <span>★★★★★</span>
              <span style={{ color: 'var(--text)', fontWeight: 700 }}>{current.rating}</span>
              <span style={{ color: 'var(--text2)' }}>({current.reviews} Google reviews)</span>
            </div>

            {/* Meta Description */}
            <p style={{ fontSize: '0.86rem', color: 'var(--text2)', lineHeight: 1.5, margin: '0 0 14px' }}>
              {current.snippet}
            </p>

            {/* Sitelinks Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '8px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border2)'
              }}
            >
              {current.sitelinks.map((link, idx) => (
                <div
                  key={idx}
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text)',
                    fontWeight: 600,
                    padding: '4px 8px',
                    background: 'var(--bg2)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ color: 'var(--accent)' }}>↳</span> {link}
                </div>
              ))}
            </div>

            {/* Impact Metric Banner */}
            <div
              style={{
                marginTop: '16px',
                background: 'rgba(0, 214, 143, 0.1)',
                border: '1px solid rgba(0, 214, 143, 0.3)',
                borderRadius: '8px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '0.84rem', color: '#00d68f', fontWeight: 700 }}>
                📈 Real Impact: {current.afterClicks} generated
              </div>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ padding: '6px 14px', fontSize: '0.78rem', borderRadius: '16px' }}
              >
                Get Ranked #1 Like This →
              </a>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: 'rgba(255, 77, 79, 0.05)',
              border: '1.5px dashed #ff4d4f',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📉</div>
            <h4 style={{ color: '#ff4d4f', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px' }}>
              Stuck on {current.beforeRank}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text2)', maxWidth: '520px', margin: '0 auto 16px' }}>
              Over 94% of searchers never click past Page 1. Currently generating only <strong>{current.beforeClicks}</strong>. Meanwhile, your competitors in Lucknow/Kanpur are taking all your calls.
            </p>
            <button
              type="button"
              onClick={() => setIsAfterMode(true)}
              className="btn btn-primary"
              style={{ fontSize: '0.85rem', padding: '8px 18px', borderRadius: '20px' }}
            >
              See What Ranking #1 Looks Like 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

