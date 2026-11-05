import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper privacy-page" style={{ paddingTop: 'var(--nav-h)' }}>
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Legal &amp; Privacy
          </span>
          <h1 className="section-heading" style={{ fontSize: '2.4rem', color: 'var(--text)', marginBottom: '16px' }}>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p style={{ color: 'var(--text3)', fontSize: '0.88rem', marginBottom: '32px' }}>
            Last Updated: November 2026 • Anirudh Kumar (anirudhkumar.in)
          </p>

          <div className="glass-panel" style={{ padding: '40px', color: 'var(--text2)', lineHeight: 1.8, fontSize: '0.96rem' }}>
            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginTop: 0 }}>1. Overview</h3>
            <p>
              I respect your privacy and am committed to protecting any personal information you provide when requesting an SEO audit or communicating via anirudhkumar.in. This policy explains what information is collected, how it is used, and how it is protected.
            </p>

            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginTop: '28px' }}>2. Information Collected</h3>
            <p>
              When you submit an enquiry or audit request form, I collect the following details provided voluntarily by you:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Name</li>
              <li>Contact phone number / WhatsApp number</li>
              <li>Email address (optional)</li>
              <li>Website URL or business name</li>
              <li>Project goals and specific service requirements</li>
            </ul>

            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginTop: '28px' }}>3. How Your Information Is Used</h3>
            <p>
              Your contact information is strictly used to:
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Review your website and generate your requested SEO health audit report.</li>
              <li>Communicate directly with you via phone, WhatsApp, or email regarding your project.</li>
              <li>Send monthly progress reports if you engage ongoing SEO or advertising services.</li>
            </ul>
            <p>
              <strong>I never sell, rent, or distribute your personal details to third-party telemarketers or advertisers.</strong>
            </p>

            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginTop: '28px' }}>4. Analytics &amp; Cookies</h3>
            <p>
              This website uses standard web analytics (such as Google Analytics 4) to understand aggregate traffic trends and improve user experience. No personally identifiable financial information is collected through cookies.
            </p>

            <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginTop: '28px' }}>5. Contact &amp; Questions</h3>
            <p>
              If you have any questions regarding this privacy policy or your stored information, you can reach out directly:
            </p>
            <div style={{ background: 'var(--bg2)', padding: '16px', borderRadius: '10px', marginTop: '12px', border: '1px solid var(--border2)' }}>
              <div>Anirudh Kumar • Freelance SEO Expert</div>
              <div>Gomti Nagar, Lucknow, Uttar Pradesh, India</div>
              <div>Email: <a href="mailto:anirudhkumarseo@gmail.com" style={{ color: '#FF6B00' }}>anirudhkumarseo@gmail.com</a></div>
              <div>Phone / WhatsApp: <a href="tel:+918604625862" style={{ color: '#FF6B00' }}>+91 86046 25862</a></div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.88rem' }}>
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

