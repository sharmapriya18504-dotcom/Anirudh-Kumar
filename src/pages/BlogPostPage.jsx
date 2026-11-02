import React, { useMemo } from 'react';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import { BLOGS } from '../data/blogs.js';

export default function BlogPostPage() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('post') || BLOGS[0].slug;

  const post = useMemo(() => {
    return BLOGS.find((b) => b.slug === slug) || BLOGS[0];
  }, [slug]);

  const related = useMemo(() => {
    if (!post) return [];
    return BLOGS.filter((b) => b.category === post.category && b.slug !== post.slug).slice(0, 3);
  }, [post]);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    if (!post || !post.content) return [];
    const matches = [...post.content.matchAll(/<h([23])>([\s\S]*?)<\/h\1>/gi)];
    return matches.map((m, idx) => ({
      id: `heading-${idx}`,
      text: m[2].replace(/<[^>]+>/g, '').trim(),
      level: m[1]
    }));
  }, [post]);

  // Insert IDs into content headings so TOC links work
  const contentWithIds = useMemo(() => {
    if (!post || !post.content) return '';
    let idx = 0;
    return post.content.replace(/<h([23])>([\s\S]*?)<\/h\1>/gi, (match, level, text) => {
      const id = `heading-${idx++}`;
      return `<h${level} id="${id}">${text}</h${level}>`;
    });
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article id="full-post" style={{ paddingTop: '80px' }}>
      <div className="post-hero">
        <div className="container">
          <div className="post-header">
            <div className="post-meta-top" id="post-meta-cat-date">
              <span>{post.category}</span> <span>•</span> <span>{post.date}</span>
            </div>
            <h1 className="post-title" id="post-title">
              {post.title}
            </h1>
            <div className="post-author-box">
              <img
                src="/Untitled design (12).png"
                alt="Anirudh Kumar"
                className="author-img"
                style={{ objectFit: 'cover', border: '2px solid var(--accent)' }}
              />
              <div className="author-info">
                <div style={{ fontWeight: 700, color: 'var(--text)' }} id="post-author">
                  {post.author || 'Anirudh Kumar'}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text3)' }} id="post-read-time">
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
          <div className="post-featured-img" id="post-img" style={{ marginTop: '40px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
              }}
            />
          </div>
        </div>
      </div>

      <div className="container post-container" style={{ marginTop: '50px' }}>
        <aside className="post-sidebar">
          <div className="toc-box">
            <div className="toc-title">Table of Contents</div>
            <ul className="toc-list" id="post-toc">
              {headings.length === 0 ? (
                <li><span>General Overview</span></li>
              ) : (
                headings.map((h) => (
                  <li key={h.id} style={{ marginLeft: h.level === '3' ? '15px' : '0' }}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </aside>

        <main>
          <div
            className="post-content"
            id="post-content"
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          ></div>

          <div className="post-share">
            <div style={{ fontWeight: 700 }}>Share this article:</div>
            <div className="share-btns">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                title="Facebook"
              >
                FB
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                title="Twitter"
              >
                TW
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                title="LinkedIn"
              >
                LI
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
                title="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          <div className="cta-box">
            <h2>Grow Your Business Faster</h2>
            <p style={{ marginBottom: '30px' }}>
              Get a personalized roadmap to dominate your local market today.
            </p>
            <Link
              className="btn btn-outline"
              to="/contact"
              style={{ background: '#fff', color: 'var(--accent)', border: 'none' }}
            >
              🚀 Claim Your Free SEO Audit
            </Link>
          </div>
        </main>
      </div>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2 className="section-heading">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <div className="blog-grid-dynamic" id="related-grid" style={{ marginTop: '40px' }}>
              {related.map((item) => (
                <article key={item.id || item.slug} className="modern-blog-card">
                  <div className="card-img-wrap" style={{ height: '150px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  </div>
                  <div className="card-body" style={{ padding: '15px' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{item.title}</h4>
                    <Link
                      to={`/blog-post?post=${item.slug}`}
                      className="read-more-link"
                      style={{ fontSize: '0.8rem' }}
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
