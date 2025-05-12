import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* Logo and Title (left) */}
      <div className="header-left">
        <img src="/a.png" alt="Logo" />
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1>CrossKey Communication</h1>
        </Link>
      </div>

      {/* Navigation links (center) */}
      <nav className="nav-links">
        <Link to="/world">World</Link>
        <Link to="/us">US</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/tech">Tech.</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>

      {/* Search bar (right) */}
      <nav className="search-bar">
        <input type="text" placeholder="Search..." />
      </nav>
    </header>
  );
};

export default Header;
