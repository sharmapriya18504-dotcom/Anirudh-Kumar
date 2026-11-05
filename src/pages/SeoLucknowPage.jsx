import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function SeoLucknowPage() {
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
    <div className="page-wrapper seolucknowpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="tag">Search Engine Optimization</span>
                    <h1 className="section-heading mt-4">Rank #1 with the Best             <br />            <span className="gradient-text">SEO Services in Lucknow</span></h1>
                    <p className="section-sub mx-auto">We don't just build links; we build authority. Experience sustainable organic growth tailored for the Lucknow market.</p>
                    <div className="hero-btns justify-content-center mt-6">
                        <a href="#contact-form" className="btn btn-primary">Get My Free SEO Audit</a>
                        <Link className="btn btn-outline" to="/case-studies">View Success Stories</Link>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-heading">Why Your Business             <span className="gradient-text">Needs SEO</span></h2>
          </div>
                <div className="benefit-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">📈</div>
                        <h3>Sustainable Traffic</h3>
                        <p>Unlike ads, SEO traffic doesn't stop when you stop paying. Build a long-term asset for your business.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🎯</div>
                        <h3>High Intent Leads</h3>
                        <p>Target customers exactly when they are searching for your services in Lucknow.</p>
            </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💰</div>
                        <h3>Better ROI</h3>
                        <p>SEO consistently delivers the lowest cost-per-lead compared to any other marketing channel.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <h2 className="section-heading text-center">Our 4-Step           <span className="gradient-text">SEO Process</span></h2>
                <div className="process-vertical">
                    <div className="process-item">
                        <div className="process-step-num">01</div>
                        <div className="process-text">
                            <h3>Technical Audit</h3>
                            <p>We analyze your site's structure, speed, and mobile-friendliness to ensure it's ready to rank.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">02</div>
                        <div className="process-text">
                            <h3>Keyword Strategy</h3>
                            <p>Deep research into what your Lucknow audience is actually searching for.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">03</div>
                        <div className="process-text">
                            <h3>On-Page Mastery</h3>
                            <p>Optimizing every element of your content for maximum search visibility.</p>
              </div>
            </div>
                    <div className="process-item">
                        <div className="process-step-num">04</div>
                        <div className="process-text">
                            <h3>Authority Building</h3>
                            <p>Earning high-quality backlinks that establish you as the industry leader in Lucknow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section">
            <div className="container">
                <h2 className="section-heading text-center">SEO           <span className="gradient-text">FAQs</span></h2>
                <div className="faq-list" style={{"maxWidth":"800px","margin":"40px auto"}}>
                    <div className="faq-item reveal">
                        <div className="faq-q">How long does SEO take to show results?               <div className="faq-icon">+</div></div>
                        <div className="faq-a">For most Lucknow businesses, significant growth is visible within 3-6 months depending on competition.</div>
            </div>
                    <div className="faq-item reveal">
                        <div className="faq-q">Do you provide Local SEO?               <div className="faq-icon">+</div></div>
                        <div className="faq-a">Yes! Local SEO (Google Maps) is our specialty for Lucknow-based service providers.</div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact-form" className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="contact-text">
                        <h2 className="section-heading">Ready to               <span className="gradient-text">Dominate Search?</span></h2>
                        <p>Get a complete technical audit and roadmap for your business. No strings attached.</p>
                        <div className="mt-6">
                            <div className="contact-item mb-4">📍 Lucknow & Kanpur Expert</div>
                            <div className="contact-item mb-4">🚀 200+ Businesses Ranked</div>
                            <div className="contact-item">✅ 100% White Hat Strategies</div>
              </div>
            </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">              <label>Name</label>              <input type="text" name="name" required placeholder="Your Name" /></div>
                        <div className="form-group">              <label>Website Link</label>              <input type="text" name="website" placeholder="www.yourbusiness.com" /></div>
                        <div className="form-group">              <label>WhatsApp Number</label>              <input type="tel" name="phone" required placeholder="+91" /></div>
                        <button type="submit" className="btn btn-primary w-100 mt-4">Claim Free Audit Now</button>
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
