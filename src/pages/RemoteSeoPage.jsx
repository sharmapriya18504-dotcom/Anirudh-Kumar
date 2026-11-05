import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function RemoteSeoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setToastMsg('Thank you! I have received your request and will reply within 24 hours.');
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
      {/* Hero */}
      <section className="city-hero" style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="tag">🌐 Pan-India Remote Collaboration</span>
              <span style={{ fontSize: '0.85rem', color: '#00d68f', fontWeight: 600 }}>Seamless Communication &amp; Transparent Reporting</span>
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
              Remote SEO &amp; <span className="gradient-text">Digital Marketing Services</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
              You don't need to be in my city to work with me. I support businesses across India remotely, with the same personal attention, clear communication, and transparent reporting as my local clients.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#audit-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                🚀 Get a Free Remote SEO Audit
              </a>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20am%20looking%20for%20remote%20SEO%20services."
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

      {/* How Remote Work Runs */}
      <section style={{ padding: '60px 0', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Remote Workflow</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              How Remote Work <span className="gradient-text">Runs</span>
            </h2>
            <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto' }}>
              Structured, low-friction collaboration designed to keep you informed without wasting your time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Kickoff Call', desc: 'A focused discovery call to understand your business model, customer economics, and target growth goals.' },
              { step: '02', title: 'Free Audit & Plan', desc: 'A thorough technical audit and a written strategic plan delivered directly to you.' },
              { step: '03', title: 'Day-to-Day Execution', desc: 'Active implementation of on-page, technical, content, and links with direct updates on WhatsApp or email.' },
              { step: '04', title: 'Monthly Report & Call', desc: 'A clear monthly PDF report with plain language numbers followed by a strategic review call.' },
            ].map((item, idx) => (
              <TiltCard3D key={idx}>
                <div className="glass-panel" style={{ padding: '28px', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--ff-d)', fontSize: '2rem', color: '#FF6B00', marginBottom: '10px' }}>{item.step}</div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Openness */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="tag">Stack &amp; Tooling</span>
              <h2 className="section-heading" style={{ marginTop: '10px', fontSize: '2.2rem' }}>
                Tools I Use to <span className="gradient-text">Drive Results</span>
              </h2>
              <p style={{ color: 'var(--text2)', lineHeight: 1.6, marginBottom: '24px' }}>
                I rely on industry-standard analytics, auditing, and reporting tools to make sure decisions are backed by real search data:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  { name: 'Google Search Console', role: 'Indexing & Queries' },
                  { name: 'Google Analytics 4', role: 'Traffic & Conversions' },
                  { name: 'Google Business Profile', role: 'Local & Map Signals' },
                  { name: 'Google Looker Studio', role: 'Live Dashboard Reports' },
                ].map((tool, idx) => (
                  <div key={idx} style={{ background: 'rgba(14, 21, 52, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                    <div style={{ color: '#FF6B00', fontWeight: 700, fontSize: '0.95rem' }}>{tool.name}</div>
                    <div style={{ color: '#657599', fontSize: '0.8rem', marginTop: '2px' }}>{tool.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '14px' }}>Flexible Collaboration</h3>
              <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                I am open to different engagement formats depending on your business requirements:
              </p>
              <ul style={{ color: '#dbe4f5', fontSize: '0.94rem', lineHeight: 2, paddingLeft: '20px', margin: '0 0 24px 0' }}>
                <li><strong>Monthly Retainers:</strong> Comprehensive ongoing SEO &amp; marketing management.</li>
                <li><strong>One-Time Projects:</strong> Technical site migrations, site audits, or speed overhauls.</li>
                <li><strong>Remote Part-Time / Full-Time Roles:</strong> Embedded specialist driving growth for your product or agency.</li>
              </ul>
              <div style={{ color: '#00d68f', fontSize: '0.88rem', fontWeight: 600 }}>
                ✓ No agency lock-in. Month-to-month flexibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Audit Request Form */}
      <section id="audit-form" style={{ padding: '70px 0', background: 'rgba(7, 11, 28, 0.85)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="tag">Free Review</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Request Your Free <span className="gradient-text">Remote SEO Audit</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>
              Send me your website link. I will review your site and send over a clear breakdown of what needs to be improved.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Your Name *</label>
                <input type="text" name="name" required placeholder="Aman Agarwal" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>WhatsApp / Phone Number *</label>
                <input type="tel" name="phone" required placeholder="+91 86046 25862" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Email Address (optional)</label>
                <input type="email" name="email" placeholder="aman@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Website URL *</label>
                <input type="text" name="website" required placeholder="www.yourwebsite.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Business Summary &amp; Location</label>
              <textarea name="message" rows="3" placeholder="Tell me your city and what specific goals you want to achieve through SEO or digital marketing..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}>
              🚀 Send Audit Request
            </button>
            <p style={{ textAlign: 'center', color: '#657599', fontSize: '0.8rem', marginTop: '14px', margin: '14px 0 0' }}>
              Prompt reply within 24 hours guaranteed. You work directly with Anirudh.
            </p>
          </form>
        </div>
      </section>

      <Toast isVisible={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
    </div>
  );
}

