import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function SeoExpertKanpurPage() {
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
      btn.style.background = '#00D68F';
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
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="tag">📍 On-Site &amp; Remote in Kanpur</span>
              <span style={{ fontSize: '0.85rem', color: '#00d68f', fontWeight: 600 }}>Industrial &amp; Local Business SEO</span>
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
              SEO Expert in <span className="gradient-text">Kanpur</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
              Kanpur has a strong mix of traders, manufacturers, institutes and growing service businesses, but many of them are still invisible online. I help Kanpur businesses get found by customers searching on Google and turn that attention into real leads.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#audit-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                🚀 Get a Free SEO Audit for Your Kanpur Business
              </a>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20run%20a%20business%20in%20Kanpur%20and%20need%20SEO%20help."
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

      {/* Who I Help in Kanpur */}
      <section style={{ padding: '60px 0', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Kanpur Industry Sectors</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Who I Help in <span className="gradient-text">Kanpur</span>
            </h2>
            <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto' }}>
              Targeted digital visibility built around the unique industrial and retail landscape of Kanpur.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Manufacturing & Industrial Suppliers', desc: 'Engineering firms, machinery parts, packaging and industrial manufacturers in Dada Nagar & Panki.' },
              { title: 'Textile & Leather Businesses', desc: 'Export and domestic suppliers in Jajmau and Kanpur leather hubs targeting B2B buyers online.' },
              { title: 'Education & Coaching Institutes', desc: 'IIT-JEE, competitive exam centers, and higher education institutes in Kakadeo.' },
              { title: 'Retail & Local Services', desc: 'Showrooms, clinics, and commercial services in Civil Lines, Swaroop Nagar, and Kidwai Nagar.' },
            ].map((item, idx) => (
              <TiltCard3D key={idx}>
                <div className="glass-panel" style={{ padding: '28px', height: '100%' }}>
                  <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '10px' }}>🏭</div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems in Kanpur */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="tag">Common Challenges</span>
              <h2 className="section-heading" style={{ marginTop: '10px', fontSize: '2.2rem' }}>
                Problems Kanpur Businesses <span className="gradient-text">Face Online</span>
              </h2>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '24px' }}>
                Kanpur has immense commercial capability, but traditional offline businesses often lose online customers due to these issues:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Potential corporate or retail buyers search Google for your products and find your competitors instead.',
                  'Your product or service pages are missing, thin, or lack keyword targeting for domestic and B2B buyers.',
                  'You depend almost entirely on word-of-mouth and have no steady, predictable stream of online enquiries.',
                  'Your business details are inaccurate, unverified or completely missing on Google Maps.',
                ].map((prob, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--card)', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.15)' }}>
                    <span style={{ color: '#ff4757', fontWeight: 800 }}>⚠️</span>
                    <span style={{ color: 'var(--text)', fontSize: '0.92rem' }}>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '14px' }}>What I Do For Kanpur Businesses</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                I build structured search strategies that establish your authority and generate enquiries:
              </p>
              <ul style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                <li><strong>SEO for Product &amp; Service Pages:</strong> Creating comprehensive catalog pages that rank for commercial intent searches.</li>
                <li><strong>Local SEO &amp; Google Business Profile:</strong> Dominating map listings for Civil Lines, Swaroop Nagar, Kidwai Nagar, and Kakadeo.</li>
                <li><strong>B2B Lead Generation:</strong> Capturing industrial procurement searches across Uttar Pradesh and pan-India.</li>
                <li><strong>Google &amp; Meta Ads (Optional):</strong> Laser-focused paid lead campaigns when you need immediate enquiries.</li>
              </ul>

              <div style={{ marginTop: '28px', padding: '16px', background: 'rgba(41, 121, 255, 0.1)', borderRadius: '12px', border: '1px solid rgba(41, 121, 255, 0.3)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>🚆 On-site or Remote Availability:</div>
                <div style={{ color: 'var(--text2)', fontSize: '0.88rem' }}>
                  I'm available for on-site meetings and work in Kanpur, and I can also work with your team remotely with seamless weekly reporting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kanpur Contact / Audit Form */}
      <section id="audit-form" style={{ padding: '70px 0', background: 'var(--bg2)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="tag">Free Technical Review</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Request Your Free <span className="gradient-text">Kanpur SEO Audit</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>
              Send me your website link. I will personally review your search presence and outline what needs to be fixed to generate enquiries.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Your Name *</label>
                <input type="text" name="name" required placeholder="Rajesh Gupta" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Phone / WhatsApp Number *</label>
                <input type="tel" name="phone" required placeholder="+91 86046 25862" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Email Address (optional)</label>
                <input type="email" name="email" placeholder="you@kanpurbusiness.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Website URL *</label>
                <input type="text" name="website" required placeholder="www.yourcompany.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Business Type &amp; Goals</label>
              <textarea name="message" rows="3" placeholder="Tell me what you manufacture or sell and what enquiries you are targeting..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}>
              🚀 Send Free Audit Request
            </button>
            <p style={{ textAlign: 'center', color: 'var(--text3)', fontSize: '0.8rem', marginTop: '14px', margin: '14px 0 0' }}>
              Prompt response within 24 hours guaranteed. You deal directly with Anirudh.
            </p>
          </form>
        </div>
      </section>

      <Toast isVisible={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
    </div>
  );
}

