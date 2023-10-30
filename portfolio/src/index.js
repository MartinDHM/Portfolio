import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { GradientProvider } from "./Components/Button/GradientContext";

ReactDOM.render(
  <Router>
    <GradientProvider>
      <App />
    </GradientProvider>
  </Router>,
  document.getElementById("root")
);
