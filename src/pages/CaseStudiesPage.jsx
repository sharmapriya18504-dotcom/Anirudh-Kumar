import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'clinic',
      sector: 'Healthcare Clinic',
      location: 'Gomti Nagar, Lucknow',
      duration: '4 Months Retainer',
      verifiedBy: 'Verified GBP & Direct Calls',
      icon: 'bi-hospital',
      title: 'Multi-Specialty Healthcare Clinic',
      desc: 'Procedure page optimization and Google Maps 3-Pack rank tracking across Gomti Nagar and Indiranagar. Expanded appointment calls from 8 to 31 per month.',
      heroStat: '+287%',
      heroLabel: 'Patient Inquiries Growth',
      metricDetail: '8 calls/mo ➔ 31 patient calls/mo',
      img: '/service-seo.png',
      tags: ['Google Maps 3-Pack', 'Procedure Pages', 'Local Schema'],
    },
    {
      id: 'textile',
      sector: 'B2B Wholesale & Manufacturing',
      location: 'Panki & Civil Lines, Kanpur',
      duration: '3 Months Retainer',
      verifiedBy: 'Verified GA4 & Meta Ads',
      icon: 'bi-shop',
      title: 'Cotton Apparel & Fabric Wholesale Supplier',
      desc: 'Targeted high-intent B2B commercial queries on Google Search and structured Meta retargeting campaigns across Uttar Pradesh and Delhi NCR.',
      heroStat: '7.2x',
      heroLabel: 'Verified Return On Ad Spend',
      metricDetail: '₹15L+ Monthly B2B Trade',
      img: '/service-ads.png',
      tags: ['B2B Search Ads', 'Meta Retargeting', 'Negative Keywords'],
    },
    {
      id: 'coaching',
      sector: 'Education & Admissions',
      location: 'Hazratganj, Lucknow',
      duration: '5 Months Retainer',
      verifiedBy: 'Verified GSC & Google Maps',
      icon: 'bi-mortarboard',
      title: 'Competitive Exam Coaching Institute',
      desc: 'Ranked #1 for 14 competitive exam queries across central Lucknow, driving 1,280 monthly search clicks and filling 100% of admission batches.',
      heroStat: '#1 Rank',
      heroLabel: 'Google Maps 3-Pack Across City',
      metricDetail: '1,280 Monthly Clicks • 100% Batches Filled',
      img: '/service-kanpur.png',
      tags: ['Local 3-Pack', 'Exam Landing Pages', 'Review Engine'],
    },
  ];

  return (
    <div className="page-wrapper case-studies-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero Section */}
      <section style={{ padding: '75px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            <i className="bi bi-shield-check" style={{ color: '#FF6B00', marginRight: '6px' }}></i>
            Verified Performance Policy
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: 'var(--text)',
            }}
          >
            Real Results for <span className="gradient-text">Growing Businesses</span>
          </h1>
          <p style={{ fontSize: '1.08rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
            100% authentic campaign data. No fabricated screenshots, no vanity impressions. Direct business growth delivered across Lucknow, Kanpur, and NCR.
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

      {/* 3 Minimal, High-Impact Project Cards */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div className="portfolio-minimal-grid">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="portfolio-minimal-card reveal" style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}>
                <div className="portfolio-minimal-img-frame">
                  <img src={study.img} alt={study.title} className="portfolio-minimal-img" />
                  <span className="portfolio-minimal-category">
                    <i className={`bi ${study.icon}`} style={{ marginRight: '5px' }}></i>
                    {study.sector}
                  </span>
                  <span className="portfolio-minimal-loc">{study.location}</span>
                </div>

                <div className="portfolio-minimal-body">
                  <div className="portfolio-hero-stat-row">
                    <div>
                      <div className="portfolio-hero-stat-num">{study.heroStat}</div>
                      <div className="portfolio-hero-stat-lbl">{study.heroLabel}</div>
                    </div>
                    <div className="portfolio-hero-stat-pill">
                      {study.metricDetail}
                    </div>
                  </div>

                  <h3 className="portfolio-minimal-title">{study.title}</h3>
                  <p className="portfolio-minimal-desc">{study.desc}</p>

                  <div className="portfolio-minimal-tags">
                    {study.tags.map((t, tidx) => (
                      <span key={tidx} className="portfolio-tag-item">
                        <i className="bi bi-check2" style={{ color: '#FF6B00' }}></i> {t}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-minimal-meta">
                    <span><i className="bi bi-patch-check-fill" style={{ color: '#FF6B00', marginRight: '5px' }}></i> {study.verifiedBy}</span>
                    <span><i className="bi bi-clock-history" style={{ color: '#FF6B00', marginRight: '5px' }}></i> {study.duration}</span>
                  </div>

                  <div className="portfolio-minimal-footer">
                    <Link to="/contact" className="portfolio-action-link">
                      <span>Discuss Similar Growth for Your Business</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean, Focused Audit CTA Banner */}
      <section style={{ padding: '0 0 90px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="case-cta-banner">
            <h3 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2rem)', color: 'var(--text)', marginBottom: '12px', fontWeight: 800 }}>
              Want to see how your site compares?
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.65 }}>
              Send me your website link. I will personally review your search presence, audit your local competitors, and show you live ranking opportunities.
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
