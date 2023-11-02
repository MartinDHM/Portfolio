import React from "react";
import "../main.css";
import GitHubProjects from "./Github/GithubProjet";
import InteractivePortrait from "./Interactive";

function Accueil() {
  // Définissez la variable email avec une adresse e-mail valide
  const email = "martin.duhem1@email.com";

  const emailLinkStyle = {
    fontWeight: "bold", // Mettre le texte en gras
  };

  return (
    <div className={`accueil`}>
      <header className="header">
        <div className="header-content">
          <h1 className="Hello">
            <span style={{ whiteSpace: "nowrap" }}>
              Bienvenue ! Je suis Martin Duhem, Développeur Front-End, si mon
              Portfolio vous a plu, Cliquez :
              <a
                href={`mailto:${email}`}
                className="email-address"
                style={emailLinkStyle}
              >
                {email}
              </a>
            </span>
          </h1>
        </div>
      </header>
      <div className="main-content">
        <section className="animation">
          <div className="animation-content">
            <InteractivePortrait />
          </div>
        </section>
      </div>
      <section className="projets-recents">
        <div className="projets-recents-content">
          <h2 className="projets-title">Mes Projets :</h2>
          <GitHubProjects />
        </div>
      </section>
    </div>
  );
}

export default Accueil;
