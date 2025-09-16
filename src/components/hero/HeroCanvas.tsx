import React, { useEffect, useRef } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  cta?: { label: string; to: string };
};

type Particle = { x: number; y: number; r: number; vx: number; vy: number; shade: number };

function drawWoodGrain(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
  // soft radial wood rings
  const centerX = w * 0.3;
  const centerY = h * 0.6;
  for (let i = 0; i < 120; i++) {
    const radius = i * 6;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    const alpha = 0.006 + (i % 4 === 0 ? 0.012 : 0);
    ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
    ctx.lineWidth = 2 + (i % 5 === 0 ? 2 : 0);
    ctx.stroke();
  }
}

export function HeroCanvas({ title, subtitle, cta }: Props): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function handleResize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawWoodGrain(ctx, w, h);
      initParticles(w, h);
    }

    function initParticles(w: number, h: number) {
      const count = prefersReduced ? 24 : 80;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        shade: 160 + Math.floor(Math.random() * 40)
      }));
    }

    function tick() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      // fade existing slightly to create trails
      ctx.fillStyle = 'rgba(15,23,42,0.05)';
      ctx.fillRect(0, 0, w, h);
      // redraw rings lightly
      drawWoodGrain(ctx, w, h);

      // draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.shade}, ${p.shade - 30}, 10, 0.25)`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);
    handleResize();

    if (!prefersReduced) {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 -z-10 opacity-30">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{subtitle}</p>
        )}
        {cta && (
          <a href={cta.to} className="mt-8 inline-block rounded-md bg-amber-500 px-4 py-2 text-slate-900 font-semibold">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}

