import React from "react";
import { Link } from "react-scroll"; // Importez Link depuis react-scroll
import "../main.css";

function Header() {
  return (
    <header className="header">
      <h1 className="Title">Portfolio</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="accueil" // ID de la partie à faire défiler
              spy={true}
              smooth={true}
              offset={-70} // Ajustez l'offset selon vos besoins
              duration={500}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="portfolio" // ID de la partie à faire défiler
              spy={true}
              smooth={true}
              offset={-70} // Ajustez l'offset selon vos besoins
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="about" // ID de la partie "About" à faire défiler
              spy={true}
              smooth={true}
              offset={-70} // Ajustez l'offset selon vos besoins
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact" // ID de la partie à faire défiler
              spy={true}
              smooth={true}
              offset={-70} // Ajustez l'offset selon vos besoins
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
