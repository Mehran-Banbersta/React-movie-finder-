import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2023 Movie <span className="footer-logo">Finder</span>
        </p>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
