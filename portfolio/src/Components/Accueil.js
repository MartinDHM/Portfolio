import React from "react";
import "../main.css";
import GitHubProjects from "./Github/GithubProjet";
import InteractivePortrait from "./Interactive";
import ParticleContainer from "./Background/Particule";
import Contact from "./Contact";
import AboutMe from "./About";
import { Link } from "react-scroll";

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
              <h3 className="work">
                Développeur <span id="Frontend">Front-end</span>
              </h3>
              <p className="client">
                En tant que développeur front-end passionné, je suis déterminé à
                transformer les idées de mes clients en réalité, en créant des
                interfaces web élégantes et performantes qui captivent
                l'audience et améliorent l'expérience utilisateur.
              </p>
              <Link
                to="contact" // ID de la partie à faire défiler
                spy={true}
                smooth={true}
                offset={-70} // Ajustez l'offset selon vos besoins
                duration={500}
                className="Contact-me"
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="projets-recents">
        <div id="portfolio">
          <div className="projets-recents-content">
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
