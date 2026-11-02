import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs.js';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const categories = ['all', 'SEO', 'Marketing', 'Local SEO', 'Meta Ads'];

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
    const listing = document.getElementById('blog-listing');
    if (listing) {
      window.scrollTo({ top: listing.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-page-wrap">
      {/* BLOG HERO */}
      <header className="blog-hero">
        <div className="container">
          <span className="tag">Digital Marketing Insights</span>
          <h1 className="section-heading mt-4">
            Insights &amp; <span className="gradient-text">Growth Stories</span>
          </h1>
          <p className="section-sub mx-auto">
            Actionable guides, local case studies, and modern marketing trends for businesses in Lucknow &amp; Kanpur.
          </p>
        </div>
      </header>

      {/* BLOG LISTING */}
      <section className="page-section" id="blog-listing">
        <div className="container">
          <div className="blog-controls">
            <div className="search-bar">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                aria-label="Search articles"
              />
            </div>
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategory(cat)}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid-dynamic" id="blogGrid">
            {currentBlogs.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '100px 0' }}>
                <h3>No articles found matching your criteria.</h3>
              </div>
            ) : (
              currentBlogs.map((blog) => (
                <article key={blog.id || blog.slug} className="modern-blog-card">
                  <div className="card-img-wrap">
                    <span className="card-category">{blog.category}</span>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>📅 {blog.date}</span>
                      <span>⏱️ {blog.readTime}</span>
                    </div>
                    <h3 className="card-title">{blog.title}</h3>
                    <p className="card-excerpt">{blog.excerpt}</p>
                    <div className="card-footer">
                      <Link to={`/blog-post?post=${blog.slug}`} className="read-more-link">
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination" id="blogPagination">
              {currentPage > 1 && (
                <button className="page-btn" onClick={() => goToPage(currentPage - 1)}>
                  ← Prev
                </button>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <div
                  key={num}
                  className={`page-num ${num === currentPage ? 'active' : ''}`}
                  onClick={() => goToPage(num)}
                >
                  {num}
                </div>
              ))}
              {currentPage < totalPages && (
                <button className="page-btn" onClick={() => goToPage(currentPage + 1)}>
                  Next →
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
