import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function MarketingKanpurPage() {
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
    <div className="page-wrapper marketingkanpurpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="tag">Kanpur Growth Expert</span>
                    <h1 className="section-heading mt-4">Grow Your             <span className="gradient-text">Kanpur Business</span>            <br />Digitally</h1>
                    <p className="section-sub mx-auto">Specialized digital marketing for the industrial hub of UP. We help Kanpur brands dominate search and social media with proven local expertise.</p>
                    <div className="hero-btns justify-content-center mt-6">
                        <a href="#contact-form" className="btn btn-primary">Audit My Kanpur Business</a>
                        <Link className="btn btn-outline" to="/case-studies">See Local Success</Link>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">Why Kanpur             <span className="gradient-text">Businesses Trust Us</span></h2>
          </div>
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🏭</div>
                        <h3>Industrial Expertise</h3>
                        <p>We understand the B2B and manufacturing landscape of Kanpur city.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📍</div>
                        <h3>Local Targeting</h3>
                        <p>Hyper-local strategies for areas like Civil Lines, Swaroop Nagar, and Kidwai Nagar.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📈</div>
                        <h3>Proven Growth</h3>
                        <p>We have successfully scaled multiple Kanpur-based e-commerce and service brands.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <h2 className="section-heading text-center">Our Kanpur           <span className="gradient-text">Roadmap</span></h2>
                <div className="process-vertical">
                    <div className="process-item">
                        <div className="process-step-num">01</div>
                        <div className="process-text">
                            <h3>Market Analysis</h3>
                            <p>Identifying your local competitors in Kanpur and their digital weaknesses.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">02</div>
                        <div className="process-text">
                            <h3>Custom Strategy</h3>
                            <p>A multi-channel approach combining SEO, Social Media, and Ads.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">03</div>
                        <div className="process-text">
                            <h3>Execution</h3>
                            <p>Rolling out high-impact campaigns tailored for the Kanpur audience.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">04</div>
                        <div className="process-text">
                            <h3>Monthly Scale</h3>
                            <p>Regular auditing and scaling to ensure continuous growth in the UP market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact-form" className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="contact-text">
                        <h2 className="section-heading">Scale Your               <span className="gradient-text">Kanpur Brand?</span></h2>
                        <p>Get a personalized digital marketing audit for your Kanpur business.</p>
            </div>
                    <div className="contact-form">
                        <div className="form-group">              <label>Name</label>              <input type="text" placeholder="Your Name" /></div>
                        <div className="form-group">              <label>Business Type</label>              <input type="text" placeholder="e.g. Leather, Retail" /></div>
                        <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" placeholder="+91" /></div>
                        <button className="btn btn-primary w-100 mt-4" onSubmit={handleSubmit}>Start My Kanpur Audit</button>
            </div>
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
