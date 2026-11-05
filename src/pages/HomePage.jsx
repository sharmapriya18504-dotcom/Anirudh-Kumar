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
  const [toastMsg, setToastMsg] = useState('Your inquiry has been received. I will reply within 24 hours.');
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setToastMsg('Thank you! I will review your website and reply within 24 hours.');
    setShowToast(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Inquiry Sent Successfully ✓';
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
      outcome: 'Rank on Google Page #1 when buyers in your city search for your exact services.',
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
      tag: 'High Retention',
      title: 'Social Media Marketing (SMM)',
      outcome: 'Consistent, brand-building content across Instagram and LinkedIn that earns customer trust.',
      pills: ['Short-Form Video', 'Visual Templates', 'Audience Nurturing'],
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
      location: 'Lucknow',
      img: '/service-seo.png',
      title: 'Multi-Specialty Healthcare Clinic',
      outcome: 'Procedure page optimization and local citation clean-up for high-intent medical queries.',
      heroMetric: '+287%',
      heroMetricLabel: 'Patient Calls Growth',
      beforeAfter: '8 calls/mo ➔ 31 calls/mo',
      highlights: ['Top 3 Google Maps Pack', '12 Keywords Page #1'],
    },
    {
      id: 'apparel',
      sector: 'Manufacturing & B2B',
      location: 'Kanpur',
      img: '/service-ads.png',
      title: 'Cotton Apparel & Textile Manufacturer',
      outcome: 'Restructured high-intent Google Search and Meta Ads to capture wholesale buyers.',
      heroMetric: '7.2x',
      heroMetricLabel: 'Verified Ad ROAS',
      beforeAfter: '1.5x ROAS ➔ 7.2x Verified ROAS',
      highlights: ['₹15L+ Monthly Trade', '45+ B2B Accounts'],
    },
    {
      id: 'noida',
      sector: 'Education & Admissions',
      location: 'Lucknow & NCR',
      img: '/service-kanpur.png',
      title: 'Competitive Exam Coaching Institute',
      outcome: 'Targeted competitive exam keywords across UP to fill student batches ahead of admissions.',
      heroMetric: '#1 Rank',
      heroMetricLabel: 'Google Maps 3-Pack',
      beforeAfter: 'Page 4 ➔ #1 Google Maps 3-Pack',
      highlights: ['1,280 Clicks / Month', '100% Batches Filled'],
    },
  ];

  return (
    <>
      <Toast message={toastMsg} isVisible={showToast} onClose={() => setShowToast(false)} />

      {/* ==================== HERO SECTION ==================== */}
      <section id="hero" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '110px 0 70px' }}>
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center', gap: '48px' }}>
            <div className="hero-content">
              <div className="hero-eyebrow" style={{ marginBottom: '20px' }}>
                <span className="tag" style={{ letterSpacing: '0.08em', fontWeight: 700, fontSize: '0.74rem' }}>
                  <i className="bi bi-circle-fill" style={{ fontSize: '0.5rem', color: '#FF6B00', marginRight: '6px' }}></i>
                  SEO EXPERT &amp; DIGITAL MARKETER
                </span>
              </div>

              <h1 className="hero-h1">
                <span className="line1">SEO Expert &amp; Digital Marketer for</span>
                <span className="line2">Growing Businesses</span>
              </h1>

              <p className="hero-desc" style={{ fontSize: '1.12rem', color: 'var(--text2)', lineHeight: 1.7, margin: '20px 0 32px', maxWidth: '560px' }}>
                Hi, I'm <strong style={{ color: 'var(--text)' }}>Anirudh Kumar</strong>. I help businesses get found on <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Google</span>, <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Maps</span> and social media, and turn that visibility into real <span style={{ color: 'var(--accent)', fontWeight: 600 }}>enquiries and sales</span>. I work remotely across India and on-site in Lucknow, Kanpur and Noida.
              </p>

              <div className="hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="btn btn-primary"
                  style={{ cursor: 'pointer', padding: '14px 28px', fontSize: '0.98rem' }}
                >
                  Get My Free SEO Audit <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
                </button>
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20help%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '14px 26px', fontSize: '0.98rem' }}
                >
                  <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#FF6B00' }}></i>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="hero-trust-line" style={{ marginTop: '22px', fontSize: '0.88rem', color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="bi bi-check2-circle" style={{ color: '#FF6B00', fontSize: '1.05rem' }}></i>
                <span>You work directly with me. No account managers, no interns, no lock-in contract.</span>
              </div>

              <div className="hero-stats" style={{ marginTop: '38px', paddingTop: '28px', borderTop: '1px solid var(--border2)' }}>
                <div className="stat-item">
                  <div className="stat-num">200+</div>
                  <div className="stat-label">Clients Scaled</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">4.9/5</div>
                  <div className="stat-label">Verified Client Rating</div>
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
          <div className="marquee-item"><i className="bi bi-code-slash"></i> Conversion Web Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Remote SEO Pan-India</div>
          {/* Loop duplicates */}
          <div className="marquee-item"><i className="bi bi-search"></i> SEO Expert Lucknow</div>
          <div className="marquee-item"><i className="bi bi-geo-alt"></i> Google Maps 3-Pack</div>
          <div className="marquee-item"><i className="bi bi-bullseye"></i> High-ROAS Meta Ads</div>
          <div className="marquee-item"><i className="bi bi-code-slash"></i> Conversion Web Development</div>
          <div className="marquee-item"><i className="bi bi-graph-up"></i> Google Ads Specialist</div>
          <div className="marquee-item"><i className="bi bi-globe"></i> Remote SEO Pan-India</div>
        </div>
      </div>

      {/* ==================== THE AGENCY ALTERNATIVE (4 CARDS) ==================== */}
      <section id="why" style={{ padding: '95px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>The Agency Alternative</span>
            <h2 className="section-heading">
              Direct Specialist Execution — <span className="gradient-text">Zero Runaround</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Most digital agencies sell with seniors and delegate your account to junior interns. I do the exact opposite.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: 'bi-person-check-fill',
                title: 'Direct Senior Execution',
                desc: 'You speak and collaborate directly with me. Every audit, technical fix, and campaign optimization is handled personally.',
              },
              {
                icon: 'bi-graph-up-arrow',
                title: 'Revenue-Focused SEO',
                desc: 'We target commercial buyer keywords that generate paying customers and phone inquiries, not empty vanity impressions.',
              },
              {
                icon: 'bi-file-earmark-bar-graph-fill',
                title: 'Plain-Language Reports',
                desc: 'Monthly PDF and video reports that tie search rankings directly to new inquiries, calls, and business revenue.',
              },
              {
                icon: 'bi-shield-check',
                title: 'Month-to-Month Retainers',
                desc: 'All engagements are 100% month-to-month. You stay because your business is measurably growing, not because of a contract.',
              },
            ].map((item, idx) => (
              <div key={idx} className="framework-card" style={{ padding: '32px 24px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', fontSize: '1.25rem', marginBottom: '16px' }}>
                  <i className={'bi ' + item.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text)', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES & SERVICES ==================== */}
      <section id="services" style={{ padding: '95px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Capabilities</span>
            <h2 className="section-heading">
              Digital Marketing &amp; <span className="gradient-text">SEO Solutions</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Pick one service or combine them. Clear outcomes, transparent execution, zero technical jargon.
            </p>
          </div>

          <div className="services-grid">
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
                    <span>Explore Capabilities</span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link to="/services" className="btn btn-outline" style={{ padding: '12px 28px' }}>
              View Complete Services Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ANIRUDH (EDITORIAL MINIMAL) ==================== */}
      <section id="about" style={{ padding: '90px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-img-wrap reveal-left">
              <div className="about-photo-frame" style={{ maxWidth: '380px', margin: '0 auto' }}>
                <div className="about-photo-bg">
                  <img src="/Untitled design (12).png" alt="Anirudh Kumar - SEO Expert" className="about-persona-img" />
                  <div className="about-photo-badge">
                    <i className="bi bi-geo-alt-fill" style={{ marginRight: '4px' }}></i> Lucknow, Uttar Pradesh
                  </div>
                </div>
              </div>
            </div>

            <div className="about-content reveal-right">
              <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Direct Collaboration</span>
              <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                Direct Freelance Partner, <span className="gradient-text">Not An Agency Bureaucracy</span>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '16px' }}>
                I help clinics, manufacturers, coaching institutes, and growing businesses across Lucknow, Kanpur, Noida, and India dominate search rankings and generate predictable revenue.
              </p>
              <p style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px' }}>
                I keep my client list intentionally small so every single project receives my direct personal attention. My approach is simple: find what is stopping your business from ranking, fix it, measure it, and report it in plain language.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#FF6B00' }}></i>
                  <span>Direct WhatsApp and phone access with zero agency middlemen</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#FF6B00' }}></i>
                  <span>Google Analytics, Google Ads &amp; Meta Ads certified expertise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text)', fontWeight: 600 }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#FF6B00' }}></i>
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
      <section id="process" style={{ padding: '85px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>How It Works</span>
            <h2 className="section-heading">
              My 5-Step <span className="gradient-text">Execution Process</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From initial technical diagnostic to scaled commercial rankings and verified calls.
            </p>
          </div>

          <InteractiveProcessTimeline />
        </div>
      </section>

      {/* ==================== CASE STUDIES (MINIMAL & EDITORIAL) ==================== */}
      <section id="portfolio" style={{ padding: '95px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>
              <i className="bi bi-shield-check" style={{ color: '#FF6B00', marginRight: '6px' }}></i>
              Proven Outcomes
            </span>
            <h2 className="section-heading">
              Verified <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Real outcomes from active campaigns. Tying search rankings directly to customer inquiries.
            </p>
          </div>

          <div className="portfolio-minimal-grid">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="portfolio-minimal-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="portfolio-minimal-img-frame">
                  <img src={study.img} alt={study.title} className="portfolio-minimal-img" />
                  <span className="portfolio-minimal-category">
                    {study.sector}
                  </span>
                  <span className="portfolio-minimal-loc">{study.location}</span>
                </div>

                <div className="portfolio-minimal-body">
                  <div className="portfolio-hero-stat-row">
                    <div>
                      <div className="portfolio-hero-stat-num">{study.heroMetric}</div>
                      <div className="portfolio-hero-stat-lbl">{study.heroMetricLabel}</div>
                    </div>
                    <div className="portfolio-hero-stat-pill">
                      {study.beforeAfter}
                    </div>
                  </div>

                  <h3 className="portfolio-minimal-title">{study.title}</h3>
                  <p className="portfolio-minimal-desc">{study.outcome}</p>

                  <div className="portfolio-minimal-tags">
                    {study.highlights.map((item, hidx) => (
                      <span key={hidx} className="portfolio-tag-item">
                        <i className="bi bi-check2" style={{ color: '#FF6B00' }}></i> {item}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-minimal-footer">
                    <Link to="/case-studies" className="portfolio-action-link">
                      <span>View Strategy Details</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link to="/case-studies" className="btn btn-outline" style={{ padding: '12px 28px' }}>
              Explore Full Case Studies &amp; Methodology →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section id="pricing" style={{ padding: '95px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Transparent Retainers</span>
            <h2 className="section-heading">
              Simple, Clear <span className="gradient-text">Pricing</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
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
      <section id="testimonials" style={{ padding: '90px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 45px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Client Feedback</span>
            <h2 className="section-heading">
              What Clients Say <span className="gradient-text">About My Work</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Direct feedback from business founders who partner with me.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testi-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{ color: '#FFB800', fontSize: '0.95rem', marginBottom: '12px' }}>
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
              </div>
              <p className="testi-text">
                "Anirudh ne hamare clinic ki Google ranking completely transform kar di. Pehle page 4 par the, ab page 1 par aate hain. Appointments 3 guna ho gayi. Direct baat hoti hai, koi junior nahi — bilkul genuine person hai."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">DR</div>
                <div>
                  <div className="testi-name">Dr. Rahul Mishra</div>
                  <div className="testi-role">Clinic Founder</div>
                  <div className="testi-city">Gomti Nagar, Lucknow</div>
                </div>
              </div>
            </div>

            <div className="testi-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div style={{ color: '#FFB800', fontSize: '0.95rem', marginBottom: '12px' }}>
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
              </div>
              <p className="testi-text">
                "Meta Ads ke baare mein humein clarity nahi thi. Anirudh ne clear funnel banaya aur hamare products ki wholesale inquiries 5x ho gayi. ROAS 7x se zyada aa raha hai. Best ROI investment!"
              </p>
              <div className="testi-author">
                <div className="testi-avatar"><i className="bi bi-person-fill"></i></div>
                <div>
                  <div className="testi-name">Priya Sharma</div>
                  <div className="testi-role">Garments Brand Co-Founder</div>
                  <div className="testi-city">Kanpur City</div>
                </div>
              </div>
            </div>

            <div className="testi-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div style={{ color: '#FFB800', fontSize: '0.95rem', marginBottom: '12px' }}>
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i>
              </div>
              <p className="testi-text">
                "Hamari coaching ke admissions bohot slow the. Anirudh Kumar ka SEO aur Google Business Profile combination kamaal ka tha. 4 mahine mein Hazratganj ke top searches mein aa gaye."
              </p>
              <div className="testi-author">
                <div className="testi-avatar"><i className="bi bi-person-fill"></i></div>
                <div>
                  <div className="testi-name">Amit Verma</div>
                  <div className="testi-role">Institute Director</div>
                  <div className="testi-city">Hazratganj, Lucknow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHERE I WORK / LOCATIONS ==================== */}
      <section id="locations" style={{ padding: '85px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Service Reach</span>
            <h2 className="section-heading">
              On-Site in Three Cities. <span className="gradient-text">Remote Pan-India.</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
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
                <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '8px' }}>
                  <i className="bi bi-geo-alt"></i>
                </div>
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
      <section id="faq" style={{ padding: '90px 0', background: 'var(--bg2)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>FAQ</span>
            <h2 className="section-heading">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Clear answers to the most common questions before we start.
            </p>
          </div>

          <InteractiveFaq />
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" style={{ padding: '95px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Get In Touch</span>
            <h2 className="section-heading">
              Ready to Rank <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
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
                        +91 86046 25862 (Direct Line)
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
                    <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i> Chat on WhatsApp Directly
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
                  Send My Request to Anirudh <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
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
