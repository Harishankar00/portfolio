import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target, Database } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Section Label & Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-start text-left"
          >
            <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3">
              01 // ABOUT ME
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
              Bridging the gap between raw data and physical action.
            </h2>
            
            {/* Minimal decoration line */}
            <div className="w-12 h-[1px] bg-zinc-800 mt-6 hidden lg:block" />
          </motion.div>

          {/* Right Side: Narrative & Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col gap-8 text-left text-zinc-400"
          >
            <p className="text-base md:text-lg font-light leading-relaxed text-zinc-300">
              I am an AI &amp; Data Science developer with hands-on experience building **Generative AI backend systems, automated ML pipelines, and ROS-powered autonomous systems**. My engineering philosophy centers on creating robust, real-time architectures that transform complex machine learning models into high-throughput physical and digital applications.
            </p>
            
            <p className="text-sm md:text-base leading-relaxed">
              Whether optimizing latency for high-availability backend microservices, configuring sensor fusion algorithms for SLAM navigation, or designing federated systems to block cyber threats at the node level, I focus on building systems that are resilient, self-adapting, and built to scale.
            </p>

            {/* Grid of Key Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              
              {/* Education Card */}
              <div className="p-5 rounded border border-zinc-900 bg-[#050505] hover:border-zinc-800 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <div className="p-2 rounded bg-zinc-900 text-[#00BFFF]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-200">Education</h3>
                </div>
                <p className="text-sm font-semibold text-white">B.Tech in Artificial Intelligence</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">KGISL Institute of Tech (CGPA: 8.0)</p>
                <p className="text-xs text-[#4FD1FF] mt-2 font-mono">Graduating May 2027</p>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded border border-zinc-900 bg-[#050505] hover:border-zinc-800 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <div className="p-2 rounded bg-zinc-900 text-[#00BFFF]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-200">Location</h3>
                </div>
                <p className="text-sm font-semibold text-white">Coimbatore, Tamil Nadu</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">India (IST timezone)</p>
                <p className="text-xs text-emerald-500 mt-2 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Open to remote &amp; relocation
                </p>
              </div>

              {/* Focus Area 1 */}
              <div className="p-5 rounded border border-zinc-900 bg-[#050505] hover:border-zinc-800 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <div className="p-2 rounded bg-zinc-900 text-[#00BFFF]">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-200">Autonomous systems</h3>
                </div>
                <p className="text-sm font-semibold text-white">ROS2, SLAM &amp; Nav2</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">Simulating in Gazebo &amp; RViz2</p>
                <p className="text-xs text-zinc-400 mt-2">Specializing in obstacle perception &amp; robot kinematics.</p>
              </div>

              {/* Focus Area 2 */}
              <div className="p-5 rounded border border-zinc-900 bg-[#050505] hover:border-zinc-800 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <div className="p-2 rounded bg-zinc-900 text-[#00BFFF]">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-200">Backend &amp; ML Pipelines</h3>
                </div>
                <p className="text-sm font-semibold text-white">AWS Lambda &amp; GenAI Pipelines</p>
                <p className="text-xs text-zinc-500 font-mono mt-1">DynamoDB, Cognito, GitHub Actions</p>
                <p className="text-xs text-zinc-400 mt-2">Developing data quality checks and automated security guards.</p>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
