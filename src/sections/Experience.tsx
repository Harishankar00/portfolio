import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
}

const experienceData: Job[] = [
  {
    role: 'GenAI Backend Developer',
    company: 'Neuro Stack',
    location: 'Remote',
    period: 'Aug 2025 – Present',
    techStack: ['Python', 'AWS (Lambda, DynamoDB, S3)', 'Cognito', 'CI/CD', 'GitHub Actions', 'Security Shielding'],
    description: [
      'Engineered machine learning-driven backend pipelines to perform real-time traffic analysis, routing optimization, and API request latency reduction.',
      'Developed AI-powered security filters to monitor incoming parameters, successfully identifying anomalies and blocking malicious payloads and SQL injections.',
      'Deployed serverless infrastructure on AWS (Lambda, S3, DynamoDB, Cognito auth) and set up automated unit-testing pipelines via GitHub Actions.',
      'Built a custom data validation engine that monitors and tests the quality of incoming data streams to prevent training drift in active ML systems.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Appin Technologies',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Jun 2025 – Jul 2025',
    techStack: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Synthetic Aperture Radar (SAR)', 'GIS Data'],
    description: [
      'Developed a SAR (Synthetic Aperture Radar) image classification system using PyTorch deep learning models to perform forest wildlife monitoring.',
      'Trained custom convolutional networks to automate elephant detection and migration tracking, helping prevent forest border conflicts.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'KGXperience',
    location: 'Coimbatore, Tamil Nadu',
    period: 'Jun 2023 – Apr 2025',
    techStack: ['ROS2', 'SLAM (Gmapping/Cartographer)', 'Nav2', 'Gazebo', 'RViz2', 'C++', 'Python'],
    description: [
      'Engineered a ROS2-powered autonomous mobile robot (AMR) platform featuring real-time obstacle perception and autonomous local planning.',
      'Utilized Gazebo and RViz2 to construct physical simulations, modeling friction, wheel slip, and sensor noise for high-fidelity testing.',
      'Configured SLAM (Simultaneous Localization and Mapping) pipelines to construct 2D occupancy grids, deploying Nav2 for local and global route execution.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Sticky Section Header */}
          <div className="lg:col-span-4 text-left lg:sticky lg:top-28 lg:h-fit">
            <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3 block">
              03 // CAREER TIMELINE
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed mb-6">
              Engineering backend intelligence, ML processing layers, and physical robot architectures across remote and research teams.
            </p>
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Briefcase className="w-3.5 h-3.5" />
              <span>3 active placements logged</span>
            </div>
          </div>

          {/* Right Side: Timeline Content */}
          <div className="lg:col-span-8 text-left">
            <div className="relative pl-6 sm:pl-8 border-l border-zinc-850 space-y-12">
              
              {experienceData.map((job, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-zinc-950 bg-zinc-900 group-hover:bg-[#00BFFF] group-hover:border-[#4FD1FF] transition-all duration-300 flex items-center justify-center">
                    {index === 0 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-ping" />
                    )}
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-300">
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <ul className="space-y-2.5 mb-5 text-sm text-zinc-400 font-light">
                    {job.description.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#00BFFF]/60 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags used in this job */}
                  <div className="flex flex-wrap gap-1.5">
                    {job.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-900 bg-zinc-950/60 text-zinc-400 group-hover:border-zinc-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
