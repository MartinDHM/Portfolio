import React from "react";
import "../main.css";
import GitHubProjects from "./Github/GithubProjet";
import InteractivePortrait from "./Interactive";
import ParticleContainer from "./Background/Particule";

function Accueil() {
  // Définissez la variable email avec une adresse e-mail valide
  // const email = "martin.duhem1@email.com";

  // const emailLinkStyle = {
  //   fontWeight: "bold", // Mettre le texte en gras
  // };

  return (
    <section className={`accueil`}>
      <div className="main-content">
        <ParticleContainer />
        <div className="animation">
          <div className="animation-content">
            <InteractivePortrait />
            <div className="Présentation">
              <h1 className="moi">Martin Duhem</h1>
              <p className="work">
                Développeur <span id="Frontend">Front-end</span>
              </p>
              <p className="client">
                En tant que développeur front-end passionné, je suis déterminé à
                transformer les idées de mes clients en réalité, en créant des
                interfaces web élégantes et performantes qui captivent
                l'audience et améliorent l'expérience utilisateur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projets-recents">
        <div className="projets-recents-content">
          <h2 className="projets-title">Mes Projets :</h2>
          <GitHubProjects />
        </div>
      </div>
    </section>
  );
}

export default Accueil;
