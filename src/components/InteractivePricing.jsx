import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InteractivePricing({ onSelectPlan }) {
  const [cycle, setCycle] = useState('monthly'); // 'monthly' | 'quarterly'
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 8000,
      quarterlyMonthly: 6800,
      desc: 'Chhote businesses aur startups ke liye. Digital presence banana shuru karein.',
      popular: false,
      features: [
        'On-Page SEO (10 pages)',
        'Google Business Profile Setup',
        '2 Blog Posts/Month',
        'Monthly Report',
        'WhatsApp Support',
        'Meta/Google Ads (Optional Add-on)',
        'Social Media Management (Optional)'
      ]
    },
    {
      name: 'Professional',
      monthlyPrice: 18000,
      quarterlyMonthly: 15300,
      desc: 'Growing businesses ke liye. Full digital marketing + ads management.',
      popular: true,
      features: [
        'Complete SEO (20+ pages)',
        'Social Media (2 platforms)',
        'Meta Ads Management',
        '4 Blog Posts/Month',
        'Weekly Reporting',
        'Google Ads Setup',
        'Priority WhatsApp Support'
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: 35000,
      quarterlyMonthly: 29750,
      desc: 'Established brands ke liye. Full-scale digital marketing dominance.',
      popular: false,
      features: [
        'Everything in Professional',
        'Full Social Media (4 platforms)',
        'Meta + Google Ads Both',
        '8 Blog Posts + Content Strategy',
        'YouTube SEO & Management',
        'Website Development Included',
        'Dedicated Account Manager (Me!)'
      ]
    }
  ];

  const handleChoose = (planName) => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      const select = document.querySelector('select[name="service"], select');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.toLowerCase().includes('seo') || select.options[i].value.toLowerCase().includes('seo')) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      const msg = document.querySelector('textarea');
      if (msg) {
        msg.value = `Hi Anirudh, I want to get started with the ${planName} Plan (${cycle === 'quarterly' ? 'Quarterly - 15% OFF' : 'Monthly'}). Please share the next steps.`;
        msg.focus();
      }
    } else {
      navigate('/contact');
    }
    if (onSelectPlan) onSelectPlan(planName);
  };

  return (
    <div>
      {/* BILLING TOGGLE */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}
      >
        <span
          style={{
            fontSize: '0.95rem',
            fontWeight: 600,
            color: cycle === 'monthly' ? 'var(--text)' : 'var(--text3)',
            cursor: 'pointer'
          }}
          onClick={() => setCycle('monthly')}
        >
          Monthly Retainer
        </span>
        <button
          type="button"
          onClick={() => setCycle(c => c === 'monthly' ? 'quarterly' : 'monthly')}
          style={{
            width: '60px',
            height: '32px',
            borderRadius: '50px',
            background: cycle === 'quarterly' ? 'var(--accent)' : 'var(--bg2)',
            border: '1px solid var(--border)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            padding: '2px'
          }}
          aria-label="Toggle billing cycle"
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: '#fff',
              transform: cycle === 'quarterly' ? 'translateX(28px)' : 'translateX(2px)',
              transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
            }}
          ></div>
        </button>
        <span
          style={{
            fontSize: '0.95rem',
            fontWeight: 600,
            color: cycle === 'quarterly' ? 'var(--accent)' : 'var(--text3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onClick={() => setCycle('quarterly')}
        >
          Quarterly Plan
          <span
            style={{
              background: 'rgba(0, 214, 143, 0.15)',
              color: '#00D68F',
              border: '1px solid #00D68F',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '20px'
            }}
          >
            SAVE 15%
          </span>
        </span>
      </div>

      {/* PRICING GRID */}
      <div className="pricing-grid">
        {plans.map((p, idx) => {
          const price = cycle === 'quarterly' ? p.quarterlyMonthly : p.monthlyPrice;
          return (
            <div
              key={p.name}
              className={`pricing-card reveal ${p.popular ? 'popular' : ''}`}
              style={{
                transitionDelay: `${0.1 * (idx + 1)}s`,
                position: 'relative',
                transform: p.popular ? 'scale(1.03)' : 'none',
                borderColor: p.popular ? 'var(--accent)' : 'var(--border2)'
              }}
            >
              {p.popular && (
                <div className="popular-badge" style={{ animation: 'bounceBadge 2s infinite' }}>
                  🔥 Most Popular
                </div>
              )}
              <div className="pricing-name">{p.name}</div>
              <div className="pricing-price">
                ₹{price.toLocaleString('en-IN')}{' '}
                <span>/month</span>
              </div>
              {cycle === 'quarterly' && (
                <div style={{ fontSize: '0.8rem', color: '#00D68F', marginTop: '-10px', marginBottom: '15px', fontWeight: 600 }}>
                  Billed quarterly (Save ₹{((p.monthlyPrice - p.quarterlyMonthly) * 3).toLocaleString('en-IN')})
                </div>
              )}
              <p className="pricing-desc">{p.desc}</p>
              <div className="pricing-features">
                {p.features.map((feat, fidx) => (
                  <div key={fidx} className="pf">
                    <div className="pf-check">✓</div>
                    {feat}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleChoose(p.name)}
                className={`btn ${p.popular ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', marginTop: 'auto', cursor: 'pointer' }}
              >
                {p.name === 'Enterprise' ? "Let's Talk" : 'Get Started'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
