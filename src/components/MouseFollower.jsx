import React, { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .service-card, .blog-card, .modern-blog-card, .portfolio-card, .btn, .faq-item, .contact-card')) {
        follower.classList.add('hovering');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, .service-card, .blog-card, .modern-blog-card, .portfolio-card, .btn, .faq-item, .contact-card')) {
        follower.classList.remove('hovering');
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      if (follower) {
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animationFrameId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={followerRef} className="mouse-follower"></div>;
}

