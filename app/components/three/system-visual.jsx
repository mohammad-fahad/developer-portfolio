"use client";

import { useEffect, useRef, useState } from "react";

function StaticFallback() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="system-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="url(#system-glow)" />
      <g stroke="#a78bfa" strokeOpacity="0.22" strokeWidth="1">
        <circle cx="200" cy="200" r="72" />
        <circle cx="200" cy="200" r="122" />
        <path d="M200 200L120 128M200 200L286 146M200 200L304 250M200 200L238 306M200 200L128 284M200 200L96 212" />
      </g>
      <g fill="#c4b5fd">
        <circle cx="120" cy="128" r="4" />
        <circle cx="286" cy="146" r="4" />
        <circle cx="304" cy="250" r="4" />
        <circle cx="238" cy="306" r="4" />
        <circle cx="128" cy="284" r="4" />
        <circle cx="96" cy="212" r="4" />
      </g>
      <circle cx="200" cy="200" r="16" fill="#8b5cf6" fillOpacity="0.35" stroke="#c4b5fd" strokeOpacity="0.6" />
    </svg>
  );
}

async function buildScene(THREE, host) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.pointerEvents = "none";
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 9.5);

  const root = new THREE.Group();
  scene.add(root);

  const geometries = [];
  const materials = [];
  let composer = null;

  try {
    const [{ EffectComposer }, { RenderPass }, { UnrealBloomPass }] = await Promise.all([
      import("three/examples/jsm/postprocessing/EffectComposer.js"),
      import("three/examples/jsm/postprocessing/RenderPass.js"),
      import("three/examples/jsm/postprocessing/UnrealBloomPass.js"),
    ]);
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.45, 0.65, 0.72));
  } catch {
    composer = null;
  }

  const coreGeometry = new THREE.IcosahedronGeometry(0.8, 1);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0x9f7aea,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  });
  geometries.push(coreGeometry);
  materials.push(coreMaterial);
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  root.add(core);

  const innerGeometry = new THREE.SphereGeometry(0.42, 20, 20);
  const innerMaterial = new THREE.MeshBasicMaterial({
    color: 0x6d28d9,
    transparent: true,
    opacity: 0.16,
  });
  geometries.push(innerGeometry);
  materials.push(innerMaterial);
  root.add(new THREE.Mesh(innerGeometry, innerMaterial));

  const nodeGeometry = new THREE.SphereGeometry(0.075, 12, 12);
  const nodeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0xc4b5fd }),
    new THREE.MeshBasicMaterial({ color: 0x67e8f9 }),
  ];
  materials.push(...nodeMaterials);
  geometries.push(nodeGeometry);

  const rings = [
    { radius: 2.0, count: 4, z: 0.5, offset: 0.2 },
    { radius: 3.0, count: 5, z: -0.2, offset: 0.65 },
    { radius: 3.9, count: 6, z: -0.9, offset: 0.1 },
  ];

  const nodes = [];
  rings.forEach((ring, ringIndex) => {
    for (let i = 0; i < ring.count; i += 1) {
      const angle = (i / ring.count) * Math.PI * 2 + ring.offset;
      const position = new THREE.Vector3(
        Math.cos(angle) * ring.radius,
        Math.sin(angle) * ring.radius * 0.72,
        ring.z + Math.sin(angle * 2) * 0.35
      );
      const node = new THREE.Mesh(nodeGeometry, nodeMaterials[(i + ringIndex) % 2]);
      node.position.copy(position);
      root.add(node);
      nodes.push({ mesh: node, phase: i * 0.9 + ringIndex });
    }
  });

  const linePositions = [];
  const lineColors = [];
  const violet = new THREE.Color(0x8b5cf6);
  const cyan = new THREE.Color(0x22d3ee);

  const pushLine = (a, b, colorA, colorB) => {
    linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    lineColors.push(colorA.r, colorA.g, colorA.b, colorB.r, colorB.g, colorB.b);
  };

  nodes.forEach(({ mesh }, index) => {
    pushLine(new THREE.Vector3(0, 0, 0), mesh.position, violet, cyan);
    const next = nodes[(index + 1) % nodes.length].mesh.position;
    if (mesh.position.distanceTo(next) < 2.7) {
      pushLine(mesh.position, next, cyan, violet);
    }
  });

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  materials.push(lineMaterial);
  root.add(new THREE.LineSegments(lineGeometry, lineMaterial));

  const ringGeometries = [];
  rings.forEach((ring) => {
    const points = [];
    for (let i = 0; i <= 64; i += 1) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(
        Math.cos(angle) * ring.radius,
        Math.sin(angle) * ring.radius * 0.72,
        ring.z
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.09,
      depthWrite: false,
    });
    ringGeometries.push(geometry);
    materials.push(material);
    root.add(new THREE.Line(geometry, material));
  });

  const particlePositions = [];
  for (let i = 0; i < 180; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 2.1 + Math.random() * 3.4;
    particlePositions.push(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.72,
      (Math.random() - 0.5) * 3.4
    );
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xa78bfa,
    size: 0.028,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  geometries.push(particleGeometry, lineGeometry, ...ringGeometries);
  materials.push(particleMaterial);
  root.add(new THREE.Points(particleGeometry, particleMaterial));

  const pointer = { x: 0, y: 0 };
  const eased = { x: 0, y: 0 };
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = motionQuery.matches;
  let visible = true;
  let frame = 0;
  let disposed = false;
  let scrollY = window.scrollY;
  const clock = new THREE.Clock();

  const draw = () => {
    if (composer) composer.render();
    else renderer.render(scene, camera);
  };

  const resize = () => {
    const { clientWidth, clientHeight } = host;
    if (!clientWidth || !clientHeight) return;
    const dpr = Math.min(window.devicePixelRatio || 1, clientWidth < 640 ? 1.5 : 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(clientWidth, clientHeight, false);
    if (composer) {
      composer.setPixelRatio?.(dpr);
      composer.setSize(clientWidth, clientHeight);
    }
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    draw();
  };

  const renderFrame = () => {
    const elapsed = clock.getElapsedTime();
    root.rotation.y += reducedMotion ? 0 : 0.0016;
    eased.x += (pointer.y * 0.18 - eased.x) * 0.04;
    eased.y += (pointer.x * 0.22 - eased.y) * 0.04;
    const scrollTilt = Math.min(scrollY * 0.00008, 0.35);
    root.rotation.x = eased.x + scrollTilt + (reducedMotion ? 0 : Math.sin(elapsed * 0.25) * 0.05);
    root.rotation.z = eased.y;
    core.rotation.x = elapsed * 0.12;
    core.rotation.y = elapsed * 0.16;
    if (!reducedMotion) {
      nodes.forEach(({ mesh, phase }) => {
        mesh.scale.setScalar(1 + Math.sin(elapsed * 1.1 + phase) * 0.16);
      });
      root.children[root.children.length - 1].rotation.z = elapsed * 0.01;
    }
    draw();
  };

  const loop = () => {
    if (disposed) return;
    if (visible && !document.hidden && !reducedMotion) renderFrame();
    frame = window.requestAnimationFrame(loop);
  };

  const onPointerMove = (event) => {
    const bounds = host.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
  };
  const onPointerLeave = () => { pointer.x = 0; pointer.y = 0; };
  const onScroll = () => { scrollY = window.scrollY; };
  const onMotionChange = (event) => {
    reducedMotion = event.matches;
    if (reducedMotion) draw();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) draw();
  }, { threshold: 0.05 });
  intersectionObserver.observe(host);

  motionQuery.addEventListener("change", onMotionChange);
  host.addEventListener("pointermove", onPointerMove);
  host.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("visibilitychange", resize);

  resize();
  if (reducedMotion) draw();
  frame = window.requestAnimationFrame(loop);

  return () => {
    disposed = true;
    window.cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    motionQuery.removeEventListener("change", onMotionChange);
    host.removeEventListener("pointermove", onPointerMove);
    host.removeEventListener("pointerleave", onPointerLeave);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", resize);
    composer?.dispose?.();
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
  };
}

export default function SystemVisual() {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let disposeScene = () => {};

    (async () => {
      let THREE;
      try {
        THREE = await import("three");
      } catch {
        return;
      }
      if (cancelled || !hostRef.current) return;
      try {
        disposeScene = await buildScene(THREE, hostRef.current);
        setReady(true);
      } catch (error) {
        console.warn("3D visual unavailable:", error?.message || "unknown error");
      }
    })();

    return () => {
      cancelled = true;
      disposeScene();
    };
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}>
        <StaticFallback />
      </div>
    </div>
  );
}
