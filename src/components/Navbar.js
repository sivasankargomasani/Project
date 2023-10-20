// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
//import './Navbar.css'; // You can create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://www.infotechinc.com/_nuxt/3fd7c1d1486cd4d75814f1e3a276ba29.svg" alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
