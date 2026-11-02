import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import InteractivePricing from '../components/InteractivePricing.jsx';


export default function PricingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowToast(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const btn = e.target.querySelector('button[type="submit"], input[type="submit"], .btn-primary');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = '✅ Submitted! 24 hrs mein reply milega.';
      btn.style.background = '#00D68F';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        setFormSubmitted(false);
        setShowToast(false);
      }, 4500);
    }
  };

  return (
    <div className="page-wrapper pricingpage">
    <div style={{"height":"var(--nav-h)"}}></div>
    <section id="pricing">
            <div className="container">
                <div className="section-header center text-center reveal visible">
                    <span className="tag">Transparent Pricing</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Simple, Clear             <span className="gradient-text">Packages</span></h2>
                    <p className="section-sub">Koi hidden charges nahi. Jo package choose karo, wahi milega. Sabhi packages mein free
          SEO audit included hai.</p>
          </div>
                <InteractivePricing />
                <p className="text-center mt-4" style={{"color":"var(--text2)","fontSize":"0.85rem"}}>Custom requirements hain?           <Link to="/contact" style={{"color":"var(--accent)","fontWeight":"700"}}>Contact karein</Link> — aapke liye custom package
        bana deta hoon.</p>
        </div>
      </section>
      <Toast
        isVisible={showToast}
        message="24 hours mein aapko callback ya email reply mil jayega."
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
