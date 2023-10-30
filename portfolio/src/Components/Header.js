// components/Header.js
import React from "react";

function Header() {
  return (
    <header>
      <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
