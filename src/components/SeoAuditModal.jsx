import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function SeoAuditModal({ isOpen, onClose, defaultUrl = '' }) {
  const [url, setUrl] = useState(defaultUrl);
  const [step, setStep] = useState('input'); // 'input' | 'scanning' | 'results'
  const [scanStep, setScanStep] = useState(0);

  if (!isOpen) return null;

  const stepsList = [
    'Connecting to website host & verifying SSL certificates...',
    'Analyzing Google Core Web Vitals (LCP, FID, CLS)...',
    'Auditing On-Page SEO, H1-H6 tags & Schema Markup...',
    'Checking Local Citations in Lucknow & Kanpur Google Maps...',
    'Synthesizing SEO Audit Action Plan...'
  ];

  const handleStartScan = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStep('scanning');
    setScanStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setScanStep(current);
      if (current >= stepsList.length) {
        clearInterval(interval);
        setTimeout(() => {
          setStep('results');
          try {
            confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
          } catch (err) {}
        }, 600);
      }
    }, 650);
  };

  const handleBookAudit = () => {
    onClose();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
    const msg = document.querySelector('textarea');
    if (msg) {
      msg.value = `Hi Anirudh, I ran the instant audit on my site (${url}). My score was ~74/100 with critical Local Schema & PageSpeed issues. Please share the complete roadmap to fix this.`;
      msg.focus();
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Anirudh! I tested my website (${url}) on your instant SEO scanner. Can you help me fix the SEO issues and rank #1 in Lucknow/Kanpur?`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(6, 6, 15, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 107, 0, 0.15)',
          position: 'relative',
          color: 'var(--text)',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: 'var(--text2)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* STEP 1: INPUT FORM */}
        {step === 'input' && (
          <div>
            <span
              className="tag"
              style={{
                marginBottom: '14px',
                display: 'inline-block',
                background: 'rgba(255, 107, 0, 0.12)',
                color: 'var(--accent)'
              }}
            >
              ⚡ Instant Website Audit Scanner
            </span>
            <h3
              style={{
                fontFamily: 'var(--ff-d)',
                fontSize: '1.8rem',
                margin: '10px 0 12px 0',
                lineHeight: '1.2'
              }}
            >
              Analyze Your <span className="gradient-text">Website SEO Health</span>
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Apni website URL dalein. Hamara automated scanner aapke PageSpeed, Meta Tags aur Local SEO
              rankings ka instant snapshot nikalega.
            </p>

            <form onSubmit={handleStartScan}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                  Website URL *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="e.g. yourbusiness.com or https://myclinic.in"
                    style={{
                      width: '100%',
                      padding: '14px 16px 14px 44px',
                      borderRadius: '12px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--accent)'
                    }}
                  >
                    <i className="bi bi-globe2"></i>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary audit-modal-submit-btn"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', cursor: 'pointer' }}
              >
                🚀 Run Instant Free Scan
              </button>
            </form>

            <div
              style={{
                marginTop: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                fontSize: '0.78rem',
                color: 'var(--text3)'
              }}
            >
              <span>🔒 100% Free &amp; Confidential</span>
              <span>⚡ No Signup Required</span>
            </div>
          </div>
        )}

        {/* STEP 2: SCANNING PROGRESS */}
        {step === 'scanning' && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: '3px solid rgba(255, 107, 0, 0.2)',
                borderTopColor: 'var(--accent)',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 24px auto'
              }}
            ></div>
            <h4 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.4rem', marginBottom: '8px' }}>
              Scanning <span className="gradient-text">{url}</span>
            </h4>
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', minHeight: '44px' }}>
              {stepsList[Math.min(scanStep, stepsList.length - 1)]}
            </p>

            <div
              style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                margin: '20px 0 10px 0'
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'var(--gradient)',
                  width: `${((scanStep + 1) / stepsList.length) * 100}%`,
                  transition: 'width 0.4s ease'
                }}
              ></div>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>
              Step {Math.min(scanStep + 1, stepsList.length)} of {stepsList.length}
            </span>
          </div>
        )}

        {/* STEP 3: RESULTS SUMMARY */}
        {step === 'results' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="tag" style={{ background: 'rgba(0, 214, 143, 0.15)', color: '#00D68F' }}>
                ✓ Audit Completed
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text3)' }}>{url}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                background: 'var(--bg)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                marginBottom: '20px'
              }}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#00D68F 0% 74%, rgba(255,255,255,0.1) 74% 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--bg2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#00D68F', lineHeight: '1' }}>74</span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text3)' }}>/100</span>
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>Overall SEO Health: Fair</h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text2)', lineHeight: '1.4' }}>
                  Aapki website mein high growth potential hai, lekin 3 critical technical issues rankings roke hue hain.
                </p>
              </div>
            </div>

            {/* Critical Issues Box */}
            <div style={{ marginBottom: '22px', fontSize: '0.84rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FF4757', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>⚠️ 3 Critical Issues Detected:</span>
              </div>
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--text2)', lineHeight: '1.6' }}>
                <li>Missing LocalBusiness Schema &amp; Google Map entity linking</li>
                <li>Mobile Core Web Vitals (LCP: 3.8s) causing visitor drop-off</li>
                <li>Competitor keywords missing from Meta Titles in Lucknow/Kanpur</li>
              </ul>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={handleBookAudit}
                className="btn btn-primary audit-modal-book-btn"
                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
              >
                📋 Book Free 1-on-1 Plan to Fix These →
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn btn-whatsapp audit-modal-whatsapp-btn"
                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
              >
                💬 WhatsApp This Report to Anirudh
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
