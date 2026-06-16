import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Cpu, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

// =================================
//  Sub-Components (Reusable)
// =================================

interface BentoCardProps {
  className?: string;
  glowColor?: string;
  children: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({
  className = "",
  glowColor = "rgba(0, 191, 255, 0.15)",
  children,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-500 overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Glow highlight mask on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => (
  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/40 px-2 py-0.5 rounded border border-zinc-900 select-none">
    {name}
  </span>
);

interface MetricBadgeProps {
  value: string;
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ value }) => (
  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#00BFFF]/5 border border-[#00BFFF]/10 text-[#4FD1FF]">
    {value}
  </span>
);

// =================================
//  Interactive Visual Widgets
// =================================

// 1. Live threat analysis feed for ByteGuard
const ByteGuardConsole: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "SYS_INIT // System ready.",
    "SSM_LOAD // Mamba model loaded.",
    "LISTENING // Port 8080 active...",
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const payloads = [
      "payload='SELECT * FROM admin'",
      "payload='<script>alert(1)</script>'",
      "payload='normal_user_profile'",
      "payload='UNION SELECT null,username'",
      "payload='status_check=ping'",
    ];

    const alerts = [
      "WARNING: SQL Injection Signature Detected",
      "CRITICAL: XSS Attack Prevented",
      "METRIC: Payload classified as benign",
      "WARNING: Union SQL injection bypass blocked",
      "METRIC: Payload classified as benign",
    ];

    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * payloads.length);
      const isAttack = alerts[idx].startsWith("WARNING") || alerts[idx].startsWith("CRITICAL");
      
      const newLogs = [
        `INSPECT // ${payloads[idx]}`,
        isAttack ? `[ALERT] // ${alerts[idx]}` : `[OK] // ${alerts[idx]}`,
        `STATUS // Block action triggered (latency: ${Math.floor(Math.random() * 4) + 1}ms)`
      ];

      setLogs((prev) => {
        const kept = prev.slice(-4); // Keep last 4 logs
        return [...kept, ...newLogs];
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] border border-zinc-900 rounded p-4 h-[180px] w-full font-mono text-[10px] text-zinc-500 overflow-y-auto space-y-1.5 scrollbar-none"
    >
      {logs.map((log, index) => {
        let color = "text-zinc-500";
        if (log.includes("[ALERT]")) color = "text-rose-500 font-semibold";
        else if (log.includes("[OK]")) color = "text-emerald-500";
        else if (log.includes("SYS_INIT") || log.includes("SSM_LOAD")) color = "text-[#4FD1FF]";

        return (
          <div key={index} className={color}>
            <span className="text-zinc-700 select-none mr-1.5">›</span>
            {log}
          </div>
        );
      })}
      <div className="text-[#00BFFF] animate-pulse">▋</div>
    </div>
  );
};

