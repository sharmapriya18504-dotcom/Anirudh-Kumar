import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * HeroAbstract3D
 * Premium Editorial 3D Visual Composition for Anirudh Kumar
 * - Genuine Anirudh Kumar portrait in an obsidian cinematic studio portal with orange rim lighting
 * - Three.js WebGL canvas rendering metallic gyroscopic dimensional rings & ambient stardust particles
 * - Interactive mouse-tracking specular point light that illuminates facets interactively
 * - Clean, non-intrusive floating verified proof badges framing the portrait
 */
export default function HeroAbstract3D() {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 540;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 220);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0x180d04, 2.2);
    scene.add(ambientLight);

    const cursorLight = new THREE.PointLight(0xff7700, 3.2, 380);
    cursorLight.position.set(40, 40, 100);
    scene.add(cursorLight);

    const amberLight = new THREE.PointLight(0xffaa00, 2.0, 320);
    amberLight.position.set(-50, -40, 70);
    scene.add(amberLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.7);
    rimLight.position.set(0, 80, -40);
    scene.add(rimLight);

    // Gyroscopic Dimensional Rings (Orange Metallic Toruses)
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.94,
      roughness: 0.12,
      emissive: 0x4a1800,
      emissiveIntensity: 0.3,
    });
    const ringGeo1 = new THREE.TorusGeometry(88, 1.2, 16, 120);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 4;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xffa000,
      metalness: 0.96,
      roughness: 0.1,
      emissive: 0x5a2500,
      emissiveIntensity: 0.25,
    });
    const ringGeo2 = new THREE.TorusGeometry(108, 0.8, 16, 140);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.z = Math.PI / 5;
    rootGroup.add(ring2);

    // Floating Metallic Crystals
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x3d1400,
      emissiveIntensity: 0.35,
    });

    const amberCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      metalness: 0.92,
      roughness: 0.12,
      emissive: 0x471f00,
      emissiveIntensity: 0.3,
    });

    const crystals = [
      { mesh: new THREE.Mesh(new THREE.IcosahedronGeometry(12, 0), crystalMat), x: 96, y: 76, z: 20, rx: 0.008, ry: 0.012, speed: 1.1 },
      { mesh: new THREE.Mesh(new THREE.OctahedronGeometry(9, 0), amberCrystalMat), x: -94, y: 82, z: 15, rx: -0.01, ry: 0.007, speed: 0.9 },
      { mesh: new THREE.Mesh(new THREE.TetrahedronGeometry(10, 0), crystalMat), x: -112, y: -15, z: -10, rx: 0.012, ry: -0.008, speed: 1.3 },
      { mesh: new THREE.Mesh(new THREE.IcosahedronGeometry(10, 0), amberCrystalMat), x: 94, y: -78, z: 25, rx: -0.008, ry: 0.01, speed: 1.0 },
      { mesh: new THREE.Mesh(new THREE.DodecahedronGeometry(7, 0), crystalMat), x: 68, y: -100, z: -30, rx: 0.012, ry: 0.006, speed: 0.8 },
    ];

    crystals.forEach((c) => {
      c.mesh.position.set(c.x, c.y, c.z);
      rootGroup.add(c.mesh);
    });

    // 3D Stardust Particles
    const particleCount = 160;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 65 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff8800,
      size: 2.0,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let targetLightX = 40;
    let targetLightY = 40;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = x * 0.28;
      targetRotX = -y * 0.2;
      targetLightX = x * 90;
      targetLightY = y * 90 + 40;

      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handlePointerMove);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      ring1.rotation.x += 0.0025;
      ring1.rotation.y += 0.0035;
      ring2.rotation.y -= 0.003;
      ring2.rotation.z += 0.0025;

      crystals.forEach((c, idx) => {
        c.mesh.rotation.x += c.rx;
        c.mesh.rotation.y += c.ry;
        c.mesh.position.y = c.y + Math.sin(elapsedTime * c.speed + idx) * 6;
      });

      particles.rotation.y = elapsedTime * 0.025;

      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      cursorLight.position.x += (targetLightX - cursorLight.position.x) * 0.07;
      cursorLight.position.y += (targetLightY - cursorLight.position.y) * 0.07;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 540;
      const newH = container.clientHeight || 540;
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

      {/* Central Portrait of Anirudh Kumar (Editorial Obsidian Frame) */}
      <div className="hero-portrait-portal-wrap">
        <div
          className="hero-portrait-portal"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <div className="portal-ambient-halo" />

          <img
            src="/Untitled design (12).png"
            alt="Anirudh Kumar - Senior SEO Expert & Digital Marketer"
            className="hero-portrait-cutout"
          />

          <div className="portal-bottom-fade" />

          <div className="portal-nameplate">
            <span className="nameplate-dot" />
            <span className="nameplate-text">Anirudh Kumar • Lucknow | Pan-India</span>
          </div>
        </div>
      </div>

      {/* Floating Proof Badges (Framing the portrait with high elegance) */}
      {/* 1. Top Right: Google Rank Badge */}
      <div className="hero-floating-card card-rank-minimal">
        <div className="hero-card-icon-pill">
          <i className="bi bi-patch-check-fill" style={{ color: '#FF6B00' }}></i>
        </div>
        <div>
          <div className="hero-card-title">Google Page #1</div>
          <div className="hero-card-sub">High-Intent Buyer Keywords</div>
        </div>
      </div>

      {/* 2. Bottom Left: Growth Metric Badge */}
      <div className="hero-floating-card card-growth-minimal">
        <div className="hero-card-icon-pill">
          <i className="bi bi-graph-up-arrow" style={{ color: '#FF6B00' }}></i>
        </div>
        <div>
          <div className="hero-card-title">+340% Traffic Spike</div>
          <div className="hero-card-sub">GSC Verified Performance</div>
        </div>
      </div>
    </div>
  );
}
