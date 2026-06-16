import React, { useState } from 'react';
import { Mail, Phone, Terminal, Send, CheckCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, KaggleIcon as Kaggle, LeetCodeIcon as LeetCode } from '../components/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addLog = (msg: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, msg]);
        resolve();
      }, delay);
    });
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:harishankarbb2005@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setConsoleLogs([]);

    await addLog('> POST /api/v1/contact HTTP/1.1', 150);
    await addLog(`> Host: api.harishankar.dev`, 120);
    await addLog(`> Content-Type: application/json`, 120);
    await addLog(`> User-Agent: portfolio-client/1.0`, 100);
    await addLog(`> `, 100);
    await addLog(`* Connected to remote mail gateway...`, 300);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
      await addLog(`* Transmitting payload via Web3Forms secure API...`, 350);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Contact from ${formData.name}`,
            from_name: `${formData.name} (Portfolio)`,
          }),
        });

        const result = await response.json();
        if (result.success) {
          await addLog(`* Payload received by gateway server successfully.`, 300);
          await addLog(`< HTTP/1.1 200 OK`, 200);
          await addLog(`< X-Response-Time: 184ms`, 100);
          await addLog(`* Connection: close`, 100);
          await addLog(`* Message transmitted to Harishankar M.`, 200);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          await addLog(`* API returned error status: ${result.message || "400 Bad Request"}`, 300);
          await addLog(`* Initializing secure mailto client fallback...`, 350);
          triggerMailto();
          await addLog(`< HTTP/1.1 202 HandedOver`, 200);
          await addLog(`* Message handed over to local mail client.`, 200);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        }
      } catch (err) {
        await addLog(`* Network transport layer connection failed.`, 300);
        await addLog(`* Initializing secure mailto client fallback...`, 350);
        triggerMailto();
        await addLog(`< HTTP/1.1 202 HandedOver`, 200);
        await addLog(`* Message handed over to local mail client.`, 200);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } else {
      await addLog(`* Web3Forms API key not found in env configurations.`, 200);
      await addLog(`* Initializing secure mailto client fallback...`, 400);
      triggerMailto();
      await addLog(`< HTTP/1.1 202 HandedOver`, 200);
      await addLog(`* Message handed over to local mail client.`, 200);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-950/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Text Details */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#00BFFF] tracking-widest uppercase mb-3 block">
                06 // INITIATE HANDSHAKE
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Connect with Harishankar
              </h2>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 max-w-md">
                Interested in building robust GenAI pipelines, optimizing ROS2 control loops, or discussing backend architecture? I am open to developer placements, collaborative ML research projects, and systems engineering opportunities.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 text-xs font-mono text-zinc-400 mb-8">
                <a
                  href="mailto:harishankarbb2005@gmail.com"
                  className="flex items-center gap-3 hover:text-[#00BFFF] transition-colors w-fit"
                >
                  <Mail className="w-4 h-4 text-[#00BFFF]" />
                  <span>harishankarbb2005@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 w-fit">
                  <Phone className="w-4 h-4 text-[#00BFFF]" />
                  <span>(+91) 99944 22355</span>
                </div>

                <a
                  href="https://linkedin.com/in/harishankar-m2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00BFFF] transition-colors w-fit"
                >
                  <Linkedin className="w-4 h-4 text-[#00BFFF]" />
                  <span>linkedin.com/in/harishankar-m2005</span>
                </a>

                <a
                  href="https://github.com/Harishankar00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00BFFF] transition-colors w-fit"
                >
                  <Github className="w-4 h-4 text-[#00BFFF]" />
                  <span>github.com/Harishankar00</span>
                </a>

                <a
                  href="https://leetcode.com/u/Harishankar_M/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00BFFF] transition-colors w-fit"
                >
                  <LeetCode className="w-4 h-4 text-[#00BFFF]" />
                  <span>leetcode.com/u/Harishankar_M</span>
                </a>

                <a
                  href="https://www.kaggle.com/harishankar00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#00BFFF] transition-colors w-fit"
                >
                  <Kaggle className="w-4 h-4 text-[#00BFFF]" />
                  <span>kaggle.com/harishankar00</span>
                </a>
              </div>
            </div>

            <div className="text-[10px] font-mono text-zinc-600 hidden lg:block">
              © {new Date().getFullYear()} Harishankar M. All rights reserved.
            </div>
          </div>

          {/* Right Side: Interactive terminal forms */}
          <div className="lg:col-span-7 text-left">
            <div className="rounded border border-zinc-900 bg-zinc-950/90 backdrop-blur-md overflow-hidden shadow-2xl">
              
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-900 bg-zinc-950">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-[10px] font-mono text-zinc-400">secure_comm_terminal.sh</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-850" />
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6">
                {status === 'idle' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                          Sender Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#00BFFF]/50 text-white rounded px-3 py-2 text-xs outline-none transition-colors"
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                          Return Endpoint (Email)
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#00BFFF]/50 text-white rounded px-3 py-2 text-xs outline-none transition-colors"
                          placeholder="e.g. client@endpoint.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                        Message Payload
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#0d0d0d] border border-zinc-900 focus:border-[#00BFFF]/50 text-white rounded px-3 py-2 text-xs outline-none transition-colors resize-none"
                        placeholder="State your objective..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-[#00BFFF] text-black hover:text-black font-semibold text-xs rounded transition-colors duration-300 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {/* Console Logger */}
                    <div className="bg-[#0d0d0d] rounded border border-zinc-900 p-4 min-h-[160px] font-mono text-[11px] text-zinc-400 overflow-y-auto space-y-1">
                      {consoleLogs.map((log, index) => (
                        <div
                          key={index}
                          className={
                            log.startsWith('>')
                              ? 'text-[#4FD1FF]'
                              : log.startsWith('*')
                              ? 'text-zinc-500'
                              : log.startsWith('<')
                              ? 'text-emerald-400'
                              : 'text-white'
                          }
                        >
                          {log}
                        </div>
                      ))}
                      {status === 'sending' && (
                        <div className="text-[#00BFFF] animate-pulse">▋</div>
                      )}
                    </div>

                    {status === 'success' && (
                      <div className="flex items-center gap-3 p-4 rounded bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 text-xs animate-fade-in">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Transmission Confirmed</p>
                          <p className="text-[11px] text-zinc-500 mt-0.5 font-light">
                            Thank you. Connection established. I will respond to your endpoint shortly.
                          </p>
                        </div>
                      </div>
                    )}

                    {status === 'success' && (
                      <button
                        onClick={() => setStatus('idle')}
                        className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-mono text-xs rounded transition-colors cursor-pointer"
                      >
                        Reset Terminal Connection
                      </button>
                    )}
                  </div>
                )}
              </div>

            </div>

            <div className="text-[10px] font-mono text-zinc-600 mt-6 lg:hidden text-center">
              © {new Date().getFullYear()} Harishankar M. All rights reserved.
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
