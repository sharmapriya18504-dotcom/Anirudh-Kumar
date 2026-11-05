import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'seo',
      number: '01',
      badge: 'Organic Search',
      icon: 'bi-search',
      img: '/service-seo.png',
      tag: 'Google Page #1',
      title: 'SEO (Search Engine Optimization)',
      tagline: 'Rank for high-intent searches your buyers actually type',
      desc: 'Get your website to rank on Google Page #1 when prospects search for your exact services. Core Web Vitals fixes, high-intent keyword targeting, and ethical authority building.',
      details: [
        'Technical SEO (Crawlability, Core Web Vitals, Sub-1.5s Speed)',
        'On-Page Optimization (Title tags, Schema markup, Search Intent)',
        'Authority Link Building (Ethical, White-Hat High-DA Links)',
      ],
      linkText: 'Explore SEO Capabilities',
      linkUrl: '/seo-lucknow',
    },
    {
      id: 'local-seo',
      number: '02',
      badge: 'Local 3-Pack',
      icon: 'bi-geo-alt-fill',
      img: '/service-kanpur.png',
      tag: 'Google Maps',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Dominate Google Maps and "near me" searches',
      desc: 'Show up in Google Maps and nearby search results so local customers call you before your competitors down the street.',
      details: [
        'Google Business Profile Setup, Claim & Reinstatement',
        'Map 3-Pack Rank Tracking Across Target Neighborhoods',
        'Local Citation Consistency & Review Generation System',
      ],
      linkText: 'Explore Local SEO Details',
      linkUrl: '/seo-expert-kanpur',
    },
    {
      id: 'ads',
      number: '03',
      badge: 'Performance Media',
      icon: 'bi-graph-up-arrow',
      img: '/service-ads.png',
      tag: 'Verified ROAS',
      title: 'Google Ads & Meta Performance Ads',
      tagline: 'Paid campaigns built around leads and sales, not vanity clicks',
      desc: 'High-converting paid advertising engineered to generate measurable business revenue. Complete tracking so you know exactly what every rupee returns.',
      details: [
        'High-Intent Google Search Ads Targeting Active Buyers',
        'Meta Ads (Facebook & Instagram) Retargeting Funnels',
        'GA4 Server-Side Conversion Tracking & Negative Keywords',
      ],
      linkText: 'Explore Paid Advertising',
      linkUrl: '/ads-lucknow',
    },
    {
      id: 'smm',
      number: '04',
      badge: 'Brand Recall',
      icon: 'bi-share-fill',
      img: '/service-smm.png',
      tag: 'Audience Trust',
      title: 'Social Media Marketing (SMM)',
      tagline: 'Consistent branding that builds long-term authority and trust',
      desc: 'Consistent, brand-building content across Instagram, LinkedIn, and Facebook that builds trust and turns followers into qualified business enquiries.',
      details: [
        'Short-Form Video (Reels) & Visual Identity Templates',
        '30-Day Strategic Content Calendar Planning',
        'Lead Nurturing & Community Engagement Frameworks',
      ],
      linkText: 'Explore Social Media Marketing',
      linkUrl: '/smm-lucknow',
    },
    {
      id: 'webdev',
      number: '05',
      badge: 'Fast & SEO-Ready',
      icon: 'bi-code-slash',
      img: '/service-web.png',
      tag: '<1.5s PageSpeed',
      title: 'Website Development & Landing Pages',
      tagline: 'Fast, mobile-friendly websites designed from day one to convert',
      desc: 'Ultra-fast, mobile-first websites and conversion landing pages engineered to convert incoming organic and paid visitors into booked appointments.',
      details: [
        'Sub-1.5s Load Times & 90+ Mobile Core Web Vitals',
        'Modern Lightweight Architecture (0 Bloated Plugins)',
        'Conversion-Focused Layouts & Structured SEO Data',
      ],
      linkText: 'Explore Web Development',
      linkUrl: '/web-dev-lucknow',
    },
    {
      id: 'growth',
      number: '06',
      badge: 'Direct Strategy',
      icon: 'bi-compass-fill',
      img: '/service-consulting.png',
      tag: '90-Day Blueprint',
      title: 'Growth Advisory & SEO Consulting',
      tagline: 'Direct 1-on-1 strategy sessions for marketing clarity',
      desc: 'Not ready for a full retainer? Book a direct strategic session with Anirudh. I review your marketing funnel, audit bottlenecks, and deliver a prioritized 90-day action plan.',
      details: [
        'Complete Digital Architecture & Competitor Gap Audit',
        'Wasted Ad Spend Diagnostic & Organic Leak Fixes',
        'Prioritized 90-Day Execution Roadmap for Your Budget',
      ],
      linkText: 'Explore Growth Advisory',
      linkUrl: '/seo-consultant',
    },
  ];

  return (
    <div className="page-wrapper services-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Services Hero */}
      <section style={{ padding: '75px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            <i className="bi bi-briefcase-fill" style={{ color: '#FF6B00', marginRight: '6px' }}></i>
            Capabilities &amp; Solutions
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
            Digital Marketing &amp; <span className="gradient-text">SEO Services</span>
          </h1>
          <p style={{ fontSize: '1.12rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '28px' }}>
            Pick one service or combine them. I will tell you honestly what your business needs first. You work directly with me — no account managers, no junior interns, no lock-in contracts.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '13px 26px' }}>
              Request My Free SEO Audit <i className="bi bi-arrow-right" style={{ marginLeft: '4px' }}></i>
            </Link>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '13px 24px' }}
            >
              <i className="bi bi-whatsapp" style={{ marginRight: '8px', color: '#25D366', fontSize: '1.15rem' }}></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6 Responsive Service Cards Grid */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div className="services-grid">
            {servicesList.map((s, idx) => (
              <div key={s.id} className="service-card reveal" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
                <div>
                  <div className="service-card-top">
                    <span className="service-badge-pill">
                      <i className={`bi ${s.icon}`}></i> {s.badge}
                    </span>
                    <span className="service-idx-num">{s.number}</span>
                  </div>

                  <div className="service-img-wrap">
                    <img src={s.img} alt={s.title} className="service-card-img" />
                    <div className="service-img-overlay-tag">{s.tag}</div>
                  </div>

                  <h3>{s.title}</h3>
                  <div style={{ fontSize: '0.84rem', color: '#FF6B00', fontWeight: 600, marginBottom: '12px' }}>
                    {s.tagline}
                  </div>
                  <p>{s.desc}</p>

                  <div className="service-deliverables">
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#FF6B00', marginBottom: '4px' }}>
                      Key Deliverables
                    </div>
                    {s.details.map((detail, didx) => (
                      <div key={didx} className="service-deliv-item">
                        <span className="deliv-check">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-card-footer">
                  <Link to={s.linkUrl} className="service-action-link">
                    <span>{s.linkText}</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Hub Cards Linkage */}
      <section className="city-hub-section" style={{ padding: '75px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tag">
            <i className="bi bi-geo-alt-fill" style={{ color: '#FF6B00', marginRight: '6px' }}></i>
            Where I Work
          </span>
          <h2 className="section-heading" style={{ marginTop: '14px', marginBottom: '12px' }}>
            Available On-Site &amp; <span className="gradient-text">Remotely Across India</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto 36px', fontSize: '0.96rem', lineHeight: 1.65 }}>
            Choose your city for localized search strategies and in-person meeting details:
          </p>

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
    </div>
  );
}
