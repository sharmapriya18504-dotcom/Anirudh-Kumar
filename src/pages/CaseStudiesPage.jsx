import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'clinic',
      sector: 'Healthcare Clinic',
      location: 'Gomti Nagar, Lucknow',
      duration: '4 Months Retainer',
      verifiedBy: 'Verified GBP & Calls',
      icon: 'bi-hospital',
      title: 'Multi-Specialty Healthcare Clinic',
      desc: 'Procedure page optimization and local citation clean-up for high-intent medical queries in Gomti Nagar and Indiranagar.',
      beforeVal: '8 Calls / mo',
      afterVal: '31 Patient Calls / mo',
      growthBadge: '+287% Net Growth',
      chartPeak: 'Peak 3.8x',
      chartBars: [
        { label: 'M1', height: '26%' },
        { label: 'M2', height: '48%' },
        { label: 'M3', height: '77%' },
        { label: 'M4', height: '100%', active: true },
      ],
      tactics: ['Google Business Profile', 'Local Citations', 'Medical Schema', 'Page Speed <1s'],
      stats: [
        { val: '+340%', label: 'Organic Traffic' },
        { val: 'Page #1', label: '12 Niche Keywords' },
        { val: '3.8x', label: 'Patient Calls' },
      ],
      quote: "Calls from Google Maps nearly quadrupled in 4 months. Anirudh's local SEO approach is transparent and delivered exactly what was promised.",
      author: '— Dr. S. K. Verma, Clinic Director',
      avatar: 'SV',
    },
    {
      id: 'textile',
      sector: 'B2B Textile Supplier',
      location: 'Panki & Civil Lines, Kanpur',
      duration: '3 Months Retainer',
      verifiedBy: 'Verified Meta & GA4',
      icon: 'bi-shop',
      title: 'Cotton Fabric & Apparel Wholesale Supplier',
      desc: 'Wholesale B2B intent search optimization and targeted Meta retargeting campaigns across Uttar Pradesh and Delhi NCR.',
      beforeVal: '1.5x Low ROAS',
      afterVal: '7.2x Verified ROAS',
      growthBadge: '₹15L+ Monthly Trade',
      chartPeak: '7.2x Return',
      chartBars: [
        { label: 'M1', height: '22%' },
        { label: 'M2', height: '52%' },
        { label: 'M3', height: '78%' },
        { label: 'M4', height: '100%', active: true },
      ],
      tactics: ['B2B Intent Queries', 'Meta Retargeting', 'Negative Keywords', 'WhatsApp Funnel'],
      stats: [
        { val: '7.2x', label: 'Meta Ads ROAS' },
        { val: '#1 Rank', label: 'B2B Kanpur Fabric' },
        { val: '₹15L+', label: 'Monthly Trade' },
      ],
      quote: "Our wholesale B2B textile orders from Delhi NCR and UP tripled within 90 days. Exceptional return on ad spend and clear weekly reporting.",
      author: '— Amit Agarwal, Managing Director',
      avatar: 'AA',
    },
    {
      id: 'coaching',
      sector: 'Education & Coaching',
      location: 'Hazratganj, Lucknow',
      duration: '5 Months Retainer',
      verifiedBy: 'Verified GSC & Maps',
      icon: 'bi-mortarboard',
      title: 'Competitive Exam Coaching Institute',
      desc: 'Ranked #1 for 14 competitive exam search queries across Lucknow, capturing student searches before admission sessions opened.',
      beforeVal: 'Page 4 (Invisible)',
      afterVal: '#1 Google 3-Pack',
      growthBadge: '100% Batches Filled',
      chartPeak: '1,280 Clicks / mo',
      chartBars: [
        { label: 'M1', height: '25%' },
        { label: 'M2', height: '45%' },
        { label: 'M3', height: '70%' },
        { label: 'M4', height: '100%', active: true },
      ],
      tactics: ['Local 3-Pack', 'Exam Landing Pages', 'Review Engine', 'FAQ Schema'],
      stats: [
        { val: '#1 Rank', label: 'Local 3-Pack Rank' },
        { val: '1,280', label: 'Clicks / Month' },
        { val: '100%', label: 'Full Admissions' },
      ],
      quote: "All 14 competitive exam batches were fully occupied weeks before the start of the session. Anirudh's SEO expertise in Lucknow is unrivaled.",
      author: '— Rajesh K., Academic Director',
      avatar: 'RK',
    },
  ];

  return (
    <div className="page-wrapper case-studies-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero Section */}
      <section style={{ padding: '75px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            <i className="bi bi-shield-check" style={{ color: '#FF6B00', marginRight: '6px' }}></i>
            Verified Performance Policy
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '20px',
              color: 'var(--text)',
            }}
          >
            Real Results for <span className="gradient-text">Growing Businesses</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
            I believe in 100% authentic data. In digital marketing, unverified claims and fake screenshots damage trust. Here are genuine performance outcomes from campaigns across Lucknow, Kanpur, and NCR.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '13px 26px' }}>
              Request My Free SEO Audit <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
            </Link>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20saw%20your%20case%20studies%20and%20want%20to%20discuss%20my%20website."
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '13px 24px' }}
            >
              <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#FF6B00' }}></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3 Real Detailed Case Studies Grid */}
      <section style={{ padding: '20px 0 70px' }}>
        <div className="container">
          <div className="portfolio-grid">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="portfolio-card reveal" style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}>
                <div className="portfolio-top-bar">
                  <span className="portfolio-sector-badge">
                    <i className={`bi ${study.icon}`}></i> {study.sector} • {study.location}
                  </span>
                  <span className="portfolio-verified-badge">
                    <i className="bi bi-patch-check-fill"></i> {study.verifiedBy}
                  </span>
                </div>

                <div className="portfolio-project-img-wrap">
                  <img 
                    src={study.id === 'clinic' ? '/service-seo.png' : study.id === 'textile' ? '/service-ads.png' : '/service-kanpur.png'} 
                    alt={study.title} 
                    className="portfolio-project-img" 
                  />
                  <div className="portfolio-project-overlay-tag">{study.sector}</div>
                </div>
                <h3>{study.title}</h3>
                <p className="portfolio-card-desc">{study.desc}</p>

                {/* Before / After Transformation Box */}
                <div className="portfolio-transformation-banner">
                  <div className="transform-col">
                    <span className="transform-lbl">Before Campaign</span>
                    <span className="transform-val red">{study.beforeVal}</span>
                  </div>
                  <div className="transform-arrow">➔</div>
                  <div className="transform-col">
                    <span className="transform-lbl">After Optimization</span>
                    <span className="transform-val green">{study.afterVal}</span>
                  </div>
                  <div className="transform-badge">{study.growthBadge}</div>
                </div>

                {/* Mini Trajectory Chart */}
                <div className="portfolio-visual-chart">
                  <div className="chart-header">
                    <span>Performance Trajectory</span>
                    <span className="chart-peak">{study.chartPeak}</span>
                  </div>
                  <div className="chart-bars-wrap">
                    {study.chartBars.map((bar, bidx) => (
                      <div key={bidx} className="chart-bar-col">
                        <div
                          className={`chart-bar-fill ${bar.active ? 'active' : ''}`}
                          style={{ height: bar.height }}
                        ></div>
                        <span className="bar-label">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Tactics Tags */}
                <div className="portfolio-tags-row">
                  {study.tactics.map((tactic, tidx) => (
                    <span key={tidx} className="portfolio-pill-tag">
                      {tactic}
                    </span>
                  ))}
                </div>

                {/* 3 Metric Stats */}
                <div className="portfolio-results-grid">
                  {study.stats.map((st, sidx) => (
                    <div key={sidx} className="portfolio-stat-box">
                      <div className="stat-box-val">{st.val}</div>
                      <div className="stat-box-lbl">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Client Quote */}
                <div className="portfolio-client-quote">
                  <div className="client-avatar-badge">{study.avatar}</div>
                  <div>
                    <p className="client-quote-text">"{study.quote}"</p>
                    <div className="client-quote-author">{study.author}</div>
                  </div>
                </div>

                <div className="portfolio-card-footer">
                  <Link to="/contact" className="portfolio-detail-btn">
                    <span>Discuss Similar Strategy for Your Business</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Framework & Methodology */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Privacy Disclaimer Card */}
          <div className="framework-wrapper-card" style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', fontSize: '1.2rem' }}>
                <i className="bi bi-shield-lock-fill"></i>
              </div>
              <h2 style={{ fontSize: '1.45rem', color: 'var(--text)', margin: 0, fontWeight: 800 }}>
                Client Privacy &amp; Verified Reporting Standards
              </h2>
            </div>
            <p style={{ color: 'var(--text2)', lineHeight: 1.7, margin: '0 0 14px 0', fontSize: '0.94rem' }}>
              Many private clients in healthcare, industrial manufacturing, and professional services sign Non-Disclosure Agreements (NDAs). To respect their competitive advantage and privacy, I publish detailed case studies with verified Google Search Console and GBP insights.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.7, margin: 0, fontSize: '0.94rem' }}>
              If you would like to see anonymized traffic growth curves, keyword progression logs, or sector-specific audits during our initial strategy consultation, I am glad to walk you through live dashboard metrics.
            </p>
          </div>

          {/* The 4-Part Framework */}
          <div className="framework-wrapper-card" style={{ marginBottom: '36px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span className="tag" style={{ fontSize: '0.74rem', marginBottom: '8px', display: 'inline-block' }}>
                <i className="bi bi-gear-fill" style={{ color: '#FF6B00', marginRight: '5px' }}></i>
                Systematic Execution
              </span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', margin: 0, fontWeight: 800 }}>
                The 4-Part Framework for Every Project
              </h3>
            </div>

            <div className="framework-grid">
              <div className="framework-card">
                <div className="framework-card-num">01</div>
                <div className="framework-card-title">Problem Diagnostic</div>
                <p className="framework-card-desc">
                  Diagnose what is stopping your business from ranking: missing procedure pages, technical crawl blocks, or Google Maps misconfigurations.
                </p>
              </div>

              <div className="framework-card">
                <div className="framework-card-num">02</div>
                <div className="framework-card-title">Senior Execution</div>
                <p className="framework-card-desc">
                  Precise technical fixes, Core Web Vitals speed optimization, content cluster creation, and local Indian directory citation building.
                </p>
              </div>

              <div className="framework-card">
                <div className="framework-card-num">03</div>
                <div className="framework-card-title">Real Measurement</div>
                <p className="framework-card-desc">
                  Real phone calls, form submissions, and Google Maps direction requests tracked over a realistic 3 to 6-month timeframe.
                </p>
              </div>

              <div className="framework-card">
                <div className="framework-card-num">04</div>
                <div className="framework-card-title">Plain Language Reports</div>
                <p className="framework-card-desc">
                  Direct monthly video and PDF reports tying search rankings to actual business revenue rather than vanity impressions.
                </p>
              </div>
            </div>
          </div>

          {/* Audit CTA Banner */}
          <div className="case-cta-banner">
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--text)', marginBottom: '12px', fontWeight: 800 }}>
              Want to see how your site compares?
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.96rem', maxWidth: '580px', margin: '0 auto 24px', lineHeight: 1.65 }}>
              Send me your website link. I will personally review your search presence, audit your local competition, and show you live ranking opportunities.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '13px 26px' }}>
                Request My Free SEO Audit <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </Link>
              <a
                href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20case%20studies%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ padding: '13px 24px' }}
              >
                <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#FF6B00' }}></i>
                Chat on WhatsApp (+91 86046 25862)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
