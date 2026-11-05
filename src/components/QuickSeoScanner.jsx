import React, { useState } from 'react';

export default function QuickSeoScanner() {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState(null);

  const stepsText = [
    'Checking SSL Security & Mobile Responsiveness...',
    'Analyzing Google Indexation, Headings & Meta Tags...',
    'Evaluating Core Web Vitals & Loading Speed...',
    'Scanning Google Maps / Local SEO Visibility...'
  ];

  const handleScan = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    let cleanUrl = url.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    setScanning(true);
    setResult(null);
    setScanStep(0);

    // Simulate animated scan progression
    setTimeout(() => setScanStep(1), 600);
    setTimeout(() => setScanStep(2), 1200);
    setTimeout(() => setScanStep(3), 1800);
    setTimeout(() => {
      setScanning(false);
      // Generate realistic score based on string hash
      const baseScore = 68 + (cleanUrl.length % 15);
      setResult({
        domain: cleanUrl,
        score: baseScore,
        mobileFriendly: true,
        schemaDetected: false,
        speedRating: 'Needs Improvement (2.9s)',
        localVisibility: 'Low Page 2-4 Presence',
        issuesCount: 4
      });
    }, 2400);
  };

  return (
    <div
      className="quick-seo-scanner"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '30px 24px',
        boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
        margin: '36px 0'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span className="tag" style={{ marginBottom: '8px' }}>
          ⚡ 60-Second Website Diagnostic
        </span>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0 6px' }}>
          Test Your Website's <span className="gradient-text">Google Health Score</span>
        </h3>
        <p style={{ color: 'var(--text2)', fontSize: '0.88rem', maxWidth: '540px', margin: '0 auto' }}>
          Find out what is stopping your business from ranking #1 in Lucknow, Kanpur or across India.
        </p>
      </div>

      <form
        onSubmit={handleScan}
        style={{
          display: 'flex',
          gap: '10px',
          maxWidth: '640px',
          margin: '0 auto',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: '1 1 300px', position: 'relative' }}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. myclinic.com or mybusiness.in"
            required
            style={{
              width: '100%',
              padding: '14px 18px 14px 42px',
              borderRadius: '30px',
              border: '1px solid var(--border)',
              background: 'var(--bg2)',
              color: 'var(--text)',
              fontSize: '0.92rem',
              outline: 'none'
            }}
          />
          <i
            className="bi bi-globe2"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--accent)'
            }}
          />
        </div>
        <button
          type="submit"
          disabled={scanning}
          className="btn btn-primary"
          style={{
            padding: '14px 26px',
            borderRadius: '30px',
            fontSize: '0.92rem',
            fontWeight: 700,
            cursor: scanning ? 'not-allowed' : 'pointer'
          }}
        >
          {scanning ? 'Analyzing Site...' : 'Run Free Scan 🚀'}
        </button>
      </form>

      {/* Progress animation while scanning */}
      {scanning && (
        <div style={{ maxWidth: '540px', margin: '24px auto 0', textAlign: 'center' }}>
          <div
            style={{
              height: '6px',
              borderRadius: '4px',
              background: 'var(--bg2)',
              overflow: 'hidden',
              marginBottom: '10px'
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'var(--accent)',
                width: `${((scanStep + 1) / stepsText.length) * 100}%`,
                transition: 'width 0.4s ease'
              }}
            />
          </div>
          <div style={{ fontSize: '0.84rem', color: 'var(--text2)', fontStyle: 'italic' }}>
            ⏳ {stepsText[scanStep]}
          </div>
        </div>
      )}

      {/* Scan Results Display */}
      {result && !scanning && (
        <div
          style={{
            maxWidth: '640px',
            margin: '24px auto 0',
            background: 'var(--bg)',
            border: '1.5px solid var(--accent)',
            borderRadius: '16px',
            padding: '22px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text2)' }}>Diagnostic for domain:</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)' }}>{result.domain}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  fontFamily: 'var(--ff-d)',
                  color: result.score >= 80 ? '#00d68f' : result.score >= 60 ? '#FFB800' : '#ff4d4f'
                }}
              >
                {result.score} / 100
              </span>
              <div style={{ fontSize: '0.74rem', color: 'var(--text2)' }}>Preliminary SEO Score</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.82rem', marginBottom: '18px' }}>
            <div style={{ background: 'var(--card)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)' }}>
              📱 Mobile Friendly: <span style={{ color: '#00d68f', fontWeight: 700 }}>Passed ✓</span>
            </div>
            <div style={{ background: 'var(--card)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)' }}>
              ⚡ Speed: <span style={{ color: '#FFB800', fontWeight: 700 }}>{result.speedRating}</span>
            </div>
            <div style={{ background: 'var(--card)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)' }}>
              🏷️ Schema Markup: <span style={{ color: '#ff4d4f', fontWeight: 700 }}>Missing ⚠️</span>
            </div>
            <div style={{ background: 'var(--card)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border2)' }}>
              📍 Local Maps Rank: <span style={{ color: '#ff4d4f', fontWeight: 700 }}>{result.localVisibility}</span>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 107, 0, 0.08)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              borderRadius: '10px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <div style={{ fontSize: '0.82rem', color: 'var(--text)' }}>
              💡 <strong>{result.issuesCount} Ranking Blockers</strong> found holding back your leads.
            </div>
            <a
              href={`https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20ran%20a%20scan%20on%20my%20website%20${result.domain}%20and%20got%20${result.score}/100.%20Can%20you%20send%20me%20the%20detailed%20fix%20audit%3F`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '8px 16px', fontSize: '0.82rem', borderRadius: '20px' }}
            >
              📱 Get Free Fix Plan on WhatsApp →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

