import React from "react";
import { useGradient } from "../Components/Button/GradientContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import "../main.css";

function Header() {
  const { gradient, changeGradient } = useGradient();

  return (
    <header
      style={{
        backgroundImage: gradient,
      }}
    >
      <h1 className="Title">Martin Duhem</h1>
      <nav>
        <ul>
          <li>
            <a href="#portfolio" className="header-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="header-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        icon={faPaintBrush}
        onClick={changeGradient}
        className="Color"
      />
    </header>
  );
}

export default Header;
