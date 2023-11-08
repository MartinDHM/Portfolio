import React from "react";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import Header from "./Components/Header";
import Accueil from "./Components/Accueil";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
