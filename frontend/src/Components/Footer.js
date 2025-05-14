import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 CKC News</p>
      <Link to="/qr">
        <img src="/a.png" alt="QR Link" style={{ width: '80px' }} />
      </Link>
    </footer>
  );
};

export default Footer;
