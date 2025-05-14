import React from 'react';
import { Link } from 'react-router-dom';


const QrPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Scan this QR Code</h2>
      <Link to="/qr">
        <img src="/3.png" alt="QR Code" style={{ width: '600px', height: 'auto' }} />
      </Link>
    </div>
  );
};

export default QrPage;