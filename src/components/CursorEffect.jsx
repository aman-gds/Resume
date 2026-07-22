import React, { useEffect, useRef, useState, useCallback } from 'react';

// Snippets that float up from the cursor
const CODE_SNIPPETS = [
  '<div>', '</div>', '<section>', '</p>', '<header>',
  '{ }', '.class {}', '#id {}', 'WP', '<?php',
  '@media', 'flex', 'grid', 'var(--x)', 'function()',
  '</>',  'CSS', 'HTML', '</>', 'display:',
  'position:', 'z-index:', 'width:', 'color:', 'margin:',
  'WordPress', 'Elementor', 'WooCommerce', 'return', 'const',
];

let spawnCounter = 0;

export default function CursorEffect() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const mouse    = useRef({ x: -200, y: -200 });
  const ring     = useRef({ x: -200, y: -200 });
  const rafId    = useRef(null);
  const lastSpawn = useRef(0);

  const [particles, setParticles] = useState([]);

  // ── Animate ring with smooth lag ──────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x - 5}px, ${mouse.current.y - 5}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x - 22}px, ${ring.current.y - 22}px)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // ── Track mouse + spawn particles ─────────────────────────────────────────
  const handleMouseMove = useCallback((e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    const now = Date.now();
    if (now - lastSpawn.current < 120) return; // throttle: 1 particle per 120ms
    lastSpawn.current = now;

    const id = spawnCounter++;
    const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    const offsetX = (Math.random() - 0.5) * 60;
    const angle   = -60 + Math.random() * 120; // degrees drift

    setParticles(prev => [
      ...prev,
      { id, x: e.clientX, y: e.clientY, snippet, offsetX, angle }
    ]);

    // auto-remove after animation ends
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 1100);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // ── Hover effects: scale ring on clickable elements ───────────────────────
  useEffect(() => {
    const grow = () => ringRef.current?.classList.add('cursor-hover');
    const shrink = () => ringRef.current?.classList.remove('cursor-hover');

    const targets = document.querySelectorAll(
      'a, button, .nav-link, .portfolio-card, .service-card, .skill-card, .contact-item, .social-btn'
    );
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => {
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      {/* Core cursor elements */}
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />

      {/* Floating code particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="cursor-particle"
          style={{
            left: p.x,
            top:  p.y,
            '--drift': `${p.offsetX}px`,
          }}
        >
          {p.snippet}
        </span>
      ))}
    </>
  );
}
