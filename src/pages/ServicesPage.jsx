import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';


export default function ServicesPage() {
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
    <div className="page-wrapper servicespage">
    <section id="services">
            <div className="container">
                <div className="section-header center text-center reveal visible">
                    <span className="tag">My Services</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Complete             <span className="gradient-text">Digital Marketing</span>            <br />Services in Lucknow
          & Kanpur
        </h2>
                    <p className="section-sub">From dominating search results to scaling campaigns reliably, experience comprehensive
          growth with the Best Digital Marketer in Lucknow.</p>
          </div>
                <div className="services-grid">
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.1s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">🔍</div>
                        <h3>SEO Services Lucknow</h3>
                        <p>Rank #1 with the best SEO Expert in Lucknow. From powerful Local SEO to deep technical optimization, I help
            your business dominate search rankings sustainably.</p>
                        <div className="service-tags">
                            <span className="stag">Local SEO</span>
                            <span className="stag">Technical SEO</span>
                            <span className="stag">On-Page</span>
                            <span className="stag">Link Building</span>
              </div>
            </div>
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.15s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">📱</div>
                        <h3>Social Media Marketing Lucknow</h3>
                        <p>I craft viral strategies across Instagram, Facebook, and LinkedIn. Build brand authority and actively
            engage your highest-value prospects with our proven frameworks.</p>
                        <div className="service-tags">
                            <span className="stag">Instagram Growth</span>
                            <span className="stag">Facebook Ads</span>
                            <span className="stag">YouTube SEO</span>
                            <span className="stag">LinkedIn</span>
              </div>
            </div>
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.2s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">🎯</div>
                        <h3>Google Ads Lucknow</h3>
                        <p>Maximize your ROI with top-tier Google Ads Expert Lucknow services. Setup targeted PPC campaigns that
            acquire real intent-driven leads instantly.</p>
                        <div className="service-tags">
                            <span className="stag">Meta Ads</span>
                            <span className="stag">Google PPC</span>
                            <span className="stag">Retargeting</span>
                            <span className="stag">Lead Gen</span>
              </div>
            </div>
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.25s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">🌐</div>
                        <h3>Website Development Lucknow</h3>
                        <p>As the premium Digital Marketing Expert in Kanpur & Lucknow, I specialize in building blazing fast,
            mobile-first, highly SEO-optimized websites.</p>
                        <div className="service-tags">
                            <span className="stag">Custom HTML</span>
                            <span className="stag">WordPress</span>
                            <span className="stag">Landing Pages</span>
                            <span className="stag">E-commerce</span>
              </div>
            </div>
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.3s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">🚀</div>
                        <h3>Digital Marketing Kanpur</h3>
                        <p>Full-funnel digital marketing services explicitly tailored for Kanpur and Lucknow local markets, providing
            comprehensive omnichannel visibility.</p>
                        <div className="service-tags">
                            <span className="stag">Blog Writing</span>
                            <span className="stag">Video Strategy</span>
                            <span className="stag">Reel Content</span>
                            <span className="stag">Copywriting</span>
              </div>
            </div>
                    <div className="service-card reveal visible" style={{"transitionDelay":"0.35s"}}>
                        <div className="service-arrow">→</div>
                        <div className="service-icon-wrap">💡</div>
                        <h3>SEO Consultant Lucknow</h3>
                        <p>Get in-depth strategic consultation from a premium Freelance SEO Expert Lucknow. Perfect for businesses
            needing auditing and long-term search blueprints.</p>
                        <div className="service-tags">
                            <span className="stag">Strategy</span>
                            <span className="stag">Consultation</span>
                            <span className="stag">Planning</span>
                            <span className="stag">Audits</span>
              </div>
            </div>
          </div>
                <div className="flex-center mt-6">
                    <Link className="btn btn-primary" to="/contact">Discuss All Services →</Link>
          </div>
        </div>
      </section>
    <section id="process" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <div className="section-header center text-center reveal visible">
                    <span className="tag">My Process</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">How I             <span className="gradient-text">Deliver Results</span></h2>
                    <p className="section-sub">A proven 5-step system jo consistently Lucknow & Kanpur ke businesses ke liye results
          deliver karta hai.</p>
          </div>
                <div className="process-steps">
                    <div className="process-step reveal visible" style={{"transitionDelay":"0.1s"}}>
                        <div className="process-num">01</div>
                        <h4>Free Audit & Analysis</h4>
                        <p>Aapki website, competitors aur current SEO health ka deep analysis. Bilkul free.</p>
            </div>
                    <div className="process-step reveal visible" style={{"transitionDelay":"0.2s"}}>
                        <div className="process-num">02</div>
                        <h4>Custom Strategy</h4>
                        <p>Aapke business goals ke hisaab se personalized digital marketing roadmap taiaar karna.</p>
            </div>
                    <div className="process-step reveal visible" style={{"transitionDelay":"0.3s"}}>
                        <div className="process-num">03</div>
                        <h4>Implementation</h4>
                        <p>SEO, content, ads — sab execute karna with precision. On-time, always.</p>
            </div>
                    <div className="process-step reveal visible" style={{"transitionDelay":"0.4s"}}>
                        <div className="process-num">04</div>
                        <h4>Monitor & Optimize</h4>
                        <p>Data-driven decisions. Jo kaam kare use scale karein, jo nahi kare use fix karein.</p>
            </div>
                    <div className="process-step reveal visible" style={{"transitionDelay":"0.5s"}}>
                        <div className="process-num">05</div>
                        <h4>Report & Scale</h4>
                        <p>Weekly transparent reporting. Results ke saath aage badhte rehte hain — scale up karte hain.</p>
            </div>
          </div>
        </div>
      </section>
    <section id="comparison" style={{"padding":"60px 0"}}>
            <div className="container">
                <div className="section-header center text-center reveal visible">
                    <h2 className="section-heading">Service             <span className="gradient-text">Comparison</span></h2>
                    <p className="section-sub">Choose the right path for your business growth in Lucknow & Kanpur.</p>
          </div>
                <div className="vs-table" style={{"maxWidth":"900px","margin":"40px auto"}}>
                    <div className="vs-header">
                        <div>Capability</div>
                        <div className="col-me">SEO Focus</div>
                        <div>Ads Focus</div>
            </div>
                    <div className="vs-row">            <span className="label">Time to Results</span>            <span className="vs-yes">3-6 Months</span>            <span className="vs-no">Instant (24 hrs)</span></div>
                    <div className="vs-row">            <span className="label">Long-term ROI</span>            <span className="vs-yes">Extremely High</span>            <span className="vs-no">Stable</span></div>
                    <div className="vs-row">            <span className="label">Traffic Source</span>            <span className="vs-yes">Organic Search</span>            <span className="vs-no">Paid Placements</span></div>
                    <div className="vs-row">            <span className="label">Cost Over Time</span>            <span className="vs-yes">Decreases per Lead</span>            <span className="vs-no">Constant per Lead</span></div>
          </div>
        </div>
      </section>
    <section id="service-faq" style={{"padding":"60px 0","background":"var(--bg3)"}}>
            <div className="container">
                <div className="section-header center text-center reveal visible">
                    <h2 className="section-heading">Services             <span className="gradient-text">FAQ</span></h2>
          </div>
                <div className="faq-list" style={{"maxWidth":"800px","margin":"0 auto"}}>
                    <div className="faq-item reveal visible">
                        <div className="faq-q">Do you offer one-time SEO?               <div className="faq-icon">+</div>
              </div>
                        <div className="faq-a">Yes, I offer technical SEO audits and one-time optimization, but for consistent ranking
            growth in competitive markets like Lucknow, monthly maintenance is recommended.</div>
            </div>
                    <div className="faq-item reveal visible">
                        <div className="faq-q">Which is better: Meta or Google Ads?               <div className="faq-icon">+</div>
              </div>
                        <div className="faq-a">It depends on your business. For visual products or lifestyle services, Meta Ads work
            great. For intent-driven services (like plumbers, doctors, or lawyers), Google Ads is superior.</div>
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
