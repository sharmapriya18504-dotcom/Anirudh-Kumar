import React from 'react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 10002,
        background: 'linear-gradient(135deg, rgba(20, 20, 35, 0.95), rgba(10, 10, 20, 0.98))',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--accent)',
        boxShadow: '0 10px 40px rgba(255, 107, 0, 0.25), 0 0 15px rgba(255, 107, 0, 0.15)',
        borderRadius: '16px',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        color: '#fff',
        fontFamily: 'var(--ff-b)',
        fontSize: '0.95rem',
        animation: 'slideUpToast 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(0, 214, 143, 0.15)',
          border: '1px solid #00D68F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00D68F',
          fontSize: '1.1rem',
          flexShrink: 0
        }}
      >
        ✓
      </div>
      <div>
        <div style={{ fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
          Success! Request Sent
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text2)' }}>
          {message || '24 hrs mein reply milega. Thank you!'}
        </div>
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text3)',
          cursor: 'pointer',
          marginLeft: '12px',
          fontSize: '1.2rem',
          lineHeight: 1
        }}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
