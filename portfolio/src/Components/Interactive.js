import React, { useState } from "react";
import "../main.css";
import Martin from "../assets/Martin.png";

function InteractivePortrait() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`interactive-portrait ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={Martin} alt="Portrait de Martin Duhem" />
      {/* Vous pouvez ajouter des animations CSS pour ce portrait ici */}
    </div>
  );
}

export default InteractivePortrait;
