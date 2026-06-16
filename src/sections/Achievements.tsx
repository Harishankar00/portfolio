import React from 'react';
import { Trophy, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const metrics: Metric[] = [
  {
    value: '1st',
    label: 'Smart Motion Hackathon',
    sublabel: 'First place out of 100+ teams. Organized by Bonfiglioli.',
    icon: <Trophy className="w-5 h-5 text-[#00BFFF]" />,
  },
  {
    value: '35%',
    label: 'Throughput Optimization',
    sublabel: 'Operational gain achieved via adaptive routing in ROS2 frameworks.',
    icon: <ArrowUpRight className="w-5 h-5 text-[#4FD1FF]" />,
  },
  {
    value: '80%',
    label: 'Downtime Reduction',
    sublabel: 'Result of deploying infrastructure-free SLAM and local perception.',
    icon: <Zap className="w-5 h-5 text-[#00BFFF]" />,
  },
  {
    value: '80%',
    label: 'Threat Detection Accuracy',
    sublabel: 'Achieved in real-time SQL injection analysis via Byteguard.',
    icon: <ShieldCheck className="w-5 h-5 text-[#4FD1FF]" />,
  },
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 border-t border-zinc-900 bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3">
            05 // PERFORMANCE BENCHMARKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Achievements &amp; Metrics
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-2">
            sysctl -a | grep benchmark.results
          </p>
        </div>

        {/* Highlight Card: Smart Motion Hackathon */}
        <div className="mb-10 p-6 sm:p-8 rounded border border-[#00BFFF]/20 bg-gradient-to-r from-[#00BFFF]/5 to-[#4FD1FF]/5 text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#00BFFF]/10 transition-colors duration-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00BFFF]/15 border border-[#00BFFF]/30">
                <Trophy className="w-3.5 h-3.5 text-[#4FD1FF]" />
                <span className="text-[10px] font-mono tracking-widest text-[#4FD1FF] uppercase font-semibold">
                  CHAMPIONSHIP WIN // JAN 2026
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Smart Motion Hackathon — 1st Place Winner
              </h3>
              <p className="text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
                Hosted at Chennai Institute of Technology and organized by **Bonfiglioli**. Formulated, assembled, and programmed an autonomous robot from scratch featuring intelligent payload handling, robust obstacle avoidance under extreme sensor noise, and custom pathfinding algorithms.
              </p>
            </div>
            
            <div className="flex flex-col justify-center min-w-[120px]">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                ORGANIZER
              </span>
              <span className="text-sm font-semibold text-white tracking-wide font-mono">
                BONFIGLIOLI
              </span>
              <span className="text-xs text-zinc-500 font-mono mt-0.5">
                Chennai, India
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-850">
                    {metric.icon}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    METRIC_0{index + 1}
                  </span>
                </div>
                
                <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-1">
                  {metric.label}
                </h4>
                <p className="text-xs text-zinc-500 font-light font-sans leading-relaxed">
                  {metric.sublabel}
                </p>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-extrabold tracking-tight text-white font-mono block">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
