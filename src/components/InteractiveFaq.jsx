import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'How is working with you different from an agency?',
    a: 'You deal with me directly. I plan the strategy and do the work myself, so there is no handover to juniors and no confusion between sales and delivery.',
    category: 'agency',
  },
  {
    q: 'How long does SEO take to show results?',
    a: "Usually the first improvements are visible in 2 to 3 months, and stronger results come in 4 to 6 months. It depends on competition, your website's current condition and your niche. I will give you an honest estimate after the audit.",
    category: 'seo',
  },
  {
    q: 'What is included in the free SEO audit?',
    a: 'I check your technical health, on-page SEO, speed, Google Business Profile, top competitors and keyword opportunities. You receive a clear, actionable report with the biggest problems and how to fix them.',
    category: 'audit',
  },
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. Work is month-to-month. If I am not delivering measurable value, you can leave anytime.',
    category: 'pricing',
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'I work with healthcare clinics and doctors, coaching and education institutes, real estate consultants, e-commerce/D2C brands, local service businesses, and manufacturing/B2B suppliers across Lucknow, Kanpur, Noida and India.',
    category: 'general',
  },
  {
    q: 'How will I get updates and reports?',
    a: 'Through WhatsApp for quick day-to-day questions and a monthly PDF report with numbers explained in plain language, not confusing jargon.',
    category: 'agency',
  },
  {
    q: 'Can you build or redesign my website too?',
    a: 'Yes. I build fast, mobile-friendly websites and conversion-focused landing pages with SEO built in from day one.',
    category: 'services',
  },
  {
    q: 'How do we get started?',
    a: 'Request the free audit using the form below or message me directly on WhatsApp (+91 86046 25862). I will review your site and reply within 24 hours guaranteed.',
    category: 'audit',
  },
];

export default function InteractiveFaq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    return (
      searchTerm.trim() === '' ||
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="interactive-faq" style={{ position: 'relative' }}>
      {/* Search Input */}
      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search questions (e.g. agency, timeline, audit, cost, contract)..."
          style={{
            width: '100%',
            padding: '14px 20px 14px 46px',
            borderRadius: '50px',
            background: 'var(--card)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontSize: '0.92rem',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#FF6B00';
            e.target.style.boxShadow = '0 0 20px rgba(255, 107, 0, 0.25)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--border)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#FF6B00',
            pointerEvents: 'none',
          }}
        >
          <i className="bi bi-search"></i>
        </span>
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            style={{
              position: 'absolute',
              right: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: 'var(--text3)',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Accordion Items */}
      <div className="faq-list">
        {filteredFaqs.length === 0 ? (
          <div
            style={{
              padding: '30px',
              textAlign: 'center',
              background: 'var(--card)',
              borderRadius: '16px',
              border: '1px dashed var(--border)',
              color: 'var(--text2)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Have another question? Message me directly on WhatsApp!
            </p>
            <a
              href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ display: 'inline-flex', marginTop: '14px', padding: '10px 22px', fontSize: '0.88rem', borderColor: '#25D366', color: '#25D366' }}
            >
              💬 WhatsApp Me (+91 86046 25862)
            </a>
          </div>
        ) : (
          filteredFaqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx) || searchTerm.length > 0;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: isOpen ? '1px solid #FF6B00' : '1px solid var(--border)',
                  borderRadius: '16px',
                  marginBottom: '12px',
                  background: isOpen ? 'var(--card)' : 'var(--bg2)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 15px rgba(255, 107, 0, 0.15)' : 'none',
                }}
                onClick={() => toggleItem(idx)}
              >
                <div
                  className="faq-q"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 24px',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    color: isOpen ? '#FF6B00' : 'var(--text)',
                  }}
                >
                  <span style={{ paddingRight: '12px' }}>{item.q}</span>
                  <div
                    className="faq-icon"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      fontSize: '1.5rem',
                      lineHeight: '1',
                      color: isOpen ? '#FF6B00' : 'var(--accent)',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </div>
                </div>
                {isOpen && (
                  <div
                    className="faq-a"
                    style={{
                      padding: '0 24px 22px 24px',
                      color: 'var(--text2)',
                      fontSize: '0.94rem',
                      lineHeight: '1.65',
                      borderTop: '1px solid var(--border2)',
                      paddingTop: '14px',
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
