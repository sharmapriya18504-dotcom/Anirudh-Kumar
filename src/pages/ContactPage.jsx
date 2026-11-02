import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function ContactPage() {
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
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.1s"}}>
                                <div className="contact-icon">📱</div>
                                <div>
                                    <div className="contact-label">WhatsApp / Call</div>
                                    <div className="contact-value">+91-9999999999</div>
                  </div>
                </div>
                            <div className="contact-item reveal visible" style={{"transitionDelay":"0.2s"}}>
                                <div className="contact-icon">📧</div>
                                <div>
                                    <div className="contact-label">Email</div>
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
                            <a href="https://wa.me/919999999999?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20services." className="btn btn-whatsapp reveal visible" style={{"transitionDelay":"0.5s"}} target="_blank">
              💬 Message Me Directly on WhatsApp
            </a>
              </div>
            </div>
                    <div className="contact-form reveal-right visible">
                        <h3 style={{"fontSize":"1.2rem","fontWeight":"800","marginBottom":"8px"}}>Book Your Free SEO Audit Now</h3>
                        <p style={{"fontSize":"0.85rem","color":"var(--text2)","marginBottom":"24px"}}>24 hours rapid reply guaranteed - let us
            scale your growth.</p>
                        <div className="form-row">
                            <div className="form-group">                <label>Your Name *</label>                <input type="text" placeholder="John Doe" />
                </div>
                            <div className="form-group">                <label>Phone Number *</label>                <input type="tel" placeholder="+91 98765 43210" /></div>
              </div>
                        <div className="form-group">              <label>Email Address</label>              <input type="email" placeholder="aapka@email.com" /></div>
                        <div className="form-group">
                            <label>Required Service</label>
                            <select>
                                <option value>— Select Service —</option>
                                <option>SEO Services</option>
                                <option>Social Media Marketing</option>
                                <option>Meta Ads / Google Ads</option>
                                <option>Website Development</option>
                                <option>Complete Digital Marketing</option>
                                <option>Free SEO Audit</option>
                </select>
              </div>
                        <div className="form-group">              <label>Describe your business or goals</label>              <textarea placeholder="Share what you need help with so I can come prepared with an audit..."></textarea>
              </div>
                        <button className="btn btn-primary" style={{"width":"100%","justifyContent":"center","fontSize":"1rem"}} onSubmit={handleSubmit}>
            🚀 Book Your Free SEO Audit Now
          </button>
                        <p style={{"fontSize":"0.75rem","color":"var(--text2)","textAlign":"center","marginTop":"12px"}}>100% Free Consultation. We
            reply immediately.</p>
            </div>
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
                        <div className="faq-list">
                            <div className="faq-item reveal visible">
                                <div className="faq-q">What is SEO cost in Lucknow?                   <div className="faq-icon">+</div>
                  </div>
                                <div className="faq-a">My standard SEO pricing is strictly transparent and customized exclusively based on
                your competitive vertical. An exact proposal is provided directly after our extensive free SEO audit.
              </div>
                </div>
                            <div className="faq-item reveal visible">
                                <div className="faq-q">How long SEO takes?                   <div className="faq-icon">+</div>
                  </div>
                                <div className="faq-a">Aggressive Local Google dominance prominently shows high growth within 3-6 months. We
                solely employ sustainable White-Hat SEO techniques ensuring unshakeable, long-lasting ROI.</div>
                </div>
                            <div className="faq-item reveal visible">
                                <div className="faq-q">Do you work in Kanpur?                   <div className="faq-icon">+</div>
                  </div>
                                <div className="faq-a">Yes. While I am prominently located in Lucknow, my Digital Marketing capabilities
                routinely rank local Kanpur businesses #1 on Google Maps.</div>
                </div>
              </div>
            </div>
                    <div className="faq-sidebar">
                        <div className="faq-sidebar-card reveal-right visible">
                            <h3>🚀 Need a Free SEO Audit?</h3>
                            <p>Schedule a complete technical health check instantly. I personally review your architecture and send over
              a robust, actionable blueprint.</p>
                            <Link className="btn btn-primary" to="/contact" style={{"width":"100%","justifyContent":"center"}}>Request Free Audit</Link>
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
