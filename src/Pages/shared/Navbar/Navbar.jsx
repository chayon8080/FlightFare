import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../Assets/LOGO.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="FlightFare Logo" className="navbar-logo" />
          FlightFare
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/search-results" onClick={() => setIsMenuOpen(false)}>Search Flights</Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
        </li>
        <li>
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
