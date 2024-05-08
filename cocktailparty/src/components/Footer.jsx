import React from 'react';
import './footer.css';
import logo from "./logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Address: </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Cocktail Party. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
