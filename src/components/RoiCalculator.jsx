import React, { useState } from 'react';

export default function RoiCalculator() {
  const [visitors, setVisitors] = useState(2500);
  const [goal, setGoal] = useState('local');

  const goals = [
    { id: 'local', name: 'Local Business (Lucknow/Kanpur)', multiplier: 3.4, leadRate: 0.035, roi: '7.2x' },
    { id: 'leadgen', name: 'Real Estate / Clinic Leads', multiplier: 4.2, leadRate: 0.045, roi: '8.5x' },
    { id: 'ecommerce', name: 'E-Commerce Store', multiplier: 5.1, leadRate: 0.025, roi: '6.8x' },
    { id: 'b2b', name: 'B2B / Industrial Kanpur', multiplier: 3.0, leadRate: 0.04, roi: '7.5x' }
  ];

  const currentGoal = goals.find(g => g.id === goal) || goals[0];
  const projectedVisitors = Math.round(visitors * currentGoal.multiplier);
  const estimatedLeads = Math.round(projectedVisitors * currentGoal.leadRate);

  const handleApply = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    const msgBox = document.querySelector('textarea[name="message"], textarea');
    if (msgBox) {
      msgBox.value = `Hi Anirudh, currently my website has ~${visitors.toLocaleString('en-IN')} visitors/mo. My goal is ${currentGoal.name}. I want to achieve ~${projectedVisitors.toLocaleString('en-IN')} visitors and ~${estimatedLeads} leads/mo.`;
      msgBox.focus();
    }
  };

  return (
    <div className="roi-calculator-wrap" style={{ margin: '50px 0' }}>
      <div
        className="roi-card"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 17, 36, 0.95), rgba(12, 12, 26, 0.98))',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 107, 0, 0.08)',
          backdropFilter: 'blur(16px)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Top Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 0, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }}
        ></div>

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
              marginTop: '10px'
            }}
          >
            Calculate Your <span className="gradient-text">Estimated SEO &amp; Lead Growth</span>
          </h3>
          <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: '10px auto 0', fontSize: '0.95rem' }}>
            Dekhein aapki website Anirudh Kumar ki proven SEO aur Ads strategies ke baad kitna grow kar sakti hai.
          </p>
        </div>

        <div
          className="calculator-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '35px',
            alignItems: 'center'
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
                    color: 'var(--accent)',
                    fontWeight: 800,
                    fontFamily: 'var(--ff-d)',
                    fontSize: '1.4rem'
                  }}
                >
                  {visitors.toLocaleString('en-IN')} Visitors/mo
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
                  accentColor: 'var(--accent)',
                  cursor: 'pointer',
                  height: '8px',
                  background: 'var(--bg)',
                  borderRadius: '6px'
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text3)',
                  marginTop: '6px'
                }}
              >
                <span>500 (Starting out)</span>
                <span>25,000</span>
                <span>50,000+ (High scale)</span>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: '10px' }}>
                Select Your Business Industry / Objective:
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
                      border: goal === g.id ? '1px solid var(--accent)' : '1px solid var(--border2)',
                      background: goal === g.id ? 'rgba(255, 107, 0, 0.15)' : 'var(--bg)',
                      color: goal === g.id ? 'var(--accent)' : 'var(--text2)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.25s ease'
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
              background: 'rgba(6, 6, 15, 0.7)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div
                style={{
                  background: 'var(--bg2)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border2)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', textTransform: 'uppercase', fontWeight: 700 }}>
                  📈 Projected Traffic (90d)
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-d)',
                    fontSize: '2rem',
                    color: 'var(--accent)',
                    marginTop: '5px'
                  }}
                >
                  ~{projectedVisitors.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00D68F', fontWeight: 600 }}>
                  +{Math.round((currentGoal.multiplier - 1) * 100)}% Growth
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg2)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border2)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', textTransform: 'uppercase', fontWeight: 700 }}>
                  🎯 Monthly Target Leads
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-d)',
                    fontSize: '2rem',
                    color: 'var(--accent2)',
                    marginTop: '5px'
                  }}
                >
                  ~{estimatedLeads} Leads
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>
                  Inquiries &amp; Calls / mo
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg2)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border2)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', textTransform: 'uppercase', fontWeight: 700 }}>
                  💰 Expected ROI
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-d)',
                    fontSize: '2rem',
                    color: '#00D68F',
                    marginTop: '5px'
                  }}
                >
                  {currentGoal.roi}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>
                  Average Client Return
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg2)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '1px solid var(--border2)'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text3)', textTransform: 'uppercase', fontWeight: 700 }}>
                  ⏱️ Timeline to Rank
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-d)',
                    fontSize: '2rem',
                    color: 'var(--text)',
                    marginTop: '5px'
                  }}
                >
                  60 - 90 Days
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>
                  Noticeable Google Shift
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApply}
              className="btn btn-primary roi-claim-btn"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              🚀 Claim This Growth Plan For Your Business →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
