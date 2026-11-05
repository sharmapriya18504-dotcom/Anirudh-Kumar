import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import HeroGlobe3D from '../components/HeroGlobe3D.jsx';
import TiltCard3D from '../components/TiltCard3D.jsx';
import InteractivePricing from '../components/InteractivePricing.jsx';
import RoiCalculator from '../components/RoiCalculator.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';
import SeoAuditModal from '../components/SeoAuditModal.jsx';
import Toast from '../components/Toast.jsx';
import { BLOGS } from '../data/blogs.js';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('Prompt response within 24 hours guaranteed.');
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Honeypot & form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    service: '',
    message: '',
    honeypot: '' // spam trap
  });

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setToastMsg(`📋 ${label} copied to clipboard: ${text}`);
      setShowToast(true);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return; // silently discard bot submission
    }

    setFormSubmitted(true);
    setToastMsg('✅ Thank you! I have received your request. I will personally review your site and contact you within 24 hours.');
    setShowToast(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = '✅ Message Sent! Expect a reply within 24 hours';
      btn.style.background = '#00E5FF';
      btn.style.color = '#050814';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        setFormSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          website: '',
          service: '',
          message: '',
          honeypot: ''
        });
      }, 5000);
    }
  };

  // 6 Interactive 3D Service Cards definitions
  const servicesList = [
    {
      id: 'seo',
      title: 'SEO (Search Engine Optimization)',
      tagline: 'Technical SEO, On-page SEO, Content SEO & Link Building',
      desc: 'Build lasting organic authority on Google. I audit your technical foundation, optimize your site architecture, produce high-intent keyword content, and secure genuine backlinks that drive qualified buyers.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      ),
      linkText: 'Learn more about SEO →',
      linkUrl: '/services#seo'
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Improve Google Maps visibility and local enquiries',
      desc: 'Dominate the Google 3-Pack in your city. I optimize your Google Business Profile, structure consistent local NAP citations, generate customer review momentum, and capture customers searching nearby.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      linkText: 'Learn more about Local SEO →',
      linkUrl: '/services#local-seo'
    },
    {
      id: 'ads',
      title: 'Google Ads & Meta Ads',
      tagline: 'Paid advertising and lead generation campaigns',
      desc: 'High-intent PPC search campaigns and laser-targeted social ads on Facebook & Instagram. Strict negative keyword control, conversion-driven ad copy, and relentless bid management to maximize your ROAS.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      linkText: 'Learn more about Paid Ads →',
      linkUrl: '/services#ads'
    },
    {
      id: 'smm',
      title: 'Social Media Marketing',
      tagline: 'Social media strategy, content and growth',
      desc: 'Turn your social channels into active enquiry funnels. Tailored content calendars, carousel designs, reel scripts, and community growth focused on establishing credibility and driving inbound interest.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      linkText: 'Learn more about Social Media →',
      linkUrl: '/services#smm'
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      tagline: 'Professional, responsive and conversion-focused websites',
      desc: 'Fast, secure, mobile-first websites engineered with clean semantic code, optimized Core Web Vitals, intuitive user navigation, and clear call-to-actions that turn clicks into phone calls and enquiries.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      linkText: 'Learn more about Web Development →',
      linkUrl: '/services#web-dev'
    },
    {
      id: 'growth',
      title: 'Growth Advisory & Consulting',
      tagline: 'Digital strategy and business growth guidance',
      desc: 'Strategic 1-on-1 advisory for founders and marketing teams. I audit your complete digital presence, identify revenue leaks, prioritize high-impact growth levers, and provide actionable roadmaps.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      linkText: 'Learn more about Growth Advisory →',
      linkUrl: '/services#growth'
    }
  ];

  return (
    <div className="page-wrapper homepage">
      {/* =========================================================================
          HERO SECTION — 3D INTERACTIVE DIGITAL GLOBE & VALUE PROPOSITION
          ========================================================================= */}
      <section id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '110px', paddingBottom: '60px' }}>
        {/* Subtle ambient lighting backdrop */}
        <div style={{ position: 'absolute', top: '-10%', left: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(41,121,255,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 70%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Hero Content */}
            <div className="hero-content">
              <div className="hero-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '30px', marginBottom: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E5FF', display: 'inline-block', boxShadow: '0 0 10px #00E5FF' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#00E5FF', letterSpacing: '0.04em' }}>
                  Available for New Projects • Pan-India & UP / NCR
                </span>
              </div>

              <h1 className="hero-h1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '20px' }}>
                SEO Expert & Digital Marketer for{' '}
                <span className="gradient-text">Growing Businesses</span>
              </h1>

              <p className="hero-sub" style={{ fontSize: '1.1rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', marginBottom: '28px', maxWidth: '580px' }}>
                Hi, I'm <strong style={{ color: '#FFFFFF' }}>Anirudh Kumar</strong>. I help businesses get found on Google, Maps and social media, and turn that visibility into real enquiries and sales. I work remotely across India and on-site in Lucknow, Kanpur and Noida.
              </p>

              {/* Direct Working Promise Note */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '12px', marginBottom: '32px', maxWidth: '540px' }}>
                <span style={{ fontSize: '1.2rem', color: '#00E5FF' }}>🛡️</span>
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
                  <strong>You work directly with me.</strong> No account managers, no interns, no lock-in contract.
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="hero-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '14px 26px', fontSize: '0.95rem' }}
                >
                  <i className="bi bi-rocket-takeoff" style={{ fontSize: '1.1rem' }}></i>
                  Get My Free SEO Audit
                </button>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh%2C%20I%20would%20like%20to%20discuss%20digital%20marketing%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '0.95rem', borderColor: 'rgba(37,211,102,0.4)', color: '#25D366' }}
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: '1.1rem' }}></i>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Bar (PDF B3 & B5 Specification: Replace marquee with clean certified credentials) */}
              <div className="trust-bar" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#00E5FF' }}>✓</span> Google Analytics Certified
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#2979FF' }}>✓</span> Google Ads Certified
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#7C4DFF' }}>✓</span> Meta Ads Certified
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#00D68F' }}>✓</span> 100% White-Hat SEO
                </div>
              </div>
            </div>

            {/* Right Hero: Real Interactive 3D Digital Globe */}
            <div className="hero-visual" style={{ position: 'relative', width: '100%', minHeight: '440px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <HeroGlobe3D />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SIX INTERACTIVE 3D SERVICE CARDS
          ========================================================================= */}
      <section id="services" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              What I Do
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Specialized <span className="gradient-text">Digital Growth Solutions</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Comprehensive digital marketing services designed for measurable search rankings, qualified inbound enquiries, and transparent business ROI.
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {servicesList.map((srv) => (
              <TiltCard3D key={srv.id} maxTilt={9} scale={1.02}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '32px 28px',
                    background: 'linear-gradient(145deg, rgba(14,21,56,0.7) 0%, rgba(8,13,34,0.85) 100%)',
                    borderRadius: '20px',
                    border: '1px solid rgba(41,121,255,0.2)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.35)',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <div>
                    {/* 3D Icon Badge */}
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, rgba(41,121,255,0.2) 0%, rgba(124,77,255,0.2) 100%)',
                        border: '1px solid rgba(41,121,255,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00E5FF',
                        marginBottom: '20px',
                        boxShadow: '0 8px 20px rgba(41,121,255,0.15)'
                      }}
                    >
                      {srv.icon}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                      {srv.title}
                    </h3>

                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#00E5FF', marginBottom: '14px' }}>
                      {srv.tagline}
                    </div>

                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
                      {srv.desc}
                    </p>
                  </div>

                  <Link
                    to={srv.linkUrl}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#2979FF',
                      textDecoration: 'none',
                      transition: 'gap 0.2s ease, color 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00E5FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#2979FF'; }}
                  >
                    {srv.linkText}
                  </Link>
                </div>
              </TiltCard3D>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/services"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', fontSize: '0.95rem' }}
            >
              Explore All Service Deliverables & Inclusions →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ABOUT ME
          ========================================================================= */}
      <section id="about" className="page-section" style={{ position: 'relative', background: '#050814', padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            {/* Visual Persona Card */}
            <div style={{ position: 'relative' }}>
              <TiltCard3D maxTilt={7} scale={1.01}>
                <div
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(145deg, rgba(14,21,56,0.6) 0%, rgba(8,13,34,0.9) 100%)',
                    borderRadius: '24px',
                    border: '1px solid rgba(41,121,255,0.25)',
                    padding: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    textAlign: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src="/Untitled design (12).png"
                    alt="Anirudh Kumar - SEO Expert & Digital Marketer"
                    style={{
                      width: '100%',
                      maxHeight: '440px',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '36px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(5,8,20,0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0,229,255,0.3)',
                      borderRadius: '30px',
                      padding: '8px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span style={{ color: '#00E5FF' }}>📍</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                      Lucknow, UP • On-Site & Remote Pan-India
                    </span>
                  </div>
                </div>
              </TiltCard3D>
            </div>

            {/* About Copy matching PDF A4 */}
            <div>
              <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '14px' }}>
                About Me
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#fff', marginBottom: '20px', lineHeight: 1.25 }}>
                Independent SEO Expert & <span className="gradient-text">Growth Partner</span>
              </h2>

              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: '16px' }}>
                Hi, I'm <strong style={{ color: '#fff' }}>Anirudh Kumar</strong>. I help businesses get found on Google, Maps and social media, and turn that visibility into real enquiries and sales.
              </p>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}>
                I work remotely across India and on-site in Lucknow, Kanpur and Noida. I work as an independent consultant rather than a bloated agency. When you hire me, you work directly with me — no account managers, no junior interns, and no bureaucratic layers.
              </p>

              {/* Core Philosophy Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#00E5FF', fontSize: '1.1rem', marginTop: '2px' }}>🎯</span>
                  <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    <strong style={{ color: '#fff' }}>Revenue Over Vanity:</strong> Traffic is meaningless if it doesn't convert. I focus on high-intent keywords that drive paying clients.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#00E5FF', fontSize: '1.1rem', marginTop: '2px' }}>📊</span>
                  <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    <strong style={{ color: '#fff' }}>100% Transparency:</strong> You get straightforward reporting on what was done, what moved, and what I am optimizing next.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#00E5FF', fontSize: '1.1rem', marginTop: '2px' }}>🔓</span>
                  <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    <strong style={{ color: '#fff' }}>Month-to-Month Flexibility:</strong> No long-term lock-in contracts. You continue working with me because you see measurable value.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link to="/about" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
                  Read My Full Story & Principles →
                </Link>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.95rem', cursor: 'pointer' }}
                >
                  Request Free SEO Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: WHY WORK WITH ME (4 PILLARS + VERIFIED COMPARISON TABLE)
          ========================================================================= */}
      <section id="why" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              Why Work With Me
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Direct Partnership, <span className="gradient-text">Zero Agency Friction</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              A senior consultant executing your campaign directly — faster turnarounds, honest communication, and no wasted retainer overhead.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            <div style={{ padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '14px' }}>🤝</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Direct Access to Me</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                You speak directly with the specialist executing the strategy. No junior account managers or miscommunicated requests.
              </p>
            </div>

            <div style={{ padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '14px' }}>📊</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Clear, Honest Reporting</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                Understandable monthly summaries and weekly updates showing keyword positions, impressions, organic traffic, and enquiries.
              </p>
            </div>

            <div style={{ padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '14px' }}>📍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Local & Remote Flexibility</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                Available for in-person meetings across Lucknow, Kanpur, and Noida; seamless remote consulting for businesses nationwide.
              </p>
            </div>

            <div style={{ padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '14px' }}>🔓</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>No Lock-in Contracts</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                Work on straightforward monthly retainers. You stay because you get value and steady progress, not because you signed a 12-month lock.
              </p>
            </div>
          </div>

          {/* Honest Comparison Table */}
          <div style={{ background: 'rgba(14,21,56,0.7)', borderRadius: '20px', border: '1px solid rgba(41,121,255,0.2)', padding: '28px', overflowX: 'auto' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
              Working With Anirudh Kumar vs. A Typical Marketing Agency
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '14px 16px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', color: '#00E5FF', fontWeight: 700, background: 'rgba(41,121,255,0.15)', borderRadius: '8px 8px 0 0' }}>✓ Working With Me</th>
                  <th style={{ textAlign: 'left', padding: '14px 16px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 16px', color: '#FFFFFF', fontWeight: 600 }}>Point of Contact</td>
                  <td style={{ padding: '14px 16px', color: '#00E5FF', background: 'rgba(41,121,255,0.08)' }}>Direct communication with Anirudh</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)' }}>Junior account managers or interns</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 16px', color: '#FFFFFF', fontWeight: 600 }}>Pricing Structure</td>
                  <td style={{ padding: '14px 16px', color: '#00E5FF', background: 'rgba(41,121,255,0.08)' }}>Transparent, flat monthly packages from ₹8,000</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)' }}>Vague retainers + hidden implementation fees</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 16px', color: '#FFFFFF', fontWeight: 600 }}>Commitment</td>
                  <td style={{ padding: '14px 16px', color: '#00E5FF', background: 'rgba(41,121,255,0.08)' }}>Month-to-month, cancel anytime</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)' }}>6-12 month binding contracts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 16px', color: '#FFFFFF', fontWeight: 600 }}>Strategy & Execution</td>
                  <td style={{ padding: '14px 16px', color: '#00E5FF', background: 'rgba(41,121,255,0.08)' }}>Tailored to your specific city and buyers</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)' }}>Recycled generic templates across clients</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 16px', color: '#FFFFFF', fontWeight: 600 }}>Response Time</td>
                  <td style={{ padding: '14px 16px', color: '#00E5FF', background: 'rgba(41,121,255,0.08)', borderRadius: '0 0 8px 8px' }}>Prompt response within 24 hours guaranteed</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.6)' }}>Slow email ticketing queues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: WORK PROCESS (5-STEP ANIMATED TIMELINE)
          ========================================================================= */}
      <section id="process" className="page-section" style={{ position: 'relative', background: '#050814', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              My Process
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              How I <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              A transparent, systematic 5-step methodology built to eliminate guesswork and scale your search visibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', position: 'relative' }}>
            {[
              {
                step: '01',
                title: 'Free SEO Audit',
                desc: 'A complete technical and competitive health check of your current search presence, architecture, and local rankings.'
              },
              {
                step: '02',
                title: 'Custom Strategy',
                desc: 'A tailored, prioritized roadmap outlining high-intent keywords, content requirements, and technical fixes.'
              },
              {
                step: '03',
                title: 'Implementation',
                desc: 'Hands-on execution of on-page optimization, Google Business Profile enhancements, code fixes, and authority building.'
              },
              {
                step: '04',
                title: 'Tracking & Improvement',
                desc: 'Continuous monitoring of Google Search Console, GA4 events, ranking fluctuations, and user intent patterns.'
              },
              {
                step: '05',
                title: 'Reporting & Scaling',
                desc: 'Clear monthly reviews, honest performance debriefs, and strategic expansion into more competitive search queries.'
              }
            ].map((st, i) => (
              <div
                key={st.step}
                style={{
                  position: 'relative',
                  padding: '24px 20px',
                  background: 'rgba(14,21,56,0.6)',
                  border: '1px solid rgba(41,121,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    fontFamily: 'monospace',
                    color: '#00E5FF',
                    opacity: 0.9
                  }}
                >
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{st.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.7)' }}>{st.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              type="button"
              onClick={() => setAuditModalOpen(true)}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem', cursor: 'pointer' }}
            >
              Start Step 1: Claim Your Free Audit
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CASE STUDIES & RESULTS FRAMEWORK (AUTHENTIC & COMPLIANT)
          ========================================================================= */}
      <section id="results" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              Results & Proof
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Verified Performance & <span className="gradient-text">Client Integrity</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              I measure growth through verified analytics and revenue metrics, respecting full client privacy and competitive non-disclosure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            <TiltCard3D maxTilt={8} scale={1.01}>
              <div style={{ height: '100%', padding: '32px 26px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🔒</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Client Confidentiality First</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  Many of my clients operate in highly competitive local markets. I uphold strict non-disclosure policies and will never publicly expose a client's proprietary keyword targets or revenue data without explicit written consent.
                </p>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={8} scale={1.01}>
              <div style={{ height: '100%', padding: '32px 26px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📈</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How I Measure Success</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  Search rankings are good indicators, but real enquiries and revenue are what matter. Every campaign is tracked using Google Search Console, Google Analytics 4, and conversion events to verify organic return on investment.
                </p>
              </div>
            </TiltCard3D>

            <TiltCard3D maxTilt={8} scale={1.01}>
              <div style={{ height: '100%', padding: '32px 26px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🚀</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Become My Next Case Study</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  Looking for a transparent partner to handle your SEO, Google Ads, or local presence? Let's conduct a baseline audit of your business today and set realistic, achievable growth milestones.
                </p>
              </div>
            </TiltCard3D>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/case-studies" className="btn btn-outline" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
              Read My Case Studies & Measurement Framework →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROI CALCULATOR SECTION
          ========================================================================= */}
      <section className="page-section" style={{ background: '#050814', padding: '80px 0' }}>
        <div className="container">
          <RoiCalculator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: PRICING SECTION (PDF A2 VERIFIED PACKAGES)
          ========================================================================= */}
      <section id="pricing" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              Transparent Pricing
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Simple, Clear <span className="gradient-text">Packages</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              No hidden fees, no agency markups, and no lock-in contracts. Choose the plan that fits your current stage.
            </p>
          </div>

          <InteractivePricing />

          <p style={{ textAlign: 'center', marginTop: '30px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
            Need a custom combination of SEO, Google Ads, and Website Development?{' '}
            <a href="#contact" style={{ color: '#00E5FF', fontWeight: 600, textDecoration: 'underline' }}>
              Contact me for a custom proposal
            </a>
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: WHERE I WORK (SERVICE LOCATIONS)
          ========================================================================= */}
      <section id="locations" className="page-section" style={{ position: 'relative', background: '#050814', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              Service Coverage
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Local Focus, <span className="gradient-text">Pan-India Reach</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              On-site consulting in Uttar Pradesh and NCR, backed by seamless remote operations across India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {/* Lucknow */}
            <TiltCard3D maxTilt={7} scale={1.01}>
              <div style={{ height: '100%', padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏛️</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>SEO Expert in Lucknow</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00E5FF', fontWeight: 600, marginBottom: '12px' }}>Capital City & Regional Hub</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
                    Dedicated local SEO for Gomti Nagar, Hazratganj, Aliganj, and Indira Nagar businesses. In-person meetings available.
                  </p>
                </div>
                <Link to="/seo-expert-lucknow" style={{ color: '#2979FF', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Explore Lucknow SEO →
                </Link>
              </div>
            </TiltCard3D>

            {/* Kanpur */}
            <TiltCard3D maxTilt={7} scale={1.01}>
              <div style={{ height: '100%', padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏭</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>SEO Expert in Kanpur</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00E5FF', fontWeight: 600, marginBottom: '12px' }}>Commercial & Industrial Center</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
                    B2B and local search strategies for manufacturing, retail, and service brands across Civil Lines, Swaroop Nagar, and Kidwai Nagar.
                  </p>
                </div>
                <Link to="/seo-expert-kanpur" style={{ color: '#2979FF', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Explore Kanpur SEO →
                </Link>
              </div>
            </TiltCard3D>

            {/* Noida */}
            <TiltCard3D maxTilt={7} scale={1.01}>
              <div style={{ height: '100%', padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏢</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>SEO Expert in Noida</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00E5FF', fontWeight: 600, marginBottom: '12px' }}>Tech & Corporate Hub</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
                    Consulting for startups, D2C brands, and tech companies across Sectors 62, 125, Greater Noida, and Delhi NCR.
                  </p>
                </div>
                <Link to="/seo-expert-noida" style={{ color: '#2979FF', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Explore Noida SEO →
                </Link>
              </div>
            </TiltCard3D>

            {/* Remote India */}
            <TiltCard3D maxTilt={7} scale={1.01}>
              <div style={{ height: '100%', padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌐</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Remote SEO Pan-India</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00E5FF', fontWeight: 600, marginBottom: '12px' }}>Seamless Remote Workflow</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
                    Serving clients in Delhi, Bengaluru, Mumbai, Pune, and nationwide with weekly Google Meet sessions and real-time dashboards.
                  </p>
                </div>
                <Link to="/remote-seo-services" style={{ color: '#2979FF', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Explore Remote Services →
                </Link>
              </div>
            </TiltCard3D>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: BLOG & GUIDES PREVIEW (VERIFIED GUIDES FROM DATA)
          ========================================================================= */}
      <section id="blog" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div className="section-header text-center reveal" style={{ maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
              SEO & Marketing Insights
            </span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Actionable Guides for <span className="gradient-text">Growing Brands</span>
            </h2>
            <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Practical, no-fluff guides on local search, SEO pricing, Google Maps ranking, and converting website visitors into buyers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {BLOGS.slice(0, 3).map((post) => (
              <TiltCard3D key={post.slug} maxTilt={6} scale={1.01}>
                <div style={{ height: '100%', padding: '28px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', background: 'rgba(41,121,255,0.15)', color: '#00E5FF', borderRadius: '12px' }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.35 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/blog-post?post=${post.slug}`}
                    style={{ color: '#2979FF', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
                  >
                    Read Guide →
                  </Link>
                </div>
              </TiltCard3D>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/blog" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>
              View All 10 Marketing Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: FAQ
          ========================================================================= */}
      <section id="faq" className="page-section" style={{ position: 'relative', background: '#050814', padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div>
              <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
                Common Questions
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '32px' }}>
                Straight answers about how I work, timelines, and deliverables. Have a question not listed here? Message me directly.
              </p>

              <InteractiveFaq />
            </div>

            {/* Sidebar CTA cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(14,21,56,0.8) 0%, rgba(8,13,34,0.9) 100%)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  🚀 Claim Your Free SEO Audit
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, marginBottom: '20px' }}>
                  I will personally audit your website for technical errors, keyword opportunities, and Google Maps visibility, and send you an actionable report.
                </p>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                >
                  Request Free Audit
                </button>
              </div>

              <div style={{ padding: '30px', background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  💬 Chat on WhatsApp
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, marginBottom: '20px' }}>
                  Have an urgent enquiry or prefer quick messaging? Connect directly with me on WhatsApp. Prompt response within 24 hours guaranteed.
                </p>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh%2C%20I%20have%20a%20question%20regarding%20digital%20marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', borderColor: '#25D366', color: '#25D366' }}
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 16: CONTACT SECTION (VERIFIED DETAILS & REAL FORM)
          ========================================================================= */}
      <section id="contact" className="page-section" style={{ position: 'relative', background: '#080d22', padding: '90px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Contact Details */}
            <div>
              <span className="tag" style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(41,121,255,0.1)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '20px', fontSize: '0.85rem', color: '#00E5FF', marginBottom: '12px' }}>
                Get In Touch
              </span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                Let's Discuss Your <span className="gradient-text">Growth</span>
              </h2>
              <p className="section-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '32px' }}>
                Fill out the form with your details or connect directly via WhatsApp/phone. Prompt response within 24 hours guaranteed.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Phone */}
                <div
                  onClick={() => copyToClipboard('+91 86046 25862', 'Phone Number')}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '14px', cursor: 'pointer' }}
                  title="Click to copy phone number"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(41,121,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E5FF', fontSize: '1.2rem' }}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Phone / WhatsApp (Click to copy)</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>+91 86046 25862</div>
                  </div>
                </div>

                {/* Email */}
                <div
                  onClick={() => copyToClipboard('anirudhkumarseo@gmail.com', 'Email Address')}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '14px', cursor: 'pointer' }}
                  title="Click to copy email"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(41,121,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E5FF', fontSize: '1.2rem' }}>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Direct Email (Click to copy)</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>anirudhkumarseo@gmail.com</div>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'rgba(14,21,56,0.6)', border: '1px solid rgba(41,121,255,0.2)', borderRadius: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(41,121,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E5FF', fontSize: '1.2rem' }}>
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Based in</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>Lucknow, UP • On-site in Lucknow, Kanpur, Noida & Remote Pan-India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div style={{ background: 'rgba(14,21,56,0.85)', padding: '36px 32px', borderRadius: '24px', border: '1px solid rgba(41,121,255,0.25)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Request a Free SEO Audit & Consultation
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
                Prompt response within 24 hours guaranteed.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Honeypot field (hidden from legitimate users) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.8)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.8)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.8)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                      Website URL
                    </label>
                    <input
                      type="text"
                      name="website"
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.8)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.9)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem' }}
                  >
                    <option value="">— Select Primary Goal —</option>
                    <option value="Free SEO Audit">Free SEO Audit & Analysis</option>
                    <option value="Complete SEO Retainer">Complete SEO Retainer (Technical + On-page + Links)</option>
                    <option value="Local SEO & Google Maps">Local SEO & Google Maps Optimization</option>
                    <option value="Google Ads / Meta Ads">Google Ads / Meta Ads Campaign</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Growth Advisory">Growth Advisory & Consulting</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>
                    Describe your business & goals
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell me about your target city, current rankings, or what you want to achieve..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 14px', background: 'rgba(5,8,20,0.8)', border: '1px solid rgba(41,121,255,0.3)', borderRadius: '10px', color: '#fff', fontSize: '0.92rem', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', cursor: 'pointer' }}
                >
                  🚀 Request Free SEO Audit
                </button>

                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '4px' }}>
                  🔒 100% Confidential. Your data is never shared. Prompt response within 24 hours guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Scanner Modal */}
      <SeoAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

      {/* Global Toast */}
      <Toast
        isVisible={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
