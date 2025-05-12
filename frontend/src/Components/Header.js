import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/a.png" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
        <h1 style={{ margin: 0 }}>Cross Key Communication</h1>
      </div>

      <nav className="nav-links">
        <ul className="nav-list">
          <li className="dropdown">
            <a href="#world">World</a>
            <ul className="dropdown-content">
              <li><a href="#india">India</a></li>
              <li><a href="#canada">Canada</a></li>
              <li><a href="#uk">UK</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#us">US</a>
            <ul className="dropdown-content">
              <li><a href="#newyork">New York</a></li>
              <li><a href="#california">California</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#politics">Politics</a>
            <ul className="dropdown-content">
              <li><a href="#elections">Elections</a></li>
              <li><a href="#policies">Policies</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#entertainment">Entertainment</a>
            <ul className="dropdown-content">
              <li><a href="#movies">Movies</a></li>
              <li><a href="#music">Music</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#tech">Tech</a>
            <ul className="dropdown-content">
              <li><a href="#ai">AI</a></li>
              <li><a href="#gadgets">Gadgets</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;