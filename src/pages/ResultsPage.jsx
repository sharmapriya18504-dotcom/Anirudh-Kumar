import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function ResultsPage() {
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
      btn.style.background = '#FF6B00';
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
    <div className="page-wrapper resultspage">
    <header className="page-hero">
            <div className="container text-center">
                <span className="tag">Proven ROI</span>
                <h1 className="section-heading mt-4">We Deliver           <span className="gradient-text">Real Growth</span></h1>
                <p className="section-sub mx-auto">Explore our success stories and client experiences from Lucknow and Kanpur.</p>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="services-grid" style={{"gridTemplateColumns":"1fr 1fr"}}>
                    <Link className="service-card text-center" to="/testimonials">
                        <div style={{"fontSize":"3rem","marginBottom":"20px"}}>💬</div>
                        <h3>Client Reviews</h3>
                        <p>Read honest feedback from the business owners we work with.</p>
                        <div className="btn btn-outline mt-4">Read Testimonials</div>
            </Link>
                    <Link className="service-card text-center" to="/case-studies">
                        <div style={{"fontSize":"3rem","marginBottom":"20px"}}>📊</div>
                        <h3>Case Studies</h3>
                        <p>Detailed data and strategy breakdowns of our biggest wins.</p>
                        <div className="btn btn-outline mt-4">View Case Studies</div>
            </Link>
          </div>
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
