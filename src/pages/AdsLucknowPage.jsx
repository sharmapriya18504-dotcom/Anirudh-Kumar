import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function AdsLucknowPage() {
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
    <div className="page-wrapper adslucknowpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="tag">PPC & Paid Media</span>
                    <h1 className="section-heading mt-4">Stop Wasting Budget on             <br />            <span className="gradient-text">Google & Meta Ads</span></h1>
                    <p className="section-sub mx-auto">We build high-converting ad funnels that acquire customers at the lowest possible cost. Certified expertise for Lucknow startups and businesses.</p>
                    <div className="hero-btns justify-content-center mt-6">
                        <a href="#contact-form" className="btn btn-primary">Scale My Sales Now</a>
                        <Link className="btn btn-outline" to="/case-studies">See Ad Success Cases</Link>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">Why             <span className="gradient-text">Paid Ads</span> Work</h2>
          </div>
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">⚡</div>
                        <h3>Instant Results</h3>
                        <p>Start getting calls and leads within 24 hours of campaign launch.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🔍</div>
                        <h3>Targeted Intent</h3>
                        <p>Google Ads targets people exactly when they are looking for your product.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📊</div>
                        <h3>Full Tracking</h3>
                        <p>Know exactly where every rupee is spent and what ROI it generates.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <h2 className="section-heading text-center">Our Performance           <span className="gradient-text">Funnels</span></h2>
                <div className="process-vertical">
                    <div className="process-item">
                        <div className="process-step-num">01</div>
                        <div className="process-text">
                            <h3>Audience Research</h3>
                            <p>Identifying your highest-value prospects in Lucknow and Kanpur.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">02</div>
                        <div className="process-text">
                            <h3>Ad Creative</h3>
                            <p>Designing visuals and copy that grab attention and drive clicks.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">03</div>
                        <div className="process-text">
                            <h3>Landing Page Optimization</h3>
                            <p>Ensuring the traffic converts into real leads once they click.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">04</div>
                        <div className="process-text">
                            <h3>Scale & Optimize</h3>
                            <p>Daily monitoring and scaling winning ads to maximize your ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact-form" className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="contact-text">
                        <h2 className="section-heading">Ready to               <span className="gradient-text">Scale Fast?</span></h2>
                        <p>Book a free ad strategy session. We'll show you exactly how we can double your leads.</p>
            </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">              <label>Name</label>              <input type="text" name="name" required placeholder="Your Name" /></div>
                        <div className="form-group">              <label>Monthly Ad Budget</label>              <input type="text" name="budget" placeholder="e.g. ₹50,000" /></div>
                        <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" name="phone" required placeholder="+91" /></div>
                        <button type="submit" className="btn btn-primary w-100 mt-4">Get My Free Strategy</button>
            </form>
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
