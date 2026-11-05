import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const locationsData = [
  {
    id: 'lucknow',
    city: 'Lucknow',
    subtitle: 'Base Location & On-Site Availability',
    tag: '🏛️ Based in Gomti Nagar',
    type: 'On-Site Meetings & Full Retainer',
    desc: 'Based right here in Gomti Nagar, Lucknow. I am available for face-to-face strategy meetings at your office anywhere across Lucknow. Helping local clinics, real estate, restaurants, and coaching institutes dominate local Google searches.',
    areas: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar', 'Aliganj', 'Mahanagar', 'Chinhat', 'Vikas Nagar'],
    highlights: [
      'In-person strategy audits at your office',
      'Google Maps 3-Pack rank acceleration',
      'Localized high-intent keyword clustering',
      'Direct WhatsApp access without middlemen'
    ],
    pageUrl: '/seo-expert-lucknow',
    badgeColor: '#FF6B00'
  },
  {
    id: 'kanpur',
    city: 'Kanpur',
    subtitle: 'Industrial & B2B Commercial Hub',
    tag: '🏭 Regular On-Site Visits',
    type: 'On-Site & Hybrid Execution',
    desc: 'Kanpur has a bustling industrial ecosystem of manufacturers, leather, textile, traders, and retail businesses. I provide dedicated SEO & performance ads to turn online search traffic into high-value B2B trade inquiries.',
    areas: ['Civil Lines', 'Swaroop Nagar', 'Kidwai Nagar', 'Kakadeo', 'Panki Industrial Area', 'Kalyanpur', 'Armapur'],
    highlights: [
      'B2B manufacturing keyword capture',
      'Local citations across Kanpur industrial zones',
      'Meta Ads & Lead Gen campaigns with clear ROAS',
      'Regular on-site meetings in Kanpur'
    ],
    pageUrl: '/seo-expert-kanpur',
    badgeColor: '#FFB800'
  },
  {
    id: 'noida',
    city: 'Noida (Delhi NCR)',
    subtitle: 'Startups, E-commerce & Tech Brands',
    tag: '🏢 On-Site & Hybrid Lead',
    type: 'On-Site / Hybrid Consulting',
    desc: 'Noida is fast-paced and ultra-competitive. Startups, IT companies, agencies, and e-commerce brands all fight for the same searches. Available for hands-on on-site sprints, marketing leadership, and team upskilling in Noida.',
    areas: ['Sector 62', 'Sector 18', 'Noida Expressway', 'Sector 63 Tech Zone', 'Greater Noida West'],
    highlights: [
      'SaaS & programmatic SEO architecture',
      'High-velocity content scaling & link building',
      'E-commerce CRO & Meta/Google ads scale',
      'Open to hybrid contracts & team coaching'
    ],
    pageUrl: '/seo-expert-noida',
    badgeColor: '#00E5FF'
  },
  {
    id: 'remote',
    city: 'Pan-India Remote',
    subtitle: 'Any City in India & International',
    tag: '🌐 100% Seamless Remote Workflow',
    type: 'Remote Digital Partnerships',
    desc: 'You do not need to be in my city to work with me. I manage high-performance SEO and ad accounts remotely for brands across Delhi, Mumbai, Bengaluru, Pune, and overseas with the exact same personal attention and weekly reporting.',
    areas: ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Kolkata', 'Global Clients'],
    highlights: [
      'Structured kickoff call & custom roadmap',
      'Weekly transparent PDF performance reports',
      'Quick daily turnaround on WhatsApp',
      'Zero lock-in month-to-month flexibility'
    ],
    pageUrl: '/remote-seo-services',
    badgeColor: '#00D68F'
  }
];

export default function InteractiveLocations() {
  const [activeTab, setActiveTab] = useState('lucknow');
  const loc = locationsData.find((l) => l.id === activeTab) || locationsData[0];

  return (
    <div className="interactive-locations-block" style={{ marginTop: '20px' }}>
      {/* City Switcher Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '32px'
        }}
      >
        {locationsData.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            style={{
              padding: '12px 22px',
              borderRadius: '30px',
              border: activeTab === item.id ? `2px solid ${item.badgeColor}` : '1px solid var(--border)',
              background: activeTab === item.id ? 'var(--card)' : 'var(--bg2)',
              color: activeTab === item.id ? 'var(--text)' : 'var(--text2)',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: activeTab === item.id ? `0 6px 20px rgba(0,0,0,0.2)` : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <span>{item.tag.split(' ')[0]}</span>
            <span>{item.city}</span>
            {activeTab === item.id && (
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: item.badgeColor
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Active City Detail Card */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '36px 30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: loc.badgeColor
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          {/* Left Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="tag" style={{ borderColor: loc.badgeColor, color: loc.badgeColor }}>
                {loc.tag}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 600 }}>
                • {loc.type}
              </span>
            </div>

            <h3 style={{ fontSize: '1.9rem', fontWeight: 800, margin: '0 0 8px', color: 'var(--text)' }}>
              {loc.city} — <span style={{ color: loc.badgeColor }}>{loc.subtitle}</span>
            </h3>

            <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
              {loc.desc}
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {loc.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text)' }}>
                  <span style={{ color: loc.badgeColor, fontWeight: 800 }}>✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link
                to={loc.pageUrl}
                className="btn btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.88rem', borderRadius: '24px' }}
              >
                View Dedicated {loc.city} Page →
              </Link>
              <a
                href="https://wa.me/918604625862"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '24px' }}
              >
                💬 Chat for {loc.city}
              </a>
            </div>
          </div>

          {/* Right Visual Areas Card */}
          <div
            style={{
              background: 'var(--bg)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid var(--border2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text)' }}>
                📍 Key Areas &amp; Zones Covered
              </h4>
              <span style={{ fontSize: '0.75rem', color: loc.badgeColor, fontWeight: 700 }}>
                High-Intent Local Reach
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {loc.areas.map((area, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border2)',
                    color: 'var(--text)',
                    fontSize: '0.82rem',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontWeight: 600
                  }}
                >
                  📍 {area}
                </span>
              ))}
            </div>

            <div
              style={{
                background: 'rgba(255, 107, 0, 0.06)',
                border: '1px dashed var(--border)',
                borderRadius: '10px',
                padding: '14px',
                fontSize: '0.82rem',
                color: 'var(--text2)',
                lineHeight: 1.5
              }}
            >
              💡 <strong>Direct Access:</strong> You always deal directly with Anirudh Kumar. No account managers, no interns, no sales middlemen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

