import React from 'react';
import './navbar.css';
import { useState } from "react"
import menuImage from '../../assets/images/menu.png';
import logo from '../../assets/images/empanada.png';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <img src={logo} alt=""/>
      <a href="/" className="brand-name">
        EmpanadaReview
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <img src={menuImage} alt=''/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
