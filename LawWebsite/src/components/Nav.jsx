import { Link } from "react-router-dom";
import React from 'react';
import './Nav.css';
export default function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/currencies">
          <li>Explore</li>
        </Link>
        <Link to="/about">
          <li>Search Engine</li>
          </Link>
          <Link to="/contact">
          <li>Contact Us</li>
          </Link>
      </ul>
      <div>
        <select className="language-select">
        <option value="en">EN</option>
        <option value="hi">HI</option>
        <option value="bn">BN</option>
        </select>
      </div>
    </nav>

  );
}

