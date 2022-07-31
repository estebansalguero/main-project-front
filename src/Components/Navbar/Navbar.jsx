import React from 'react';
import './navbar.css';
import { useState } from "react"
import menuImage from '../../assets/images/menu.png';
import logo from '../../assets/images/empanada.png';

function Navbar() {
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Users">Users</a>
          </li>
          <li>
            <a href="/Reviews">Reviews</a>
          </li>
          <li>
            <a href="/Profile">Profile</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;