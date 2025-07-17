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
          >
            <span className="navbar-icon" aria-hidden="true">{icon}</span>
            <span className="navbar-label">{label}</span>
          </NavLink>
        ))}
      </div>
      <div className="navbar-actions">
        <button className="navbar-signin">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
