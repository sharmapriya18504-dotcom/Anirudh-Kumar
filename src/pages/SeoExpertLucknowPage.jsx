import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function SeoExpertLucknowPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setToastMsg('Thank you! I have received your details and will reply within 24 hours.');
    setShowToast(true);

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}

    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✅ Audit Request Sent!';
      btn.style.background = '#FF6B00';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="page-wrapper city-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* City Hero */}
      <section className="city-hero" style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="tag">📍 Based in Gomti Nagar, Lucknow</span>
              <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>Available for On-Site Meetings</span>
            </div>
            <h1
              className="section-heading"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                color: 'var(--text)',
              }}
            >
              SEO Expert in <span className="gradient-text">Lucknow</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
              I'm Anirudh Kumar, an SEO specialist based in Gomti Nagar, Lucknow. I help Lucknow businesses show up when customers search on Google, so the calls and enquiries go to you and not to the competitor next door.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#audit-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                🚀 Get a Free SEO Audit for Your Lucknow Business
              </a>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20run%20a%20business%20in%20Lucknow%20and%20need%20SEO%20help."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 24px' }}
              >
                <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i> Chat on WhatsApp (+91 86046 25862)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow Sectors Covered */}
      <section style={{ padding: '60px 0', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Local Industry Focus</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Who I Help in <span className="gradient-text">Lucknow</span>
            </h2>
            <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto' }}>
              Proven search strategies designed for local Lucknow businesses competing for real customer enquiries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Clinics & Hospitals', desc: 'Doctors, dental clinics, specialty centers targeting patient bookings in Lucknow.' },
              { title: 'Real Estate & Builders', desc: 'Property consultants and developers in Gomti Nagar Extension, Shaheed Path & Kisan Path.' },
              { title: 'Coaching & Education', desc: 'Civil services institutes, NEET/JEE coaching, and schools in Hazratganj & Aliganj.' },
              { title: 'Retail, Cafes & Restaurants', desc: 'Local showrooms, bakeries, and dining spots competing for Google Maps visibility.' },
            ].map((item, idx) => (
              <TiltCard3D key={idx}>
                <div className="glass-panel" style={{ padding: '28px', height: '100%' }}>
                  <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '10px' }}>📍</div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems I Fix */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="tag">Problem Solver</span>
              <h2 className="section-heading" style={{ marginTop: '10px', fontSize: '2.2rem' }}>
                Common SEO Problems <span className="gradient-text">I Fix</span>
              </h2>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '24px' }}>
                If your website exists but isn't bringing phone calls or store visits, one of these core issues is likely holding you back:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Your business does not appear in Google Maps for searches like "near me" or "in Lucknow".',
                  'Your website is slow, bloated or not mobile-friendly on smartphones.',
                  'Competitors rank above you for the exact high-value services you sell.',
                  'Traffic comes occasionally, but no one calls, sends an email or fills out your enquiry form.',
                ].map((prob, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--card)', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.15)' }}>
                    <span style={{ color: '#FF6B00', fontWeight: 800 }}>⚠️</span>
                    <span style={{ color: 'var(--text)', fontSize: '0.92rem' }}>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '14px' }}>What I Do For Your Lucknow Business</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                I handle end-to-end local search optimization tailored to Lucknow's competitive neighborhoods:
              </p>
              <ul style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                <li><strong>Local SEO &amp; Google Business Profile:</strong> Complete map pin optimization, citation consistency, and review strategies.</li>
                <li><strong>On-Page &amp; Technical SEO:</strong> Fixing site speed, mobile rendering, meta tags, and structured schema.</li>
                <li><strong>Neighborhood Location Pages:</strong> Dedicated pages targeting Gomti Nagar, Hazratganj, Aliganj, and Indira Nagar.</li>
                <li><strong>Content &amp; Monthly Reporting:</strong> High-intent service copy and clear monthly PDF reports showing real enquiry trends.</li>
              </ul>

              <div style={{ marginTop: '28px', padding: '16px', background: 'rgba(255, 136, 0, 0.08)', borderRadius: '12px', border: '1px solid rgba(255, 136, 0, 0.25)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>🤝 Work with me in person:</div>
                <div style={{ color: 'var(--text2)', fontSize: '0.88rem' }}>
                  I'm based in Lucknow and happy to meet you at your office in Gomti Nagar, Hazratganj, or nearby areas to review your digital strategy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow Contact / Audit Form */}
      <section id="audit-form" style={{ padding: '70px 0', background: 'var(--bg2)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="tag">Free Technical Review</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Request Your Free <span className="gradient-text">Lucknow SEO Audit</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>
              Send me your website link. I will personally review your search rankings and tell you what to fix first. Free, with no obligation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Your Name *</label>
                <input type="text" name="name" required placeholder="Anurag Verma" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Phone / WhatsApp Number *</label>
                <input type="tel" name="phone" required placeholder="+91 86046 25862" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Email Address (optional)</label>
                <input type="email" name="email" placeholder="you@business.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Website or Google Maps Link *</label>
                <input type="text" name="website" required placeholder="www.mybusiness.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Your Business &amp; Target Lucknow Area</label>
              <textarea name="message" rows="3" placeholder="Tell me what you sell and which Lucknow areas you want more enquiries from (e.g. Gomti Nagar, Hazratganj)..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}>
              🚀 Send Free Audit Request
            </button>
            <p style={{ textAlign: 'center', color: 'var(--text3)', fontSize: '0.8rem', marginTop: '14px', margin: '14px 0 0' }}>
              Prompt response within 24 hours guaranteed. You work directly with me.
            </p>
          </form>
        </div>
      </section>

      <Toast isVisible={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
    </div>
  );
}

