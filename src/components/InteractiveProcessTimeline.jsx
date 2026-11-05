import React, { useState } from 'react';

const steps = [
  {
    step: '01',
    title: 'Free SEO & Health Audit',
    subtitle: 'Zero Cost • 24-48 Hours Turnaround',
    icon: '🔍',
    description: 'I perform an in-depth review of your website architecture, Google Search Console data, Google Business Profile, PageSpeed, and top local competitors in your niche.',
    deliverables: [
      'Technical health & crawl error report',
      'Local competitor keyword gap checklist',
      'PageSpeed & Core Web Vitals diagnostic',
      'Actionable priority roadmap'
    ]
  },
  {
    step: '02',
    title: 'Custom Action Plan',
    subtitle: 'Budget Aligned • Transparent Scope',
    icon: '📋',
    description: 'No generic packages. You receive a structured roadmap custom-built for your business goals, target locations (Lucknow, Kanpur, Noida or Pan-India), and budget.',
    deliverables: [
      'High-intent keyword target list',
      'Content calendar & location page structure',
      'Expected timeline for first visible rankings',
      'Transparent quote with month-to-month flexibility'
    ]
  },
  {
    step: '03',
    title: 'Precision Execution',
    subtitle: 'Hands-On • Ethical White-Hat Work',
    icon: '⚡',
    description: 'I personally execute all technical on-page fixes, schema markup, Google Maps optimization, localized landing pages, content updates, and paid advertising campaigns.',
    deliverables: [
      'Meta tags, titles, headings & schema implementation',
      'Google Business Profile category & citation tuning',
      'Content publishing & internal linking hubs',
      'Conversion tracking & lead webhook setup'
    ]
  },
  {
    step: '04',
    title: 'Track & Continual Optimization',
    subtitle: 'Data-Driven • Weekly Monitoring',
    icon: '📈',
    description: 'SEO is never set-and-forget. I continuously monitor keyword positions, user behavior, click-through rates, and algorithmic changes to double down on what works.',
    deliverables: [
      'Search Console impressions & clicks analysis',
      'A/B testing on ad copies and landing page CTAs',
      'Elimination of low-performing budget drains',
      'Rapid adjustments to competitor movements'
    ]
  },
  {
    step: '05',
    title: 'Plain-Language Report & Scale',
    subtitle: 'No Jargon • Direct Review Call',
    icon: '🚀',
    description: 'You get a clean, easy-to-read PDF report showing exact rankings, calls received, and leads generated. No vanity metrics — only numbers that affect your revenue.',
    deliverables: [
      'Monthly PDF report with plain-language summary',
      'Direct WhatsApp & voice call review with Anirudh',
      'Next-month growth & expansion objectives',
      'Seamless scaling with zero lock-in contracts'
    ]
  }
];

export default function InteractiveProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <div className="interactive-process-wrap" style={{ marginTop: '24px' }}>
      {/* Step Numbers Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '10px',
          marginBottom: '28px'
        }}
      >
        {steps.map((s, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveStep(index)}
            style={{
              padding: '14px 10px',
              borderRadius: '12px',
              border: activeStep === index ? '2px solid var(--accent)' : '1px solid var(--border2)',
              background: activeStep === index ? 'rgba(255, 107, 0, 0.12)' : 'var(--card)',
              color: activeStep === index ? 'var(--accent)' : 'var(--text2)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.25s ease'
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1px' }}>
              STEP {s.step}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: activeStep === index ? 'var(--text)' : 'var(--text3)',
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.2
              }}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
            </span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase Card */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '32px 28px',
          boxShadow: '0 16px 36px rgba(0,0,0,0.2)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span className="tag" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>
              STEP {current.step}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text2)', fontWeight: 600 }}>
              {current.subtitle}
            </span>
          </div>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '6px 0 12px', color: 'var(--text)' }}>
            {current.icon} {current.title}
          </h3>

          <p style={{ color: 'var(--text2)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '20px' }}>
            {current.description}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '0.86rem', borderRadius: '20px' }}>
              Start with Step 1 Free →
            </a>
            <a
              href="https://wa.me/918604625862"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '20px' }}
            >
              💬 Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Deliverables Box */}
        <div
          style={{
            background: 'var(--bg2)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid var(--border2)'
          }}
        >
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent)' }}>📦</span>
            <span>What You Receive in Step {current.step}:</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {current.deliverables.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 800, marginTop: '1px' }}>✓</span>
                <span style={{ lineHeight: 1.45 }}>{item}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '18px',
              paddingTop: '14px',
              borderTop: '1px solid var(--border2)',
              fontSize: '0.78rem',
              color: 'var(--text3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>Direct execution by Anirudh Kumar</span>
            <span style={{ color: '#00d68f', fontWeight: 700 }}>✓ Verified Process</span>
          </div>
        </div>
      </div>
    </div>
  );
}
