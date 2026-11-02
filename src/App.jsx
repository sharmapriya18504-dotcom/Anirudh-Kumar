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

export default function App() {
  useSiteInteractions();

  return (
    <div className="site-root">
      <Preloader />
      <ScrollProgressBar />
      <MouseFollower />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/seo-lucknow" element={<SeoLucknowPage />} />
          <Route path="/smm-lucknow" element={<SmmLucknowPage />} />
          <Route path="/ads-lucknow" element={<AdsLucknowPage />} />
          <Route path="/web-dev-lucknow" element={<WebDevLucknowPage />} />
          <Route path="/marketing-kanpur" element={<MarketingKanpurPage />} />
          <Route path="/seo-consultant" element={<SeoConsultantPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-post" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Support .html links if any were clicked */}
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

