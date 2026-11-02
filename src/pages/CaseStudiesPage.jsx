import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function CaseStudiesPage() {
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
    <div className="page-wrapper casestudiespage">
    <header className="page-hero">
            <div className="container">
                <div className="text-center">
                    <span className="tag">Proven ROI</span>
                    <h1 className="section-heading mt-4">Growth             <span className="gradient-text">Case Studies</span></h1>
                    <p className="section-sub mx-auto">See the data-driven strategies that turned local Lucknow businesses into industry leaders.</p>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="case-grid">
                    {/* CASE 1 */}
                    <article className="case-card">
                        <div className="case-img">📊</div>
                        <div className="case-content">
                            <div className="case-meta">                <span>SEO</span>                 <span>•</span>                 <span>4 Months</span></div>
                            <h3>Ranking a Luxury Real Estate Brand in Gomti Nagar</h3>
                            <p>Problem: Zero organic visibility for high-value keywords.</p>
                            <p>Strategy: Aggressive Local SEO & High-Intent Landing Pages.</p>
                            <div className="case-results-grid">
                                <div>
                                    <div className="res-val">+320%</div>
                                    <div className="res-label">Org. Traffic</div>
                  </div>
                                <div>
                                    <div className="res-val">150+</div>
                                    <div className="res-label">Monthly Leads</div>
                  </div>
                </div>
              </div>
            </article>
                    {/* CASE 2 */}
                    <article className="case-card">
                        <div className="case-img">📱</div>
                        <div className="case-content">
                            <div className="case-meta">                <span>Meta Ads</span>                 <span>•</span>                 <span>6 Months</span></div>
                            <h3>Scaling an E-commerce Brand from Kanpur to National</h3>
                            <p>Problem: High acquisition costs and low scale.</p>
                            <p>Strategy: Creative testing & Advanced lookalike audiences.</p>
                            <div className="case-results-grid">
                                <div>
                                    <div className="res-val">4.5x</div>
                                    <div className="res-label">Ad ROAS</div>
                  </div>
                                <div>
                                    <div className="res-val">-40%</div>
                                    <div className="res-label">CPA reduction</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container text-center">
                <h2 className="section-heading">Want Similar           <span className="gradient-text">Results?</span></h2>
                <p className="section-sub mx-auto mb-6">Let's discuss your custom growth roadmap.</p>
                <Link className="btn btn-primary" to="/contact">Start My Case Study</Link>
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
