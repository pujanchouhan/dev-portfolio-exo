import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const spotlightRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!section || !card || !content) return;

    // --- GSAP CINEMATIC ENTRANCE ANIMATION ---
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      section.querySelector('header'),
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      content.querySelectorAll('.hero-anim-item'),
      { y: 50, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, stagger: 0.12 },
      "-=0.7"
    )
    .fromTo(
      card,
      { scale: 0.75, opacity: 0, rotationY: 35, rotationX: -15 },
      { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, duration: 1.4, ease: "back.out(1.2)" },
      "-=0.9"
    );

    // --- MOUSE PHYSICS & SPOTLIGHT TRACKING ---
    gsap.set([cursorDotRef.current, cursorRingRef.current], {
      scale: 0.5,
      opacity: 0,
      transformOrigin: "50% 50%"
    });

    const xToDot = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.05, ease: "power2.out" });
    const yToDot = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.05, ease: "power2.out" });
    
    const xToRing = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yToRing = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.15, ease: "power3.out" });

    const xTilt = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3.out" });
    const yTilt = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3.out" });
    const glareX = gsap.quickTo(glareRef.current, "x", { duration: 0.3, ease: "power2.out" });
    const glareY = gsap.quickTo(glareRef.current, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dotSize = 12;
      const ringSize = 48;

      // Update Spotlight position instantly via inline style
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }

      // Update Custom Cursor coordinates
      xToDot(x - dotSize / 2);
      yToDot(y - dotSize / 2);
      xToRing(x - ringSize / 2);
      yToRing(y - ringSize / 2);

      // Card 3D Perspective Calculations
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

      const rotateX = -((y - cardCenterY) / (cardRect.height / 2)) * 16;
      const rotateY = ((x - cardCenterX) / (cardRect.width / 2)) * 16;

      xTilt(rotateY);
      yTilt(rotateX);

      // Holographic Glare mapping
      glareX((x - cardRect.left) - cardRect.width / 2);
      glareY((y - cardRect.top) - cardRect.height / 2);
    };

    const handleMouseEnter = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.inOut"
      });
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
      xTilt(0);
      yTilt(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-between select-none cursor-none pt-4 pb-8"
    >
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>

      {/* 1. Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0" />

      {/* 2. Direct Mouse Tracking Spotlight Beam */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-0 blur-[90px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(229,9,20,0.35) 0%, rgba(229,9,20,0.1) 40%, transparent 70%)'
        }}
      ></div>

      {/* 3. Main Content Layer */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-between pt-28 pb-6">
        
        {/* Top Cinematic Badge */}
        <div className="hero-anim-item flex items-center justify-between w-full mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-white/80">CSE @ LPU &bull; 2024 - 2028</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/60 tracking-wider">
            <span className="px-2.5 py-1 border border-red-600/30 rounded bg-black/60 text-red-400">CGPA: 7.46</span>
            <span className="px-2.5 py-1 border border-white/20 rounded bg-black/40">GEN AI & FASTAPI</span>
          </div>
        </div>

        {/* Main Center Cinematic Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto py-4">
          
          {/* Left Side: Developer Story & Description */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5 text-left">
            
            <div className="hero-anim-item flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-xs rounded tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.8)] animate-pulse">FEATURED</span>
              <span className="text-white/80 text-xs font-mono tracking-widest uppercase">AI & Full-Stack Engineer</span>
            </div>

            <h1 className="hero-anim-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.92] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              PUJAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_35px_rgba(220,38,38,0.5)]">
                CHOUHAN
              </span>
            </h1>

            <div className="hero-anim-item flex flex-wrap items-center gap-2 text-xs font-mono text-red-400 font-bold">
              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-red-400">Python • FastAPI</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">LlamaIndex • LangChain</span>
              <span className="text-white/40">•</span>
              <span className="text-white/70">MongoDB • PostgreSQL</span>
            </div>

            <p className="hero-anim-item text-sm md:text-base text-white/80 font-light leading-relaxed max-w-md drop-shadow">
              Computer Science & Engineering student at <strong className="text-white font-semibold">Lovely Professional University</strong>. Specializing in Generative AI architectures, LLM hallucination-reduction grounding, and high-performance backend pipelines.
            </p>

            {/* Action Button Set */}
            <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_10px_35px_rgba(255,255,255,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 bg-neutral-900/90 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded hover:bg-neutral-800 transition-all duration-300 shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Center: Interactive 3D Holographic Developer Pass (No photo - Pure Cyber Identity Card) */}
          <div className="lg:col-span-4 flex justify-center perspective-[1200px]">
            <div 
              ref={cardRef}
              className="relative group transform-gpu transition-transform duration-100 ease-out will-change-transform w-full max-w-[340px]"
            >
              {/* Cinematic Red Neon Back Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-red-600/70 via-rose-600/40 to-purple-600/20 rounded-3xl blur-3xl opacity-90 group-hover:opacity-100 animate-pulse duration-1000"></div>
              
              {/* Cyber Badge Card */}
              <div className="relative p-6 bg-[#101010]/95 backdrop-blur-2xl rounded-2xl border border-red-600/50 shadow-[0_40px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between min-h-[440px]">
                
                {/* Dynamic Specular Glare Layer */}
                <div 
                  ref={glareRef}
                  className="absolute inset-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform-gpu z-40"
                ></div>

                {/* Cyber Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-20">
                  <div className="w-full h-8 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-scanline"></div>
                </div>

                {/* Top Badge Header */}
                <div className="relative z-30 flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    <span className="text-[10px] font-mono text-white/50 tracking-wider">ID: PC-2024-28</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">● ACTIVE</span>
                </div>

                {/* Center Monogram / Cyber Visualizer */}
                <div className="relative z-30 py-5 flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1c0406] via-[#121212] to-black border border-red-600/40 flex items-center justify-center shadow-[0_0_35px_rgba(229,9,20,0.35)] group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-1 rounded-xl border border-red-500/20"></div>
                    <span className="text-3xl font-black font-mono tracking-tighter text-white drop-shadow-[0_0_15px_rgba(229,9,20,0.8)]">
                      PC<span className="text-red-600">.</span>
                    </span>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-base font-black text-white tracking-wide">PUJAN CHOUHAN</h3>
                    <p className="text-[11px] font-mono text-red-400 font-medium">Lovely Professional University</p>
                    <p className="text-[10px] font-mono text-white/60">B.Tech CSE &bull; CGPA: 7.46</p>
                  </div>
                </div>

                {/* Live Cyber Terminal Status */}
                <div className="relative z-30 p-3 rounded-lg bg-black/80 border border-white/10 font-mono text-[10px] space-y-1.5">
                  <div className="flex items-center justify-between text-white/50 border-b border-white/5 pb-1">
                    <span>SYSTEM_TELEMETRY</span>
                    <span className="text-emerald-400 font-bold">● ONLINE</span>
                  </div>
                  <p className="text-red-400 leading-tight">&gt; core: [FastAPI, LlamaIndex, Gemini]</p>
                  <p className="text-white/80 leading-tight">&gt; project_01: Numera (AI Accounting)</p>
                  <p className="text-white/80 leading-tight">&gt; project_02: PolyMind (Multi-LLM Stream)</p>
                  <p className="text-white/50 leading-tight">&gt; devops: Terraform &bull; CI/CD &bull; Git</p>
                </div>

                {/* Card Footer Barcode & Verification */}
                <div className="relative z-30 pt-3 flex items-center justify-between border-t border-white/10 text-[9px] font-mono text-white/40">
                  <span>VERIFIED DEVELOPER</span>
                  <div className="flex gap-0.5 items-center h-3">
                    {[3,6,2,8,4,7,3,5,8,3,6,4,2,7].map((h, i) => (
                      <div key={i} className="w-[2px] bg-red-600/70" style={{ height: `${h * 1.5}px` }}></div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Technical Specs & Stack */}
          <div className="hero-anim-item lg:col-span-3 flex flex-col items-start lg:items-end space-y-4 text-left lg:text-right">
            <div className="p-5 bg-black/80 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl max-w-xs space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Training & Certs</h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Generative AI (CipherSchools & LPU), Programming in Java (Neo Colab), C++ & DBMS (Infosys Springboard).
              </p>
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1 justify-start lg:justify-end">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30">FastAPI</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10">Gemini LLM</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10">Terraform</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Cinematic Ticker */}
        <div className="hero-anim-item flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 tracking-widest uppercase gap-2 pt-4">
          <span>AI GROUNDING &bull; FASTAPI &bull; LLM INTEGRATION</span>
          <span>[ PUJAN CHOUHAN &bull; PORTFOLIO 2026 ]</span>
        </div>
      </div>

      {/* 4. Custom Precision Cursor Suite */}
      <div
        ref={cursorDotRef}
        className="absolute top-0 left-0 z-50 pointer-events-none w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_#E50914]"
      ></div>

      <div
        ref={cursorRingRef}
        className="absolute top-0 left-0 z-50 pointer-events-none w-12 h-12 border border-red-600/60 rounded-full flex items-center justify-center backdrop-blur-[1px]"
      ></div>

      {/* --- NETFLIX-THEMED DEVELOPER NAVBAR --- */}
      <header className="absolute top-0 left-0 z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto">
        <a href="#home" className="text-2xl font-black text-red-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(229,9,20,0.9)]">
          PUJAN<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/80">
          <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#expertise" className="hover:text-red-500 transition-colors">Expertise</a>
          <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:scale-105 active:scale-95"
        >
          Contact
        </a>
      </header>
    </section>
  );
};

export default Hero;