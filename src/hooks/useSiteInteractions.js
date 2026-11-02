import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useSiteInteractions(refreshKey = 0) {
  const location = useLocation();

  // Scroll to top or anchor on route change
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, refreshKey]);

  // Setup observers, counters, tilt, faq, etc.
  useEffect(() => {
    // 1. SCROLL REVEAL OBSERVER
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animate'));
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });

    // 2. COUNTER ANIMATION OBSERVER
    function animateCounter(el, target, duration = 1500) {
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          el.textContent = target;
          clearInterval(timer);
          return;
        }
        el.textContent = Math.floor(start);
      }, 16);
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.dataset.target, 10);
          if (!isNaN(target)) animateCounter(e.target, target);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-target]').forEach(el => {
      el.textContent = '0';
      counterObserver.observe(el);
    });

    // 3. 3D CARD TILT
    const cleanupFns = [];
    document.querySelectorAll('.service-card').forEach(card => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
      };
      const handleLeave = () => {
        card.style.transform = '';
      };
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);

      cleanupFns.push(() => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseleave', handleLeave);
      });
    });

    // 4. FAQ ACCORDION TOGGLE
    const handleFaqClick = (e) => {
      const faqItem = e.target.closest('.faq-item');
      if (!faqItem) return;
      const wasOpen = faqItem.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) faqItem.classList.add('open');
    };
    document.addEventListener('click', handleFaqClick);

    // 5. SMOOTH ACTIVE NAV
    const navSections = document.querySelectorAll('section[id]');
    const handleScrollNav = () => {
      let current = '';
      navSections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 150) current = s.getAttribute('id');
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.includes(current) && current !== '') {
          a.style.color = 'var(--accent)';
        } else {
          a.style.color = '';
        }
      });
    };
    window.addEventListener('scroll', handleScrollNav, { passive: true });

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      document.removeEventListener('click', handleFaqClick);
      window.removeEventListener('scroll', handleScrollNav);
      cleanupFns.forEach(fn => fn());
    };
  }, [location.pathname, refreshKey]);
}
