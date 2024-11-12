// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/mission">Mission & SDG</Link></li>
      <li><Link to="/problem">Problem</Link></li>
      <li><Link to="/solution">Solution</Link></li>
      <li><Link to="/challenges">Challenges</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
