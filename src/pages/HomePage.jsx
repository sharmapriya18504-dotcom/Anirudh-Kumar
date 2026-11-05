import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import Typewriter from '../components/Typewriter.jsx';
import InteractivePricing from '../components/InteractivePricing.jsx';
import RoiCalculator from '../components/RoiCalculator.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';
import SeoAuditModal from '../components/SeoAuditModal.jsx';

// Interactive & Visual Components (Matching Orange, Black & White Branding)
import HeroGlobe3D from '../components/HeroGlobe3D.jsx';
import QuickSeoScanner from '../components/QuickSeoScanner.jsx';
import SerpSimulator from '../components/SerpSimulator.jsx';
import CertificationsTrustBar from '../components/CertificationsTrustBar.jsx';
import InteractiveProcessTimeline from '../components/InteractiveProcessTimeline.jsx';
import AnalyticsGraphicCard from '../components/AnalyticsGraphicCard.jsx';
import InteractiveLocations from '../components/InteractiveLocations.jsx';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('24 hours mein aapko callback ya email reply mil jayega.');
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState('all');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`📋 ${label} copied to clipboard: ${text}`);
    setShowToast(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setToastMsg('✅ Thank you! 24 hours mein aapko callback ya email reply mil jayega.');
    setShowToast(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const btn = e.target.querySelector('button[type="submit"], input[type="submit"], .btn-primary');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = '✅ Submitted! 24 hrs mein reply milega.';
      btn.style.background = '#FF6B00';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        setFormSubmitted(false);
        setShowToast(false);
      }, 4500);
    }
  };

  return (
    <div className="page-wrapper homepage">
      {/* ==================== HERO SECTION ==================== */}
      <section id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-dot"></div>
                <span className="tag">SEO EXPERT | DIGITAL MARKETER</span>
              </div>
              <h1 className="hero-h1">
                <span className="line1">SEO Expert &amp; Digital Marketer for</span>
                <span className="line2 gradient-text">Growing Businesses</span>
              </h1>
              <p className="hero-desc" style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.7, margin: '16px 0 28px', maxWidth: '580px' }}>
                Hi, I'm <strong style={{ color: 'var(--text)' }}>Anirudh Kumar</strong>. I help businesses get found on <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Google</span>, <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Maps</span> and social media, and turn that visibility into real <span style={{ color: 'var(--accent)', fontWeight: 700 }}>enquiries and sales</span>. I work remotely across India and on-site in Lucknow, Kanpur and Noida.
              </p>
              <div className="hero-btns">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="bi bi-rocket-takeoff" style={{ marginRight: '8px' }}></i>
                  Get My Free SEO Audit
                </button>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20help%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#FF6B00' }}></i>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Verified Trust Line */}
              <div className="hero-trust-line" style={{ marginTop: '18px', fontSize: '0.86rem', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 900 }}>✓</span>
                <span>You work directly with me. No account managers, no interns, no lock-in contract.</span>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-num">200+</div>
                  <div className="stat-label">Clients Scaled</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">4.9★</div>
                  <div className="stat-label">Client Rating</div>
                </div>
              </div>
            </div>

            <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <HeroGlobe3D />
            </div>
          </div>

          {/* Quick Website Health Diagnostic Scanner */}
          <QuickSeoScanner />
        </div>
      </section>

      {/* ==================== MARQUEE TICKER ==================== */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item"><i className="bi bi-search"></i> SEO Expert Lucknow</div>
          <div className="marquee-item"><i className="bi bi-phone"></i> Social Media Marketing</div>
          <div className="marquee-item"><i className="bi bi-bullseye"></i> Meta Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Website Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Expert</div>
          <div className="marquee-item"><i className="bi bi-pencil-square"></i> Content Marketing</div>
          <div className="marquee-item"><i className="bi bi-geo-alt"></i> Local SEO Lucknow</div>
          <div className="marquee-item"><i className="bi bi-rocket-takeoff"></i> Digital Marketing Kanpur</div>
          <div className="marquee-item"><i className="bi bi-building"></i> SEO Specialist Noida</div>
          <div className="marquee-item"><i className="bi bi-laptop"></i> Remote SEO Services</div>
          {/* duplicate for seamless loop */}
          <div className="marquee-item"><i className="bi bi-search"></i> SEO Expert Lucknow</div>
          <div className="marquee-item"><i className="bi bi-phone"></i> Social Media Marketing</div>
          <div className="marquee-item"><i className="bi bi-bullseye"></i> Meta Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Website Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Expert</div>
          <div className="marquee-item"><i className="bi bi-pencil-square"></i> Content Marketing</div>
          <div className="marquee-item"><i className="bi bi-geo-alt"></i> Local SEO Lucknow</div>
          <div className="marquee-item"><i className="bi bi-rocket-takeoff"></i> Digital Marketing Kanpur</div>
          <div className="marquee-item"><i className="bi bi-building"></i> SEO Specialist Noida</div>
          <div className="marquee-item"><i className="bi bi-laptop"></i> Remote SEO Services</div>
        </div>
      </div>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal-left">
              <div className="about-photo-frame">
                <div className="about-photo-bg">
                  <img src="/Untitled design (12).png" alt="Anirudh Kumar - SEO Expert" className="about-persona-img" />
                  <div className="about-photo-badge">📍 Lucknow, Uttar Pradesh</div>
                </div>
              </div>
              <div className="about-badge-float">
                <div className="big">5+</div>
                <div className="small">Years of Experience<br />in Digital Marketing</div>
              </div>
            </div>

            <div className="about-content reveal-right">
              <span className="tag">Hi, I'm Anirudh</span>
              <div className="divider"></div>
              <h2 className="section-heading">
                Direct Freelance <span className="gradient-text">SEO &amp; Growth Partner</span>
              </h2>
              <p>
                I'm a digital marketer and SEO specialist based in Lucknow. I help local businesses, clinics, coaching institutes, real estate firms, manufacturers and D2C brands dominate Google search and generate predictable enquiries.
              </p>
              <p>
                I keep my client list intentionally small so every single project receives my direct personal attention. My approach is simple: find what is stopping your business from being found, fix it, measure it, and report it in plain language.
              </p>

              <div className="cert-grid">
                <div className="cert-item">
                  <span className="cert-icon">🏆</span>
                  <span className="cert-text">Google Analytics Certified</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🎯</span>
                  <span className="cert-text">Google Ads Certified</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">📱</span>
                  <span className="cert-text">Meta Ads Certified</span>
                </div>
              </div>

              <div className="skill-bars">
                <div className="skill-row">
                  <div className="skill-label">
                    <span>Technical &amp; Local SEO</span>
                    <span>98%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill animate" style={{ transform: 'scaleX(0.98)' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <div className="skill-label">
                    <span>Performance Ads (Google &amp; Meta ROAS)</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill animate" style={{ transform: 'scaleX(0.95)' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <div className="skill-label">
                    <span>Conversion Architecture &amp; CRO</span>
                    <span>92%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill animate" style={{ transform: 'scaleX(0.92)' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn btn-outline" to="/about">Read My Story →</Link>
                <a href="#contact" className="btn btn-primary">Book Consultation →</a>
              </div>
            </div>
          </div>

          {/* Real Verified Industry Certifications Showcase */}
          <CertificationsTrustBar />
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="tag">What I Can Do For Your Business</span>
            <h2 className="section-heading mt-4">
              Professional <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="section-sub mx-auto">
              Pick one service or combine them. I will tell you honestly what your business needs first to scale revenue.
            </p>
          </div>

          <div className="services-grid">
            {/* 1. SEO */}
            <Link className="service-card reveal" to="/seo-lucknow">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-search"></i> 🎯 Organic Search</span>
                <span className="service-idx-num">01</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-seo.png" alt="SEO Services in Lucknow" className="service-card-img" />
                <div className="service-img-overlay-tag">Google Page #1</div>
              </div>
              <h3>SEO (Search Engine Optimization)</h3>
              <p>Get your website to rank on Google for high-intent searches your buyers actually make. Technical fixes, on-page SEO, content, and ethical authority links.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Core Web Vitals &amp; Technical Health</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>High-Intent Commercial Keyword Targets</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Sustainable White-Hat Backlinks</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore SEO Capabilities</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* 2. LOCAL SEO */}
            <Link className="service-card reveal" to="/seo-expert-kanpur">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-geo-alt-fill"></i> 📍 Local 3-Pack</span>
                <span className="service-idx-num">02</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-kanpur.png" alt="Local SEO & Google Business Profile" className="service-card-img" />
                <div className="service-img-overlay-tag">Google Maps</div>
              </div>
              <h3>Local SEO &amp; Google Business Profile</h3>
              <p>Dominate Google Maps and 'near me' searches across Lucknow, Kanpur, and Noida so local customers call and visit you first.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Top 3 Google Maps Ranking Strategy</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Verified Indian NAP Directory Citations</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Customer Review Generation Funnels</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore Local SEO Services</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* 3. GOOGLE & META ADS */}
            <Link className="service-card reveal" to="/ads-lucknow">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-bullseye"></i> ⚡ Performance Ads</span>
                <span className="service-idx-num">03</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-ads.png" alt="Google Ads & Meta Ads Lead Generation" className="service-card-img" />
                <div className="service-img-overlay-tag">Verified ROAS</div>
              </div>
              <h3>Google Ads &amp; Meta Performance Ads</h3>
              <p>Paid performance marketing campaigns engineered around genuine inquiries and sales, not vanity clicks. Transparent tracking for every rupee spent.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Google Search Ads for High-Intent Buyers</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Meta (FB/Insta) Retargeting &amp; Lookalikes</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Negative Keyword Sculpting &amp; ROAS Guard</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore Performance Ads</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* 4. SOCIAL MEDIA MARKETING */}
            <Link className="service-card reveal" to="/smm-lucknow">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-share-fill"></i> 📱 Social Growth</span>
                <span className="service-idx-num">04</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-smm.png" alt="Social Media Marketing Lucknow" className="service-card-img" />
                <div className="service-img-overlay-tag">Brand Reach</div>
              </div>
              <h3>Social Media Marketing (SMM)</h3>
              <p>Consistent, viral, and brand-building content across Instagram, LinkedIn, and Facebook that earns trust and triggers warm customer inquiries.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>High-Retention Reels &amp; Carousel Creatives</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>30-Day Pre-Planned Content Calendar</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Active Community Engagement &amp; DMs</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore Social Media</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* 5. WEBSITE DEVELOPMENT */}
            <Link className="service-card reveal" to="/web-dev-lucknow">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-laptop"></i> 💻 Fast &amp; SEO-Ready</span>
                <span className="service-idx-num">05</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-web.png" alt="Website Development & Landing Pages" className="service-card-img" />
                <div className="service-img-overlay-tag">90+ PageSpeed</div>
              </div>
              <h3>Website Development &amp; Landing Pages</h3>
              <p>Blazing-fast, mobile-friendly websites and conversion-focused landing pages designed from day one to turn visitors into booked enquiries.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Sub-1.5s Load Time &amp; Mobile Optimization</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Conversion-Engineered Layout &amp; CTAs</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Built-in Structured Data &amp; Canonical SEO</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore Web Development</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>

            {/* 6. GROWTH ADVISORY */}
            <Link className="service-card reveal" to="/seo-consultant">
              <div className="service-card-top">
                <span className="service-badge-pill"><i className="bi bi-compass"></i> 💡 1-on-1 Consulting</span>
                <span className="service-idx-num">06</span>
              </div>
              <div className="service-img-wrap">
                <img src="/service-consulting.png" alt="Growth Advisory & SEO Consulting" className="service-card-img" />
                <div className="service-img-overlay-tag">Strategic Roadmap</div>
              </div>
              <h3>Growth Advisory &amp; SEO Consulting</h3>
              <p>Not ready for a full retainer? Book a direct strategic session with Anirudh. I review your marketing funnel, audit bottlenecks, and deliver a 90-day blueprint.</p>
              
              <div className="service-deliverables">
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Full Tech &amp; Competitor Gap Diagnostics</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Wasted Spend &amp; Leaky Funnel Identification</span>
                </div>
                <div className="service-deliv-item">
                  <span className="deliv-check">✓</span>
                  <span>Direct 1-on-1 Strategy Calls with Anirudh</span>
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-action-link">
                  <span>Explore Growth Advisory</span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>

          {/* Interactive SERP Simulator */}
          <SerpSimulator />
        </div>
      </section>

      {/* ==================== WHY CHOOSE ME & COMPARISON ==================== */}
      <section id="why" className="page-section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="why-grid">
            <div className="reveal-left">
              <span className="tag">Why Businesses Choose Me Directly</span>
              <div className="divider"></div>
              <h2 className="section-heading">
                Direct Expert Access — <span className="gradient-text">Zero Agency Runaround</span>
              </h2>
              <p className="section-sub" style={{ marginBottom: '24px' }}>
                You talk directly to me, not a sales team. I handle your digital strategy and execution myself with complete transparency.
              </p>

              <div className="why-points">
                <div className="why-point">
                  <div className="why-point-icon">🤝</div>
                  <div>
                    <div className="why-point-title">Direct Access to Anirudh</div>
                    <div className="why-point-desc">No junior interns or account managers. Strategy and technical execution are handled directly by me.</div>
                  </div>
                </div>

                <div className="why-point">
                  <div className="why-point-icon">📊</div>
                  <div>
                    <div className="why-point-title">Clear, Plain-Language Reporting</div>
                    <div className="why-point-desc">You receive a simple monthly PDF report showing exactly what was done, what changed, and how many calls arrived.</div>
                  </div>
                </div>

                <div className="why-point">
                  <div className="why-point-icon">📍</div>
                  <div>
                    <div className="why-point-title">Local Presence + Remote Reach</div>
                    <div className="why-point-desc">Based in Gomti Nagar, Lucknow. Available on-site in Kanpur &amp; Noida, and working remotely across India.</div>
                  </div>
                </div>

                <div className="why-point">
                  <div className="why-point-icon">🔓</div>
                  <div>
                    <div className="why-point-title">No Lock-in Contracts</div>
                    <div className="why-point-desc">All work is month-to-month. If I am not delivering measurable value, you are free to leave anytime.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="vs-table">
                <div className="vs-header">
                  <div>Feature</div>
                  <div className="col-me">✅ Anirudh Kumar</div>
                  <div>❌ Typical Agency</div>
                </div>
                <div className="vs-row">
                  <span className="label">Personal Expert Attention</span>
                  <span className="vs-yes">✅ Always Direct</span>
                  <span className="vs-no">❌ Handed to junior interns</span>
                </div>
                <div className="vs-row">
                  <span className="label">Transparent Pricing</span>
                  <span className="vs-yes">✅ Fixed clear tiers</span>
                  <span className="vs-no">❌ Hidden agency markups</span>
                </div>
                <div className="vs-row">
                  <span className="label">Direct Communication</span>
                  <span className="vs-yes">✅ WhatsApp &amp; Calls</span>
                  <span className="vs-no">❌ Slow ticketing system</span>
                </div>
                <div className="vs-row">
                  <span className="label">Reporting Style</span>
                  <span className="vs-yes">✅ Plain numbers &amp; leads</span>
                  <span className="vs-no">❌ Confusing vanity metrics</span>
                </div>
                <div className="vs-row">
                  <span className="label">Local Market Knowledge</span>
                  <span className="vs-yes">✅ UP &amp; NCR Ground Reality</span>
                  <span className="vs-no">❌ Generic cookie-cutter templates</span>
                </div>
                <div className="vs-row">
                  <span className="label">Preliminary SEO Audit</span>
                  <span className="vs-yes">✅ 100% Free</span>
                  <span className="vs-no">❌ Charged ₹3,000 - ₹8,000</span>
                </div>
                <div className="vs-row">
                  <span className="label">Contract Terms</span>
                  <span className="vs-yes">✅ Month-to-month</span>
                  <span className="vs-no">❌ 6 to 12 month lock-in</span>
                </div>
              </div>

              <div style={{ marginTop: '16px', padding: '16px 20px', background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text2)' }}>
                💡 <strong style={{ color: 'var(--text)' }}>The Anirudh Guarantee:</strong> Work directly with an experienced specialist who personally cares about your business outcomes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORK PROCESS ==================== */}
      <section id="process">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">How We Work Together</span>
            <div className="divider"></div>
            <h2 className="section-heading">A Proven <span className="gradient-text">5-Step System</span></h2>
            <p className="section-sub">
              From the initial free audit to monthly scale, here is the transparent roadmap I follow for every project.
            </p>
          </div>

          <InteractiveProcessTimeline />
        </div>
      </section>

      {/* ==================== CASE STUDIES / RESULTS ==================== */}
      <section id="portfolio">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">Results From Real Projects</span>
            <div className="divider"></div>
            <h2 className="section-heading">Verified <span className="gradient-text">Case Studies &amp; Growth</span></h2>
            <p className="section-sub">
              Real metrics from actual campaigns in Lucknow, Kanpur and across India.
            </p>

            {/* Interactive Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
              {[
                { id: 'all', label: 'All Case Studies (3)' },
                { id: 'healthcare', label: '🏥 Healthcare Clinic' },
                { id: 'ecommerce', label: '🛍️ Kanpur Apparel' },
                { id: 'education', label: '🎓 Coaching Institute' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPortfolioTab(tab.id)}
                  style={{
                    background: portfolioTab === tab.id ? 'var(--accent)' : 'var(--bg2)',
                    color: portfolioTab === tab.id ? '#fff' : 'var(--text2)',
                    border: portfolioTab === tab.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: '30px',
                    padding: '6px 16px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Search Console Graph Card */}
          <AnalyticsGraphicCard />

          <div className="portfolio-grid">
            {(portfolioTab === 'all' || portfolioTab === 'healthcare') && (
              <div className="portfolio-card reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="portfolio-top-bar">
                  <span className="portfolio-sector-badge">
                    <i className="bi bi-hospital"></i> Healthcare • Gomti Nagar, Lucknow
                  </span>
                  <span className="portfolio-verified-badge">
                    <i className="bi bi-patch-check-fill"></i> Verified Analytics
                  </span>
                </div>

                <div className="portfolio-project-img-wrap">
                  <img src="/service-seo.png" alt="Multi-Specialty Healthcare Clinic Case Study" className="portfolio-project-img" />
                  <div className="portfolio-project-overlay-tag">Healthcare • Lucknow</div>
                </div>
                <h3>Multi-Specialty Healthcare Clinic</h3>
                <p className="portfolio-card-desc">
                  Procedure page optimization and local citation clean-up for high-intent medical queries in Gomti Nagar and Indiranagar.
                </p>

                {/* Before / After Transformation Box */}
                <div className="portfolio-transformation-banner">
                  <div className="transform-col">
                    <span className="transform-lbl">Before SEO</span>
                    <span className="transform-val red">8 Calls / mo</span>
                  </div>
                  <div className="transform-arrow">➔</div>
                  <div className="transform-col">
                    <span className="transform-lbl">After 4 Months</span>
                    <span className="transform-val green">31 Patient Calls / mo</span>
                  </div>
                  <div className="transform-badge">+287% Net Growth</div>
                </div>

                {/* Visual Trajectory Chart */}
                <div className="portfolio-visual-chart">
                  <div className="chart-header">
                    <span>Patient Call Trajectory</span>
                    <span className="chart-peak">Peak 3.8x</span>
                  </div>
                  <div className="chart-bars-wrap">
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '26%' }}></div>
                      <span className="bar-label">M1</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '48%' }}></div>
                      <span className="bar-label">M2</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '77%' }}></div>
                      <span className="bar-label">M3</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill active" style={{ height: '100%' }}></div>
                      <span className="bar-label">M4</span>
                    </div>
                  </div>
                </div>

                {/* Key Tactics Tags */}
                <div className="portfolio-tags-row">
                  <span className="portfolio-pill-tag">Google Business Profile</span>
                  <span className="portfolio-pill-tag">Local Citations</span>
                  <span className="portfolio-pill-tag">Medical Schema</span>
                  <span className="portfolio-pill-tag">Page Speed &lt;1s</span>
                </div>

                {/* 3 Metric Stats */}
                <div className="portfolio-results-grid">
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">+340%</div>
                    <div className="stat-box-lbl">Organic Traffic</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">Page #1</div>
                    <div className="stat-box-lbl">12 Niche Keywords</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">3.8x</div>
                    <div className="stat-box-lbl">Patient Calls</div>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="portfolio-client-quote">
                  <div className="client-avatar-badge">SV</div>
                  <div>
                    <p className="client-quote-text">
                      "Calls from Google Maps nearly quadrupled in 4 months. Anirudh's local SEO approach is transparent and delivered exactly what was promised."
                    </p>
                    <div className="client-quote-author">— Dr. S. K. Verma, Clinic Director</div>
                  </div>
                </div>

                <div className="portfolio-card-footer">
                  <Link to="/case-studies" className="portfolio-detail-btn">
                    <span>Read Full Case Study &amp; Strategy</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}

            {(portfolioTab === 'all' || portfolioTab === 'ecommerce') && (
              <div className="portfolio-card reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="portfolio-top-bar">
                  <span className="portfolio-sector-badge">
                    <i className="bi bi-shop"></i> B2B Textile • Kanpur City
                  </span>
                  <span className="portfolio-verified-badge">
                    <i className="bi bi-patch-check-fill"></i> Verified Meta &amp; GA4
                  </span>
                </div>

                <div className="portfolio-project-img-wrap">
                  <img src="/service-ads.png" alt="Cotton Fabric & Apparel Supplier Case Study" className="portfolio-project-img" />
                  <div className="portfolio-project-overlay-tag">B2B Apparel • Kanpur</div>
                </div>
                <h3>Cotton Fabric &amp; Apparel Supplier</h3>
                <p className="portfolio-card-desc">
                  Wholesale B2B intent search optimization and targeted Meta retargeting campaigns across Uttar Pradesh and Delhi NCR.
                </p>

                {/* Before / After Transformation Box */}
                <div className="portfolio-transformation-banner">
                  <div className="transform-col">
                    <span className="transform-lbl">Before Campaign</span>
                    <span className="transform-val red">1.5x Low ROAS</span>
                  </div>
                  <div className="transform-arrow">➔</div>
                  <div className="transform-col">
                    <span className="transform-lbl">After 90 Days</span>
                    <span className="transform-val green">7.2x Verified ROAS</span>
                  </div>
                  <div className="transform-badge">₹15L+ Monthly</div>
                </div>

                {/* Visual Trajectory Chart */}
                <div className="portfolio-visual-chart">
                  <div className="chart-header">
                    <span>Ad Spend Return (ROAS) Trajectory</span>
                    <span className="chart-peak">7.2x Return</span>
                  </div>
                  <div className="chart-bars-wrap">
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '22%' }}></div>
                      <span className="bar-label">M1</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '52%' }}></div>
                      <span className="bar-label">M2</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '78%' }}></div>
                      <span className="bar-label">M3</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill active" style={{ height: '100%' }}></div>
                      <span className="bar-label">M4</span>
                    </div>
                  </div>
                </div>

                {/* Key Tactics Tags */}
                <div className="portfolio-tags-row">
                  <span className="portfolio-pill-tag">B2B Intent Queries</span>
                  <span className="portfolio-pill-tag">Meta Retargeting</span>
                  <span className="portfolio-pill-tag">Negative Keywords</span>
                  <span className="portfolio-pill-tag">WhatsApp Funnel</span>
                </div>

                {/* 3 Metric Stats */}
                <div className="portfolio-results-grid">
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">7.2x</div>
                    <div className="stat-box-lbl">Meta Ads ROAS</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">#1 Rank</div>
                    <div className="stat-box-lbl">B2B Kanpur Fabric</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">₹15L+</div>
                    <div className="stat-box-lbl">Monthly Trade Volume</div>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="portfolio-client-quote">
                  <div className="client-avatar-badge">AA</div>
                  <div>
                    <p className="client-quote-text">
                      "Our wholesale B2B textile orders from Delhi NCR and UP tripled within 90 days. Exceptional return on ad spend and clear weekly reporting."
                    </p>
                    <div className="client-quote-author">— Amit Agarwal, Managing Director</div>
                  </div>
                </div>

                <div className="portfolio-card-footer">
                  <Link to="/case-studies" className="portfolio-detail-btn">
                    <span>Read Full Case Study &amp; Strategy</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}

            {(portfolioTab === 'all' || portfolioTab === 'education') && (
              <div className="portfolio-card reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="portfolio-top-bar">
                  <span className="portfolio-sector-badge">
                    <i className="bi bi-mortarboard"></i> Education • Hazratganj, Lucknow
                  </span>
                  <span className="portfolio-verified-badge">
                    <i className="bi bi-patch-check-fill"></i> Verified GSC
                  </span>
                </div>

                <div className="portfolio-project-img-wrap">
                  <img src="/service-kanpur.png" alt="Competitive Exam Coaching Institute Case Study" className="portfolio-project-img" />
                  <div className="portfolio-project-overlay-tag">Education • Lucknow</div>
                </div>
                <h3>Competitive Exam Coaching Institute</h3>
                <p className="portfolio-card-desc">
                  Ranked #1 for 14 competitive exam search queries across Lucknow, capturing student searches before admission sessions opened.
                </p>

                {/* Before / After Transformation Box */}
                <div className="portfolio-transformation-banner">
                  <div className="transform-col">
                    <span className="transform-lbl">Before SEO</span>
                    <span className="transform-val red">Page 4 (Invisible)</span>
                  </div>
                  <div className="transform-arrow">➔</div>
                  <div className="transform-col">
                    <span className="transform-lbl">After 5 Months</span>
                    <span className="transform-val green">#1 Google 3-Pack</span>
                  </div>
                  <div className="transform-badge">100% Batches Filled</div>
                </div>

                {/* Visual Trajectory Chart */}
                <div className="portfolio-visual-chart">
                  <div className="chart-header">
                    <span>Organic Search Clicks Trajectory</span>
                    <span className="chart-peak">1,280 Clicks / mo</span>
                  </div>
                  <div className="chart-bars-wrap">
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '25%' }}></div>
                      <span className="bar-label">M1</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '45%' }}></div>
                      <span className="bar-label">M2</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill" style={{ height: '70%' }}></div>
                      <span className="bar-label">M3</span>
                    </div>
                    <div className="chart-bar-col">
                      <div className="chart-bar-fill active" style={{ height: '100%' }}></div>
                      <span className="bar-label">M4</span>
                    </div>
                  </div>
                </div>

                {/* Key Tactics Tags */}
                <div className="portfolio-tags-row">
                  <span className="portfolio-pill-tag">Local 3-Pack</span>
                  <span className="portfolio-pill-tag">Exam Landing Pages</span>
                  <span className="portfolio-pill-tag">Review Engine</span>
                  <span className="portfolio-pill-tag">FAQ Schema</span>
                </div>

                {/* 3 Metric Stats */}
                <div className="portfolio-results-grid">
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">#1 Rank</div>
                    <div className="stat-box-lbl">Local 3-Pack Rank</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">1,280</div>
                    <div className="stat-box-lbl">Clicks / Month</div>
                  </div>
                  <div className="portfolio-stat-box">
                    <div className="stat-box-val">100%</div>
                    <div className="stat-box-lbl">Full Batch Admissions</div>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="portfolio-client-quote">
                  <div className="client-avatar-badge">RK</div>
                  <div>
                    <p className="client-quote-text">
                      "All 14 competitive exam batches were fully occupied weeks before the start of the session. Anirudh's SEO expertise in Lucknow is unrivaled."
                    </p>
                    <div className="client-quote-author">— Rajesh K., Academic Director</div>
                  </div>
                </div>

                <div className="portfolio-card-footer">
                  <Link to="/case-studies" className="portfolio-detail-btn">
                    <span>Read Full Case Study &amp; Strategy</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex-center mt-6">
            <Link to="/case-studies" className="btn btn-outline">
              📋 View All Detailed Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ROI CALCULATOR ==================== */}
      <div className="container">
        <RoiCalculator />
      </div>

      {/* ==================== PRICING SECTION ==================== */}
      <section id="pricing">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">Transparent Pricing</span>
            <div className="divider"></div>
            <h2 className="section-heading">Simple, Clear <span className="gradient-text">Pricing</span></h2>
            <p className="section-sub">
              Every package starts with a free SEO audit. No hidden charges, no lock-in contracts.
            </p>
          </div>

          <InteractivePricing />

          <p className="text-center mt-4" style={{ color: 'var(--text2)', fontSize: '0.85rem' }}>
            Need something custom? Tell me what you need and I will build a package for you.{' '}
            <a href="#contact" style={{ color: 'var(--accent)', fontWeight: '700' }}>Contact karein</a>
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">Client Reviews</span>
            <div className="divider"></div>
            <h2 className="section-heading">Verified Client <span className="gradient-text">Feedback</span></h2>
            <p className="section-sub">
              Genuine experiences from business owners who work directly with Anirudh Kumar.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testi-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                "Anirudh ne hamare clinic ki Google ranking completely transform kar di. Pehle page 4 par the, ab page 1 par aate hain. Appointments 3 guna ho gayi. Direct baat hoti hai, koi junior nahi — bilkul genuine person hai."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">DR</div>
                <div>
                  <div className="testi-name">Dr. Rahul Mishra</div>
                  <div className="testi-role">Clinic Founder</div>
                  <div className="testi-city">📍 Gomti Nagar, Lucknow</div>
                </div>
              </div>
            </div>

            <div className="testi-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                "Meta Ads ke baare mein humein clarity nahi thi. Anirudh ne clear funnel banaya aur hamare products ki wholesale inquiries 5x ho gayi. ROAS 7x se zyada aa raha hai. Best ROI investment!"
              </p>
              <div className="testi-author">
                <div className="testi-avatar"><i className="bi bi-person-circle"></i></div>
                <div>
                  <div className="testi-name">Priya Sharma</div>
                  <div className="testi-role">Garments Brand Co-Founder</div>
                  <div className="testi-city">📍 Kanpur City</div>
                </div>
              </div>
            </div>

            <div className="testi-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                "Hamari coaching ke admissions bohot slow the. Anirudh Kumar ka SEO aur Google Business Profile combination kamaal ka tha. 4 mahine mein Hazratganj ke top searches mein aa gaye."
              </p>
              <div className="testi-author">
                <div className="testi-avatar"><i className="bi bi-person-circle"></i></div>
                <div>
                  <div className="testi-name">Amit Verma</div>
                  <div className="testi-role">Institute Director</div>
                  <div className="testi-city">📍 Hazratganj, Lucknow</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-6"
            style={{
              padding: '20px',
              background: 'rgba(255,107,0,0.05)',
              border: '1px solid rgba(255,107,0,0.15)',
              borderRadius: 'var(--radius)',
              marginTop: '32px'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--text2)' }}>
              Google Reviews par verified ⭐ 4.9/5 rating — Happy clients across UP &amp; India
            </div>
            <div style={{ fontFamily: 'var(--ff-d)', fontSize: '2rem', color: 'var(--accent)', marginTop: '8px' }}>
              ⭐⭐⭐⭐⭐ 4.9 / 5.0
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHERE I WORK / LOCATIONS ==================== */}
      <section id="locations">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">Where I Work</span>
            <div className="divider"></div>
            <h2 className="section-heading">Remote Across India. <span className="gradient-text">On-Site in Three Cities.</span></h2>
            <p className="section-sub">
              Available for on-site meetings in Lucknow, Kanpur and Noida, and managing high-performance remote retainers pan-India.
            </p>
          </div>

          {/* Interactive City Selector */}
          <InteractiveLocations />
        </div>
      </section>

      {/* ==================== BLOG PREVIEW ==================== */}
      <section id="blog">
        <div className="container">
          <div className="section-header center text-center reveal">
            <span className="tag">Digital Marketing Blog</span>
            <div className="divider"></div>
            <h2 className="section-heading">Actionable Insights, <span className="gradient-text">Real Value</span></h2>
            <p className="section-sub">
              Practical guides written specifically for local business owners in Lucknow, Kanpur and India.
            </p>
          </div>

          <div className="blog-grid">
            <div className="blog-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="blog-img">
                <div className="blog-img-bg"></div>
                <span style={{ position: 'relative', zIndex: '1' }}>🔍</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-cat">Local SEO</span>
                  <span>5 min read</span>
                  <span>2026</span>
                </div>
                <h3>How to Rank Your Business in Google Maps in Lucknow</h3>
                <p>A step-by-step blueprint to optimize your Google Business Profile and capture the local 3-pack calls in Gomti Nagar and Hazratganj.</p>
                <Link className="blog-link" to="/blog-post?post=how-to-rank-business-in-lucknow">Read Guide →</Link>
              </div>
            </div>

            <div className="blog-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="blog-img">
                <div className="blog-img-bg" style={{ background: 'linear-gradient(145deg,var(--bg3),rgba(255,184,0,0.15))' }}></div>
                <span style={{ position: 'relative', zIndex: '1' }}>💰</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-cat">Pricing</span>
                  <span>7 min read</span>
                  <span>2026</span>
                </div>
                <h3>How Much Does SEO Really Cost in India?</h3>
                <p>Complete breakdown of monthly retainer models, deliverables to demand, and how to avoid paying for vanity keyword rankings.</p>
                <Link className="blog-link" to="/blog-post?post=seo-cost-in-lucknow">Read Guide →</Link>
              </div>
            </div>

            <div className="blog-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="blog-img">
                <div className="blog-img-bg" style={{ background: 'linear-gradient(145deg,var(--bg3),rgba(255,51,102,0.1))' }}></div>
                <span style={{ position: 'relative', zIndex: '1' }}>🎯</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-cat">Performance Ads</span>
                  <span>6 min read</span>
                  <span>2026</span>
                </div>
                <h3>Meta Ads vs Google Ads for Local Businesses</h3>
                <p>Discover which platform delivers the highest ROI and lowest cost per lead for your specific industry.</p>
                <Link className="blog-link" to="/blog-post?post=best-seo-expert-in-lucknow">Read Guide →</Link>
              </div>
            </div>
          </div>

          <div className="flex-center mt-6">
            <Link className="btn btn-outline" to="/blog">📚 Explore All Articles →</Link>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq">
        <div className="container">
          <div className="faq-grid">
            <div>
              <span className="tag reveal">Frequently Asked Questions</span>
              <div className="divider reveal"></div>
              <h2 className="section-heading reveal">
                Aapke <span className="gradient-text">Sawaal,<br />Mere Jawab</span>
              </h2>
              <p className="section-sub reveal" style={{ marginBottom: '32px' }}>
                Koi bhi doubt ho toh seedha WhatsApp karein — main personally jawab deta hoon.
              </p>
              <InteractiveFaq />
            </div>

            <div className="faq-sidebar">
              <div className="faq-sidebar-card reveal-right">
                <h3>🚀 Need a Free SEO Audit?</h3>
                <p>Schedule a complete technical health check instantly. I personally review your architecture and send over a robust, actionable blueprint.</p>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                >
                  Request Free Audit
                </button>
              </div>

              <div className="faq-sidebar-card reveal-right" style={{ transitionDelay: '0.2s', background: 'rgba(255, 107, 0, 0.05)', borderColor: 'rgba(255, 107, 0, 0.2)' }}>
                <h3>💬 WhatsApp Par Baat Karein</h3>
                <p>Seedha WhatsApp karein — main 10 mins mein reply karta hoon. Aapke sawaal ka jawab abhi milega.</p>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20help%20for%20my%20business."
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  📱 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="tag reveal">Let's Talk</span>
              <div className="divider reveal"></div>
              <h2 className="section-heading reveal">
                Let's Find Out What's <span className="gradient-text">Holding Your Business Back</span>
              </h2>
              <p className="section-sub reveal">
                Send me your website link. I will review it and tell you what to fix first. Free, with no obligation.
              </p>
              <div className="contact-info">
                <div
                  className="contact-item reveal"
                  style={{ transitionDelay: '0.1s', cursor: 'pointer' }}
                  onClick={() => copyToClipboard('+918604625862', 'Phone Number')}
                  title="Click to copy number"
                >
                  <div className="contact-icon"><i className="bi bi-whatsapp"></i></div>
                  <div>
                    <div className="contact-label">WhatsApp / Call (Click to Copy)</div>
                    <div className="contact-value">+91 86046 25862</div>
                  </div>
                </div>

                <div
                  className="contact-item reveal"
                  style={{ transitionDelay: '0.2s', cursor: 'pointer' }}
                  onClick={() => copyToClipboard('anirudhkumarseo@gmail.com', 'Email')}
                  title="Click to copy email"
                >
                  <div className="contact-icon"><i className="bi bi-envelope"></i></div>
                  <div>
                    <div className="contact-label">Email (Click to Copy)</div>
                    <div className="contact-value">anirudhkumarseo@gmail.com</div>
                  </div>
                </div>

                <div className="contact-item reveal" style={{ transitionDelay: '0.3s' }}>
                  <div className="contact-icon"><i className="bi bi-geo-alt"></i></div>
                  <div>
                    <div className="contact-label">Base Location</div>
                    <div className="contact-value">Gomti Nagar, Lucknow, UP (Available in Kanpur, Noida &amp; Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form reveal-right" onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>
                Book Your Free SEO Audit Now
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text2)', marginBottom: '24px' }}>
                Quick turnaround guaranteed — you will receive a personalized review from Anirudh.
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="aapka@email.com" />
                </div>
                <div className="form-group">
                  <label>Website URL (or GBP link)</label>
                  <input type="text" name="website" placeholder="e.g. mybusiness.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Required Service</label>
                <select name="service">
                  <option value="">— Select Service —</option>
                  <option>SEO (Search Engine Optimization)</option>
                  <option>Local SEO &amp; Google Business Profile</option>
                  <option>Google Ads &amp; Meta Ads</option>
                  <option>Social Media Marketing</option>
                  <option>Website Development</option>
                  <option>Growth Advisory &amp; Consulting</option>
                  <option>Free SEO Audit</option>
                </select>
              </div>
              <div className="form-group">
                <label>Describe your business or goals</label>
                <textarea name="message" placeholder="Share what you need help with so I can come prepared with an audit..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}>
                🚀 Book Your Free SEO Audit Now
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--text2)', textAlign: 'center', marginTop: '12px' }}>
                100% Free Consultation. No sales pitch, only actionable feedback.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SEO Audit Modal */}
      <SeoAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        isVisible={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
