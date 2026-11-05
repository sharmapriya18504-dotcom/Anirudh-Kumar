import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function SeoConsultantPage() {
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
    } catch (err) { }

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
    <div className="page-wrapper seoconsultantpage">
      <header className="page-hero">
        <div className="container">
          <div className="hero-header text-center">
            <span className="tag">Strategic Consulting</span>
            <h1 className="section-heading mt-4">Personalized             <span className="gradient-text">SEO Consulting</span>            <br />in Lucknow</h1>
            <p className="section-sub mx-auto">Get direct access to my 5+ years of expertise. I provide high-level SEO strategies, technical coaching, and team training for Lucknow's top brands.</p>
            <div className="hero-btns justify-content-center mt-6">
              <a href="#contact-form" className="btn btn-primary">Book a Strategy Session</a>
              <Link className="btn btn-outline" to="/about">Meet Your Consultant</Link>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-heading">Why Hire a             <span className="gradient-text">Consultant?</span></h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <h3>Expert Strategy</h3>
              <p>Don't just do "stuff." Do the things that actually move the needle for your business.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h3>Technical Audits</h3>
              <p>I find the hidden technical issues that are holding your rankings back.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Team Training</h3>
              <p>I train your in-house team to execute SEO best practices at a world-class level.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" style={{ "background": "var(--bg2)" }}>
        <div className="container">
          <h2 className="section-heading text-center">Consulting           <span className="gradient-text">Workflow</span></h2>
          <div className="process-vertical">
            <div className="process-item">
              <div className="process-step-num">01</div>
              <div className="process-text">
                <h3>Discovery Call</h3>
                <p>Understanding your business goals, current struggles, and target audience.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-step-num">02</div>
              <div className="process-text">
                <h3>Custom Roadmap</h3>
                <p>I build a step-by-step technical and content roadmap for your brand.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-step-num">03</div>
              <div className="process-text">
                <h3>Implementation Guidance</h3>
                <p>I work with your team to ensure every recommendation is executed perfectly.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-step-num">04</div>
              <div className="process-text">
                <h3>Performance Review</h3>
                <p>Monthly auditing to measure growth and refine the long-term strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-form" className="page-section" style={{ "background": "var(--bg3)" }}>
        <div className="container">
          <div className="service-contact-grid">
            <div className="contact-text">
              <h2 className="section-heading">Need an               <span className="gradient-text">SEO Mentor?</span></h2>
              <p>Let's talk about how I can help your team achieve SEO excellence.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">              <label>Name</label>              <input type="text" name="name" required placeholder="Your Name" /></div>
              <div className="form-group">              <label>Website/Brand</label>              <input type="text" name="website" placeholder="Your Website" /></div>
              <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" name="phone" required placeholder="+91" /></div>
              <button type="submit" className="btn btn-primary w-100 mt-4">Book My Strategy Call</button>
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
