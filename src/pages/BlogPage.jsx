import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs.js';
import TiltCard3D from '../components/TiltCard3D.jsx';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const categories = useMemo(() => {
    const set = new Set(BLOGS.map((b) => b.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'all' || blog.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * blogsPerPage;
    return filteredBlogs.slice(start, start + blogsPerPage);
  }, [filteredBlogs, currentPage]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-wrap" style={{ paddingTop: 'var(--nav-h)' }}>
      {/* BLOG HERO */}
      <header style={{ padding: '80px 0 50px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="ambient-glow-orange" style={{ top: '-100px', left: '-100px' }} />
        <div className="ambient-glow-orange" style={{ top: '100px', right: '-150px' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>
            Actionable SEO Intelligence
          </span>
          <h1
            className="section-heading"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: 'var(--text)',
            }}
          >
            Digital Marketing &amp; <span className="gradient-text">SEO Guides</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text2)', lineHeight: 1.65, margin: '0 auto 30px' }}>
            Practical search insights for business owners in Lucknow, Kanpur, Noida and across India. Learn how to rank higher on Google Maps and turn visibility into enquiries.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '540px', margin: '0 auto 24px', position: 'relative' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search guides (e.g. Google Maps, Cost, Clinic, Kanpur, Timeline)..."
              style={{
                width: '100%',
                padding: '14px 20px 14px 46px',
                borderRadius: '50px',
                background: 'var(--card)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                fontSize: '0.94rem',
                outline: 'none',
              }}
            />
            <span style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#FF6B00' }}>
              <i className="bi bi-search"></i>
            </span>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'var(--accent)' : 'var(--bg2)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text2)',
                  border: selectedCategory === cat ? '1px solid #FF6B00' : '1px solid rgba(255, 107, 0, 0.2)',
                  borderRadius: '30px',
                  padding: '6px 16px',
                  fontSize: '0.82rem',
                  fontWeight: selectedCategory === cat ? 800 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'capitalize',
                }}
              >
                {cat === 'all' ? 'All Articles (10)' : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* BLOG GRID */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '30px' }}>
            {currentBlogs.map((b) => (
              <TiltCard3D key={b.id} maxTilt={7} style={{ height: '100%' }}>
                <article
                  className="glass-panel"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img
                      src={b.image}
                      alt={b.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'var(--card)',
                        backdropFilter: 'blur(8px)',
                        color: '#FF6B00',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 107, 0, 0.3)',
                      }}
                    >
                      {b.category}
                    </span>
                  </div>

                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem', color: '#657599', marginBottom: '10px' }}>
                      <span>📅 {b.date}</span>
                      <span>⏱️ {b.readTime}</span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text)', lineHeight: 1.35, marginBottom: '10px' }}>
                      <Link to={`/blog-post?post=${b.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {b.title}
                      </Link>
                    </h2>

                    <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                      {b.excerpt}
                    </p>

                    <Link
                      to={`/blog-post?post=${b.slug}`}
                      style={{
                        color: '#FF6B00',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        marginTop: 'auto',
                      }}
                    >
                      <span>Read Full Guide</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </TiltCard3D>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
              {Array.from({ length: totalPages }).map((_, idx) => {
                const p = idx + 1;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => goToPage(p)}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      border: currentPage === p ? '1px solid #FF6B00' : '1px solid rgba(255, 107, 0, 0.25)',
                      background: currentPage === p ? '#FF6B00' : 'var(--bg2)',
                      color: currentPage === p ? '#FFFFFF' : 'var(--text)',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
