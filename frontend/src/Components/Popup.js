import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, children }) => {
if (!show) return null;

return (
<div className="popup-overlay">
<div className="popup">
<button className="close-btn" onClick={onClose}>×</button>
<div className="popup-content">
{children}
</div>
</div>
</div>
);
};

export default Popup;