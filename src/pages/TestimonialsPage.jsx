import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function TestimonialsPage() {
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
    <div className="page-wrapper testimonialspage">
    <header className="page-hero">
            <div className="container">
                <div className="text-center">
                    <span className="tag">Success Stories</span>
                    <h1 className="section-heading mt-4">What Our Clients             <span className="gradient-text">Think of Us</span></h1>
                    <p className="section-sub mx-auto">Don't take our word for it. Read the honest experiences of business owners in Lucknow and Kanpur who scaled with us.</p>
          </div>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="testi-page-grid">
                    {/* TESTI 1 */}
                    <div className="benefit-card">
                        <div style={{"color":"var(--accent)","fontSize":"1.5rem","marginBottom":"15px"}}>⭐⭐⭐⭐⭐</div>
                        <p className="mb-4">"Anirudh transformed our local presence in Lucknow. We went from being invisible on Google to dominating the top 3 spots for all our major services in just 4 months. Highly recommended!"</p>
                        <div className="d-flex align-items-center gap-3">
                            <div style={{"width":"50px","height":"50px","background":"var(--bg3)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"bold"}}>RK</div>
                            <div>
                                <h4 style={{"fontSize":"0.9rem","marginBottom":"2px"}}>Rajesh Khanna</h4>
                                <p style={{"fontSize":"0.75rem","color":"var(--text2)"}}>Owner, Lucknow Dental Clinic</p>
                </div>
              </div>
            </div>
                    {/* TESTI 2 */}
                    <div className="benefit-card">
                        <div style={{"color":"var(--accent)","fontSize":"1.5rem","marginBottom":"15px"}}>⭐⭐⭐⭐⭐</div>
                        <p className="mb-4">"The best Meta Ads expert I've worked with. Our cost-per-lead dropped by 40% while the quality of leads improved significantly. Anirudh's ROI-focused approach is rare."</p>
                        <div className="d-flex align-items-center gap-3">
                            <div style={{"width":"50px","height":"50px","background":"var(--bg3)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"bold"}}>PS</div>
                            <div>
                                <h4 style={{"fontSize":"0.9rem","marginBottom":"2px"}}>Priya Singh</h4>
                                <p style={{"fontSize":"0.75rem","color":"var(--text2)"}}>Founder, Elite Boutique Kanpur</p>
                </div>
              </div>
            </div>
                    {/* TESTI 3 */}
                    <div className="benefit-card">
                        <div style={{"color":"var(--accent)","fontSize":"1.5rem","marginBottom":"15px"}}>⭐⭐⭐⭐⭐</div>
                        <p className="mb-4">"Professional, transparent, and results-driven. Anirudh's SEO consulting helped our internal team build a sustainable content engine that now drives 10k+ visitors monthly."</p>
                        <div className="d-flex align-items-center gap-3">
                            <div style={{"width":"50px","height":"50px","background":"var(--bg3)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"bold"}}>AM</div>
                            <div>
                                <h4 style={{"fontSize":"0.9rem","marginBottom":"2px"}}>Amit Mishra</h4>
                                <p style={{"fontSize":"0.75rem","color":"var(--text2)"}}>Director, UP Tech Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container text-center">
                <h2 className="section-heading">Ready to be Our Next           <span className="gradient-text">Success Story?</span></h2>
                <p className="section-sub mx-auto mb-6">Let's build your growth roadmap together.</p>
                <Link className="btn btn-primary" to="/contact">Book My Free SEO Audit</Link>
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
