import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


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
                <div className="pricing-grid">
                    <div className="pricing-card reveal visible" style={{"transitionDelay":"0.1s"}}>
                        <div className="pricing-name">Starter</div>
                        <div className="pricing-price">₹8,000              <span>/month</span></div>
                        <p className="pricing-desc">Chhote businesses aur startups ke liye. Digital presence banana shuru karein.</p>
                        <div className="pricing-features">
                            <div className="pf">
                                <div className="pf-check">✓</div>On-Page SEO (10 pages)
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Google Business Profile Setup
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>2 Blog Posts/Month
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Monthly Report
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>WhatsApp Support
            </div>
                            <div className="pf pf-x">
                                <div className="pf-check">✗</div>Meta/Google Ads
            </div>
                            <div className="pf pf-x">
                                <div className="pf-check">✗</div>Social Media Management
            </div>
              </div>
                        <Link className="btn btn-outline" to="/contact" style={{"width":"100%","justifyContent":"center"}}>Get Started</Link>
            </div>
                    <div className="pricing-card popular reveal visible" style={{"transitionDelay":"0.2s"}}>
                        <div className="popular-badge">🔥 Most Popular</div>
                        <div className="pricing-name">Professional</div>
                        <div className="pricing-price">₹18,000              <span>/month</span></div>
                        <p className="pricing-desc">Growing businesses ke liye. Full digital marketing + ads management.</p>
                        <div className="pricing-features">
                            <div className="pf">
                                <div className="pf-check">✓</div>Complete SEO (20+ pages)
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Social Media (2 platforms)
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Meta Ads Management
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>4 Blog Posts/Month
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Weekly Reporting
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Google Ads Setup
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Priority WhatsApp Support
            </div>
              </div>
                        <Link className="btn btn-primary" to="/contact" style={{"width":"100%","justifyContent":"center"}}>Get Started</Link>
            </div>
                    <div className="pricing-card reveal visible" style={{"transitionDelay":"0.3s"}}>
                        <div className="pricing-name">Enterprise</div>
                        <div className="pricing-price">₹35,000              <span>/month</span></div>
                        <p className="pricing-desc">Established brands ke liye. Full-scale digital marketing dominance.</p>
                        <div className="pricing-features">
                            <div className="pf">
                                <div className="pf-check">✓</div>Everything in Professional
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Full Social Media (4 platforms)
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Meta + Google Ads Both
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>8 Blog Posts + Content Strategy
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>YouTube SEO & Management
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Website Development Included
            </div>
                            <div className="pf">
                                <div className="pf-check">✓</div>Dedicated Account Manager (Me!)
            </div>
              </div>
                        <Link className="btn btn-outline" to="/contact" style={{"width":"100%","justifyContent":"center"}}>Let's Talk</Link>
            </div>
          </div>
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
