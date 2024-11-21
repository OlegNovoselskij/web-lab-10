import React from 'react';
import './showMore.css';

function FooterButton({ onClick }) {
  return (
    <div className="footer-button">
      <button onClick={onClick}>View More</button>
    </div>
  );
}

export default FooterButton;
