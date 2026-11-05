import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'seo',
      number: '01',
      badge: '🎯 Organic Rankings',
      img: '/service-seo.png',
      tag: 'Google Page #1',
      title: 'SEO (Search Engine Optimization)',
      tagline: 'Rank for high-intent searches your customers actually make',
      desc: 'Get your website to rank on Google Page #1 for searches your buyers actually type. Technical fixes, on-page optimization, content strategy, and ethical link building.',
      details: [
        'Technical SEO (Site speed, Core Web Vitals, Crawlability)',
        'On-Page Optimization (Title tags, Schema markup, Meta robots)',
        'Search Intent Content Strategy (Articles that answer customer queries)',
        'Sustainable, White-Hat Link Building & Digital Authority',
      ],
      linkText: 'Explore SEO Capabilities',
      linkUrl: '/seo-lucknow',
    },
    {
      id: 'local-seo',
      number: '02',
      badge: '📍 Google 3-Pack & Maps',
      img: '/service-kanpur.png',
      tag: 'Google Maps',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Dominate Google Maps and "near me" local searches',
      desc: "Show up in Google Maps and 'near me' searches so nearby customers call you first instead of the competitor down the street.",
      details: [
        'Google Business Profile setup, claim & suspension resolution',
        'Map 3-Pack rank tracking across target city neighborhoods',
        'NAP citation consistency on local Indian directories',
        'Review generation frameworks to build authentic social proof',
      ],
      linkText: 'Explore Local SEO Details',
      linkUrl: '/seo-expert-kanpur',
    },
    {
      id: 'ads',
      number: '03',
      badge: '⚡ Performance Paid Media',
      img: '/service-ads.png',
      tag: 'Verified ROAS',
      title: 'Google Ads & Meta Performance Ads',
      tagline: 'Paid campaigns built around leads and sales, not vanity clicks',
      desc: 'High-converting paid performance campaigns engineered to generate measurable revenue. Complete tracking so you know what every rupee returns.',
      details: [
        'High-intent Google Search Ads targeting active buyers',
        'Meta Ads (Facebook & Instagram) hyper-targeted by location & interest',
        'Conversion tracking setup via GA4 & server-side events',
        'Negative keyword sculpting to eliminate wasted budget',
      ],
      linkText: 'Explore Paid Advertising',
      linkUrl: '/ads-lucknow',
    },
    {
      id: 'smm',
      number: '04',
      badge: '📱 Community & Viral Reach',
      img: '/service-smm.png',
      tag: 'Brand Recall',
      title: 'Social Media Marketing (SMM)',
      tagline: 'Consistent branding that builds long-term recall and trust',
      desc: 'Consistent, viral, and brand-building content across Instagram, LinkedIn, and Facebook that earns trust and triggers warm customer inquiries.',
      details: [
        'High-retention Reels, Carousels & visual identity templates',
        'Educational and promotional 30-day content calendar planning',
        'Engagement and community interaction strategies',
        'Repurposing blog content into multi-slide social assets',
      ],
      linkText: 'Explore Social Media Marketing',
      linkUrl: '/smm-lucknow',
    },
    {
      id: 'webdev',
      number: '05',
      badge: '💻 Fast & SEO-Ready',
      img: '/service-web.png',
      tag: '90+ PageSpeed',
      title: 'Website Development & Landing Pages',
      tagline: 'Fast, mobile-friendly websites designed to convert',
      desc: 'Ultra-fast, mobile-first websites and conversion-focused landing pages designed from day one to turn visitors into booked enquiries.',
      details: [
        'Sub-1.5s load times & 90+ Mobile Core Web Vitals compliance',
        'Clean React & modern HTML architecture with 0 bloated plugins',
        'Strategic conversion elements and prominent call-to-actions',
        'Built-in structured data and self-referencing canonical tags',
      ],
      linkText: 'Explore Web Development',
      linkUrl: '/web-dev-lucknow',
    },
    {
      id: 'growth',
      number: '06',
      badge: '💡 1-on-1 Strategic Guidance',
      img: '/service-consulting.png',
      tag: 'Strategic Roadmap',
      title: 'Growth Advisory & SEO Consulting',
      tagline: 'Direct 1-on-1 strategy sessions for marketing clarity',
      desc: 'Not ready for a full retainer? Book a direct strategic session with Anirudh. I review your marketing funnel, audit bottlenecks, and deliver a 90-day blueprint.',
      details: [
        'Full digital architecture and competitor gap review',
        'Identification of wasted ad spend and lost search traffic',
        'Prioritized 90-day execution roadmap tailored to your budget',
        'Direct 1-on-1 consultation with no agency intermediaries',
      ],
      linkText: 'Explore Growth Advisory',
      linkUrl: '/seo-consultant',
    },
  ];

  return (
    <div className="page-wrapper services-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Services Hero */}
      <section style={{ padding: '70px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            What I Can Do For Your Business
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
            Pick one service or combine them. I will tell you honestly what your business needs first. You work directly with me—no account managers, no interns, no lock-in contract.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '13px 26px' }}>
              🚀 Request My Free SEO Audit
            </Link>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '13px 24px' }}
            >
              💬 Chat on WhatsApp
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
                    <span className="service-badge-pill">{s.badge}</span>
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
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>
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
      <section className="city-hub-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tag">Where I Work</span>
          <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '12px' }}>
            Available On-Site &amp; <span className="gradient-text">Remotely Across India</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '0 auto 36px', fontSize: '0.96rem' }}>
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
    </div>
  );
}
