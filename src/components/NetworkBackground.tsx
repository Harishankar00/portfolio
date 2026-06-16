import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseTime: number;
}

export const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, radius: 160 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // Adjust particle count and properties based on device size
    const getParticleCount = (w: number) => {
      if (w < 640) return 25; // Mobile
      if (w < 1024) return 50; // Tablet
      return 75; // Desktop
    };

    const initParticles = (w: number, h: number) => {
      const count = getParticleCount(w);
      particles = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = 0.2 + Math.random() * 0.4;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4, // Subtle floating velocity
          vy: (Math.random() - 0.5) * 0.4,
          radius: 1.2 + Math.random() * 1.5,
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          pulseTime: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;

      // Handle scale factor for Retina/High-DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;
      canvas.style.width = `${newWidth}px`;
      canvas.style.height = `${newHeight}px`;

      ctx.scale(dpr, dpr);

      // Handle particle adjustments on resize
      if (particles.length === 0) {
        initParticles(newWidth, newHeight);
      } else {
        const scaleX = newWidth / (width || newWidth);
        const scaleY = newHeight / (height || newHeight);
        particles.forEach((p) => {
          p.x *= scaleX;
          p.y *= scaleY;
          // Constrain coordinates
          p.x = Math.max(0, Math.min(newWidth, p.x));
          p.y = Math.max(0, Math.min(newHeight, p.y));
        });
        
        // Reinitialize if particle count target changes significantly
        const targetCount = getParticleCount(newWidth);
        if (Math.abs(particles.length - targetCount) > 15) {
          initParticles(newWidth, newHeight);
        }
      }

      width = newWidth;
      height = newHeight;
    };

    // Listeners for size updates
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Bind mouse events to the parent container for better hover detection area
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mouse = mouseRef.current;
      const maxDistance = 110; // Max distance for particle connections
      const mouseMaxDist = mouse.radius;

      // 1. Update and draw particles
      particles.forEach((p) => {
        // Natural floating movement
        p.x += p.vx;
        p.y += p.vy;

        // Pulse the base alpha value slightly for organic feel
        p.pulseTime += p.pulseSpeed;
        const pulse = Math.sin(p.pulseTime) * 0.15;
        p.alpha = Math.max(0.1, Math.min(0.9, p.baseAlpha + pulse));

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Clamp inside canvas bounds
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Cursor attraction effect
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseMaxDist) {
            // Stronger attraction the closer it gets, but gentle
            const force = (mouseMaxDist - dist) / mouseMaxDist;
            p.x += (dx / dist) * force * 0.25;
            p.y += (dy / dist) * force * 0.25;
            // Brighten particle when close to cursor
            p.alpha = Math.min(1.0, p.alpha + force * 0.4);
          }
        }

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${p.alpha * 0.12})`;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 209, 255, ${p.alpha * 0.8})`;
        ctx.fill();
      });

      // 2. Draw connections (lines) between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Base line opacity scales inversely with distance
            let lineAlpha = (1 - dist / maxDistance) * 0.12;

            // Brighten line if it is near the cursor
            if (mouse.active) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const mdx = mouse.x - midX;
              const mdy = mouse.y - midY;
              const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

              if (mdist < mouseMaxDist) {
                const boost = (1 - mdist / mouseMaxDist) * 0.25;
                lineAlpha += boost;
              }
            }

            // Draw line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${lineAlpha})`;
            ctx.lineWidth = lineAlpha * 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
