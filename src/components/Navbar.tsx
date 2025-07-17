import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from  '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home', icon: '🏠', end: true },
  { to: '/about', label: 'About', icon: 'ℹ️' },
  { to: '/pricing', label: 'Pricing', icon: '💸' },
  { to: '/docs', label: 'Docs', icon: '📄' },
  { to: '/contact', label: 'Contact', icon: '✉️' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-bar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-img" style={{ height: '6.2rem', width: 'auto', marginRight: '0.5rem' }} />
      </div>
      <div className="navbar-links">
        {navLinks.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `navbar-link${isActive ? ' active' : ''}`
            }
            style={{ textTransform: 'uppercase', fontSize: '1.18rem', letterSpacing: '1px' }}
          >
            <span className="navbar-icon" aria-hidden="true">{icon}</span>
            <span className="navbar-label">{label}</span>
          </NavLink>
        ))}
      </div>
      <div className="navbar-actions">
        <button
          className="navbar-menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span style={{ fontSize: '2.2rem' }}>{menuOpen ? '✖️' : '☰'}</span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map(({ to, label, icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `navbar-link${isActive ? ' active' : ''}`
              }
              style={{ textTransform: 'uppercase', fontSize: '1.18rem', letterSpacing: '1px', width: '100%' }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="navbar-icon" aria-hidden="true">{icon}</span>
              <span className="navbar-label">{label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
