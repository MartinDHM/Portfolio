import React from "react";
import "../main.css";

function AboutMe() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="about-me" id="about">
      {/* Hero */}
      <div className="about-hero">
        <span className="about-badge">👋 À propos de moi</span>

        <h1>
          Développeur Web <span>&</span> AI Data Specialist
        </h1>

        <p className="about-intro">
          Passionné par les technologies numériques, je combine une expertise en
          <strong> développement web</strong> et en
          <strong> intelligence artificielle</strong> pour créer des solutions
          modernes, fiables et centrées sur les besoins des utilisateurs.
        </p>

        <div className="about-actions">
          <button className="contact-submit-button" onClick={scrollToContact}>
            Me contacter
          </button>

          <a href="#projects" className="contact-badge">
            Voir mes projets
          </a>
        </div>
      </div>

      {/* Cartes */}
      <div className="about-grid">
        <div className="about-card">
          <h3>🚀 Mon parcours</h3>
          <p>
            J'ai commencé par le développement Front-end avant de me spécialiser
            dans l'intelligence artificielle. Aujourd'hui, je mets ces deux
            compétences au service de projets innovants, en combinant expérience
            utilisateur, qualité des données et rigueur technique.
          </p>
        </div>

        <div className="about-card">
          <h3>💡 Ce que je fais</h3>

          <ul>
            <li>Développement Web (React, JavaScript, HTML, CSS)</li>
            <li>Évaluation de modèles LLM</li>
            <li>Annotation & validation de données</li>
            <li>Prompt Engineering & Quality Assurance</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>🤝 Travaillons ensemble</h3>

          <p>
            Vous recherchez un développeur web ou un AI Data Specialist capable
            d'apporter une approche rigoureuse et orientée qualité ? Je serais
            ravi d'échanger avec vous afin de concrétiser votre projet.
          </p>

          <button className="contact-btn" onClick={scrollToContact}>
            Discutons de votre projet →
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
