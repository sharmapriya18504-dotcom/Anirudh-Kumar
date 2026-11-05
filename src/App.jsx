import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import BackToTop from './components/BackToTop.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import MouseFollower from './components/MouseFollower.jsx';
import { useSiteInteractions } from './hooks/useSiteInteractions.js';
import { LoaderProvider, useLoader } from './context/LoaderContext.jsx';

// Core Pages
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ThankYouPage from './pages/ThankYouPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';

// Location Hub Pages (500+ words unique content per PDF A3)
import SeoExpertLucknowPage from './pages/SeoExpertLucknowPage.jsx';
import SeoExpertKanpurPage from './pages/SeoExpertKanpurPage.jsx';
import SeoExpertNoidaPage from './pages/SeoExpertNoidaPage.jsx';
import RemoteSeoPage from './pages/RemoteSeoPage.jsx';

// Dedicated Service & Subpages from reference clone
import SeoLucknowPage from './pages/SeoLucknowPage.jsx';
import SmmLucknowPage from './pages/SmmLucknowPage.jsx';
import AdsLucknowPage from './pages/AdsLucknowPage.jsx';
import WebDevLucknowPage from './pages/WebDevLucknowPage.jsx';
import MarketingKanpurPage from './pages/MarketingKanpurPage.jsx';
import SeoConsultantPage from './pages/SeoConsultantPage.jsx';
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';

function AppContent() {
  const { refreshKey } = useLoader();
  useSiteInteractions(refreshKey);

  return (
    <div className="site-root">
      <Preloader />
      <ScrollProgressBar />
      <MouseFollower />
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage key={`home-${refreshKey}`} />} />
          <Route path="/about" element={<AboutPage key={`about-${refreshKey}`} />} />
          <Route path="/services" element={<ServicesPage key={`services-${refreshKey}`} />} />
          <Route path="/case-studies" element={<CaseStudiesPage key={`case-${refreshKey}`} />} />
          <Route path="/portfolio" element={<Navigate to="/case-studies" replace />} />
          <Route path="/pricing" element={<PricingPage key={`pricing-${refreshKey}`} />} />
          <Route path="/blog" element={<BlogPage key={`blog-${refreshKey}`} />} />
          <Route path="/blog-post" element={<BlogPostPage key={`post-${refreshKey}`} />} />
          <Route path="/contact" element={<ContactPage key={`contact-${refreshKey}`} />} />
          <Route path="/thank-you" element={<ThankYouPage key={`thanks-${refreshKey}`} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage key={`privacy-${refreshKey}`} />} />

          {/* Location Landing Pages (PDF A3 & Developer Change Report B1) */}
          <Route path="/seo-expert-lucknow" element={<SeoExpertLucknowPage key={`lucknow-${refreshKey}`} />} />
          <Route path="/seo-expert-kanpur" element={<SeoExpertKanpurPage key={`kanpur-${refreshKey}`} />} />
          <Route path="/seo-expert-noida" element={<SeoExpertNoidaPage key={`noida-${refreshKey}`} />} />
          <Route path="/remote-seo-services" element={<RemoteSeoPage key={`remote-${refreshKey}`} />} />

          {/* Dedicated Reference Service & Subpages */}
          <Route path="/seo-lucknow" element={<SeoLucknowPage key={`seolucknow-${refreshKey}`} />} />
          <Route path="/smm-lucknow" element={<SmmLucknowPage key={`smm-${refreshKey}`} />} />
          <Route path="/ads-lucknow" element={<AdsLucknowPage key={`ads-${refreshKey}`} />} />
          <Route path="/web-dev-lucknow" element={<WebDevLucknowPage key={`webdev-${refreshKey}`} />} />
          <Route path="/marketing-kanpur" element={<MarketingKanpurPage key={`mkanpur-${refreshKey}`} />} />
          <Route path="/seo-consultant" element={<SeoConsultantPage key={`consult-${refreshKey}`} />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage key={`why-${refreshKey}`} />} />
          <Route path="/results" element={<ResultsPage key={`res-${refreshKey}`} />} />
          <Route path="/testimonials" element={<TestimonialsPage key={`testi-${refreshKey}`} />} />

          {/* Legacy .html links */}
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/blog.html" element={<Navigate to="/blog" replace />} />
          <Route path="/blog-post.html" element={<Navigate to="/blog-post" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}
