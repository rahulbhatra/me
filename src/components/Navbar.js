import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: '/me/#skills', label: 'SKILLS', key: 'skills', color: 'text-cyan-400' },
  { href: '/me/#projects', label: 'PROJECTS', key: 'projects', color: 'text-amber-400' },
  { href: '/me/#experience', label: 'EXPERIENCE', key: 'experience', color: 'text-emerald-400' },
  { href: '/me/#about', label: 'ABOUT', key: 'about', color: 'text-purple-400' },
  { href: '/me/#contact', label: 'CONTACT', key: 'contact', color: 'text-pink' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      {/* thin animated accent at the very top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-400 via-pink-400 to-cyan-400" />

      {/* full-width glass/gradient bar */}
      <div className="bg-gradient-to-r from-background via-background/90 to-background backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <a href="/me" className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-pink-400 to-cyan-400">
            Rahul Sharma
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`group relative inline-flex items-center uppercase tracking-wide text-sm transition-colors duration-200 hover:text-pink ${active == item.key ? item.color : ''}`}
                  onClick={() => setActive(item.key)}
                >
                  {item.label}
                  {/* animated underline on hover */}
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-pink-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile dropdown (kept same toggle logic, improved look) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-r from-background via-background/95 to-background backdrop-blur-md border-b border-white/10 shadow-xl">
          <ul className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="block rounded-lg uppercase tracking-wide text-white/90 transition-colors duration-200 hover:text-pink hover:bg-pink/10"
                  onClick={() => { 
                    setActive(item.key)
                    setIsOpen(false) 
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;