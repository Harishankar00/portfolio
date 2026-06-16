import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
}

export const CelestialSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    // Scale density of particles with screen resolution
    const particleCount = Math.max(50, Math.min(130, Math.floor((width * height) / 12000)));
    const connectionDistance = 135;
    const mouse = { x: -1000, y: -1000, active: false };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2.2 + 1.8; // larger particles (1.8px to 4px)
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: radius,
        baseRadius: radius,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Lighter bioluminescent cyan-blue connection string (alpha up to 0.38)
            const alpha = (1 - dist / connectionDistance) * 0.38;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(79, 209, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse connection and repulsion force
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 150) {
            // Draw connection to mouse (glowing cyan)
            const alpha = (1 - mdist / 150) * 0.48;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();

            // Subtle repulsion physics
            const force = (150 - mdist) / 150;
            const angle = Math.atan2(mdy, mdx);
            p1.x += Math.cos(angle) * force * 0.6;
            p1.y += Math.sin(angle) * force * 0.6;
          }
        }

        // Advance particle position
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce particle off screen boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Keep coordinates contained
        p1.x = Math.max(0, Math.min(width, p1.x));
        p1.y = Math.max(0, Math.min(height, p1.y));

        // Draw particle dot in bright cyan
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00BFFF';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#00BFFF';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow properties
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none block"
    />
  );
};

export default CelestialSphere;
