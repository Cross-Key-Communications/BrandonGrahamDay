import React from 'react'
import './Footer.css';

const Footer = () => {
return (
     <footer className="footer">
        <div className="footer-left">
      <img src="/a.png" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Cross Key Communication. All rights reserved.</p>
      </div>
      </footer>
      );
      };

 export default Footer;