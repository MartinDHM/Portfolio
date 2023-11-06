import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons"; // Importez l'icône pour le mode clair
import "../main.css";

function Header() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header-content">
        <h1 className="Title">Portfolio</h1>
        <nav>
          <ul className="header-nav">
            <li>
              <a href="#about" className="header-link">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="header-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
