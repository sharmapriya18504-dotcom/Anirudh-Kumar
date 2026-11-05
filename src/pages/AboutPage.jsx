import React from 'react';
import { Link } from 'react-router-dom';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function AboutPage() {
  return (
    <div className="page-wrapper about-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero */}
      <section style={{ padding: '80px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
                About Me
              </span>
              <h1
                className="section-heading"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  lineHeight: 1.15,
                  marginBottom: '20px',
                  color: '#f0f4fc',
                }}
              >
                About <span className="gradient-text">Anirudh Kumar</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#00E5FF', fontWeight: 600, marginBottom: '16px' }}>
                Freelance SEO &amp; Digital Marketing Consultant based in Lucknow, Uttar Pradesh.
              </p>
              <p style={{ color: '#98a7c6', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '20px' }}>
                I help businesses get found on Google, Maps and social media, and turn that visibility into real enquiries and sales. I work remotely with clients across India and on-site in Lucknow, Kanpur and Noida.
              </p>
              <p style={{ color: '#98a7c6', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '28px' }}>
                I keep my client list small on purpose. When you work with me, you work directly with me—no account managers, no junior interns, and no confusion between what was promised and what gets delivered.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '13px 26px' }}>
                  🚀 Get a Free SEO Audit
                </Link>
                <a
                  href="https://wa.me/918604625862"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '13px 22px' }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TiltCard3D maxTilt={10}>
                <div
                  className="glass-panel"
                  style={{
                    padding: '24px',
                    borderRadius: '28px',
                    background: 'linear-gradient(135deg, rgba(14, 21, 52, 0.85), rgba(8, 12, 32, 0.95))',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    maxWidth: '380px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.15)',
                  }}
                >
                  <img
                    src="/Untitled design (12).png"
                    alt="Anirudh Kumar, SEO expert in Lucknow"
                    style={{
                      width: '100%',
                      borderRadius: '20px',
                      display: 'block',
                      marginBottom: '18px',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#f0f4fc', margin: '0 0 4px 0' }}>Anirudh Kumar</h3>
                    <p style={{ color: '#00E5FF', fontSize: '0.85rem', fontWeight: 600, margin: '0 0 12px 0' }}>
                      SEO Specialist &amp; Digital Marketer
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                      <span className="tag" style={{ fontSize: '0.75rem' }}>📍 Gomti Nagar, Lucknow</span>
                      <span className="tag" style={{ fontSize: '0.75rem' }}>🌐 Remote Pan-India</span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          </div>
        </div>
      </section>

      {/* What I Believe & Approach */}
      <section style={{ padding: '70px 0', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(41, 121, 255, 0.15)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="glass-panel" style={{ padding: '40px', marginBottom: '35px' }}>
              <span className="tag">My Core Philosophy</span>
              <h2 style={{ fontSize: '1.8rem', color: '#f0f4fc', marginTop: '12px', marginBottom: '16px' }}>
                Marketing should be <span className="gradient-text">measurable &amp; tied to revenue</span>
              </h2>
              <p style={{ color: '#98a7c6', fontSize: '1.02rem', lineHeight: 1.75, margin: '0 0 16px 0' }}>
                I believe that digital marketing should never be hidden behind vanity metrics or technical jargon. More impressions mean nothing if your phone isn't ringing and enquiries aren't coming in.
              </p>
              <p style={{ color: '#98a7c6', fontSize: '1.02rem', lineHeight: 1.75, margin: 0 }}>
                My approach is simple: <strong>find what is stopping your business from being found, fix it, measure it, and report it in plain language.</strong>
              </p>
            </div>

            {/* Certifications (Verifiable) */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#f0f4fc', marginBottom: '18px', textAlign: 'center' }}>
                Verified Platform Certifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  { name: 'Google Analytics Certified', icon: '🏆', issuer: 'Google Skillshop' },
                  { name: 'Google Ads Certified', icon: '📊', issuer: 'Google Ads Search & Measurement' },
                  { name: 'Meta Certified Digital Associate', icon: '🎯', issuer: 'Meta Blueprint' },
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(14, 21, 52, 0.6)',
                      border: '1px solid rgba(41, 121, 255, 0.25)',
                      borderRadius: '16px',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <span style={{ fontSize: '1.8rem' }}>{cert.icon}</span>
                    <div>
                      <div style={{ color: '#f0f4fc', fontWeight: 700, fontSize: '0.94rem' }}>{cert.name}</div>
                      <div style={{ color: '#00E5FF', fontSize: '0.8rem', marginTop: '2px' }}>{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Overview */}
            <div className="glass-panel" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#f0f4fc', marginBottom: '16px' }}>What I Do</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', color: '#dbe4f5', fontSize: '0.94rem' }}>
                <div>• Technical &amp; On-Page SEO</div>
                <div>• Local SEO &amp; Google Business Profile</div>
                <div>• Google Ads (Search &amp; Lead Gen)</div>
                <div>• Meta Ads (Facebook &amp; Instagram)</div>
                <div>• Social Media Strategy &amp; Content</div>
                <div>• Fast, SEO-built Website Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '70px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <h2 className="section-heading" style={{ fontSize: '2.2rem' }}>
            Let's Find Out What's Holding Your <span className="gradient-text">Business Back Online</span>
          </h2>
          <p style={{ color: '#98a7c6', fontSize: '1rem', lineHeight: 1.6, margin: '16px 0 28px' }}>
            Send me your website link. I will review it and tell you what to fix first. Free, with no obligation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Request My Free SEO Audit
            </Link>
            <a href="tel:+918604625862" className="btn btn-outline" style={{ padding: '14px 24px' }}>
              📞 Call Me (+91 86046 25862)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
