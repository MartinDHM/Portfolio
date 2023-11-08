import React from "react";
import "../main.css";
import GitHubProjects from "./Github/GithubProjet";
import InteractivePortrait from "./Interactive";
import ParticleContainer from "./Background/Particule";
import Contact from "./Contact";
import AboutMe from "./About";

function Accueil() {
  return (
    <section className={`accueil`}>
      <section className="main-content">
        <ParticleContainer />
        <div className="animation">
          <div className="animation-content">
            <InteractivePortrait />
            <div className="Présentation">
              <h2 className="moi">Martin Duhem</h2>
              <p className="work">
                Développeur <span id="Frontend">Front-end</span>
              </p>
              <p className="client">
                En tant que développeur front-end passionné, je suis déterminé à
                transformer les idées de mes clients en réalité, en créant des
                interfaces web élégantes et performantes qui captivent
                l'audience et améliorent l'expérience utilisateur.
              </p>
              <a className="Contact-me" href="#contact">
                Contactez-moi
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="projets-recents">
        <div id="portfolio">
          <div className="projets-recents-content">
            <h2 className="projets-title">Mes Projets :</h2>
            <GitHubProjects />
          </div>
        </div>
      </section>
      <section className="About">
        <div id="about">
          <AboutMe />
        </div>
      </section>
      <section className="Contact-form">
        <div id="contact">
          <Contact />
        </div>
      </section>
    </section>
  );
}

export default Accueil;
