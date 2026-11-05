import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TiltCard3D from './TiltCard3D.jsx';

export default function InteractivePricing({ onSelectPlan }) {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₹8,000',
      period: '/month',
      desc: 'For small businesses and startups building their online presence.',
      popular: false,
      features: [
        'On-page SEO (up to 10 pages)',
        'Google Business Profile setup',
        '2 blog posts per month',
        'Monthly report',
        'WhatsApp support',
      ],
      notIncluded: [
        'Ad management',
        'Social media management',
      ],
      ctaText: 'Get Started with Starter',
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '₹18,000',
      period: '/month',
      desc: 'For growing businesses that need SEO and ads together.',
      popular: true,
      features: [
        'Complete SEO (20+ pages)',
        'Social media management (2 platforms)',
        'Meta Ads management',
        'Google Ads setup',
        '4 blog posts per month',
        'Weekly reporting',
        'Priority WhatsApp support',
      ],
      notIncluded: [],
      ctaText: 'Get Started with Professional',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹35,000',
      period: '/month',
      desc: 'For established brands that want full-scale digital marketing.',
      popular: false,
      features: [
        'Everything in Professional',
        'Social media management (4 platforms)',
        'Meta Ads and Google Ads',
        '8 blog posts per month with content strategy',
        'YouTube SEO and management',
        'Website development included',
        'Me as your dedicated point of contact',
      ],
      notIncluded: [],
      ctaText: "Let's Talk Enterprise",
    },
  ];

  const handleChoose = (plan) => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      const select = document.querySelector('select[name="service"], select');
      if (select) {
        select.value = 'SEO Services';
      }
      const msg = document.querySelector('textarea[name="message"], textarea');
      if (msg) {
        msg.value = `Hi Anirudh, I am interested in your ${plan.name} Package (${plan.price}/month). Please share the roadmap and audit details.`;
        msg.focus();
      }
    } else {
      navigate(`/contact?plan=${plan.id}`);
    }
    if (onSelectPlan) onSelectPlan(plan.name);
  };

  return (
    <div className="pricing-wrap" style={{ position: 'relative' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(41, 121, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      {/* PRICING CARDS GRID */}
      <div
        className="pricing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}
      >
        {plans.map((p) => (
          <TiltCard3D
            key={p.id}
            maxTilt={8}
            className={`pricing-card-wrap ${p.popular ? 'popular' : ''}`}
            style={{ height: '100%' }}
          >
            <div
              className={`pricing-card ${p.popular ? 'popular' : ''}`}
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: p.popular
                  ? 'linear-gradient(180deg, rgba(16, 26, 68, 0.85) 0%, rgba(9, 14, 38, 0.95) 100%)'
                  : 'rgba(12, 18, 44, 0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: p.popular ? '1px solid rgba(0, 229, 255, 0.5)' : '1px solid rgba(41, 121, 255, 0.2)',
                borderRadius: '24px',
                padding: '36px 30px',
                boxShadow: p.popular
                  ? '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(41, 121, 255, 0.25)'
                  : '0 12px 35px rgba(0, 0, 0, 0.45)',
                position: 'relative',
              }}
            >
              {p.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00E5FF, #2979FF)',
                    color: '#050814',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    padding: '5px 18px',
                    borderRadius: '30px',
                    boxShadow: '0 4px 15px rgba(0, 229, 255, 0.4)',
                  }}
                >
                  ⚡ Most Popular
                </div>
              )}

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f0f4fc', fontFamily: 'var(--ff-d)', letterSpacing: '0.5px' }}>
                  {p.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '10px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: p.popular ? '#00E5FF' : '#f0f4fc', fontFamily: 'var(--ff-d)' }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: '#98a7c6' }}>{p.period}</span>
                </div>
                <p style={{ color: '#98a7c6', fontSize: '0.88rem', marginTop: '10px', lineHeight: 1.5, minHeight: '42px' }}>
                  {p.desc}
                </p>
              </div>

              <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '14px 0 20px' }}></div>

              <div className="pricing-features" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {p.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#dbe4f5' }}>
                    <span style={{ color: '#00E5FF', fontWeight: 800, lineHeight: 1.2 }}>✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
                {p.notIncluded.map((feat, idx) => (
                  <div key={`no-${idx}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#657599' }}>
                    <span style={{ color: '#4b5563', fontWeight: 800, lineHeight: 1.2 }}>✗</span>
                    <span style={{ textDecoration: 'line-through' }}>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleChoose(p)}
                className={`btn ${p.popular ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '12px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  justifyContent: 'center',
                }}
              >
                {p.ctaText}
              </button>
            </div>
          </TiltCard3D>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px', color: '#98a7c6', fontSize: '0.92rem' }}>
        Need something custom?{' '}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            else navigate('/contact');
          }}
          style={{ color: '#00E5FF', fontWeight: 700, textDecoration: 'underline' }}
        >
          Tell me what you need
        </a>{' '}
        and I will build a package for you.
      </div>
    </div>
  );
}
