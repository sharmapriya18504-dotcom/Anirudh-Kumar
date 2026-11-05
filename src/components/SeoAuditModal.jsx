import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function SeoAuditModal({ isOpen, onClose, defaultUrl = '' }) {
  const [url, setUrl] = useState(defaultUrl);
  const [step, setStep] = useState('input'); // 'input' | 'scanning' | 'results'
  const [scanStep, setScanStep] = useState(0);

  if (!isOpen) return null;

  const stepsList = [
    'Verifying DNS resolution & Core Web Vitals (LCP, INP, CLS)...',
    'Analyzing Google Maps Local Entity & Business Profile signals...',
    'Auditing On-page SEO, Schema markup & Keyword cannibalization...',
    'Checking Competitor Rankings in Lucknow, Kanpur, Noida & India...',
    'Compiling Actionable SEO Roadmap for Anirudh Kumar review...',
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
        }, 500);
      }
    }, 600);
  };

  const handleBookAudit = () => {
    onClose();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
    const websiteInput = document.querySelector('input[name="website"]');
    if (websiteInput) {
      websiteInput.value = url;
    }
    const msg = document.querySelector('textarea[name="message"], textarea');
    if (msg) {
      msg.value = `Hi Anirudh, I ran the instant SEO scan on my website (${url}). Please review my site and share your prioritized action plan to get real enquiries.`;
      msg.focus();
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Anirudh! I checked my website (${url}) on your SEO scanner. Can you help me audit the issues and rank on Google?`
    );
    window.open(`https://wa.me/918604625862?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10001,
        background: 'rgba(3, 6, 18, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(10, 16, 42, 0.95)',
          border: '1px solid rgba(41, 121, 255, 0.35)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 229, 255, 0.15)',
          position: 'relative',
          color: '#f0f4fc',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
            color: '#98a7c6',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
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
                background: 'rgba(41, 121, 255, 0.15)',
                color: '#00E5FF',
                border: '1px solid rgba(0, 229, 255, 0.3)',
              }}
            >
              ⚡ Instant SEO Audit Scanner
            </span>
            <h3
              style={{
                fontFamily: 'var(--ff-d)',
                fontSize: '1.9rem',
                margin: '10px 0 12px 0',
                lineHeight: '1.2',
                color: '#f0f4fc',
              }}
            >
              Analyze Your <span className="gradient-text">Website Search Visibility</span>
            </h3>
            <p style={{ color: '#98a7c6', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Enter your website link below. I will check what is stopping your business from being found on Google and Maps. Free, with no obligation.
            </p>

            <form onSubmit={handleStartScan}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '8px', color: '#c2d2ea' }}>
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
                      background: 'rgba(5, 8, 20, 0.8)',
                      border: '1px solid rgba(41, 121, 255, 0.3)',
                      color: '#f0f4fc',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#00E5FF',
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
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                fontSize: '0.8rem',
                color: '#657599',
              }}
            >
              <span>🔒 100% Free &amp; Confidential</span>
              <span>⚡ Reviewed Personally by Anirudh</span>
            </div>
          </div>
        )}

        {/* STEP 2: SCANNING PROGRESS */}
        {step === 'scanning' && (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: '3px solid rgba(41, 121, 255, 0.2)',
                borderTopColor: '#00E5FF',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 24px auto',
              }}
            />
            <h4 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.5rem', marginBottom: '8px', color: '#f0f4fc' }}>
              Scanning <span className="gradient-text">{url}</span>
            </h4>
            <p style={{ color: '#00E5FF', fontWeight: 600, fontSize: '0.9rem', minHeight: '44px' }}>
              {stepsList[Math.min(scanStep, stepsList.length - 1)]}
            </p>

            <div
              style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                overflow: 'hidden',
                margin: '20px 0 10px 0',
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00E5FF, #2979FF, #7C4DFF)',
                  width: `${((scanStep + 1) / stepsList.length) * 100}%`,
                  transition: 'width 0.4s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#657599' }}>
              Step {Math.min(scanStep + 1, stepsList.length)} of {stepsList.length}
            </span>
          </div>
        )}

        {/* STEP 3: RESULTS SUMMARY */}
        {step === 'results' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="tag" style={{ background: 'rgba(0, 214, 143, 0.15)', color: '#00D68F', border: '1px solid #00D68F' }}>
                ✓ Initial Health Audit Complete
              </span>
              <span style={{ fontSize: '0.82rem', color: '#657599' }}>{url}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                background: 'rgba(5, 8, 20, 0.75)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid rgba(41, 121, 255, 0.25)',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#00E5FF 0% 72%, rgba(255,255,255,0.1) 72% 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#0a102a',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#00E5FF', lineHeight: '1' }}>72</span>
                  <span style={{ fontSize: '0.62rem', color: '#657599' }}>/100</span>
                </div>
              </div>

              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#f0f4fc' }}>Search Visibility Score: Fair</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#98a7c6', lineHeight: '1.4' }}>
                  Your website has solid growth potential, but key Google Maps and technical on-page gaps are letting competitors capture calls.
                </p>
              </div>
            </div>

            {/* Identified Technical Opportunities */}
            <div style={{ marginBottom: '22px', fontSize: '0.86rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '8px', color: '#00E5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🎯 Key Opportunities Identified:</span>
              </div>
              <ul style={{ paddingLeft: '18px', margin: 0, color: '#98a7c6', lineHeight: '1.6' }}>
                <li>Google Business Profile optimization needed for local 'near me' rankings</li>
                <li>Mobile Core Web Vitals can be optimized to prevent visitor drop-offs</li>
                <li>Missing location-targeted keyword clusters on key service pages</li>
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
                📋 Get Custom Action Plan from Anirudh →
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn btn-whatsapp audit-modal-whatsapp-btn"
                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
              >
                💬 Chat on WhatsApp (+91 86046 25862)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
