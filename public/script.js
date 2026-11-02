// —— NAV SCROLL ——
const navbar = document.getElementById('navbar');
const btt = document.getElementById("btt");
const scrollPercent = document.getElementById("scrollPercent");

// Create Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percent = Math.round((scrollTop / docHeight) * 100);
    const degree = (percent / 100) * 360;

    if (scrollPercent) scrollPercent.innerText = percent + "%";
    if (scrollProgress) scrollProgress.style.width = percent + "%";

    if (btt) {
        btt.style.background = `conic-gradient(#f08770 ${degree}deg, rgba(255,255,255,0.08) ${degree}deg)`;
    }

    if (scrollTop > 300) {
        if (btt) btt.classList.add("visible");
    } else {
        if (btt) btt.classList.remove("visible");
    }
    
    if (navbar) {
        navbar.classList.toggle('scrolled', scrollTop > 50);
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// —— THEME TOGGLE ——
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-btn');
    if (btn) {
        btn.innerHTML = theme === 'dark' 
            ? '<i class="bi bi-brightness-high-fill"></i>' 
            : '<i class="bi bi-moon-stars-fill"></i>';
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
document.addEventListener('DOMContentLoaded', () => updateThemeIcon(savedTheme));

// —— MOBILE MENU ——
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('open');
}

// —— FAQ TOGGLE ——
function toggleFaq(el) {
    const wasOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) el.classList.add('open');
}

// —— SCROLL REVEAL ——
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animate'));
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
});

// —— COUNTER ANIMATION ——
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
            const target = parseInt(e.target.dataset.target);
            if (!isNaN(target)) animateCounter(e.target, target);
            counterObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
});

// —— 3D CARD TILT ——
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

// —— FORM SUBMIT ——
function submitForm(event) {
    if (event) event.preventDefault();
    const btn = document.querySelector('.contact-form .btn-primary');
    if (!btn) return;
    const originalText = btn.textContent;
    btn.textContent = '✅ Submitted! 24 hrs mein reply milega.';
    btn.style.background = '#00D68F';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
    }, 4000);
}

// —— SMOOTH ACTIVE NAV ——
const navSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
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
});

// —— MOUSE FOLLOWER ——
document.addEventListener('DOMContentLoaded', () => {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .service-card, .blog-card, .portfolio-card')) {
            follower.classList.add('hovering');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, .service-card, .blog-card, .portfolio-card')) {
            follower.classList.remove('hovering');
        }
    });
});

// —— MAIN LOADER ——
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const loaderName = document.getElementById('loaderName');
    const pctEl = document.getElementById('loaderPct');
    
    if (loader && loaderName && pctEl) {
        // Disable scrolling while loading
        document.body.style.overflow = 'hidden';

        // Split name into animated characters
        'Anirudh Kumar'.split('').forEach((ch, i) => {
            const s = document.createElement('span'); 
            s.className = 'loader-char';
            s.textContent = ch === ' ' ? '\u00A0' : ch; 
            s.style.animationDelay = (0.05 * i) + 's';
            loaderName.appendChild(s);
        });

        // Percentage counter
        let pct = 0;
        const pctInt = setInterval(() => {
            pct = Math.min(100, pct + Math.random() * 8 + 2); 
            pctEl.textContent = Math.round(pct) + '%';
            
            if (pct >= 100) { 
                clearInterval(pctInt); 
                setTimeout(() => {
                    loader.classList.add('done');
                    // Enable scrolling after loader is done
                    document.body.style.overflow = 'auto';
                }, 400); 
            }
        }, 60);
    }
});
