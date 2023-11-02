import React from "react";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import Header from "./Components/header";
import Accueil from "./Components/Accueil";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/#portfolio" element={<Portfolio />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
