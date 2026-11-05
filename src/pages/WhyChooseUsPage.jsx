import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function WhyChooseUsPage() {
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
    <div className="page-wrapper whychooseuspage">
    <header className="page-hero">
            <div className="container text-center">
                <span className="tag">The Anirudh Advantage</span>
                <h1 className="section-heading mt-4">Why Businesses           <span className="gradient-text">Trust Us</span></h1>
                <p className="section-sub mx-auto">We don't just provide services; we provide a growth partnership. Here is what makes us different from any other agency in Lucknow.</p>
        </div>
      </header>
    <section className="page-section">
            <div className="container">
                <div className="why-feature-grid">
                    <div className="why-item">
                        <div style={{"fontSize":"2rem","marginBottom":"15px"}}>📊</div>
                        <h3>Transparent Reporting</h3>
                        <p>No vanity metrics. We provide detailed reports showing exactly how many leads and sales were generated.</p>
            </div>
                    <div className="why-item">
                        <div style={{"fontSize":"2rem","marginBottom":"15px"}}>🎯</div>
                        <h3>ROI Focused</h3>
                        <p>Every strategy is built with your bottom line in mind. We care about your profit, not just clicks.</p>
            </div>
                    <div className="why-item">
                        <div style={{"fontSize":"2rem","marginBottom":"15px"}}>📍</div>
                        <h3>Local Expertise</h3>
                        <p>Deep understanding of the consumer behavior in Lucknow, Kanpur, and the wider UP region.</p>
            </div>
                    <div className="why-item">
                        <div style={{"fontSize":"2rem","marginBottom":"15px"}}>🚀</div>
                        <h3>Proven Results</h3>
                        <p>200+ successful projects and counting. Our track record speaks louder than words.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="text">
                        <h2 className="section-heading">Built for               <span className="gradient-text">Long-Term Growth</span></h2>
                        <p>We don't use "Black Hat" techniques that get your site banned. We use sustainable, white-hat strategies that build your brand's authority forever.</p>
            </div>
                    <div className="visual">
                        <div style={{"padding":"40px","background":"var(--bg3)","borderRadius":"20px","border":"1px solid var(--border2)"}}>
                            <h4 style={{"color":"var(--accent)","marginBottom":"15px"}}>Our Promises:</h4>
                            <ul style={{"color":"var(--text2)","lineHeight":"2"}}>
                                <li>✅ 24-Hour Reply Guarantee</li>
                                <li>✅ No Long-Term Locked Contracts</li>
                                <li>✅ Weekly Performance Updates</li>
                                <li>✅ 100% Data Ownership</li>
                </ul>
              </div>
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
