import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('24 hours mein aapko callback ya email reply mil jayega.');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`📋 ${label} copied to clipboard: ${text}`);
    setShowToast(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setToastMsg('✅ Thank you! 24 hours mein aapko callback ya email reply mil jayega.');
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
    <div className="page-wrapper contactpage">
    <div style={{"height":"var(--nav-h)"}}></div>
    <section id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="reveal-left visible">
                        <span className="tag">Get in Touch</span>
                        <div className="divider"></div>
                        <h2 className="section-heading">Aaj Hi Start               <span className="gradient-text">Karein!</span></h2>
                        <p className="section-sub">Free consultation + free SEO audit — koi charge nahi. Batao kya chahiye, main
            solution deta hoon.</p>
                        <div className="contact-info">
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.1s","cursor":"pointer"}} onClick={() => copyToClipboard('+919999999999', 'Phone Number')} title="Click to copy number">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <div className="contact-label">WhatsApp / Call (Click to Copy)</div>
                                    <div className="contact-value">+91-9999999999</div>
                  </div>
                </div>
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.2s","cursor":"pointer"}} onClick={() => copyToClipboard('hello@anirudhkumar.in', 'Email')} title="Click to copy email">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <div className="contact-label">Email (Click to Copy)</div>
                                    <div className="contact-value">hello@anirudhkumar.in</div>
                  </div>
                </div>
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.3s"}}>
                                <div className="contact-icon">📍</div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-value">Gomti Nagar, Lucknow, UP</div>
                  </div>
                </div>
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.4s"}}>
                                <div className="contact-icon">⏰</div>
                                <div>
                                    <div className="contact-label">Working Hours</div>
                                    <div className="contact-value">Mon–Sat, 9AM – 8PM</div>
                  </div>
                </div>
                            <a href="https://wa.me/919999999999?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20services." className="btn btn-whatsapp reveal visible" style={{"transitionDelay":"0.5s"}} target="_blank" rel="noreferrer">
              💬 Message Me Directly on WhatsApp
            </a>
              </div>
            </div>
                    <form className="contact-form reveal-right visible" onSubmit={handleSubmit}>
                        <h3 style={{"fontSize":"1.2rem","fontWeight":"800","marginBottom":"8px"}}>Book Your Free SEO Audit Now</h3>
                        <p style={{"fontSize":"0.85rem","color":"var(--text2)","marginBottom":"24px"}}>24 hours rapid reply guaranteed - let us
            scale your growth.</p>
                        <div className="form-row">
                            <div className="form-group">                <label>Your Name *</label>                <input type="text" name="name" required placeholder="John Doe" />
                </div>
                            <div className="form-group">                <label>Phone Number *</label>                <input type="tel" name="phone" required placeholder="+91 98765 43210" /></div>
              </div>
                        <div className="form-group">              <label>Email Address</label>              <input type="email" name="email" placeholder="aapka@email.com" /></div>
                        <div className="form-group">
                            <label>Required Service</label>
                            <select name="service">
                                <option value="">— Select Service —</option>
                                <option>SEO Services</option>
                                <option>Social Media Marketing</option>
                                <option>Meta Ads / Google Ads</option>
                                <option>Website Development</option>
                                <option>Complete Digital Marketing</option>
                                <option>Free SEO Audit</option>
                </select>
              </div>
                        <div className="form-group">              <label>Describe your business or goals</label>              <textarea name="message" placeholder="Share what you need help with so I can come prepared with an audit..."></textarea>
              </div>
                        <button type="submit" className="btn btn-primary" style={{"width":"100%","justifyContent":"center","fontSize":"1rem"}}>
            🚀 Book Your Free SEO Audit Now
          </button>
                        <p style={{"fontSize":"0.75rem","color":"var(--text2)","textAlign":"center","marginTop":"12px"}}>100% Free Consultation. We
            reply immediately.</p>
            </form>
          </div>
        </div>
      </section>
    <section id="faq" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <div className="faq-grid">
                    <div>
                        <span className="tag reveal visible">Frequently Asked Questions</span>
                        <div className="divider reveal visible"></div>
                        <h2 className="section-heading reveal visible">Aapke               <span className="gradient-text">Sawaal,                <br />Mere Jawab</span></h2>
                        <p className="section-sub reveal visible" style={{"marginBottom":"32px"}}>Koi bhi doubt ho toh seedha WhatsApp karein — main
            personally jawab deta hoon.</p>
                        <InteractiveFaq />
                    </div>
                    <div className="faq-sidebar">
                        <div className="faq-sidebar-card reveal-right visible">
                            <h3>🚀 Need a Free SEO Audit?</h3>
                            <p>Schedule a complete technical health check instantly. I personally review your architecture and send over
              a robust, actionable blueprint.</p>
                            <a href="#contact" className="btn btn-primary" style={{"width":"100%","justifyContent":"center"}}>Request Free Audit</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toast
        isVisible={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
