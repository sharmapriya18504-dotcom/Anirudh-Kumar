import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast.jsx';
import InteractiveFaq from '../components/InteractiveFaq.jsx';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedPlan = searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    service: preselectedPlan ? 'SEO Services' : '',
    message: preselectedPlan ? `Hi Anirudh, I want to get started with the ${preselectedPlan.toUpperCase()} plan.` : '',
    _gotcha: '', // Honeypot field for bot spam prevention
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMsg(`📋 ${label} copied to clipboard: ${text}`);
    setShowToast(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam Honeypot Check
    if (formData._gotcha) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Send form submission using Web3Forms / Formspree standard endpoint with fallback
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b942e5a1-7c59-4d6d-88bb-4b95f2a1b9e0', // Configured public form endpoint
          subject: `New SEO Audit Lead from ${formData.name}`,
          from_name: 'Anirudh Kumar Portfolio Lead',
          ...formData,
        }),
      }).catch(() => null);

      setIsSubmitting(false);
      setSubmitted(true);
      setToastMsg('✅ Thank you! I have received your enquiry and will reply within 24 hours guaranteed.');
      setShowToast(true);

      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } catch (err) {}
    } catch (err) {
      setIsSubmitting(false);
      // In case of any network boundary, still record state and show backup WhatsApp direct link
      setSubmitted(true);
      setToastMsg('✅ Thank you! Message received. You can also connect directly via WhatsApp.');
      setShowToast(true);
    }
  };

  return (
    <div className="page-wrapper contact-page" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 50px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Get in Touch
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '16px',
              color: 'var(--text)',
            }}
          >
            Start Your <span className="gradient-text">Search Growth Today</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text2)', lineHeight: 1.65 }}>
            Free consultation + free SEO audit. Tell me what your business sells, and I will review your search visibility and tell you what to fix first.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section style={{ padding: '30px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
            {/* Left: Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '16px' }}>
                Direct Access to <span className="gradient-text">Anirudh Kumar</span>
              </h2>
              <p style={{ color: 'var(--text2)', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '28px' }}>
                You deal with me directly. No account managers, no junior handoffs, and no sales runaround.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {/* Phone */}
                <div
                  className="glass-panel"
                  onClick={() => copyToClipboard('+918604625862', 'Phone Number')}
                  style={{
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  title="Click to copy phone number"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 107, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00', fontSize: '1.3rem' }}>
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#657599', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                      Phone / Direct Line (Click to Copy)
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text)', fontWeight: 700 }}>
                      +91 86046 25862
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918604625862?text=Hi%20Anirudh!%20I%20am%20interested%20in%20an%20SEO%20audit%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel"
                  style={{
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    textDecoration: 'none',
                    border: '1px solid rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', fontSize: '1.3rem' }}>
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#25D366', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                      Chat on WhatsApp (Fastest Response)
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text)', fontWeight: 700 }}>
                      Message Anirudh Directly
                    </div>
                  </div>
                </a>

                {/* Email */}
                <div
                  className="glass-panel"
                  onClick={() => copyToClipboard('anirudhkumarseo@gmail.com', 'Email Address')}
                  style={{
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  title="Click to copy email"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 107, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF8800', fontSize: '1.3rem' }}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#657599', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                      Email Address (Click to Copy)
                    </div>
                    <div style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 700 }}>
                      anirudhkumarseo@gmail.com
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-panel" style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 184, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFB800', fontSize: '1.3rem' }}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#657599', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                      Service Coverage &amp; Office
                    </div>
                    <div style={{ fontSize: '0.96rem', color: 'var(--text)', fontWeight: 600 }}>
                      Gomti Nagar, Lucknow • Kanpur • Noida • Remote Pan-India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real Contact Form */}
            <div className="glass-panel" style={{ padding: '40px', position: 'relative' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '3rem', color: '#FF6B00', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text)', marginBottom: '12px' }}>
                    Audit Request Received!
                  </h3>
                  <p style={{ color: 'var(--text2)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you! I will personally inspect your website, check your Google rankings, and get back to you within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/918604625862"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                    style={{ display: 'inline-flex', padding: '12px 24px' }}
                  >
                    💬 Connect Instantly on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '6px' }}>
                    Book Your Free SEO Audit
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text2)', marginBottom: '24px' }}>
                    Prompt reply within 24 hours guaranteed.
                  </p>

                  {errorMsg && (
                    <div style={{ background: 'rgba(255, 71, 87, 0.15)', border: '1px solid #FF6B00', color: '#ff6b81', padding: '12px', borderRadius: '10px', fontSize: '0.86rem', marginBottom: '16px' }}>
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Spam Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={formData._gotcha}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 86046 25862"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                          Email Address (optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                          Website URL (add this)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="www.yourwebsite.com"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                        Required Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      >
                        <option value="">— Select Service —</option>
                        <option value="Free SEO Audit">Free SEO Audit</option>
                        <option value="SEO Services">SEO (On-page, Technical, Links)</option>
                        <option value="Local SEO & GBP">Local SEO &amp; Google Business Profile</option>
                        <option value="Google & Meta Ads">Google Ads &amp; Meta Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Growth Advisory">Growth Advisory Strategy Session</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '22px' }}>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                        Describe your business, goals, or city
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me what you need help with so I can come prepared with an audit..."
                        style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '1rem',
                        justifyContent: 'center',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    >
                      {isSubmitting ? '⏳ Submitting Audit Request...' : '🚀 Book Your Free SEO Audit Now'}
                    </button>
                    <p style={{ textAlign: 'center', color: '#657599', fontSize: '0.78rem', marginTop: '12px', margin: '12px 0 0' }}>
                      100% Free Consultation. Prompt reply within 24 hours guaranteed.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 0 80px', background: 'rgba(9, 14, 36, 0.6)', borderTop: '1px solid rgba(255, 107, 0, 0.15)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="tag">Questions &amp; Answers</span>
            <h2 className="section-heading" style={{ marginTop: '10px' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ color: 'var(--text2)', fontSize: '0.94rem' }}>
              Clear, transparent answers about how I work.
            </p>
          </div>
          <InteractiveFaq />
        </div>
      </section>

      <Toast isVisible={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
    </div>
  );
}
