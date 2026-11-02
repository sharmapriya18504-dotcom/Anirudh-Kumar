import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918604625862?text=Hello%20Anirudh%2C%20I%20want%20to%20talk%20with%20you."
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp Me"
      aria-label="Chat on WhatsApp"
    >
      <div className="wa-label">Chat on WhatsApp</div>
      <div className="wa-bubble">
        <i className="bi bi-whatsapp"></i>
      </div>
    </a>
  );
}

