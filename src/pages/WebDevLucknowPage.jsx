import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function WebDevLucknowPage() {
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
    <div className="page-wrapper webdevlucknowpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="tag">Custom Web Solutions</span>
                    <h1 className="section-heading mt-4">Blazing Fast             <span className="gradient-text">Website Development</span>            <br />in Lucknow</h1>
                    <p className="section-sub mx-auto">We don't just build sites; we build sales machines. Mobile-first, SEO-ready, and conversion-optimized websites that load in under 1 second.</p>
                    <div className="hero-btns justify-content-center mt-6">
                        <a href="#contact-form" className="btn btn-primary">Start My Website Project</a>
                        <Link className="btn btn-outline" to="/case-studies">See Our Work</Link>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">Why Your Website             <span className="gradient-text">Fails</span></h2>
          </div>
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🐌</div>
                        <h3>Slow Loading</h3>
                        <p>Most sites take 5+ seconds to load. We build sites that load in 0.8 seconds.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📱</div>
                        <h3>Not Mobile First</h3>
                        <p>80% of your Lucknow audience is on mobile. We design for them first.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📉</div>
                        <h3>Low Conversion</h3>
                        <p>A pretty site is useless if it doesn't generate leads. We focus on CTA and UX.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <h2 className="section-heading text-center">Our Development           <span className="gradient-text">Cycle</span></h2>
                <div className="process-vertical">
                    <div className="process-item">
                        <div className="process-step-num">01</div>
                        <div className="process-text">
                            <h3>UX/UI Blueprint</h3>
                            <p>Mapping out the user journey and conversion points for your business.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">02</div>
                        <div className="process-text">
                            <h3>Custom Coding</h3>
                            <p>Clean, efficient code that ensures maximum speed and reliability.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">03</div>
                        <div className="process-text">
                            <h3>SEO Architecture</h3>
                            <p>Building the technical foundation so you start ranking from day one.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">04</div>
                        <div className="process-text">
                            <h3>Testing & Launch</h3>
                            <p>Rigorous testing across all devices before we go live in Lucknow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact-form" className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="contact-text">
                        <h2 className="section-heading">Ready for a               <span className="gradient-text">Better Site?</span></h2>
                        <p>Get a free quote for your custom website project today.</p>
            </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">              <label>Name</label>              <input type="text" name="name" required placeholder="Your Name" /></div>
                        <div className="form-group">              <label>Business Category</label>              <input type="text" name="category" placeholder="e.g. Hospital, School" /></div>
                        <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" name="phone" required placeholder="+91" /></div>
                        <button type="submit" className="btn btn-primary w-100 mt-4">Get Free Quote</button>
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
