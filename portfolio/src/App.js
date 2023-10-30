// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Accueil from "./Components/Accueil";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#portfolio" element={<Portfolio />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
