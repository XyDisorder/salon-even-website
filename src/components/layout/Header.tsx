import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PLANITY_URL } from '../../constants/url';
import even2 from '../../assets/even2.svg';

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Équipe', path: '/team' },
  ];

  return (
    <header className="bg-black text-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src={even2}
          alt="Even Logo"
          className="h-10 w-auto"
          style={{ filter: 'invert(1)' }}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:opacity-80 transition-opacity ${
                location.pathname === item.path ? 'font-semibold' : 'font-light'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 text-white font-semibold px-4 py-2 rounded-full hover:bg-emerald-700 transition"
          >
            Prendre rendez-vous
          </a>
        </nav>

        {/* Burger button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 border-b border-gray-700 ${
                location.pathname === item.path ? 'font-semibold' : 'font-light'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-emerald-800 text-white font-semibold px-4 py-2 rounded-full text-center hover:bg-emerald-700 transition"
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </header>
  );
}