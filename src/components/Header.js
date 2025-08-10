import React from "react";
import Typed from "react-typed-component";


const Header = () => {
  const roles = [
    "Full Stack Software Engineer",
    "Mobile Application Engineer",
    "AI Engineer",
    "Frontend Engineer",
    "Backend Engineer"
  ];

  return (
    <header className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_#0d0f1a_0%,_#131b2c_40%,_#1e2a47_100%)]">
      {/* Decorative background: grid + soft blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="w-full text-center md:text-left">
          <p className="mx-auto md:mx-0 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-white/80 backdrop-blur">
            Available for new opportunities
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi, I'm
            {" "}
            <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Rahul Sharma
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            I build reliable, scalable systems and polished user experiences. Currently focused on
            API design, event-driven architectures, and AI‑assisted products.
          </p>

          <div className="mt-5 text-white/90">
            <span className="mr-2 text-white/60">I work as</span>
            <Typed
                strings={roles}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="/me/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              View Projects
            </a>
            <a
              href="/me/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;