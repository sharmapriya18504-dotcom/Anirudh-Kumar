import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import InteractivePricing from '../components/InteractivePricing.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';
import SeoAuditModal from '../components/SeoAuditModal.jsx';
import HeroAbstract3D from '../components/HeroAbstract3D.jsx';
import InteractiveProcessTimeline from '../components/InteractiveProcessTimeline.jsx';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('24 hours mein aapko callback ya email reply mil jayega.');
  const [auditModalOpen, setAuditModalOpen] = useState(false);

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

  const services = [
    {
      num: '01',
      badge: 'Organic Search',
      img: '/service-seo.png',
      tag: 'Google Page #1',
      title: 'SEO (Search Engine Optimization)',
      outcome: 'Get found on Google Page #1 when buyers in your city search for your exact services.',
      pills: ['Core Web Vitals', 'Commercial Keywords', 'Authority Links'],
      link: '/seo-lucknow',
    },
    {
      num: '02',
      badge: 'Local 3-Pack',
      img: '/service-kanpur.png',
      tag: 'Google Maps',
      title: 'Local SEO & Google Business Profile',
      outcome: 'Dominate Google Maps and "near me" searches so local customers call you before competitors.',
      pills: ['Map 3-Pack Ranking', 'Directory Citations', 'Review Funnels'],
      link: '/seo-expert-kanpur',
    },
    {
      num: '03',
      badge: 'Performance Media',
      img: '/service-ads.png',
      tag: 'Verified ROAS',
      title: 'Google Ads & Meta Performance Ads',
      outcome: 'High-converting ad campaigns engineered for phone inquiries and sales, not vanity clicks.',
      pills: ['High-Intent Search Ads', 'Meta Retargeting', 'Zero Budget Waste'],
      link: '/ads-lucknow',
    },
    {
      num: '04',
      badge: 'Brand Recall',
      img: '/service-smm.png',
      tag: 'Viral Reach',
      title: 'Social Media Marketing (SMM)',
      outcome: 'Consistent, brand-building content across Instagram and LinkedIn that earns customer trust.',
      pills: ['Short-Form Video/Reels', 'Visual Templates', 'Audience Nurturing'],
      link: '/smm-lucknow',
    },
    {
      num: '05',
      badge: 'Fast & SEO-Ready',
      img: '/service-web.png',
      tag: '<1.5s PageSpeed',
      title: 'Website Development & Landing Pages',
      outcome: 'Ultra-fast, mobile-first websites designed from day one to turn visitors into booked inquiries.',
      pills: ['Sub-1.5s Load Time', 'Mobile-First Architecture', 'Conversion Layout'],
      link: '/web-dev-lucknow',
    },
    {
      num: '06',
      badge: '1-on-1 Guidance',
      img: '/service-consulting.png',
      tag: '90-Day Blueprint',
      title: 'Growth Advisory & SEO Consulting',
      outcome: 'Direct strategy sessions to audit your marketing funnel, fix bottlenecks, and scale revenue.',
      pills: ['Funnel Architecture', 'Competitor Gap Review', 'Direct Strategy'],
      link: '/seo-consultant',
    },
  ];

  const caseStudies = [
    {
      id: 'clinic',
      sector: 'Healthcare Clinic',
      location: 'Gomti Nagar, Lucknow',
      img: '/service-seo.png',
      title: 'Multi-Specialty Healthcare Clinic',
      outcome: 'Ranked top 3 on Google Maps for 12 procedures. Patient calls expanded from 8 to 31/month.',
      badge: '+287% Net Growth',
      stats: [
        { val: '+340%', lbl: 'Organic Traffic' },
        { val: 'Page #1', lbl: '12 Niche Keywords' },
        { val: '3.8x', lbl: 'Patient Calls' },
      ],
    },
    {
      id: 'apparel',
      sector: 'Manufacturing & Export',
      location: 'Industrial Area, Kanpur',
      img: '/service-ads.png',
      title: 'Textile & Apparel Manufacturer',
      outcome: 'Restructured Google Search and Meta Ads to capture wholesale buyers across North India.',
      badge: '4.8x Verified ROAS',
      stats: [
        { val: '₹4.80', lbl: 'Return per ₹1 Spent' },
        { val: '-62%', lbl: 'Cost Per Acquisition' },
        { val: '45+', lbl: 'Wholesale Leads' },
      ],
    },
    {
      id: 'noida',
      sector: 'B2B Services Firm',
      location: 'Sector 62, Noida & NCR',
      img: '/service-kanpur.png',
      title: 'Technology & Legal Services Firm',
      outcome: 'Comprehensive technical crawl fix, schema architecture, and high-intent local landing pages.',
      badge: 'Top 3 Map Pack',
      stats: [
        { val: '14', lbl: 'Keywords Page #1' },
        { val: '210%', lbl: 'Website Inquiries' },
        { val: '<1.0s', lbl: 'Core Web Vitals' },
      ],
    },
  ];

  return (
    <>
      <Toast message={toastMsg} isVisible={showToast} onClose={() => setShowToast(false)} />

      {/* ==================== HERO SECTION (MINIMAL & SPACIOUS) ==================== */}
      <section id="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-dot"></div>
                <span className="tag" style={{ letterSpacing: '0.08em', fontWeight: 800 }}>SEO EXPERT | DIGITAL MARKETER</span>
              </div>

              <h1 className="hero-h1">
                <span className="line1">SEO Expert &amp; Digital Marketer for</span>
                <span className="line2 gradient-text">Growing Businesses</span>
              </h1>

              <p className="hero-desc" style={{ fontSize: '1.08rem', color: 'var(--text2)', lineHeight: 1.7, margin: '18px 0 28px', maxWidth: '580px' }}>
                Hi, I'm <strong style={{ color: 'var(--text)' }}>Anirudh Kumar</strong>. I help businesses get found on <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Google</span>, <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Maps</span> and social media, and turn that visibility into real <span style={{ color: 'var(--accent)', fontWeight: 700 }}>enquiries and sales</span>. I work remotely across India and on-site in Lucknow, Kanpur and Noida.
              </p>

              <div className="hero-btns">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer', padding: '14px 28px', fontSize: '1rem' }}
                >
                  <i className="bi bi-rocket-takeoff" style={{ marginRight: '8px' }}></i>
                  Get My Free SEO Audit
                </button>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20help%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '14px 26px', fontSize: '1rem' }}
                >
                  <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#FF6B00' }}></i>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Verified Trust Line */}
              <div className="hero-trust-line" style={{ marginTop: '22px', fontSize: '0.88rem', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '1rem' }}>✓</span>
                <span>You work directly with me. No account managers, no interns, no lock-in contract.</span>
              </div>

              <div className="hero-stats" style={{ marginTop: '36px' }}>
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
              <HeroAbstract3D />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE TICKER ==================== */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item"><i className="bi bi-search"></i> SEO Expert Lucknow</div>
          <div className="marquee-item"><i className="bi bi-geo-alt"></i> Google Maps 3-Pack</div>
          <div className="marquee-item"><i className="bi bi-bullseye"></i> High-ROAS Meta Ads</div>
          <div className="marquee-item"><i className="bi bi-laptop"></i> Mobile-First Web Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Remote SEO Pan-India</div>
          {/* Loop duplicates */}
          <div className="marquee-item"><i className="bi bi-search"></i> SEO Expert Lucknow</div>
          <div className="marquee-item"><i className="bi bi-geo-alt"></i> Google Maps 3-Pack</div>
          <div className="marquee-item"><i className="bi bi-bullseye"></i> High-ROAS Meta Ads</div>
          <div className="marquee-item"><i className="bi bi-laptop"></i> Mobile-First Web Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Remote SEO Pan-India</div>
        </div>
      </div>

      {/* ==================== WHY CHOOSE ME (PROBLEM-SOLVING 4 CARDS) ==================== */}
      <section id="why" style={{ padding: '90px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>The Difference</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              Direct Specialist Attention — <span className="gradient-text">Zero Agency Runaround</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Most digital agencies sell you with seniors and delegate your account to junior interns. I do the exact opposite.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: '🤝',
                title: 'Direct 1-on-1 Access',
                desc: 'You speak and collaborate directly with me. Every audit, technical fix, and campaign optimization is handled personally.',
              },
              {
                icon: '📈',
                title: 'Revenue-Focused SEO',
                desc: 'We target commercial buyer keywords that generate paying customers and phone inquiries, not empty vanity impressions.',
              },
              {
                icon: '📊',
                title: 'Plain-Language Reports',
                desc: 'Monthly PDF and video reports that tie search rankings directly to new inquiries, calls, and business revenue.',
              },
              {
                icon: '🔓',
                title: 'Zero Lock-In Contracts',
                desc: 'All engagements are 100% month-to-month. You stay because your business is measurably growing, not because of a contract.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="framework-card"
                style={{
                  padding: '30px 24px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION (CLEAN & MINIMAL 6 CARDS) ==================== */}
      <section id="services" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Capabilities</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              Digital Marketing &amp; <span className="gradient-text">SEO Solutions</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Pick one service or combine them. Clear outcomes, transparent execution, zero technical jargon.
            </p>
          </div>

          <div className="services-grid" style={{ marginTop: '30px' }}>
            {services.map((s, idx) => (
              <Link key={idx} className="service-card reveal" to={s.link} style={{ textDecoration: 'none' }}>
                <div>
                  <div className="service-card-top">
                    <span className="service-badge-pill">{s.badge}</span>
                    <span className="service-idx-num">{s.num}</span>
                  </div>

                  <div className="service-img-wrap">
                    <img src={s.img} alt={s.title} className="service-card-img" />
                    <div className="service-img-overlay-tag">{s.tag}</div>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {s.outcome}
                  </p>

                  <div className="service-deliverables">
                    {s.pills.map((pill, pidx) => (
                      <div key={pidx} className="service-deliv-item">
                        <span className="deliv-check">✓</span>
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-card-footer">
                  <span className="service-action-link">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-outline" style={{ padding: '12px 28px' }}>
              View Complete Services Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ANIRUDH (EDITORIAL MINIMAL) ==================== */}
      <section id="about" style={{ padding: '85px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-img-wrap reveal-left">
              <div className="about-photo-frame" style={{ maxWidth: '380px', margin: '0 auto' }}>
                <div className="about-photo-bg">
                  <img src="/Untitled design (12).png" alt="Anirudh Kumar - SEO Expert" className="about-persona-img" />
                  <div className="about-photo-badge">📍 Lucknow, Uttar Pradesh</div>
                </div>
              </div>
            </div>

            <div className="about-content reveal-right">
              <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Direct Collaboration</span>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', marginBottom: '16px' }}>
                Direct Freelance Partner, <span className="gradient-text">Not An Agency Bureaucracy</span>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
                I help clinics, manufacturers, coaching institutes, and growing businesses across Lucknow, Kanpur, Noida, and India dominate search rankings and generate predictable revenue.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                I keep my client list intentionally small so every single project receives my direct personal attention. My approach is simple: find what is stopping your business from ranking, fix it, measure it, and report it in plain language.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <span style={{ color: '#FF6B00' }}>✓</span>
                  <span>Direct WhatsApp and phone access with zero agency middlemen</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <span style={{ color: '#FF6B00' }}>✓</span>
                  <span>Google Analytics, Google Ads &amp; Meta Ads certified expertise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <span style={{ color: '#FF6B00' }}>✓</span>
                  <span>Available on-site in UP &amp; NCR, and remotely across India</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer', padding: '12px 24px' }}
                >
                  Request My Free SEO Audit
                </button>
                <Link to="/about" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Read My Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORK PROCESS (5 STEPS) ==================== */}
      <section id="process" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>How It Works</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', marginBottom: '12px' }}>
              My 5-Step <span className="gradient-text">Execution Process</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.96rem' }}>
              From initial technical diagnostic to scaled commercial rankings and verified calls.
            </p>
          </div>

          <InteractiveProcessTimeline />
        </div>
      </section>

      {/* ==================== CASE STUDIES (3 MINIMAL PROJECT CARDS) ==================== */}
      <section id="portfolio" style={{ padding: '85px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 45px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Proven Outcomes</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              Verified <span className="gradient-text">Campaign Results</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              No invented numbers or generic claims. Genuine performance metrics from actual client campaigns.
            </p>
          </div>

          <div className="portfolio-grid" style={{ marginTop: '30px' }}>
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="portfolio-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="portfolio-top-bar">
                  <span className="portfolio-sector-badge">
                    {study.sector} • {study.location}
                  </span>
                  <span className="portfolio-verified-badge">
                    <i className="bi bi-patch-check-fill"></i> Verified Data
                  </span>
                </div>

                <div className="portfolio-project-img-wrap">
                  <img src={study.img} alt={study.title} className="portfolio-project-img" />
                  <div className="portfolio-project-overlay-tag">{study.badge}</div>
                </div>

                <h3 style={{ fontSize: '1.22rem', fontWeight: 800, marginBottom: '8px' }}>{study.title}</h3>
                <p className="portfolio-card-desc">{study.outcome}</p>

                <div className="portfolio-results-grid">
                  {study.stats.map((st, sidx) => (
                    <div key={sidx} className="portfolio-stat-box">
                      <div className="stat-box-val">{st.val}</div>
                      <div className="stat-box-lbl">{st.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="portfolio-card-footer">
                  <Link to="/case-studies" className="portfolio-detail-btn">
                    <span>View Campaign Strategy</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/case-studies" className="btn btn-outline" style={{ padding: '12px 28px' }}>
              Explore Full Case Studies &amp; Methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section id="pricing" style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Transparent Retainers</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              Simple, Clear <span className="gradient-text">Pricing</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Every engagement starts with my free SEO audit. No hidden agency markups, no long-term lock-in.
            </p>
          </div>

          <InteractivePricing />

          <p className="text-center mt-4" style={{ color: 'var(--text2)', fontSize: '0.88rem' }}>
            Need a custom scope or enterprise multi-location plan?{' '}
            <a href="#contact" style={{ color: 'var(--accent)', fontWeight: 700 }}>Contact me directly</a>
          </p>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" style={{ padding: '85px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 45px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Client Feedback</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              What Clients Say <span className="gradient-text">About My Work</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Direct feedback from business founders who partner with me.
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
        </div>
      </section>

      {/* ==================== WHERE I WORK / LOCATIONS ==================== */}
      <section id="locations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Service Reach</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)', marginBottom: '12px' }}>
              On-Site in Three Cities. <span className="gradient-text">Remote Pan-India.</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.96rem' }}>
              Choose your city to explore tailored local search strategies:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { city: 'Lucknow', tag: 'On-site in Gomti Nagar', link: '/seo-expert-lucknow' },
              { city: 'Kanpur', tag: 'On-site in Civil Lines / Panki', link: '/seo-expert-kanpur' },
              { city: 'Noida', tag: 'On-site & Hybrid in NCR', link: '/seo-expert-noida' },
              { city: 'Remote India', tag: 'Pan-India Client Support', link: '/remote-seo-services' },
            ].map((loc, idx) => (
              <Link key={idx} to={loc.link} className="city-hub-card">
                <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '8px' }}>📍</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)' }}>{loc.city}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginTop: '4px' }}>{loc.tag}</div>
                <span style={{ color: '#FF8800', fontSize: '0.82rem', fontWeight: 700, marginTop: '12px', display: 'inline-block' }}>
                  Explore Local Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" style={{ padding: '85px 0', background: 'var(--bg2)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>FAQ</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)', marginBottom: '12px' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.96rem' }}>
              Clear answers to the most common questions before we start.
            </p>
          </div>

          <InteractiveFaq />
        </div>
      </section>

      {/* ==================== CONTACT SECTION (CLEAN & HIGH-CONVERTING) ==================== */}
      <section id="contact" style={{ padding: '95px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Get In Touch</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
              Ready to Rank <span className="gradient-text">Your Business?</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Send me your website link. I will personally review your search presence, audit your local competition, and show you live ranking opportunities.
            </p>
          </div>

          <div className="contact-grid" style={{ alignItems: 'start' }}>
            <div className="contact-info-panel reveal-left">
              <div className="contact-card">
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: '16px' }}>
                  Direct Contact Information
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '24px' }}>
                  Reach out directly via WhatsApp, phone or email. No account managers, no automated support queues.
                </p>

                <div className="contact-items" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div className="contact-icon" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <div className="contact-label" style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase' }}>Phone</div>
                      <a href="tel:+918604625862" className="contact-value" style={{ fontWeight: 700, color: 'var(--text)' }}>
                        +91 86046 25862
                      </a>
                    </div>
                  </div>

                  <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div className="contact-icon" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <div className="contact-label" style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase' }}>WhatsApp</div>
                      <a href="https://wa.me/918604625862" target="_blank" rel="noreferrer" className="contact-value" style={{ fontWeight: 700, color: '#FF6B00' }}>
                        +91 86046 25862 (Fastest Reply)
                      </a>
                    </div>
                  </div>

                  <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div className="contact-icon" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <div className="contact-label" style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase' }}>Email</div>
                      <a href="mailto:anirudhkumarseo@gmail.com" className="contact-value" style={{ fontWeight: 700, color: 'var(--text)' }}>
                        anirudhkumarseo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div className="contact-icon" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <div className="contact-label" style={{ fontSize: '0.75rem', color: 'var(--text3)', textTransform: 'uppercase' }}>Location</div>
                      <div className="contact-value" style={{ fontWeight: 700, color: 'var(--text)' }}>
                        Gomti Nagar, Lucknow, UP (On-Site &amp; Remote)
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border2)' }}>
                  <a
                    href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20my%20website%20growth."
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                  >
                    💬 Message Me Directly on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel reveal-right">
              <form className="contact-form" onSubmit={handleSubmit} style={{ padding: '36px', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
                  Request Your Free 15-Minute Audit
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Fill in your details below. I personally review every submission within 24 hours.
                </p>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required placeholder="e.g. Rahul Sharma" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email (Optional)</label>
                    <input type="email" id="email" name="email" placeholder="rahul@example.com" />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="website">Website URL (or Business Name) *</label>
                  <input type="text" id="website" name="website" required placeholder="e.g. myclinic.in or Dr. Sharma Clinic" />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" defaultValue="seo">
                    <option value="seo">SEO (Google Page #1 Rankings)</option>
                    <option value="local">Local SEO &amp; Google Maps 3-Pack</option>
                    <option value="ads">Google Ads &amp; Meta Performance Ads</option>
                    <option value="smm">Social Media Marketing</option>
                    <option value="webdev">Website Development</option>
                    <option value="consulting">Growth Advisory / 1-on-1 Consultation</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '22px' }}>
                  <label htmlFor="message">Your Current Challenge</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell me what is stopping your business from getting calls or sales..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem', cursor: 'pointer' }}>
                  🚀 Send My Request to Anirudh
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Interactive Modal */}
      <SeoAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        defaultUrl=""
      />
    </>
  );
}
