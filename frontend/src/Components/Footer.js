import React from 'react'

const Footer = () => {
return (
    <footer style={{ backgroundColor: '#0c0200', padding: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '40px' }}>
    <div style ={{ display: 'flex', alignItems: 'center' }}>
      <img src="/a.png" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
      <p style={{ margin: 0 }}>© {new Date() .getFullYear()} Cross Key Communication. All rights reserved.</p>
      </div>
      </footer>
      );
      };

 export default Footer;