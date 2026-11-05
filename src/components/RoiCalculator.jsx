import React, { useState } from 'react';

export default function RoiCalculator() {
  const [visitors, setVisitors] = useState(2500);
  const [goal, setGoal] = useState('local');

  const goals = [
    { id: 'local', name: 'Local Business (Lucknow / Kanpur / Noida)', multiplier: 3.2, leadRate: 0.035, roi: '6.5x' },
    { id: 'leadgen', name: 'Clinics & Professional Practice', multiplier: 3.8, leadRate: 0.045, roi: '8.0x' },
    { id: 'ecommerce', name: 'E-Commerce / D2C Brand', multiplier: 4.5, leadRate: 0.025, roi: '6.2x' },
    { id: 'b2b', name: 'B2B & Manufacturing Suppliers', multiplier: 2.8, leadRate: 0.04, roi: '7.0x' },
  ];

  const currentGoal = goals.find((g) => g.id === goal) || goals[0];
  const projectedVisitors = Math.round(visitors * currentGoal.multiplier);
  const estimatedLeads = Math.round(projectedVisitors * currentGoal.leadRate);

  const handleApply = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    const msgBox = document.querySelector('textarea[name="message"], textarea');
    if (msgBox) {
      msgBox.value = `Hi Anirudh, currently my website has ~${visitors.toLocaleString('en-IN')} visitors/month. My business category is ${currentGoal.name}. I want to grow our organic visibility and turn searches into ~${estimatedLeads} qualified leads/month.`;
      msgBox.focus();
    }
  };

  return (
    <div className="roi-calculator-wrap" style={{ margin: '60px 0' }}>
      <div
        className="roi-card glass-panel"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '44px 36px',
          boxShadow: 'var(--shadow)',
          backdropFilter: 'blur(16px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Top Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.16) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>
            ⚡ Interactive Growth Estimator
          </span>
          <h3
            style={{
              fontFamily: 'var(--ff-d)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '1px',
              color: 'var(--text)',
              marginTop: '10px',
            }}
          >
            Calculate Your <span className="gradient-text">Estimated Search &amp; Lead Growth</span>
          </h3>
          <p style={{ color: 'var(--text2)', maxWidth: '620px', margin: '10px auto 0', fontSize: '0.94rem', lineHeight: 1.6 }}>
            See how focusing on high-intent search terms and technical optimization can scale your organic enquiries.
          </p>
        </div>

        <div
          className="calculator-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '35px',
            alignItems: 'center',
          }}
        >
          {/* Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                  Current Monthly Website Traffic:
                </label>
                <span
                  style={{
                    color: '#FF6B00',
                    fontWeight: 800,
                    fontFamily: 'var(--ff-d)',
                    fontSize: '1.25rem',
                  }}
                >
                  {visitors.toLocaleString('en-IN')} visitors/mo
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#FF6B00',
                  cursor: 'pointer',
                  height: '6px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text3)',
                  marginTop: '6px',
                }}
              >
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>
                Select Your Business Type:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {goals.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: goal === g.id ? '1px solid #FF6B00' : '1px solid var(--border)',
                      background: goal === g.id ? 'rgba(255, 107, 0, 0.12)' : 'var(--bg2)',
                      color: goal === g.id ? '#FF6B00' : 'var(--text2)',
                      fontWeight: goal === g.id ? 700 : 500,
                      fontSize: '0.82rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border2)', paddingBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Projected Monthly Traffic
                </div>
                <div style={{ fontFamily: 'var(--ff-d)', fontSize: '2.4rem', color: 'var(--text)', lineHeight: 1.1, marginTop: '4px' }}>
                  ~{projectedVisitors.toLocaleString('en-IN')}
                </div>
              </div>
              <span
                style={{
                  background: 'rgba(255, 107, 0, 0.15)',
                  color: '#FF6B00',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                }}
              >
                +{Math.round((currentGoal.multiplier - 1) * 100)}% Growth
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border2)', paddingBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Estimated Qualified Enquiries
                </div>
                <div style={{ fontFamily: 'var(--ff-d)', fontSize: '2.4rem', color: '#FF6B00', lineHeight: 1.1, marginTop: '4px' }}>
                  ~{estimatedLeads.toLocaleString('en-IN')} /mo
                </div>
              </div>
              <span
                style={{
                  background: 'rgba(255, 107, 0, 0.15)',
                  color: '#FF6B00',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                }}
              >
                High Intent
              </span>
            </div>

            <button
              type="button"
              onClick={handleApply}
              className="btn btn-primary roi-claim-btn"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '0.96rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              🚀 Apply This Growth Target To My Free Audit →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
