import { Link, useLocation } from 'react-router-dom';
import { PLANITY_URL } from '../../constants/url';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Produits', path: '/products' },
    { label: 'Équipe', path: '/team' },
  ];

  return (
    <header className="bg-black text-white px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-serif">even</div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center text-sm">
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

          {/* Planity CTA */}
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-800 text-white font-semibold px-4 py-2 rounded-full hover:bg-emerald-700 transition"
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </header>
  );
}
