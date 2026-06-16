import React from 'react';
import { Terminal, Settings, Cloud, BrainCircuit } from 'lucide-react';

interface TechItem {
  name: string;
  usage: string;
}

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Languages',
    icon: <Terminal className="w-4 h-4 text-[#00BFFF]" />,
    items: [
      { name: 'Python', usage: 'ML models, data pipelines & scripts' },
      { name: 'C++', usage: 'High-performance ROS2 node logic' },
      { name: 'SQL', usage: 'Relational data structures & queries' },
      { name: 'JavaScript / TS', usage: 'Interactive dashboards & frontend logic' },
      { name: 'React.js', usage: 'Building user-friendly system control interfaces' },
    ],
  },
  {
    title: 'Frameworks & ML Libraries',
    icon: <BrainCircuit className="w-4 h-4 text-[#4FD1FF]" />,
    items: [
      { name: 'PyTorch / TensorFlow', usage: 'Deep learning models & computer vision pipelines' },
      { name: 'ROS2 / Nav2', usage: 'Robot control architectures & path planning' },
      { name: 'Scikit-learn', usage: 'Data preprocessing, regression & classification' },
      { name: 'OpenCV', usage: 'Image processing & real-time visual perception' },
      { name: 'Transformers / LLM', usage: 'Generative AI integrations & natural language agents' },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: <Cloud className="w-4 h-4 text-[#00BFFF]" />,
    items: [
      { name: 'AWS (Serverless)', usage: 'Lambda, DynamoDB, S3, Cognito deployment' },
      { name: 'GitHub / CI-CD', usage: 'Version control, automated testing, code actions' },
      { name: 'Gazebo / RViz2', usage: 'Robot simulation and spatial validation' },
      { name: 'Google Cloud Platform', usage: 'Cloud VM hosting & storage pipelines' },
      { name: 'Jupyter & Matlab', usage: 'Algorithm experimentation & signal testing' },
    ],
  },
  {
    title: 'Core Paradigms',
    icon: <Settings className="w-4 h-4 text-[#4FD1FF]" />,
    items: [
      { name: 'Autonomous Navigation', usage: 'SLAM mapping, localization, obstacle avoidance' },
      { name: 'Neural Networks', usage: 'Custom CNNs, Transformers, State Space Models (Mamba)' },
      { name: 'Federated Learning', usage: 'Decentralized collaborative training models' },
      { name: 'Traffic / Security Analysis', usage: 'Anomaly detection, packet inspection, sanitization' },
      { name: 'Hardware Integration', usage: 'Microcontrollers, Arduino, serial communications' },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 border-t border-zinc-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16">
          <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3">
            04 // ENGINE SPECIFICATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Technical Stack &amp; Domains
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-2">
            cat /etc/environment/system_dependencies.conf
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded border border-zinc-900 bg-zinc-950/20 hover:border-zinc-850 transition-colors duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                  {category.icon}
                </div>
                <h3 className="text-sm font-mono tracking-widest text-white uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 group text-left"
                  >
                    <span className="text-xs font-mono font-medium text-zinc-200 group-hover:text-[#00BFFF] transition-colors duration-200">
                      {item.name}
                    </span>
                    <span className="hidden sm:inline-block flex-grow border-b border-dotted border-zinc-850 mx-4" />
                    <span className="text-[11px] text-zinc-500 font-light font-sans max-w-xs sm:text-right">
                      {item.usage}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
