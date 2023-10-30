import React, { createContext, useContext, useState } from "react";

const GradientContext = createContext();

function GradientProvider({ children }) {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    "linear-gradient(45deg, #85BF25, #FFFFFF)",
    "linear-gradient(45deg, #FF5733, #FFA800, #FFCB47)",
    "linear-gradient(45deg, #FFE600, #2D3277)",
    "linear-gradient(45deg, #FF6B6B, #3A1111)",
    "linear-gradient(45deg, #0077B5, #FFFFFF)",
    // Ajoutez d'autres dégradés ici
  ];

  const changeGradient = () => {
    setGradientIndex((gradientIndex + 1) % gradients.length);
  };

  return (
    <GradientContext.Provider
      value={{
        gradient: gradients[gradientIndex],
        changeGradient,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
}

function useGradient() {
  return useContext(GradientContext);
}

export { GradientProvider, useGradient };
