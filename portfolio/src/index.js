import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Créez la racine (root) de l'application React
const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
