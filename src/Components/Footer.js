import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="last-section">
          <Link to="/about" id="a" className="link">About</Link>
          <Link to="/contact" id="c" className="link">Contact Us</Link>
          <Link to="/help" id="h" className="link">Help</Link>
          <div className="lasticons">
            Find us on:
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" id="f">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" id="t">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" id="i">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
