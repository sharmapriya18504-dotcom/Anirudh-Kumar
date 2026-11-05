import React from 'react';
import { Link } from 'react-router-dom';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'seo',
      number: '01',
      title: 'SEO (Search Engine Optimization)',
      tagline: 'Rank for searches your customers actually make',
      desc: 'Get your website to rank on Google for the searches your customers actually make. Technical fixes, on-page SEO, content and link building.',
      icon: 'bi-search',
      color: '#FF6B00',
      details: [
        'Technical SEO (Site speed, Core Web Vitals, Crawlability)',
        'On-Page Optimization (Title tags, Schema markup, Meta robots)',
        'Search Intent Content Strategy (Articles that answer customer queries)',
        'Sustainable, White-Hat Link Building & Digital Authority',
      ],
      linkText: 'Learn more about SEO',
      cityLink: '/seo-expert-lucknow',
    },
    {
      id: 'local-seo',
      number: '02',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Dominate Google Maps & "Near Me" searches',
      desc: "Show up in Google Maps and 'near me' searches so nearby customers call you first instead of the competitor down the street.",
      icon: 'bi-geo-alt-fill',
      color: '#FF8800',
      details: [
        'Google Business Profile setup, claim & suspension resolution',
        'Map 3-Pack rank tracking across target city neighborhoods',
        'NAP citation consistency on local Indian directories',
        'Review generation frameworks to build authentic social proof',
      ],
      linkText: 'Learn more about Local SEO',
      cityLink: '/seo-expert-lucknow',
    },
    {
      id: 'ads',
      number: '03',
      title: 'Google Ads & Meta Ads',
      tagline: 'Paid campaigns built around leads and sales, not just clicks',
      desc: 'Paid advertising campaigns designed to generate measurable revenue. Clear tracking so you know what each rupee returns.',
      icon: 'bi-bullseye',
      color: '#FFB800',
      details: [
        'High-intent Google Search Ads targeting active buyers',
        'Meta Ads (Facebook & Instagram) hyper-targeted by location & interest',
        'Conversion tracking setup via GA4 & server-side events',
        'Negative keyword sculpting to eliminate wasted budget',
      ],
      linkText: 'Learn more about Paid Ads',
      cityLink: '/contact?service=ads',
    },
    {
      id: 'smm',
      number: '04',
      title: 'Social Media Marketing',
      tagline: 'Consistent branding that builds long-term recall and trust',
      desc: 'Consistent content and community building on Instagram, LinkedIn and more, so people remember and trust your brand.',
      icon: 'bi-share-fill',
      color: '#FF6B00',
      details: [
        'Visual identity & social post templates',
        'Educational and promotional content calendar planning',
        'Engagement and community interaction strategies',
        'Repurposing blog content into multi-slide carousels & reels',
      ],
      linkText: 'Learn more about Social Media',
      cityLink: '/contact?service=smm',
    },
    {
      id: 'webdev',
      number: '05',
      title: 'Website Development',
      tagline: 'Fast, mobile-friendly websites designed to convert',
      desc: 'Fast, mobile-friendly websites and landing pages designed to turn visitors into enquiries with SEO built in from day one.',
      icon: 'bi-laptop-fill',
      color: '#FF8800',
      details: [
        'Clean React / Vite / Modern HTML architecture with 0 bloat',
        'Sub-second load times and 90+ Mobile Core Web Vitals compliance',
        'Strategic conversion elements and prominent call-to-actions',
        'Built-in structured data and self-referencing canonical tags',
      ],
      linkText: 'Learn more about Website Development',
      cityLink: '/contact?service=webdev',
    },
    {
      id: 'growth',
      number: '06',
      title: 'Growth Advisory',
      tagline: 'Direct strategy sessions for marketing clarity',
      desc: 'Not ready for a full retainer? Book a strategy session. I review your marketing, find the bottlenecks, and give you a clear action plan.',
      icon: 'bi-compass-fill',
      color: '#FFB800',
      details: [
        'Full digital architecture and competitor review',
        'Identification of wasted ad spend and lost search traffic',
        'Prioritized 90-day execution roadmap tailored to your budget',
        'Direct 1-on-1 consultation with no agency intermediaries',
      ],
      linkText: 'Learn more about Growth Advisory',
      cityLink: '/contact?service=advisory',
    },
  ];

  return (
    <div className="page-wrapper services-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Services Hero */}
      <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-cyan" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-violet" style={{ top: '100px', right: '-150px' }} />

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
              color: '#f0f4fc',
            }}
          >
            Digital Marketing &amp; <span className="gradient-text">SEO Services</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#98a7c6', lineHeight: 1.65, marginBottom: '28px' }}>
            Pick one service or combine them. I will tell you honestly what your business needs first. You work directly with me—no account managers, no interns, no lock-in contract.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              🚀 Request My Free SEO Audit
            </Link>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 24px' }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6 3D Service Cards Grid */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '30px',
            }}
          >
            {servicesList.map((s) => (
              <TiltCard3D key={s.id} maxTilt={9} style={{ height: '100%' }}>
                <div className="service-3d-card" style={{ height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div className="service-3d-icon-wrap" style={{ margin: 0 }}>
                        <i className={`bi ${s.icon}`}></i>
                      </div>
                      <span style={{ fontFamily: 'var(--ff-d)', fontSize: '1.6rem', color: '#657599' }}>
                        {s.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', color: '#f0f4fc', marginBottom: '8px' }}>{s.title}</h3>
                    <div style={{ fontSize: '0.82rem', color: '#FF6B00', fontWeight: 600, marginBottom: '14px' }}>
                      {s.tagline}
                    </div>
                    <p style={{ color: '#98a7c6', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {s.desc}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.78rem', color: '#657599', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700, marginBottom: '10px' }}>
                        Key Deliverables
                      </div>
                      <ul style={{ paddingLeft: '18px', margin: 0, color: '#dbe4f5', fontSize: '0.86rem', lineHeight: 1.7 }}>
                        {s.details.map((d, didx) => (
                          <li key={didx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={s.cityLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#FF6B00',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      marginTop: '10px',
                    }}
                  >
                    <span>{s.linkText}</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* City Hub Cards Linkage */}
      <section style={{ padding: '60px 0 80px', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tag">Where I Work</span>
          <h2 className="section-heading" style={{ marginTop: '10px' }}>
            Available On-Site &amp; <span className="gradient-text">Remotely Across India</span>
          </h2>
          <p style={{ color: '#98a7c6', maxWidth: '600px', margin: '0 auto 40px' }}>
            Choose your city for localized search strategies and in-person meeting details:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { city: 'Lucknow', tag: 'On-site in Gomti Nagar', link: '/seo-expert-lucknow' },
              { city: 'Kanpur', tag: 'On-site in Civil Lines / Panki', link: '/seo-expert-kanpur' },
              { city: 'Noida', tag: 'On-site & Hybrid in NCR', link: '/seo-expert-noida' },
              { city: 'Remote India', tag: 'Pan-India Client Support', link: '/remote-seo-services' },
            ].map((loc, idx) => (
              <Link
                key={idx}
                to={loc.link}
                className="glass-panel"
                style={{
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ fontSize: '1.4rem', color: '#FF6B00', marginBottom: '8px' }}>📍</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f0f4fc' }}>{loc.city}</div>
                <div style={{ fontSize: '0.8rem', color: '#98a7c6', marginTop: '4px' }}>{loc.tag}</div>
                <span style={{ color: '#FF8800', fontSize: '0.82rem', fontWeight: 700, marginTop: '12px' }}>
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
