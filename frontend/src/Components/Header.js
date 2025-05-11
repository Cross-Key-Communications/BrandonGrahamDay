import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
    <div className="header-left">
      <img src="/a.png" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
      <h1 style={{ margin: 0 }}>Cross Key Communication</h1>
      </div>
      <nav style={{ flex:1, textAlign: 'center' }}>
        <a href="#world" style={{ marginRight: '15px', color: 'white' }}>World</a>
        <a href="#US" style={{ marginRight: '15px', color: 'white' }}>US</a>
        <a href="#politics" style={{ marginRight: '15px' , color: 'white' }}>Politics</a>
        <a href="#entertainment" style={{ marginRight: '15px' , color: 'white' }}>Entertainment</a>
         <a href="#tech." style={{ color: 'white' }}>Tech.</a>
      </nav>
      <nav style={{ flex:1, textAlign: 'right' }}>
      <input type="text" placeholder="Search..." style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #ccc'}} /> </nav>
    </header>
  );
};

export default Header;