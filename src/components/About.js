import React from 'react';
import ProfilePhoto from '../ProfilePhoto.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24 text-white"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />

      {/* Decorative gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={ProfilePhoto}
                alt="Rahul Sharma"
                className="rounded-2xl w-56 h-56 md:w-64 md:h-64 object-cover ring-4 ring-emerald-500/60 shadow-xl"
              />
            </div>
          </div>

          {/* Right: Content card */}
          <div className="backdrop-blur-md bg-white/10 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="text-sm font-medium flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 ring-1 ring-inset ring-emerald-400/30">Full Stack Software Engineer II</span>
              <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300 ring-1 ring-inset ring-cyan-400/30">M.S. CS — Illinois Tech</span>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">About Me</h2>
            <p className="mt-2 text-gray-300 italic">“Genius is 1% talent and 99% hard work.”</p>

            <div className="mt-5 space-y-4 text-gray-200 leading-relaxed">
              <p>
                I am a <strong>Full Stack Software Engineer II</strong> at <strong>Cohere Health</strong>, a clinical intelligence company leveraging AI-powered prior authorization to streamline healthcare collaboration—auto-approving a large share of requests and improving access and outcomes. Cohere serves hundreds of thousands of providers and processes millions of requests annually.
              </p>
              <p>
                At Cohere, I apply my <strong>master’s in Computer Science</strong> from the Illinois Institute of Technology to build <strong>scalable, event‑driven architectures</strong>, including a <strong>Kafka‑powered notification system</strong> that reduced operational costs by <strong>95%</strong>. I’ve led initiatives in <strong>multi‑tenancy</strong> and <strong>payer‑agnostic appeal workflows</strong> to boost automation, onboarding speed, and UI flexibility.
              </p>
              <p>
                I’m passionate about <strong>configuration‑driven</strong>, adaptable systems—from dynamic client onboarding to responsive UIs—delivering software that raises <strong>operational efficiency</strong> and <strong>customer outcomes</strong>.
              </p>
            </div>

            {/* Quick stats / highlights */}
            <dl className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-3">
              <Stat label="Cost Reduction" value="95%" />
              <Stat label="Providers Served" value="600k+" />
              <Stat label="Requests / Yr" value="12M+" />
            </dl>

            {/* CTA row (optional) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                View Skills
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg ring-1 ring-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                See Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-4">
    <dt className="text-xs text-gray-300">{label}</dt>
    <dd className="mt-1 text-2xl font-bold text-white">{value}</dd>
  </div>
);

export default About;