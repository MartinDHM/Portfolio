// InteractivePortrait.jsx
import React, { useState } from "react";
import "../main.css"; // Importe le fichier CSS pour les styles
import Martin from "../assets/Martin.jpg"; // Importe l'image du portrait

function InteractivePortrait() {
  const [isHovered, setIsHovered] = useState(false); // Utilise l'état local "isHovered" pour gérer le survol de la souris

  const handleMouseEnter = () => {
    setIsHovered(true); // Gère l'événement de survol de la souris en mettant "isHovered" à true
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Gère l'événement de sortie de la souris en mettant "isHovered" à false
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
