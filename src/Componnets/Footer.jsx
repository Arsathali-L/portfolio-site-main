import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} L. Arsath Ali — Built with ❤️ using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
