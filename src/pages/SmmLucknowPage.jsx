import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function SmmLucknowPage() {
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
    <div className="page-wrapper smmlucknowpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="tag">Social Media Growth</span>
                    <h1 className="section-heading mt-4">Viral             <span className="gradient-text">Social Media Marketing</span>            <br />in Lucknow</h1>
                    <p className="section-sub mx-auto">We don't just post; we perform. Get creative content and hyper-targeted ad strategies that dominate Instagram, Facebook, and LinkedIn.</p>
                    <div className="hero-btns justify-content-center mt-6">
                        <a href="#contact-form" className="btn btn-primary">Start My Growth Plan</a>
                        <Link className="btn btn-outline" to="/testimonials">See Client Results</Link>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">Why             <span className="gradient-text">Social Media</span> Matters</h2>
          </div>
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">📱</div>
                        <h3>Brand Presence</h3>
                        <p>Be where your customers are. Build a community that trusts and loves your brand.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🎬</div>
                        <h3>Creative Reels</h3>
                        <p>High-quality short-form video content that stops the scroll and goes viral.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💬</div>
                        <h3>Direct Engagement</h3>
                        <p>Talk directly to your audience in Lucknow and Kanpur and build lasting relationships.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <h2 className="section-heading text-center">Our Viral           <span className="gradient-text">Strategy</span></h2>
                <div className="process-vertical">
                    <div className="process-item">
                        <div className="process-step-num">01</div>
                        <div className="process-text">
                            <h3>Brand Audit</h3>
                            <p>Analyzing your current presence and competitor strategies in the Lucknow market.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">02</div>
                        <div className="process-text">
                            <h3>Content Calendar</h3>
                            <p>Planning a month of high-impact posts, reels, and stories that align with your goals.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">03</div>
                        <div className="process-text">
                            <h3>Community Management</h3>
                            <p>Active engagement with your followers to increase brand loyalty and conversion.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">04</div>
                        <div className="process-text">
                            <h3>Paid Amplification</h3>
                            <p>Using Meta Ads to scale your reach and target specific demographics in UP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact-form" className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="contact-text">
                        <h2 className="section-heading">Want to Go               <span className="gradient-text">Viral?</span></h2>
                        <p>Let's build a social media strategy that actually makes you money. Fill the form below.</p>
            </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">              <label>Name</label>              <input type="text" name="name" required placeholder="Your Name" /></div>
                        <div className="form-group">              <label>Instagram/FB Handle</label>              <input type="text" name="handle" placeholder="@yourbrand" /></div>
                        <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" name="phone" required placeholder="+91" /></div>
                        <button type="submit" className="btn btn-primary w-100 mt-4">Start My Strategy Now</button>
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
