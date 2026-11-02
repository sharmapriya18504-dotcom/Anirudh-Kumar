import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'What is SEO cost in Lucknow?',
    a: 'My standard SEO pricing is strictly transparent and customized exclusively based on your competitive vertical. An exact proposal is provided directly after our extensive free SEO audit.',
    category: 'pricing'
  },
  {
    q: 'How long SEO takes?',
    a: 'Aggressive Local Google dominance prominently shows high growth within 3-6 months. We solely employ sustainable White-Hat SEO techniques ensuring unshakeable, long-lasting ROI.',
    category: 'ranking'
  },
  {
    q: 'Do you work in Kanpur?',
    a: 'Yes. While I am prominently located in Lucknow, my Digital Marketing capabilities routinely rank local Kanpur businesses #1 on Google Maps.',
    category: 'local'
  },
  {
    q: 'Can you rank my business?',
    a: 'Absolutely. Our localized technical auditing, vast backlink networks, and proprietary keyword research routinely propel businesses entirely beyond their competitors organically.',
    category: 'ranking'
  },
  {
    q: 'Free SEO audit mein kya milta hai?',
    a: 'Free SEO audit mein aapko milega: Current website health score, Top 10 technical issues, Keyword opportunity analysis, Competitor analysis (top 3), Local SEO assessment, aur Custom action plan. Completely free — koi strings attached nahi.',
    category: 'pricing'
  },
  {
    q: 'Reporting kitni often milti hai?',
    a: 'Professional aur Enterprise packages mein weekly detailed PDF reports milti hain — traffic, rankings, leads, ad spend, ROI — sab clearly mentioned. Starter package mein monthly report milti hai. Anytime WhatsApp par update maang sakte hain.',
    category: 'agency'
  },
  {
    q: 'Kya aap website bhi banate hain?',
    a: 'Haan! Main Custom HTML/CSS, WordPress, Landing Pages aur E-commerce websites banata hoon. Mere websites ka Google PageSpeed score 95+ hota hai — blazing fast, mobile-first, aur fully SEO-optimized.',
    category: 'agency'
  },
  {
    q: 'Agency hire karein ya aapko? Fark kya hai?',
    a: 'Jab aap mujhe hire karte hain, toh seedha ek senior expert ke saath kaam karte hain — koi intern, koi account manager chain nahi. Main personally aapke campaigns manage karta hoon. Agencies se cheaper bhi hoon aur faster results bhi deliver karta hoon. Plus — transparent pricing aur no lock-in.',
    category: 'agency'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'pricing', label: '💰 Pricing & ROI' },
  { id: 'ranking', label: '🚀 Rankings & SEO' },
  { id: 'local', label: '📍 Lucknow & Kanpur' },
  { id: 'agency', label: '⭐ Anirudh vs Agency' }
];

export default function InteractiveFaq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchTerm.trim() === '' ||
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="interactive-faq">
      {/* Search & Category Filter Bar */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{ position: 'relative', marginBottom: '14px' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search questions (e.g. cost, Kanpur, ranking, timeline...)"
            style={{
              width: '100%',
              padding: '12px 18px 12px 42px',
              borderRadius: '50px',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--accent)';
              e.target.style.boxShadow = '0 0 15px rgba(255, 107, 0, 0.2)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <span
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text3)',
              pointerEvents: 'none'
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
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--text3)',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? FAQ_DATA.length
                : FAQ_DATA.filter((f) => f.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isSelected ? 'var(--accent)' : 'var(--bg2)',
                  color: isSelected ? '#fff' : 'var(--text2)',
                  border: isSelected ? '1px solid var(--accent)' : '1px solid var(--border)',
                  borderRadius: '30px',
                  padding: '5px 14px',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    background: isSelected ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                    padding: '1px 6px',
                    fontSize: '0.72rem'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Item List */}
      <div className="faq-list">
        {filteredFaqs.length === 0 ? (
          <div
            style={{
              padding: '30px',
              textAlign: 'center',
              background: 'var(--bg2)',
              borderRadius: 'var(--radius)',
              border: '1px dashed var(--border)',
              color: 'var(--text2)'
            }}
          >
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Koi matching sawaal nahi mila. Aap seedha WhatsApp par puch sakte hain!
            </p>
            <a
              href="https://wa.me/919999999999?text=Hi%20Anirudh!%20I%20have%20a%20question."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ display: 'inline-flex', marginTop: '14px', padding: '8px 18px', fontSize: '0.85rem' }}
            >
              💬 WhatsApp Anirudh Now
            </a>
          </div>
        ) : (
          filteredFaqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx) || searchTerm.length > 0;
            return (
              <div
                key={idx}
                className={`faq-item reveal visible ${isOpen ? 'open' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: isOpen ? '1px solid var(--accent)' : '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  marginBottom: '12px',
                  background: isOpen ? 'rgba(255, 107, 0, 0.03)' : 'var(--bg2)',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => toggleItem(idx)}
              >
                <div
                  className="faq-q"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 20px',
                    fontWeight: 700,
                    color: isOpen ? 'var(--accent)' : 'var(--text)'
                  }}
                >
                  <span>{item.q}</span>
                  <div
                    className="faq-icon"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      fontSize: '1.4rem',
                      lineHeight: '1',
                      color: isOpen ? 'var(--accent)' : 'var(--text3)'
                    }}
                  >
                    +
                  </div>
                </div>
                {isOpen && (
                  <div
                    className="faq-a"
                    style={{
                      padding: '0 20px 20px 20px',
                      color: 'var(--text2)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
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
