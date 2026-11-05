import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export default function ThankYouPage() {
  useEffect(() => {
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    } catch (err) {}
    // Trigger GA4 event if gtag is present
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/LABEL',
        event_category: 'Lead',
        event_label: 'Free SEO Audit Request',
      });
    }
  }, []);

  return (
    <div className="page-wrapper thank-you-page" style={{ paddingTop: 'var(--nav-h)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px', padding: '60px 20px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '50px 36px',
            background: 'linear-gradient(135deg, rgba(14, 21, 52, 0.85), rgba(8, 12, 32, 0.95))',
            border: '1px solid rgba(0, 229, 255, 0.35)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 107, 0, 0.15)',
          }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🎉</div>
          <span className="tag" style={{ background: 'rgba(0, 214, 143, 0.15)', color: '#00D68F', border: '1px solid #00D68F', marginBottom: '16px', display: 'inline-block' }}>
            Request Received Successfully
          </span>
          <h1 style={{ fontFamily: 'var(--ff-d)', fontSize: '2.4rem', color: 'var(--text)', margin: '10px 0 16px 0' }}>
            Thank You! I Will Review Your <span className="gradient-text">Website Shortly</span>
          </h1>
          <p style={{ color: 'var(--text2)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '28px' }}>
            I have received your details. I personally examine every website's technical health and Google rankings. You can expect a response within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20just%20submitted%20the%20audit%20form%20on%20your%20website."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ justifyContent: 'center', padding: '14px' }}
            >
              💬 Connect on WhatsApp for Faster Response
            </a>
            <Link to="/" className="btn btn-outline" style={{ justifyContent: 'center', padding: '12px' }}>
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

