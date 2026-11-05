import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGlobe3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all globe elements for tilt and rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial globe orientation to highlight India/South Asia
    globeGroup.rotation.x = 0.35;
    globeGroup.rotation.y = -1.2;

    // 1. Core Sphere (Deep Black with Warm Orange/Amber depth)
    const sphereGeo = new THREE.SphereGeometry(75, 48, 48);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x07090e,
      emissive: 0x05060a,
      specular: 0xff6b00,
      shininess: 40,
      transparent: true,
      opacity: 0.9,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(coreSphere);

    // 2. Wireframe / Latitude-Longitude Grid (Warm Dark Amber)
    const wireGeo = new THREE.SphereGeometry(75.5, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x4a2408,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireSphere);

    // 3. Digital Grid Dots (Surface points: Vivid Orange, Amber Gold, Crisp White)
    const dotsCount = 1800;
    const dotPositions = new Float32Array(dotsCount * 3);
    const dotColors = new Float32Array(dotsCount * 3);

    const color1 = new THREE.Color(0xff6b00); // Vivid Orange
    const color2 = new THREE.Color(0xffb800); // Golden Amber
    const color3 = new THREE.Color(0xffffff); // Crisp White

    for (let i = 0; i < dotsCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;
      const radius = 76;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      // Color variation
      const rand = Math.random();
      const c = rand < 0.5 ? color1 : rand < 0.85 ? color2 : color3;
      dotColors[i * 3] = c.r;
      dotColors[i * 3 + 1] = c.g;
      dotColors[i * 3 + 2] = c.b;
    }

    const dotsGeo = new THREE.BufferGeometry();
    dotsGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
    dotsGeo.setAttribute('color', new THREE.BufferAttribute(dotColors, 3));

    const dotsMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
    });
    const dotsMesh = new THREE.Points(dotsGeo, dotsMat);
    globeGroup.add(dotsMesh);

    // 4. Coordinates to 3D Vector converter
    function latLongToVector3(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // Key Locations (Lucknow, Kanpur, Noida, All-India Coverage)
    const locations = [
      { name: 'Lucknow', lat: 26.8467, lon: 80.9462, color: 0xff6b00 },
      { name: 'Kanpur', lat: 26.4499, lon: 80.3319, color: 0xff8800 },
      { name: 'Noida', lat: 28.5355, lon: 77.391, color: 0xffb800 },
      { name: 'India Hub', lat: 21.0, lon: 78.0, color: 0xffffff },
    ];

    const beaconPings = [];

    locations.forEach((loc) => {
      const pos = latLongToVector3(loc.lat, loc.lon, 76.5);

      // Core Marker
      const pinGeo = new THREE.SphereGeometry(1.6, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: loc.color });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      globeGroup.add(pinMesh);

      // Pulsing Beacon Ring
      const ringGeo = new THREE.RingGeometry(1.8, 3.2, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: loc.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(ringMesh);

      beaconPings.push({ mesh: ringMesh, baseScale: 1 });
    });

    // 5. Orbiting Tech Rings
    const ring1Geo = new THREE.RingGeometry(88, 89.2, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const orbitRing1 = new THREE.Mesh(ring1Geo, ring1Mat);
    orbitRing1.rotation.x = Math.PI / 2.3;
    globeGroup.add(orbitRing1);

    const ring2Geo = new THREE.RingGeometry(98, 98.8, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xffb800,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const orbitRing2 = new THREE.Mesh(ring2Geo, ring2Mat);
    orbitRing2.rotation.x = Math.PI / 3;
    orbitRing2.rotation.y = Math.PI / 6;
    globeGroup.add(orbitRing2);

    // 6. Floating Ambient Particles (Cloud around Globe)
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const dist = 100 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      particlePositions[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = dist * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffa040,
      size: 1.5,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b00, 3.2, 400);
    pointLight.position.set(150, 100, 150);
    scene.add(pointLight);

    const amberLight = new THREE.PointLight(0xffb800, 2.5, 300);
    amberLight.position.set(-150, -80, 120);
    scene.add(amberLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.35;
    let targetRotationY = -1.2;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!isDragging) {
        mouseX = x * 0.4;
        mouseY = y * 0.4;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWindowMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    // Touch Support for Mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous slow rotation if not dragging
      if (!isDragging) {
        targetRotationY += 0.0018;
      }

      // Smooth damping interpolation
      globeGroup.rotation.y += (targetRotationY + mouseX - globeGroup.rotation.y) * 0.05;
      globeGroup.rotation.x += (targetRotationX - mouseY - globeGroup.rotation.x) * 0.05;

      // Orbit rings spin
      orbitRing1.rotation.z = elapsedTime * 0.15;
      orbitRing2.rotation.z = -elapsedTime * 0.12;

      // Pulse beacon rings
      beaconPings.forEach((ping, idx) => {
        const scale = 1 + Math.sin(elapsedTime * 3 + idx) * 0.45;
        ping.mesh.scale.set(scale, scale, 1);
        ping.mesh.material.opacity = 0.9 - (scale - 1) * 0.8;
      });

      // Ambient particle slow oscillation
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      dotsGeo.dispose();
      dotsMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      className="hero-globe-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        height: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Floating 3D Holographic Analytics Cards */}
      {/* Card 1: Keyword Rankings */}
      <div
        className="hero-glass-card hero-glass-card-1"
        style={{
          position: 'absolute',
          top: '12%',
          left: '-2%',
          background: 'var(--card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 107, 0, 0.35)',
          borderRadius: '16px',
          padding: '14px 18px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35), 0 0 20px rgba(255, 107, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'floatCard1 5s ease-in-out infinite',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.25), rgba(255, 184, 0, 0.35))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF8800',
            fontSize: '1.2rem',
          }}
        >
          <i className="bi bi-graph-up-arrow"></i>
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
            Organic Search Visibility
          </div>
          <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Target Keywords <span style={{ fontSize: '0.72rem', color: '#FF8800', fontWeight: 700 }}>Google Search Console</span>
          </div>
        </div>
      </div>

      {/* Card 2: Real Enquiries & Leads */}
      <div
        className="hero-glass-card hero-glass-card-2"
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '0%',
          background: 'var(--card)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 184, 0, 0.35)',
          borderRadius: '16px',
          padding: '14px 18px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35), 0 0 20px rgba(255, 184, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'floatCard2 6s ease-in-out infinite',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.25), rgba(255, 107, 0, 0.3))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFB800',
            fontSize: '1.2rem',
          }}
        >
          <i className="bi bi-lightning-charge-fill"></i>
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
            Conversion Attribution
          </div>
          <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Direct Inbound Enquiries <span style={{ fontSize: '0.75rem', color: '#FF8800', fontWeight: 700 }}>GA4 Active</span>
          </div>
        </div>
      </div>

      {/* Card 3: Location Coverage Badge */}
      <div
        className="hero-glass-card hero-glass-card-3"
        style={{
          position: 'absolute',
          top: '68%',
          left: '-4%',
          background: 'var(--card)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255, 107, 0, 0.35)',
          borderRadius: '30px',
          padding: '8px 16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.78rem',
          color: 'var(--text)',
          fontWeight: 600,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B00', boxShadow: '0 0 10px #FF6B00' }}></span>
        <span>Lucknow • Kanpur • Noida • Remote Pan-India</span>
      </div>
    </div>
  );
}
