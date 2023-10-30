import React from "react";
import GitHubProjects from "./Github/GithubProjet";

function Accueil() {
  return (
    <section id="accueil">
      <h2>Page d'accueil</h2>
      <p>
        Bienvenue sur ma page d'accueil ! Voici mes projets GitHub les plus
        récents :
      </p>
      <GitHubProjects />
    </section>
  );
}

export default Accueil;
