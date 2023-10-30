import React from "react";
import { useGradient } from "../Components/Button/GradientContext";
import GitHubProjects from "./Github/GithubProjet";
import Martin from "../assets/dev_front.png";
import "../main.css";

function Accueil() {
  const { gradient } = useGradient();
  return (
    <section id="accueil">
      <section className="presentation">
        <div className="presentation-text">
          <h2 className="Accueil-about">À Propos :</h2>
          <p>
            Je suis Martin Duhem, un développeur Front-end passionné par la
            création de sites web et d'applications interactives. À l'âge de 22
            ans, j'ai décidé de changer de carrière pour suivre ma passion en
            devenant intégrateur web. Ma formation en intégration web m'a permis
            d'acquérir des compétences solides dans la conception et le
            développement d'interfaces utilisateur conviviales et esthétiques.
            Je suis constamment en quête de nouvelles opportunités pour
            perfectionner mes compétences et relever des défis techniques
            passionnants. Vous trouverez ci-dessous quelques-uns de mes projets
            GitHub les plus récents qui illustrent mon engagement envers
            l'excellence dans le développement Front-end. N'hésitez pas à
            explorer ces projets et à me contacter si vous avez des questions ou
            si vous souhaitez collaborer sur un projet.
          </p>
        </div>
        <div className="profile-image">
          <img src={Martin} alt="Moi" />
        </div>
      </section>
      <section className="Projet-recent" style={{ backgroundImage: gradient }}>
        <h2 className="Accueil-title">Projets récents :</h2>
        <GitHubProjects />
      </section>
    </section>
  );
}

export default Accueil;