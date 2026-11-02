import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import Typewriter from '../components/Typewriter.jsx';
import InteractivePricing from '../components/InteractivePricing.jsx';
import RoiCalculator from '../components/RoiCalculator.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';
import SeoAuditModal from '../components/SeoAuditModal.jsx';

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('24 hours mein aapko callback ya email reply mil jayega.');
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [portfolioTab, setPortfolioTab] = useState('all');

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
    <div className="page-wrapper homepage">
    <section id="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-eyebrow">
                            <div className="hero-dot"></div>
                            <span className="tag">Lucknow & Kanpur ka #1 Digital Marketing Expert</span>
              </div>
                        <h1 className="hero-h1">
                            <span className="line1">ANIRUDH KUMAR –</span>
                            <Typewriter />
                            <span style={{"display":"block","fontFamily":"var(--ff-d)","fontSize":"inherit","lineHeight":"inherit","color":"var(--text)"}}>&
              DIGITAL MARKETING CONSULTANT IN LUCKNOW</span>
                            <span className="line3">Helping businesses in Lucknow & Kanpur rank on Google, generate leads and grow online.
              Let's work together to dominate local search and maximize your revenue.</span>
              </h1>
                        <div className="hero-btns">
                            <button type="button" onClick={() => setAuditModalOpen(true)} className="btn btn-primary" style={{"cursor":"pointer"}}>                <i className="bi bi-rocket-takeoff" style={{"marginRight":"8px"}}></i>
              Claim Free SEO Audit</button>
                            <a href="#portfolio" className="btn btn-outline">                <i className="bi bi-shield-check" style={{"marginRight":"8px"}}></i>
              See Verified Results</a>
              </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-num" data-target="200">0</div>
                                <div className="stat-label">+ Clients Served</div>
                </div>
                            <div className="stat-item">
                                <div className="stat-num" data-target="5">0</div>
                                <div className="stat-label">+ Years Experience</div>
                </div>
                            <div className="stat-item">
                                <div className="stat-num" data-target="87">0</div>
                                <div className="stat-label">★ 5-Star Reviews</div>
                </div>
              </div>
            </div>
                    <div className="hero-visual">
                        <div className="hero-3d-wrap">
                            <div className="orbit-ring">
                                <div className="orbit-dot"></div>
                </div>
                            <div className="orbit-ring">
                                <div className="orbit-dot" style={{"background":"var(--accent2)"}}></div>
                </div>
                            <img src="/Untitled design (12).png" alt="Anirudh Kumar" className="hero-persona-img" />
              </div>
                        <div className="hero-card-float card1">
                            <div className="float-card-icon">                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                    <polyline points="17 6 23 6 23 12" />
                  </svg></div>
                            <div className="float-card-label">Organic Traffic</div>
                            <div className="float-card-value">+340%</div>
              </div>
                        <div className="hero-card-float card2">
                            <div className="float-card-icon">                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                  </svg></div>
                            <div className="float-card-label">ROI on Meta Ads</div>
                            <div className="float-card-value">7.2x</div>
              </div>
                        <div className="hero-card-float card3">
                            <div className="float-card-icon">                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg></div>
                            <div className="float-card-label">Google Rating</div>
                            <div className="float-card-value">4.9/5</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="marquee-section">
            <div className="marquee-track">
                <div className="marquee-item">          <i className="bi bi-search"></i> SEO Expert Lucknow</div>
                <div className="marquee-item">          <i className="bi bi-phone"></i> Social Media Marketing</div>
                <div className="marquee-item">          <i className="bi bi-bullseye"></i> Meta Ads Specialist</div>
                <div className="marquee-item">          <i className="bi bi-globe"></i> Website Development</div>
                <div className="marquee-item">          <i className="bi bi-graph-up"></i> Google Ads Expert</div>
                <div className="marquee-item">          <i className="bi bi-pencil-square"></i> Content Marketing</div>
                <div className="marquee-item">          <i className="bi bi-geo-alt"></i> Local SEO Lucknow</div>
                <div className="marquee-item">          <i className="bi bi-rocket-takeoff"></i> Digital Marketing Kanpur</div>
                <div className="marquee-item">          <i className="bi bi-lightbulb"></i> Personal Brand Expert</div>
                <div className="marquee-item">          <i className="bi bi-bar-chart"></i> Traffic Growth Specialist</div>
                {/* duplicate for seamless loop */}
                <div className="marquee-item">          <i className="bi bi-search"></i> SEO Expert Lucknow</div>
                <div className="marquee-item">          <i className="bi bi-phone"></i> Social Media Marketing</div>
                <div className="marquee-item">          <i className="bi bi-bullseye"></i> Meta Ads Specialist</div>
                <div className="marquee-item">          <i className="bi bi-globe"></i> Website Development</div>
                <div className="marquee-item">          <i className="bi bi-graph-up"></i> Google Ads Expert</div>
                <div className="marquee-item">          <i className="bi bi-pencil-square"></i> Content Marketing</div>
                <div className="marquee-item">          <i className="bi bi-geo-alt"></i> Local SEO Lucknow</div>
                <div className="marquee-item">          <i className="bi bi-rocket-takeoff"></i> Digital Marketing Kanpur</div>
                <div className="marquee-item">          <i className="bi bi-lightbulb"></i> Personal Brand Expert</div>
                <div className="marquee-item">          <i className="bi bi-bar-chart"></i> Traffic Growth Specialist</div>
        </div>
      </div>
    <section id="services">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="tag">How We Grow Brands</span>
                    <h2 className="section-heading mt-4">Professional             <span className="gradient-text">Digital Solutions</span></h2>
                    <p className="section-sub mx-auto">Proven strategies to scale your business in the Lucknow & Kanpur market.</p>
          </div>
                <div className="services-grid">
                    {/* SEO */}
                    <Link className="service-card reveal" to="/seo-lucknow">
                        <div className="service-img-wrap">
                            <img src="/service-seo.png" alt="SEO Services" className="service-card-img" />
              </div>
                        <h3>SEO Services Lucknow</h3>
                        <p>Dominating Google rankings with high-intent keywords and local authority building.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore SEO →</div>
            </Link>
                    {/* SMM */}
                    <Link className="service-card reveal" to="/smm-lucknow">
                        <div className="service-img-wrap">
                            <img src="/service-smm.png" alt="SMM Services" className="service-card-img" />
              </div>
                        <h3>Social Media Marketing</h3>
                        <p>Viral content and community management that turns followers into loyal customers.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore SMM →</div>
            </Link>
                    {/* ADS */}
                    <Link className="service-card reveal" to="/ads-lucknow">
                        <div className="service-img-wrap">
                            <img src="/service-ads.png" alt="Ads Services" className="service-card-img" />
              </div>
                        <h3>Google & Meta Ads</h3>
                        <p>High-ROI performance marketing that delivers instant leads and scalable sales.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore Ads →</div>
            </Link>
                    {/* WEB */}
                    <Link className="service-card reveal" to="/web-dev-lucknow">
                        <div className="service-img-wrap">
                            <img src="/service-web.png" alt="Web Dev Services" className="service-card-img" />
              </div>
                        <h3>Website Development</h3>
                        <p>Blazing fast, SEO-ready websites designed for high conversion and speed.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore Web →</div>
            </Link>
                    {/* KANPUR */}
                    <Link className="service-card reveal" to="/marketing-kanpur">
                        <div className="service-img-wrap">
                            <img src="/service-kanpur.png" alt="Marketing Kanpur" className="service-card-img" />
              </div>
                        <h3>Marketing Kanpur</h3>
                        <p>Specialized digital growth for the industrial and service hub of Kanpur city.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore Kanpur →</div>
            </Link>
                    {/* CONSULTANT */}
                    <Link className="service-card reveal" to="/seo-consultant">
                        <div className="service-img-wrap">
                            <img src="/service-consulting.png" alt="SEO Consultant" className="service-card-img" />
              </div>
                        <h3>SEO Consulting</h3>
                        <p>Strategic high-level audits and training for established brands and teams.</p>
                        <div className="mt-4" style={{"color":"var(--accent)","fontWeight":"700"}}>Explore Consulting →</div>
            </Link>
          </div>
        </div>
      </section>
    <section id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-img-wrap reveal-left">
                        <div className="about-photo-frame">
                            <div className="about-photo-bg">
                                <img src="/Untitled design (12).png" alt="Anirudh Kumar Portfolio" className="about-persona-img" />
                                <div className="about-photo-badge">📍 Lucknow, Uttar Pradesh</div>
                </div>
              </div>
                        <div className="about-badge-float">
                            <div className="big">5+</div>
                            <div className="small">Years of Experience                <br />in Digital Marketing</div>
              </div>
            </div>
                    <div className="about-content reveal-right">
                        <span className="tag">About Me</span>
                        <div className="divider"></div>
                        <h2 className="section-heading">Anirudh Kumar —               <span className="gradient-text">Top Freelance SEO Expert</span>
              </h2>
                        <p>Hi, I am Anirudh Kumar, widely regarded as the Best Digital Marketer in Lucknow. With an intensive 5+ years
            of experience actively accelerating business growth, my goal is to maximize your digital performance.</p>
                        <p>As a highly verified SEO expert, Google Ads expert, and Social media specialist, I have successfully helped
            200+ businesses secure Page 1 dominance. I exclusively focus on delivering exponential ROI with a fully
            transparent, direct-expert approach—no middlemen.</p>
                        <div className="cert-grid">
                            <div className="cert-item">                <span className="cert-icon">🏆</span>                <span className="cert-text">Google Analytics
                Certified</span></div>
                            <div className="cert-item">                <span className="cert-icon">🎯</span>                <span className="cert-text">Meta Ads Certified</span>
                </div>
                            <div className="cert-item">                <span className="cert-icon">📊</span>                <span className="cert-text">Google Ads Certified</span>
                </div>
              </div>
                        <div className="skill-bars">
                            <div className="skill-row">
                                <div className="skill-label">                  <span>SEO & Organic Growth</span>                  <span>98%</span></div>
                                <div className="skill-bar-track">
                                    <div className="skill-bar-fill animate" style={{"transform":"scaleX(0.98)"}}></div>
                  </div>
                </div>
                            <div className="skill-row">
                                <div className="skill-label">                  <span>Google & Meta Ads (ROI focus)</span>                  <span>95%</span></div>
                                <div className="skill-bar-track">
                                    <div className="skill-bar-fill animate" style={{"transform":"scaleX(0.95)"}}></div>
                  </div>
                </div>
                            <div className="skill-row">
                                <div className="skill-label">                  <span>Social Media Strategy</span>                  <span>92%</span></div>
                                <div className="skill-bar-track">
                                    <div className="skill-bar-fill animate" style={{"transform":"scaleX(0.92)"}}></div>
                  </div>
                </div>
              </div>
                        <div className="mt-6">
                            <Link className="btn btn-outline" to="/about">Read My Full Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="why" className="page-section" style={{"background":"var(--bg2)"}}>
            <div className="container">
                <div className="service-contact-grid">
                    <div className="reveal-left">
                        <span className="tag">The Anirudh Advantage</span>
                        <h2 className="section-heading mt-4">Why Businesses               <span className="gradient-text">Trust Us?</span></h2>
                        <p className="mb-6">We don't just provide services; we build growth partnerships. Our focus is 100% on your Return
            on Investment (ROI).</p>
                        <ul style={{"color":"var(--text2)","lineHeight":"2.2","marginBottom":"30px","listStyle":"none","paddingLeft":"0"}}>
                            <li>                <i className="bi bi-check-circle-fill" style={{"color":"var(--accent)","marginRight":"10px"}}></i> Transparent
              Reporting & Daily Updates</li>
                            <li>                <i className="bi bi-check-circle-fill" style={{"color":"var(--accent)","marginRight":"10px"}}></i> Deep Local
              Market Expertise (UP)</li>
                            <li>                <i className="bi bi-check-circle-fill" style={{"color":"var(--accent)","marginRight":"10px"}}></i> 100% White-Hat
              Ethical Strategies</li>
                            <li>                <i className="bi bi-check-circle-fill" style={{"color":"var(--accent)","marginRight":"10px"}}></i> Custom Built
              Strategy for Every Niche</li>
              </ul>
                        <Link className="btn btn-outline" to="/why-choose-us">Learn More About Us</Link>
            </div>
                    <div className="reveal-right">
                        <div style={{"background":"var(--card)","padding":"40px","borderRadius":"30px","border":"1px solid var(--border2)","textAlign":"center"}}>
                            <div style={{"fontSize":"4rem","marginBottom":"20px","color":"var(--accent)"}}>                <i className="bi bi-building"></i></div>
                            <h3 style={{"fontFamily":"var(--ff-d)","fontSize":"3rem"}}>200+</h3>
                            <p style={{"color":"var(--text2)"}}>Businesses Scaled in Lucknow & Kanpur</p>
                            <hr style={{"margin":"20px 0","opacity":"0.1"}} />
                            <div style={{"fontSize":"1.5rem","color":"var(--accent)"}}>⭐⭐⭐⭐⭐</div>
                            <p style={{"fontSize":"0.85rem","marginTop":"5px"}}>4.9/5 Average Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="results" className="page-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="tag">Proof of Growth</span>
                    <h2 className="section-heading mt-4">Featured             <span className="gradient-text">Case Studies</span></h2>
                    <p className="section-sub mx-auto">Actual results from real businesses in Lucknow and Kanpur.</p>
          </div>
                <div className="case-grid">
                    {/* CASE 1 */}
                    <article className="case-card reveal">
                        <div className="case-img">              <i className="bi bi-graph-up-arrow"></i></div>
                        <div className="case-content">
                            <div className="case-meta">                <span>SEO</span>                 <span>•</span>                 <span>4 Months</span></div>
                            <h3>Ranking a Luxury Real Estate Brand in Gomti Nagar</h3>
                            <div className="case-results-grid">
                                <div>
                                    <div className="res-val">+320%</div>
                                    <div className="res-label">Traffic</div>
                  </div>
                                <div>
                                    <div className="res-val">150+</div>
                                    <div className="res-label">Leads</div>
                  </div>
                </div>
                            <Link className="read-more-link mt-4" to="/case-studies" style={{"display":"inline-block"}}>Full Case Study →</Link>
              </div>
            </article>
                    {/* CASE 2 */}
                    <article className="case-card reveal">
                        <div className="case-img">              <i className="bi bi-facebook"></i></div>
                        <div className="case-content">
                            <div className="case-meta">                <span>Meta Ads</span>                 <span>•</span>                 <span>6 Months</span></div>
                            <h3>Scaling an E-commerce Brand from Kanpur</h3>
                            <div className="case-results-grid">
                                <div>
                                    <div className="res-val">4.5x</div>
                                    <div className="res-label">ROAS</div>
                  </div>
                                <div>
                                    <div className="res-val">-40%</div>
                                    <div className="res-label">CPA</div>
                  </div>
                </div>
                            <Link className="read-more-link mt-4" to="/case-studies" style={{"display":"inline-block"}}>Full Case Study →</Link>
              </div>
            </article>
          </div>
                <div className="text-center mt-8">
                    <Link className="btn btn-outline" to="/case-studies">View All Success Stories</Link>
          </div>
        </div>
      </section>
    <section id="why">
            <div className="container">
                <div className="why-grid">
                    <div className="reveal-left">
                        <span className="tag">Why Choose Me</span>
                        <div className="divider"></div>
                        <h2 className="section-heading">Better Than Agencies —               <span className="gradient-text">Direct Expert Support</span>
              </h2>
                        <p className="section-sub" style={{"marginBottom":"0"}}>Hire the Best Digital Marketer in Lucknow and receive immediate
            expert support. I personally mandate your success.</p>
                        <div className="why-points">
                            <div className="why-point">
                                <div className="why-point-icon">🤝</div>
                                <div>
                                    <div className="why-point-title">Direct Expert Support</div>
                                    <div className="why-point-desc">No agency delays. No assigned interns. You receive active consultation
                  directly from a leading Digital Marketing Expert Kanpur & Lucknow.</div>
                  </div>
                </div>
                            <div className="why-point">
                                <div className="why-point-icon">📊</div>
                                <div>
                                    <div className="why-point-title">No Agency Middleman</div>
                                    <div className="why-point-desc">Avoid high markups. I deliver fast execution, instant transparency, and
                  dedicated strategy uniquely aligned to your vertical.</div>
                  </div>
                </div>
                            <div className="why-point">
                                <div className="why-point-icon">💰</div>
                                <div>
                                    <div className="why-point-title">Transparent Pricing</div>
                                    <div className="why-point-desc">Crystal clear quotes on our top SEO services. Complete visibility into what
                  you pay for standard SEO, Google Ads, and Meta marketing.</div>
                  </div>
                </div>
                            <div className="why-point">
                                <div className="why-point-icon">📍</div>
                                <div>
                                    <div className="why-point-title">Local Market Understanding</div>
                                    <div className="why-point-desc">Extensive knowledge targeting both Lucknow and Kanpur. Dominate nearby local
                  searches specifically optimized for your physical audience.</div>
                  </div>
                </div>
              </div>
            </div>
                    <div className="reveal-right">
                        <div className="vs-table">
                            <div className="vs-header">
                                <div>Feature</div>
                                <div className="col-me">✅ Anirudh Kumar</div>
                                <div>❌ Typical Agency</div>
                </div>
                            <div className="vs-row">                <span className="label">Personal Expert Attention</span>                <span className="vs-yes">✅
                Always</span>                <span className="vs-no">❌ Intern assigned</span></div>
                            <div className="vs-row">                <span className="label">Transparent Pricing</span>                <span className="vs-yes">✅ Clear
                packages</span>                <span className="vs-no">❌ Hidden charges</span></div>
                            <div className="vs-row">                <span className="label">Direct Communication</span>                <span className="vs-yes">✅ WhatsApp
                24/7</span>                <span className="vs-no">❌ Emails only</span></div>
                            <div className="vs-row">                <span className="label">Weekly Reports</span>                <span className="vs-yes">✅ Detailed PDF</span>                <span className="vs-no">❌ Monthly (maybe)</span></div>
                            <div className="vs-row">                <span className="label">Local SEO Expertise</span>                <span className="vs-yes">✅
                Lucknow/Kanpur</span>                <span className="vs-no">❌ Generic strategies</span></div>
                            <div className="vs-row">                <span className="label">Free SEO Audit</span>                <span className="vs-yes">✅ Hamesha free</span>                <span className="vs-no">❌ ₹2000-5000</span></div>
                            <div className="vs-row">                <span className="label">No Lock-in Contract</span>                <span className="vs-yes">✅
                Month-to-month</span>                <span className="vs-no">❌ 6-12 month lock</span></div>
                            <div className="vs-row">                <span className="label">Website Speed (PageSpeed)</span>                <span className="vs-yes">✅ 95+
                Score</span>                <span className="vs-no">❌ 40-60 score</span></div>
              </div>
                        <div style={{"marginTop":"16px","padding":"16px 20px","background":"rgba(255,107,0,0.08)","border":"1px solid rgba(255,107,0,0.2)","borderRadius":"var(--radius-sm)","fontSize":"0.85rem","color":"var(--text2)"}}>
            💡               <strong style={{"color":"var(--text)"}}>Pro Tip:</strong> Digital Jugglers jaisi agencies se zyada expensive
            hain aur results deliver karne mein slow. Ek dedicated expert se seedha kaam karein — better results, faster
            turnaround.
          </div>
            </div>
          </div>
        </div>
      </section>
    <section id="process">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">My Process</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">How I             <span className="gradient-text">Deliver Results</span></h2>
                    <p className="section-sub">A proven 5-step system jo consistently Lucknow & Kanpur ke businesses ke liye results
          deliver karta hai.</p>
          </div>
                <div className="process-steps">
                    <div className="process-step reveal" style={{"transitionDelay":"0.1s"}}>
                        <div className="process-num">01</div>
                        <h4>Free Audit & Analysis</h4>
                        <p>Aapki website, competitors aur current SEO health ka deep analysis. Bilkul free.</p>
            </div>
                    <div className="process-step reveal" style={{"transitionDelay":"0.2s"}}>
                        <div className="process-num">02</div>
                        <h4>Custom Strategy</h4>
                        <p>Aapke business goals ke hisaab se personalized digital marketing roadmap taiaar karna.</p>
            </div>
                    <div className="process-step reveal" style={{"transitionDelay":"0.3s"}}>
                        <div className="process-num">03</div>
                        <h4>Implementation</h4>
                        <p>SEO, content, ads — sab execute karna with precision. On-time, always.</p>
            </div>
                    <div className="process-step reveal" style={{"transitionDelay":"0.4s"}}>
                        <div className="process-num">04</div>
                        <h4>Monitor & Optimize</h4>
                        <p>Data-driven decisions. Jo kaam kare use scale karein, jo nahi kare use fix karein.</p>
            </div>
                    <div className="process-step reveal" style={{"transitionDelay":"0.5s"}}>
                        <div className="process-num">05</div>
                        <h4>Report & Scale</h4>
                        <p>Weekly transparent reporting. Results ke saath aage badhte rehte hain — scale up karte hain.</p>
            </div>
          </div>
        </div>
      </section>
    <section id="portfolio">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">Believable Results</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Real Growth,             <span className="gradient-text">Real Clients</span></h2>
                    <p className="section-sub">Numbers speak louder than words. See how the premier Freelance SEO Expert Lucknow
          consistently secures remarkable Google rankings.</p>
                    {/* Interactive Filter Pills */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                      {[
                        { id: 'all', label: 'All Case Studies (3)' },
                        { id: 'healthcare', label: '🏥 Healthcare' },
                        { id: 'ecommerce', label: '🛍️ E-Commerce' },
                        { id: 'education', label: '🎓 Education' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setPortfolioTab(tab.id)}
                          style={{
                            background: portfolioTab === tab.id ? 'var(--accent)' : 'var(--bg2)',
                            color: portfolioTab === tab.id ? '#fff' : 'var(--text2)',
                            border: portfolioTab === tab.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                            borderRadius: '30px',
                            padding: '6px 16px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
          </div>
                <div className="portfolio-grid">
                    {(portfolioTab === 'all' || portfolioTab === 'healthcare') && (
                    <div className="portfolio-card reveal" style={{"transitionDelay":"0.1s"}}>
                        <div className="portfolio-img">
                            <span style={{"position":"relative","zIndex":"1","color":"var(--accent)","fontSize":"2rem"}}>                <i className="bi bi-hospital"></i></span>
                            <div className="graph-visual">
                                <div className="graph-bar" style={{"height":"30%"}}></div>
                                <div className="graph-bar" style={{"height":"45%"}}></div>
                                <div className="graph-bar" style={{"height":"40%"}}></div>
                                <div className="graph-bar" style={{"height":"60%"}}></div>
                                <div className="graph-bar" style={{"height":"55%"}}></div>
                                <div className="graph-bar" style={{"height":"75%"}}></div>
                                <div className="graph-bar" style={{"height":"90%"}}></div>
                                <div className="graph-bar" style={{"height":"100%"}}></div>
                </div>
              </div>
                        <div className="portfolio-body">
                            <div className="portfolio-tag">Healthcare | Lucknow</div>
                            <h3>Multi-Specialty Clinic — Gomti Nagar, Lucknow</h3>
                            <p>Our localized SEO operations significantly boosted organic Google traffic, increasing qualified patient
              appointments by 3x.</p>
                            <div className="portfolio-results">
                                <span className="result-chip">300% Traffic Growth</span>
                                <span className="result-chip">Page 1 Rankings</span>
                                <span className="result-chip">3x Appointments</span>
                </div>
              </div>
            </div>
                    )}
                    {(portfolioTab === 'all' || portfolioTab === 'ecommerce') && (
                    <div className="portfolio-card reveal" style={{"transitionDelay":"0.2s"}}>
                        <div className="portfolio-img">
                            <span style={{"position":"relative","zIndex":"1","color":"var(--accent)","fontSize":"2rem"}}>                <i className="bi bi-shop"></i></span>
                            <div className="graph-visual">
                                <div className="graph-bar" style={{"height":"20%"}}></div>
                                <div className="graph-bar" style={{"height":"35%"}}></div>
                                <div className="graph-bar" style={{"height":"50%"}}></div>
                                <div className="graph-bar" style={{"height":"45%"}}></div>
                                <div className="graph-bar" style={{"height":"65%"}}></div>
                                <div className="graph-bar" style={{"height":"80%"}}></div>
                                <div className="graph-bar" style={{"height":"95%"}}></div>
                                <div className="graph-bar" style={{"height":"100%"}}></div>
                </div>
              </div>
                        <div className="portfolio-body">
                            <div className="portfolio-tag">E-commerce | Kanpur</div>
                            <h3>Fashion Retail Brand — Kanpur City</h3>
                            <p>Our Meta Ads and hyper-targeted remarketing generated a 5x ROI, scaling their e-commerce sales rapidly
              across local areas.</p>
                            <div className="portfolio-results">
                                <span className="result-chip">5x Sales Growth</span>
                                <span className="result-chip">7.2x ROAS</span>
                                <span className="result-chip">₹15L Revenue/Month</span>
                </div>
              </div>
            </div>
                    )}
                    {(portfolioTab === 'all' || portfolioTab === 'education') && (
                    <div className="portfolio-card reveal" style={{"transitionDelay":"0.3s"}}>
                        <div className="portfolio-img">
                            <span style={{"position":"relative","zIndex":"1","color":"var(--accent)","fontSize":"2rem"}}>                <i className="bi bi-mortarboard"></i></span>
                            <div className="graph-visual">
                                <div className="graph-bar" style={{"height":"25%"}}></div>
                                <div className="graph-bar" style={{"height":"30%"}}></div>
                                <div className="graph-bar" style={{"height":"50%"}}></div>
                                <div className="graph-bar" style={{"height":"55%"}}></div>
                                <div className="graph-bar" style={{"height":"70%"}}></div>
                                <div className="graph-bar" style={{"height":"85%"}}></div>
                                <div className="graph-bar" style={{"height":"90%"}}></div>
                                <div className="graph-bar" style={{"height":"100%"}}></div>
                </div>
              </div>
                        <div className="portfolio-body">
                            <div className="portfolio-tag">Education | Lucknow</div>
                            <h3>Coaching Institute — Hazratganj, Lucknow</h3>
                            <p>Our powerful Local SEO and optimized Google Ads drastically skyrocketed admissions by securing the top
              spot for highly competitive keywords.</p>
                            <div className="portfolio-results">
                                <span className="result-chip">200+ Clients Served</span>
                                <span className="result-chip">#1 Google Rank</span>
                                <span className="result-chip">Massive ROI</span>
                </div>
              </div>
            </div>
                    )}
          </div>
                <div className="flex-center mt-6">
                    <a href="#contact" className="btn btn-outline">📋 Start Your Growth Story Today — Let's Talk →</a>
          </div>
        </div>
      </section>
    <section id="testimonials">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">Client Reviews</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Verified Client             <span className="gradient-text">Testimonials</span></h2>
                    <p className="section-sub">Real clients, real reviews — Lucknow aur Kanpur ke successful businesses jo apni growth
          ka श्रेय Anirudh Kumar ko dete hain.</p>
          </div>
                <div className="testimonials-grid">
                    <div className="testi-card reveal" style={{"transitionDelay":"0.1s"}}>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testi-text">"Anirudh ne hamare clinic ki Google ranking completely transform kar di. Pehle page 4
            par the, ab page 1 par aate hain. Appointments 3 guna ho gayi. Bilkul genuine aur dedicated person hai."</p>
                        <div className="testi-author">
                            <div className="testi-avatar">DR</div>
                            <div>
                                <div className="testi-name">Dr. Rahul Mishra</div>
                                <div className="testi-role">Multi-Specialty Clinic Owner</div>
                                <div className="testi-city">📍 Gomti Nagar, Lucknow</div>
                </div>
              </div>
            </div>
                    <div className="testi-card reveal" style={{"transitionDelay":"0.2s"}}>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testi-text">"Meta Ads ke baare mein mujhe kuch nahi pata tha. Anirudh ne sab samjhaya aur hamare
            products ki sales 5x ho gayi. ROAS 7x se zyada aa raha hai. Best investment tha hamare business ke liye!"
          </p>
                        <div className="testi-author">
                            <div className="testi-avatar">                <i className="bi bi-person-circle"></i></div>
                            <div>
                                <div className="testi-name">Priya Sharma</div>
                                <div className="testi-role">Fashion Brand Founder</div>
                                <div className="testi-city">                  <i className="bi bi-geo-alt"></i> Kanpur City</div>
                </div>
              </div>
            </div>
                    <div className="testi-card reveal" style={{"transitionDelay":"0.3s"}}>
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testi-text">"Hamari coaching ke admissions bohot slow the. Anirudh Kumar ka SEO + Google Ads
            combination kamaal ka tha. 6 mahine mein hum Lucknow ke top 3 coaching results mein aa gaye. Outstanding
            results!"</p>
                        <div className="testi-author">
                            <div className="testi-avatar">                <i className="bi bi-person-circle"></i></div>
                            <div>
                                <div className="testi-name">Amit Verma</div>
                                <div className="testi-role">Coaching Institute Director</div>
                                <div className="testi-city">                  <i className="bi bi-geo-alt"></i> Hazratganj, Lucknow</div>
                </div>
              </div>
            </div>
          </div>
                <div className="text-center mt-6" style={{"padding":"20px","background":"rgba(255,107,0,0.05)","border":"1px solid rgba(255,107,0,0.15)","borderRadius":"var(--radius)","marginTop":"32px"}}>
                    <div style={{"fontSize":"0.85rem","color":"var(--text2)"}}>Google Reviews par verified ⭐ 4.9/5 rating — 87+ satisfied
          clients</div>
                    <div style={{"fontFamily":"var(--ff-d)","fontSize":"2rem","color":"var(--accent)","marginTop":"8px"}}>⭐⭐⭐⭐⭐ 4.9 / 5.0</div>
          </div>
        </div>
      </section>
      <div className="container">
        <RoiCalculator />
      </div>
    <section id="pricing">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">Transparent Pricing</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Simple, Clear             <span className="gradient-text">Packages</span></h2>
                    <p className="section-sub">Koi hidden charges nahi. Jo package choose karo, wahi milega. Sabhi packages mein free
          SEO audit included hai.</p>
          </div>
                <InteractivePricing />
                <p className="text-center mt-4" style={{"color":"var(--text2)","fontSize":"0.85rem"}}>Custom requirements hain?           <a href="#contact" style={{"color":"var(--accent)","fontWeight":"700"}}>Contact karein</a> — aapke liye custom package
        bana deta hoon.</p>
        </div>
      </section>
    <section id="locations">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">Service Areas</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Lucknow & Kanpur —             <span className="gradient-text">Dono Shehar Covered</span></h2>
                    <p className="section-sub">Local market expertise ke saath aapke city mein results deliver karta hoon. Uttar Pradesh
          ka #1 Digital Marketing Expert.</p>
          </div>
                <div className="locations-grid">
                    <div className="location-card reveal-left">
                        <div className="location-map">
                            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="100" r="80" stroke="#FF6B00" strokeWidth="1" stroke-dasharray="8 4" />
                                <circle cx="200" cy="100" r="40" stroke="#FF6B00" strokeWidth="1" stroke-dasharray="4 4" />
                                <circle cx="200" cy="100" r="8" fill="#FF6B00" />
                                <line x1="120" y1="100" x2="280" y2="100" stroke="#FF6B00" strokeWidth="0.5" />
                                <line x1="200" y1="20" x2="200" y2="180" stroke="#FF6B00" strokeWidth="0.5" />
                </svg>
                            <span style={{"position":"relative","zIndex":"1","fontSize":"2.5rem"}}>🏛️</span>
              </div>
                        <div className="location-body">
                            <h3>Digital Marketing Expert in Lucknow</h3>
                            <div className="city-sub">🏆 #1 SEO Expert | Uttar Pradesh Capital</div>
                            <p>Lucknow ke real estate, healthcare, education, retail aur restaurant sectors mein deep expertise. Gomti
              Nagar se Hazratganj tak — aapka business online dominate kare.</p>
                            <div className="location-areas">
                                <span className="area-chip">Gomti Nagar</span>
                                <span className="area-chip">Hazratganj</span>
                                <span className="area-chip">Alambagh</span>
                                <span className="area-chip">Indira Nagar</span>
                                <span className="area-chip">Aliganj</span>
                                <span className="area-chip">Mahanagar</span>
                                <span className="area-chip">Chinhat</span>
                </div>
                            <a href="#contact" className="btn btn-primary" style={{"fontSize":"0.85rem","padding":"10px 20px"}}>Lucknow SEO Audit —
              Free</a>
              </div>
            </div>
                    <div className="location-card reveal-right">
                        <div className="location-map">
                            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="200" cy="100" r="80" stroke="#FFB800" strokeWidth="1" stroke-dasharray="8 4" />
                                <circle cx="200" cy="100" r="40" stroke="#FFB800" strokeWidth="1" stroke-dasharray="4 4" />
                                <circle cx="200" cy="100" r="8" fill="#FFB800" />
                                <line x1="120" y1="100" x2="280" y2="100" stroke="#FFB800" strokeWidth="0.5" />
                                <line x1="200" y1="20" x2="200" y2="180" stroke="#FFB800" strokeWidth="0.5" />
                </svg>
                            <span style={{"position":"relative","zIndex":"1","fontSize":"2.5rem"}}>🏭</span>
              </div>
                        <div className="location-body">
                            <h3>Digital Marketing Expert in Kanpur</h3>
                            <div className="city-sub" style={{"color":"var(--accent2)"}}>🏆 #1 SEO Expert | Industrial Hub of UP</div>
                            <p>Kanpur ke textile, leather, manufacturing, education aur retail businesses ke liye specialized digital
              marketing. Is industrial city ka #1 digital partner.</p>
                            <div className="location-areas">
                                <span className="area-chip">Civil Lines</span>
                                <span className="area-chip">Swaroop Nagar</span>
                                <span className="area-chip">Kidwai Nagar</span>
                                <span className="area-chip">Kakadeo</span>
                                <span className="area-chip">Panki</span>
                                <span className="area-chip">Kalyanpur</span>
                                <span className="area-chip">Armapur</span>
                </div>
                            <a href="#contact" className="btn btn-outline" style={{"fontSize":"0.85rem","padding":"10px 20px","borderColor":"var(--accent2)","color":"var(--accent2)"}}>Kanpur SEO
              Audit — Free</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="blog">
            <div className="container">
                <div className="section-header center text-center reveal">
                    <span className="tag">Digital Marketing Blog</span>
                    <div className="divider"></div>
                    <h2 className="section-heading">Actionable Insights,             <span className="gradient-text">Real Value</span></h2>
                    <p className="section-sub">Practical digital marketing intelligence for Lucknow and Kanpur. Master SEO strategies to
          dominate search globally.</p>
          </div>
                <div className="blog-grid">
                    <div className="blog-card reveal" style={{"transitionDelay":"0.1s"}}>
                        <div className="blog-img">
                            <div className="blog-img-bg"></div>
                            <span style={{"position":"relative","zIndex":"1"}}>🔍</span>
              </div>
                        <div className="blog-body">
                            <div className="blog-meta">                <span className="blog-cat">SEO</span>                <span>5 min read</span>                <span>Jan 2026</span></div>
                            <h3>Best SEO Expert in Lucknow</h3>
                            <p>Discover complete strategies on how to choose a reliable SEO expert and what guarantees to expect for
              your business in 2026.</p>
                            <Link className="blog-link" to="/blog-post?post=best-seo-expert-in-lucknow">Read More →</Link>
              </div>
            </div>
                    <div className="blog-card reveal" style={{"transitionDelay":"0.2s"}}>
                        <div className="blog-img">
                            <div className="blog-img-bg" style={{"background":"linear-gradient(145deg,var(--bg3),rgba(255,184,0,0.15))"}}></div>
                            <span style={{"position":"relative","zIndex":"1"}}>💰</span>
              </div>
                        <div className="blog-body">
                            <div className="blog-meta">                <span className="blog-cat">Marketing</span>                <span>7 min read</span>                <span>Feb 2026</span>
                </div>
                            <h3>SEO Cost in Lucknow</h3>
                            <p>A complete breakdown of standard pricing models and actionable tips on optimizing your Digital Marketing
              ROI locally.</p>
                            <Link className="blog-link" to="/blog-post?post=seo-cost-in-lucknow">Read More →</Link>
              </div>
            </div>
                    <div className="blog-card reveal" style={{"transitionDelay":"0.3s"}}>
                        <div className="blog-img">
                            <div className="blog-img-bg" style={{"background":"linear-gradient(145deg,var(--bg3),rgba(255,51,102,0.1))"}}></div>
                            <span style={{"position":"relative","zIndex":"1"}}>📍</span>
              </div>
                        <div className="blog-body">
                            <div className="blog-meta">                <span className="blog-cat">Local SEO</span>                <span>6 min read</span>                <span>Mar 2026</span>
                </div>
                            <h3>How to Rank Business in Lucknow</h3>
                            <p>Mastering Google Business Profiles, robust entity clustering, and localized strategies specifically for
              physical local businesses.</p>
                            <Link className="blog-link" to="/blog-post?post=how-to-rank-business-in-lucknow">Read More →</Link>
              </div>
            </div>
          </div>
                <div className="flex-center mt-6">
                    <Link className="btn btn-outline" to="/blog">📚 Explore All Articles →</Link>
          </div>
        </div>
      </section>
    <section id="faq">
            <div className="container">
                <div className="faq-grid">
                    <div>
                        <span className="tag reveal">Frequently Asked Questions</span>
                        <div className="divider reveal"></div>
                        <h2 className="section-heading reveal">Aapke               <span className="gradient-text">Sawaal,                <br />Mere Jawab</span></h2>
                        <p className="section-sub reveal" style={{"marginBottom":"32px"}}>Koi bhi doubt ho toh seedha WhatsApp karein — main
            personally jawab deta hoon.</p>
                        <InteractiveFaq />
                    </div>
                    <div className="faq-sidebar">
                        <div className="faq-sidebar-card reveal-right">
                            <h3>🚀 Need a Free SEO Audit?</h3>
                            <p>Schedule a complete technical health check instantly. I personally review your architecture and send over
              a robust, actionable blueprint.</p>
                            <button type="button" onClick={() => setAuditModalOpen(true)} className="btn btn-primary" style={{"width":"100%","justifyContent":"center","cursor":"pointer"}}>Request Free Audit</button>
              </div>
                        <div className="faq-sidebar-card reveal-right" style={{"transitionDelay":"0.2s","background":"rgba(37,211,102,0.05)","borderColor":"rgba(37,211,102,0.2)"}}>
                            <h3>💬 WhatsApp Par Baat Karein</h3>
                            <p>Seedha WhatsApp karein — main 10 mins mein reply karta hoon. Aapke sawaal ka jawab abhi milega.</p>
                            <a href="https://wa.me/919999999999?text=Hi%20Anirudh!%20I%20need%20digital%20marketing%20help%20for%20my%20business." className="btn btn-whatsapp" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noreferrer">📱 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div>
                        <span className="tag reveal">Get in Touch</span>
                        <div className="divider reveal"></div>
                        <h2 className="section-heading reveal">Aaj Hi Start               <span className="gradient-text">Karein!</span></h2>
                        <p className="section-sub reveal">Free consultation + free SEO audit — koi charge nahi. Batao kya chahiye, main
            solution deta hoon.</p>
                        <div className="contact-info">
                            <div className="contact-item reveal" style={{"transitionDelay":"0.1s","cursor":"pointer"}} onClick={() => copyToClipboard('+919999999999', 'Phone Number')} title="Click to copy number">
                                <div className="contact-icon">                  <i className="bi bi-whatsapp"></i></div>
                                <div>
                                    <div className="contact-label">WhatsApp / Call (Click to Copy)</div>
                                    <div className="contact-value">+91-9999999999</div>
                  </div>
                </div>
                            <div className="contact-item reveal" style={{"transitionDelay":"0.2s","cursor":"pointer"}} onClick={() => copyToClipboard('hello@anirudhkumar.in', 'Email')} title="Click to copy email">
                                <div className="contact-icon">                  <i className="bi bi-envelope"></i></div>
                                <div>
                                    <div className="contact-label">Email (Click to Copy)</div>
                                    <div className="contact-value">hello@anirudhkumar.in</div>
                  </div>
                </div>
                            <div className="contact-item reveal" style={{"transitionDelay":"0.3s"}}>
                                <div className="contact-icon">                  <i className="bi bi-geo-alt"></i></div>
                                <div>
                                    <div className="contact-label">Location</div>
                                    <div className="contact-value">Gomti Nagar, Lucknow, UP</div>
                  </div>
                </div>
              </div>
            </div>
                    <form className="contact-form reveal-right" onSubmit={handleSubmit}>
                        <h3 style={{"fontSize":"1.2rem","fontWeight":"800","marginBottom":"8px"}}>Book Your Free SEO Audit Now</h3>
                        <p style={{"fontSize":"0.85rem","color":"var(--text2)","marginBottom":"24px"}}>24 hours rapid reply guaranteed - let us
            scale your growth.</p>
                        <div className="form-row">
                            <div className="form-group">                <label>Your Name *</label>                <input type="text" name="name" required placeholder="John Doe" /></div>
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
                        <div className="form-group">              <label>Describe your business or goals</label>              <textarea name="message" placeholder="Share what you need help with so I can come prepared with an audit..."></textarea></div>
                        <button type="submit" className="btn btn-primary" style={{"width":"100%","justifyContent":"center","fontSize":"1rem"}}>🚀 Book Your Free SEO Audit Now</button>
                        <p style={{"fontSize":"0.75rem","color":"var(--text2)","textAlign":"center","marginTop":"12px"}}>100% Free Consultation. We
            reply immediately.</p>
            </form>
          </div>
        </div>
      </section>
      <SeoAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
      <Toast
        isVisible={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
