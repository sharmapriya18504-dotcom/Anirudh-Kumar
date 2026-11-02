import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import BackToTop from './components/BackToTop.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import MouseFollower from './components/MouseFollower.jsx';
import { useSiteInteractions } from './hooks/useSiteInteractions.js';
import { LoaderProvider, useLoader } from './context/LoaderContext.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import SeoLucknowPage from './pages/SeoLucknowPage.jsx';
import SmmLucknowPage from './pages/SmmLucknowPage.jsx';
import AdsLucknowPage from './pages/AdsLucknowPage.jsx';
import WebDevLucknowPage from './pages/WebDevLucknowPage.jsx';
import MarketingKanpurPage from './pages/MarketingKanpurPage.jsx';
import SeoConsultantPage from './pages/SeoConsultantPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import WhyChooseUsPage from './pages/WhyChooseUsPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

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
          <Route path="/" element={<HomePage key={`home-${refreshKey}`} />} />
          <Route path="/services" element={<ServicesPage key={`services-${refreshKey}`} />} />
          <Route path="/seo-lucknow" element={<SeoLucknowPage key={`seo-${refreshKey}`} />} />
          <Route path="/smm-lucknow" element={<SmmLucknowPage key={`smm-${refreshKey}`} />} />
          <Route path="/ads-lucknow" element={<AdsLucknowPage key={`ads-${refreshKey}`} />} />
          <Route path="/web-dev-lucknow" element={<WebDevLucknowPage key={`web-${refreshKey}`} />} />
          <Route path="/marketing-kanpur" element={<MarketingKanpurPage key={`mkt-${refreshKey}`} />} />
          <Route path="/seo-consultant" element={<SeoConsultantPage key={`seoc-${refreshKey}`} />} />
          <Route path="/about" element={<AboutPage key={`about-${refreshKey}`} />} />
          <Route path="/results" element={<ResultsPage key={`res-${refreshKey}`} />} />
          <Route path="/testimonials" element={<TestimonialsPage key={`testi-${refreshKey}`} />} />
          <Route path="/case-studies" element={<CaseStudiesPage key={`case-${refreshKey}`} />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage key={`why-${refreshKey}`} />} />
          <Route path="/pricing" element={<PricingPage key={`price-${refreshKey}`} />} />
          <Route path="/blog" element={<BlogPage key={`blog-${refreshKey}`} />} />
          <Route path="/blog-post" element={<BlogPostPage key={`post-${refreshKey}`} />} />
          <Route path="/contact" element={<ContactPage key={`contact-${refreshKey}`} />} />
          {/* Legacy .html links */}
          <Route path="/services.html" element={<ServicesPage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/blog.html" element={<BlogPage />} />
          <Route path="/blog-post.html" element={<BlogPostPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
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
