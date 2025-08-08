import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { href: '/me/#skills', label: 'SKILLS', key: 'skills' },
  { href: '/me/#projects', label: 'PROJECTS', key: 'projects' },
  { href: '/me/#experience', label: 'EXPERIENCE', key: 'experience' },
  { href: '/me/#about', label: 'ABOUT', key: 'about' },
  { href: '/me/#contact', label: 'CONTACT', key: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/me" className="text-2xl font-bold text-pink">Rahul Sharma</a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </button>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="hover:text-pink uppercase tracking-wide transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:hidden bg-background overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="block hover:text-pink uppercase tracking-wide transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;