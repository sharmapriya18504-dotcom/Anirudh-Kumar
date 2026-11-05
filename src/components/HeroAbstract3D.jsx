import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * HeroAbstract3D
 * Premium Interactive 3D Visual Composition (Strictly ZERO Globe)
 * Features:
 * - Real Anirudh Kumar portrait in an obsidian cinematic studio portal with orange rim lighting
 * - Three.js WebGL canvas with metallic orange gyroscopic dimensional rings, floating crystals & geometric polyhedra
 * - Interactive 3D particle constellation responding to mouse/touch cursor movement
 * - Dynamic mouse-tracking specular point light that illuminates facets interactively
 * - Layered glassmorphic SEO analytics cards with live sparkline & ranking badges
 */
export default function HeroAbstract3D() {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 220);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group for Mouse Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Dynamic Studio Lights
    const ambientLight = new THREE.AmbientLight(0x180d04, 2.0);
    scene.add(ambientLight);

    // Interactive Point Light (moves with mouse)
    const cursorLight = new THREE.PointLight(0xff7700, 3.5, 400);
    cursorLight.position.set(40, 40, 100);
    scene.add(cursorLight);

    // Ambient Warm Accent Light
    const amberLight = new THREE.PointLight(0xffaa00, 2.2, 350);
    amberLight.position.set(-60, -50, 70);
    scene.add(amberLight);

    // Cool Rim Light
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 80, -40);
    scene.add(rimLight);

    // 2. Gyroscopic Dimensional Rings (Orange Metallic Toruses)
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.92,
      roughness: 0.14,
      emissive: 0x4a1800,
      emissiveIntensity: 0.35,
    });
    const ringGeo1 = new THREE.TorusGeometry(88, 1.4, 20, 120);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 4;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xffa000,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x5a2500,
      emissiveIntensity: 0.28,
    });
    const ringGeo2 = new THREE.TorusGeometry(108, 0.9, 20, 140);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.z = Math.PI / 5;
    rootGroup.add(ring2);

    // Faint outer orbital ring
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xff8800,
      transparent: true,
      opacity: 0.22,
      wireframe: true,
    });
    const ringGeo3 = new THREE.TorusGeometry(125, 0.5, 8, 80);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI / 2.3;
    rootGroup.add(ring3);

    // 3. Floating Metallic Polyhedra & Geometric Crystals
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.88,
      roughness: 0.16,
      emissive: 0x3d1400,
      emissiveIntensity: 0.4,
    });

    const amberCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      metalness: 0.92,
      roughness: 0.12,
      emissive: 0x471f00,
      emissiveIntensity: 0.35,
    });

    const darkMetallicMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a24,
      metalness: 0.9,
      roughness: 0.25,
      emissive: 0x080810,
    });

    const crystals = [
      // Top Right
      { mesh: new THREE.Mesh(new THREE.IcosahedronGeometry(13, 0), crystalMat), x: 92, y: 78, z: 25, rx: 0.01, ry: 0.015, speed: 1.2 },
      // Top Left
      { mesh: new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), amberCrystalMat), x: -96, y: 84, z: 15, rx: -0.012, ry: 0.008, speed: 0.9 },
      // Mid Left
      { mesh: new THREE.Mesh(new THREE.TetrahedronGeometry(11, 0), crystalMat), x: -115, y: -10, z: -10, rx: 0.015, ry: -0.01, speed: 1.4 },
      // Bottom Right
      { mesh: new THREE.Mesh(new THREE.IcosahedronGeometry(11, 0), amberCrystalMat), x: 98, y: -80, z: 30, rx: -0.009, ry: 0.013, speed: 1.1 },
      // Bottom Left
      { mesh: new THREE.Mesh(new THREE.OctahedronGeometry(9, 0), darkMetallicMat), x: -85, y: -88, z: 10, rx: 0.01, ry: 0.01, speed: 1.3 },
      // Distant Floating Prisms
      { mesh: new THREE.Mesh(new THREE.DodecahedronGeometry(7, 0), crystalMat), x: 70, y: -105, z: -35, rx: 0.014, ry: 0.007, speed: 0.8 },
      { mesh: new THREE.Mesh(new THREE.TetrahedronGeometry(8, 0), amberCrystalMat), x: -75, y: 110, z: -25, rx: -0.01, ry: -0.012, speed: 1.0 },
    ];

    crystals.forEach((c) => {
      c.mesh.position.set(c.x, c.y, c.z);
      rootGroup.add(c.mesh);
    });

    // 4. Floating 3D SEO Particle Constellation & Neural Rays
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 60 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      particleScales[i] = Math.random() * 0.8 + 0.4;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xff8800,
      size: 2.2,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // 5. Mouse Parallax Variables
    let targetRotX = 0;
    let targetRotY = 0;
    let targetLightX = 40;
    let targetLightY = 40;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = x * 0.35;
      targetRotX = -y * 0.25;

      targetLightX = x * 100;
      targetLightY = y * 100 + 40;

      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handlePointerMove);

    // 6. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gyroscopic Ring Rotations
      ring1.rotation.x += 0.0035;
      ring1.rotation.y += 0.005;
      ring2.rotation.y -= 0.004;
      ring2.rotation.z += 0.003;
      ring3.rotation.z += 0.002;

      // Crystals floating & tumbling
      crystals.forEach((c, idx) => {
        c.mesh.rotation.x += c.rx;
        c.mesh.rotation.y += c.ry;
        // Float harmonic
        c.mesh.position.y = c.y + Math.sin(elapsedTime * c.speed + idx) * 7;
        c.mesh.position.x = c.x + Math.cos(elapsedTime * (c.speed * 0.7) + idx) * 3;
      });

      // Particle Drift
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.z = elapsedTime * 0.015;

      // Smooth Camera & Lighting Parallax Lerp
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.06;

      cursorLight.position.x += (targetLightX - cursorLight.position.x) * 0.08;
      cursorLight.position.y += (targetLightY - cursorLight.position.y) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 560;
      const newH = container.clientHeight || 560;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-abstract-container">
      {/* Three.js 3D WebGL Canvas */}
      <div ref={mountRef} className="hero-three-mount" />

      {/* Central Portrait of Anirudh Kumar (Enhanced Studio Portal) */}
      <div className="hero-portrait-portal-wrap">
        <div
          className="hero-portrait-portal"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Subtle Ambient Backlight Halo */}
          <div className="portal-ambient-halo" />

          {/* Genuine Profile Portrait of Anirudh Kumar */}
          <img
            src="/Untitled design (12).png"
            alt="Anirudh Kumar - SEO Expert & Digital Marketer"
            className="hero-portrait-cutout"
          />

          {/* Portrait Base Gradient Fade */}
          <div className="portal-bottom-fade" />

          {/* Verified Nameplate Pill */}
          <div className="portal-nameplate">
            <span className="nameplate-dot" />
            <span className="nameplate-text">Anirudh Kumar • Lucknow | Pan-India</span>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphic SEO Analytics Cards */}
      {/* 1. Top Rank Card */}
      <div className="hero-floating-card card-rank">
        <div className="card-rank-icon">
          <i className="bi bi-trophy-fill" style={{ color: '#FF8800' }}></i>
        </div>
        <div>
          <div className="glass-card-tag">▲ Top Position #1</div>
          <div className="glass-card-title">"SEO Expert Lucknow"</div>
          <div className="glass-card-meta">Google Page #1 Verified</div>
        </div>
      </div>

      {/* 2. Traffic Spike Sparkline Card */}
      <div className="hero-floating-card card-traffic">
        <div className="card-traffic-header">
          <div className="traffic-val">+340%</div>
          <div className="traffic-lbl">Organic Search Spike</div>
        </div>
        <div className="sparkline-wrapper">
          <svg className="sparkline-svg" viewBox="0 0 110 32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,26 Q 22,23 38,18 T 72,12 T 94,6 T 110,2"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 0,26 Q 22,23 38,18 T 72,12 T 94,6 T 110,2 L 110,32 L 0,32 Z"
              fill="url(#sparklineGrad)"
            />
            <circle cx="110" cy="2" r="3.5" fill="#FFA000" />
          </svg>
        </div>
        <div className="card-verified-note">
          <i className="bi bi-patch-check-fill" style={{ color: '#FF8800' }}></i>
          <span>Google Search Console Data</span>
        </div>
      </div>

      {/* 3. Conversion / Leads Card */}
      <div className="hero-floating-card card-leads">
        <div className="card-leads-pulse-row">
          <span className="live-pulse-dot" />
          <span className="card-leads-badge">Live Client Growth</span>
        </div>
        <div className="leads-metric-row">
          <span className="leads-val">3.8x</span>
          <span className="leads-context">Patient Inquiries</span>
        </div>
        <div className="leads-sub-detail">
          <span>8 Calls ➔ <strong>31 Calls/mo</strong></span>
        </div>
      </div>
    </div>
  );
}
