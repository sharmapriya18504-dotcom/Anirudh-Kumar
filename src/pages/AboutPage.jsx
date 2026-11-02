import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function AboutPage() {
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
    <div className="page-wrapper aboutpage">
    <header className="page-hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="about-text">
                        <span className="tag">The Human Behind the Data</span>
                        <h1 className="section-heading mt-4">Helping Brands               <span className="gradient-text">Dominate the Digital World</span>
              </h1>
                        <p className="section-sub">I'm Anirudh Kumar, a Digital Marketing Specialist based in Lucknow. For the last 5
            years, I've been helping business owners stop guessing and start growing through science-backed SEO and
            advertising.</p>
            </div>
                    <div className="about-visual">
                        <div style={{"width":"100%","height":"360px","background":"var(--bg2)","borderRadius":"30px","overflow":"hidden","border":"1px solid var(--border2)","display":"flex","alignItems":"center","justifyContent":"center"}}>
                            <img src="/anik.png" alt="Anirudh Kumar" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
              </div>
            </div>
          </div>
        </div>
      </header>
    <section className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-num">5+</div>
                        <div className="stat-label">Years Experience</div>
            </div>
                    <div className="stat-item">
                        <div className="stat-num">200+</div>
                        <div className="stat-label">Projects Completed</div>
            </div>
                    <div className="stat-item">
                        <div className="stat-num">10M+</div>
                        <div className="stat-label">Ad Spend Managed</div>
            </div>
          </div>
        </div>
      </section>
    <section className="page-section">
            <div className="container">
                <div style={{"maxWidth":"800px","margin":"0 auto"}}>
                    <h2 className="section-heading text-center">My             <span className="gradient-text">Journey</span></h2>
                    <p className="mb-4">I started my digital marketing journey back in 2019 with a single goal: to help local businesses
          in Uttar Pradesh understand the power of the internet. Back then, "SEO" was just a buzzword. Today, it's the
          difference between survival and dominance.</p>
                    <p className="mb-4">Over the years, I've worked with everything from small local clinics in Gomti Nagar to large
          industrial manufacturers in Kanpur. My approach has always been the same: **Focus on ROI.** If it doesn't make
          my client money, it's not a success.</p>
          </div>
        </div>
      </section>
    <section className="page-section" style={{"background":"var(--bg3)"}}>
            <div className="container text-center">
                <h2 className="section-heading">Let's Work           <span className="gradient-text">Together</span></h2>
                <Link className="btn btn-primary mt-4" to="/contact">Hire Me as Your Expert</Link>
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
