import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/a.png" alt="Logo" />
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>CrossKey Communication</h1>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/world">World</Link>
        <Link to="/us">US</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/tech">Tech.</Link>
        <Link to="/favorite" onClick={() => setMenuOpen(false)}>Favorite</Link>
      </nav>

      <nav className="search-bar">
        <input type="text" placeholder="Search..." />
      </nav>
    </header>
  );
};

export default Header;