// 2. Trajectory / LiDAR Obstacle Avoidance simulator for Autonomous Vehicle
const AutonomousLidarSim: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Define static obstacle positions in canvas coordinates
    const obstacles = [
      { x: 75, y: 55, radius: 10, label: "OBSTACLE_A" },
      { x: 175, y: 95, radius: 12, label: "OBSTACLE_B" },
      { x: 120, y: 110, radius: 8, label: "OBSTACLE_C" },
    ];

    // Define planned path nodes (AMR trajectory dodging obstacles)
    const waypoints = [
      { x: 25, y: 75 },
      { x: 75, y: 105 },
      { x: 120, y: 65 },
      { x: 175, y: 50 },
      { x: 215, y: 85 }
    ];

    // Interpolate path progress between waypoints
    const getPathPoint = (t: number) => {
      const totalSegments = waypoints.length - 1;
      const progress = (t * 0.005) % 1.0;
      const currentSegment = Math.floor(progress * totalSegments);
      const segmentProgress = (progress * totalSegments) - currentSegment;

      const p0 = waypoints[currentSegment];
      const p1 = waypoints[currentSegment + 1];

      return {
        x: p0.x + (p1.x - p0.x) * segmentProgress,
        y: p0.y + (p1.y - p0.y) * segmentProgress
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw obstacles
      obstacles.forEach(obs => {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = 'rgba(239, 68, 68, 0.5)';
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw global trajectory planned path
      ctx.strokeStyle = 'rgba(0, 191, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(waypoints[0].x, waypoints[0].y);
      for (let i = 1; i < waypoints.length; i++) {
        ctx.lineTo(waypoints[i].x, waypoints[i].y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Get current bot position
      const bot = getPathPoint(time);

      // Simulate LiDAR scanning lines (radial sweeps)
      ctx.lineWidth = 0.5;
      const scanLinesCount = 36;
      const angleStep = (Math.PI * 2) / scanLinesCount;
      const scanRadius = 55 + Math.sin(time * 0.1) * 8;

      for (let i = 0; i < scanLinesCount; i++) {
        const angle = i * angleStep + (time * 0.02);
        let endX = bot.x + Math.cos(angle) * scanRadius;
        let endY = bot.y + Math.sin(angle) * scanRadius;
        let hit = false;

        for (const obs of obstacles) {
          const toObsX = obs.x - bot.x;
          const toObsY = obs.y - bot.y;
          const proj = toObsX * Math.cos(angle) + toObsY * Math.sin(angle);

          if (proj > 0 && proj < scanRadius) {
            const perpDist = Math.abs(-toObsX * Math.sin(angle) + toObsY * Math.cos(angle));
            if (perpDist < obs.radius) {
              const hitDist = proj - Math.sqrt(obs.radius * obs.radius - perpDist * perpDist);
              if (hitDist < scanRadius) {
                endX = bot.x + Math.cos(angle) * hitDist;
                endY = bot.y + Math.sin(angle) * hitDist;
                hit = true;
              }
            }
          }
        }

        ctx.strokeStyle = hit ? 'rgba(239, 68, 68, 0.25)' : 'rgba(0, 191, 255, 0.08)';
        ctx.beginPath();
        ctx.moveTo(bot.x, bot.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        if (hit) {
          ctx.fillStyle = '#ff4d4d';
          ctx.beginPath();
          ctx.arc(endX, endY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw bot vehicle halo
      const botGlow = ctx.createRadialGradient(bot.x, bot.y, 2, bot.x, bot.y, 14);
      botGlow.addColorStop(0, 'rgba(0, 191, 255, 0.35)');
      botGlow.addColorStop(1, 'rgba(0, 191, 255, 0)');
      ctx.fillStyle = botGlow;
      ctx.beginPath();
      ctx.arc(bot.x, bot.y, 14, 0, Math.PI * 2);
      ctx.fill();

      // Draw bot node center
      ctx.fillStyle = '#4FD1FF';
      ctx.beginPath();
      ctx.arc(bot.x, bot.y, 4, 0, Math.PI * 2);
      ctx.fill();

      time += isHovered ? 2.5 : 1.0;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#050505] border border-zinc-900 rounded h-[180px] w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none">
        LIDAR_SCAN // OBSTACLE_AVOIDANCE
      </div>
      <canvas
        ref={canvasRef}
        width={240}
        height={150}
        className="w-[240px] h-[150px]"
      />
    </div>
  );
};

// 3. Crop Health Diagnostic simulation for Farm App
const CropScannerWidget: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  useEffect(() => {
    let animId: number;
    const tick = () => {
      setScanStep((prev) => (prev + 1.2) % 100);
      animId = requestAnimationFrame(tick);
    };

    if (isHovered) {
      animId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#050505] border border-zinc-900 rounded p-4 h-[180px] w-full flex flex-col justify-between relative overflow-hidden font-mono"
    >
      {/* Scanning laser line overlay */}
      {isHovered && (
        <div
          className="absolute inset-x-0 h-[2px] bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.8)] pointer-events-none transition-all duration-75"
          style={{ top: `${scanStep}%` }}
        />
      )}

      {/* Camera feed placeholder grid */}
      <div className="relative border border-zinc-900/60 rounded bg-zinc-950/60 h-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px]" />
        
        {/* Mock leaf graphic using canvas or simple SVG styling */}
        <Sprout className={`w-12 h-12 transition-all duration-500 ${isHovered ? 'text-emerald-400 scale-105' : 'text-zinc-600'}`} />
        
        {/* HUD Box Indicators */}
        <div className="absolute top-2 left-2 border-t border-l border-zinc-700 w-2.5 h-2.5" />
        <div className="absolute top-2 right-2 border-t border-r border-zinc-700 w-2.5 h-2.5" />
        <div className="absolute bottom-2 left-2 border-b border-l border-zinc-700 w-2.5 h-2.5" />
        <div className="absolute bottom-2 right-2 border-b border-r border-zinc-700 w-2.5 h-2.5" />
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/30 font-semibold tracking-widest uppercase">
          {isHovered ? "ANALYZING_LEAF_HEALTH" : "FEED_STANDBY"}
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-zinc-500 border-t border-zinc-900 pt-2">
        <span className="uppercase">Crop: Solanum lycopersicum</span>
        <span className={isHovered ? "text-emerald-400 font-bold" : "text-zinc-400"}>
          {isHovered ? "CLASSIFIED: HEALTHY (98.4%)" : "READY TO SCAN"}
        </span>
      </div>
    </div>
  );
};

// =================================
//  Main Projects Component
// =================================

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-zinc-900 bg-zinc-950/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3">
            02 // FEATURED SYSTEMS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Core Architectures &amp; Deployments
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-2">
            SELECT * FROM deployments WHERE status = 'production'
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Autonomous Bot (Robotics & Autonomous Systems) - Spans 2 Columns */}
          <BentoCard className="md:col-span-2 p-6 flex flex-col justify-between h-full min-h-[380px]" glowColor="rgba(0, 191, 255, 0.15)">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start w-full">
              {/* Text Specs */}
              <div className="sm:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 text-[#00BFFF]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wide text-zinc-500 block uppercase">
                      Robotics &amp; Autonomous Systems
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#4FD1FF] transition-colors duration-300">
                      Autonomous Navigation Bot
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Engineered a robust autonomous mobile robot navigation layer using LiDAR SLAM mapping and Nav2. Configured sensor fusion, occupancy grids, and custom C++ route optimization planners to dynamically route around obstacles, replacing legacy guide-tape systems.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <MetricBadge value="+35% Throughput" />
                  <MetricBadge value="-80% Downtime" />
                  <MetricBadge value="2x Deployment Speed" />
                </div>
              </div>

              {/* Visual Widget */}
              <div className="sm:col-span-5 w-full flex items-center justify-center pt-2 sm:pt-0">
                <AutonomousLidarSim />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900 mt-6 w-full">
              <div className="flex flex-wrap gap-1.5">
                <TechBadge name="ROS2" />
                <TechBadge name="SLAM" />
                <TechBadge name="Nav2" />
                <TechBadge name="C++" />
                <TechBadge name="Gazebo" />
              </div>

              <a
                href="https://github.com/Harishankar00/ros_bot_1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-500 rounded text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer bg-zinc-950/40 w-fit"
              >
                <Github className="w-3.5 h-3.5" />
                <span>ros_bot_1 Repository</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </BentoCard>

          {/* Card 2: ByteGuard (AI Security & Distributed Systems) - Spans 1 Column */}
          <BentoCard className="md:col-span-1 p-6 flex flex-col justify-between h-full min-h-[380px]" glowColor="rgba(79, 209, 255, 0.12)">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 text-[#4FD1FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wide text-zinc-500 block uppercase">
                    AI Security &amp; Distributed Systems
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4FD1FF] transition-colors duration-300">
                    ByteGuard Threat Analysis
                  </h3>
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                Architected a real-time distributed Mamba SSM + Federated Learning threat analysis pipeline to securely filter parameters and block SQL injections.
              </p>

              <div className="w-full mb-4">
                <ByteGuardConsole />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-4 pt-4 border-t border-zinc-900 w-full">
              <div className="flex flex-wrap gap-1.5">
                <TechBadge name="Mamba SSM" />
                <TechBadge name="Federated" />
                <TechBadge name="Python" />
                <TechBadge name="SQL" />
              </div>

              <div className="flex flex-wrap gap-2">
                <MetricBadge value="80% Detection" />
                <MetricBadge value="<15ms Overhead" />
              </div>

              <a
                href="https://www.kaggle.com/code/harishankar00/byteguard-sim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-500 rounded text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer bg-zinc-950/40 w-full text-center"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Kaggle Notebook</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </BentoCard>

          {/* Card 3: Farm App (Generative AI & Computer Vision) - Spans 3 Columns (Wide Bento) */}
          <BentoCard className="md:col-span-3 p-6 flex flex-col justify-between h-full min-h-[350px]" glowColor="rgba(16, 185, 129, 0.12)">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full">
              {/* Text Specs */}
              <div className="md:col-span-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800 text-emerald-400">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wide text-zinc-500 block uppercase">
                      Generative AI &amp; Computer Vision
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#4FD1FF] transition-colors duration-300">
                      AI Farm Assistant
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  Developed an intelligent crop diagnosis and farm planning system. Powered by a TensorFlow computer vision engine detecting foliar crop diseases and integrated with a Generative LLM agent that formats localized treatment plans, water allocations, and actions.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <MetricBadge value="Real-time Diagnostics" />
                  <MetricBadge value="Offline-First Inference" />
                  <MetricBadge value="LLM Chat Planning" />
                </div>
              </div>

              {/* Visual Widget */}
              <div className="md:col-span-4 w-full pt-2 md:pt-0">
                <CropScannerWidget />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900 mt-6 w-full">
              <div className="flex flex-wrap gap-1.5">
                <TechBadge name="TensorFlow" />
                <TechBadge name="LLMs" />
                <TechBadge name="OpenCV" />
                <TechBadge name="React" />
                <TechBadge name="Node.js" />
              </div>

              <a
                href="https://github.com/Harishankar00/Farmer_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-500 rounded text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer bg-zinc-950/40 w-fit"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code Repository</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};
