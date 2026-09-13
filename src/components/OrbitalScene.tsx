"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function OrbitalScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      element.dataset.fallback = "true";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.4, 7.5);
    const system = new THREE.Group();
    system.rotation.set(0.38, 0, -0.2);
    scene.add(system);
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const geometry = new THREE.IcosahedronGeometry(1.28, 3);
    geometries.push(geometry);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: "#699aa9",
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    materials.push(globeMaterial);
    const globe = new THREE.Mesh(geometry, globeMaterial);
    system.add(globe);
    const coreGeometry = new THREE.SphereGeometry(1.25, 40, 24);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: "#0b1921",
      transparent: true,
      opacity: 0.9,
    });
    geometries.push(coreGeometry);
    materials.push(coreMaterial);
    system.add(new THREE.Mesh(coreGeometry, coreMaterial));
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const radius = 1.62 + i * 0.3;
      const points = Array.from({ length: 161 }, (_, j) => {
        const a = (j / 160) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius);
      });
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const orbitMaterial = new THREE.LineBasicMaterial({
        color: i % 2 ? "#83bed0" : "#d7bc8a",
        transparent: true,
        opacity: i === 0 ? 0.65 : 0.3,
      });
      geometries.push(orbitGeometry);
      materials.push(orbitMaterial);
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
      orbit.rotation.set(i * 0.32, 0, 0.65 + i * 0.5);
      system.add(orbit);
      const smallGeometry = new THREE.SphereGeometry(
        i === 0 ? 0.075 : 0.04,
        12,
        8,
      );
      const smallMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 ? "#bceafa" : "#ffe4b3",
      });
      geometries.push(smallGeometry);
      materials.push(smallMaterial);
      const satellite = new THREE.Mesh(smallGeometry, smallMaterial);
      satellite.position.copy(points[35 + i * 20]);
      orbit.add(satellite);
      satellites.push(satellite);
    }
    let seed = 127;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const starPositions = new Float32Array(650 * 3);
    for (let i = 0; i < starPositions.length; i++)
      starPositions[i] = (random() - 0.5) * 18;
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3),
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: "#d4e5ee",
      size: 0.018,
      transparent: true,
      opacity: 0.65,
    });
    geometries.push(starsGeometry);
    materials.push(starsMaterial);
    scene.add(new THREE.Points(starsGeometry, starsMaterial));
    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    let visible = true;
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersection.observe(element);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = 0;
    const animate = (time: number) => {
      frame = requestAnimationFrame(animate);
      if (!visible || document.hidden || time - last < 32) return;
      last = time;
      if (!reduced.matches) {
        globe.rotation.y = time * 0.00004;
        system.rotation.y = Math.sin(time * 0.00008) * 0.14;
      }
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      geometries.forEach((item) => item.dispose());
      materials.forEach((item) => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="orbital-scene" ref={host} aria-hidden="true">
      <div className="orbital-fallback" />
    </div>
  );
}
