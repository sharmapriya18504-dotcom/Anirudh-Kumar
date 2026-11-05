import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function SeoExpertNoidaPage() {
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
      btn.textContent = '✅ Project Inquiry Sent!';
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
              <span className="tag">📍 On-Site &amp; Hybrid in Noida / NCR</span>
              <span style={{ fontSize: '0.85rem', color: '#00d68f', fontWeight: 600 }}>Startups, D2C &amp; Enterprise Growth</span>
            </div>
            <h1
              className="section-heading"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                color: '#f0f4fc',
              }}
            >
              SEO Expert in <span className="gradient-text">Noida</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#98a7c6', lineHeight: 1.65, marginBottom: '28px' }}>
              Noida is competitive. Startups, IT companies, agencies, real estate and e-commerce brands are all fighting for the same high-value searches. If you want a hands-on SEO expert who can sit with your team, I'm available on-site in Noida.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#audit-form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                🚀 Talk About Your Noida Project
              </a>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20have%20a%20project%20in%20Noida%20and%20want%20to%20discuss%20SEO."
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

      {/* Who I Can Help in Noida */}
      <section style={{ padding: '60px 0', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Noida Ecosystem</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Who I Can Help in <span className="gradient-text">Noida &amp; NCR</span>
            </h2>
            <p style={{ color: '#98a7c6', maxWidth: '600px', margin: '0 auto' }}>
              Tailored organic growth and customer acquisition for tech-forward companies in Noida.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Startups & SaaS Companies', desc: 'Product positioning, technical architecture, and bottom-of-funnel keyword acquisition across Noida Sector 62 & 125.' },
              { title: 'E-Commerce & D2C Brands', desc: 'Category page SEO, faceted navigation fixes, and high-converting Meta Ads remarketing.' },
              { title: 'Commercial & Residential Real Estate', desc: 'Brokers, builders, and developers competing for premium Noida Expressway and Sector 150 buyer intent.' },
              { title: 'Education, EdTech & Training', desc: 'Skill academies, coding bootcamps, and professional institutions in Knowledge Park & Greater Noida.' },
            ].map((item, idx) => (
              <TiltCard3D key={idx}>
                <div className="glass-panel" style={{ padding: '28px', height: '100%' }}>
                  <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '10px' }}>🏢</div>
                  <h3 style={{ fontSize: '1.15rem', color: '#f0f4fc', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#98a7c6', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* How I Can Help Your Team */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="tag">Execution &amp; Strategy</span>
              <h2 className="section-heading" style={{ marginTop: '10px', fontSize: '2.2rem' }}>
                How I Can Help <span className="gradient-text">Your Team</span>
              </h2>
              <p style={{ color: '#98a7c6', lineHeight: 1.6, marginBottom: '24px' }}>
                Whether you need a senior specialist to take full ownership of organic growth or an advisor to steer your existing in-house team:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Full SEO strategy, technical SEO audits, and revenue-focused content planning.',
                  'Google Ads and Meta Ads performance campaigns focused on CAC and ROAS, not vanity clicks.',
                  'Working alongside your in-house team as an active SEO or digital marketing lead.',
                  'Training and upskilling your marketing team on modern algorithmic best practices.',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(14, 21, 52, 0.5)', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(255, 107, 0, 0.15)' }}>
                    <span style={{ color: '#FF6B00', fontWeight: 800 }}>⚡</span>
                    <span style={{ color: '#dbe4f5', fontSize: '0.92rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '14px' }}>Engagement Options</h3>
              <p style={{ color: '#98a7c6', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                I offer flexible collaboration formats to fit your stage and bandwidth:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '14px', background: 'rgba(5, 8, 20, 0.7)', borderRadius: '10px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#f0f4fc' }}>1. Monthly Retainer</div>
                  <div style={{ color: '#98a7c6', fontSize: '0.86rem' }}>Hands-on execution, monthly roadmaps, and continuous ranking improvements.</div>
                </div>
                <div style={{ padding: '14px', background: 'rgba(5, 8, 20, 0.7)', borderRadius: '10px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#f0f4fc' }}>2. On-Site &amp; Hybrid Consulting</div>
                  <div style={{ color: '#98a7c6', fontSize: '0.86rem' }}>Available for on-site working sessions in Noida to guide your team directly.</div>
                </div>
                <div style={{ padding: '14px', background: 'rgba(5, 8, 20, 0.7)', borderRadius: '10px', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#f0f4fc' }}>3. One-Time Technical Audits</div>
                  <div style={{ color: '#98a7c6', fontSize: '0.86rem' }}>Deep-dive crawl and architecture audit with a prioritized developer checklist.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noida Project Form */}
      <section id="audit-form" style={{ padding: '70px 0', background: 'rgba(7, 11, 28, 0.85)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span className="tag">Project Discussion</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Let's Discuss Your <span className="gradient-text">Noida Project</span>
            </h2>
            <p style={{ color: '#98a7c6', fontSize: '0.95rem' }}>
              Share your requirements below. I will personally review your site and goals and suggest an actionable path forward.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f0f4fc', marginBottom: '8px' }}>Your Name *</label>
                <input type="text" name="name" required placeholder="Vikas Sharma" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#050814', border: '1px solid rgba(255, 107, 0, 0.25)', color: '#fff' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f0f4fc', marginBottom: '8px' }}>Phone / WhatsApp Number *</label>
                <input type="tel" name="phone" required placeholder="+91 86046 25862" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#050814', border: '1px solid rgba(255, 107, 0, 0.25)', color: '#fff' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f0f4fc', marginBottom: '8px' }}>Work Email (optional)</label>
                <input type="email" name="email" placeholder="vikas@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#050814', border: '1px solid rgba(255, 107, 0, 0.25)', color: '#fff' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f0f4fc', marginBottom: '8px' }}>Website URL *</label>
                <input type="text" name="website" required placeholder="www.mybrand.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#050814', border: '1px solid rgba(255, 107, 0, 0.25)', color: '#fff' }} />
              </div>
            </div>

            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#f0f4fc', marginBottom: '8px' }}>Project Overview &amp; Goals</label>
              <textarea name="message" rows="3" placeholder="Tell me what your brand does and whether you need ongoing SEO, ads management, or on-site consulting..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#050814', border: '1px solid rgba(255, 107, 0, 0.25)', color: '#fff' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}>
              🚀 Send Project Details
            </button>
            <p style={{ textAlign: 'center', color: '#657599', fontSize: '0.8rem', marginTop: '14px', margin: '14px 0 0' }}>
              Prompt reply within 24 hours guaranteed. No sales pitch, you talk directly with me.
            </p>
          </form>
        </div>
      </section>

      <Toast isVisible={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
    </div>
  );
}

