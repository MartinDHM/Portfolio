import React, { useEffect, useState } from "react";
import "../../main.css";

const projectImages = {
  "Print-it": require("../../assets/projet6.webp"),
  ArchiWebos: require("../../assets/projet7.webp"),
  "Kasa-App": require("../../assets/projet8.webp"),
  NinaCarducci: require("../../assets/projet9.webp"),
  "724events": require("../../assets/projet10.webp"),
  ArgentBankApp: require("../../assets/projet11.webp"),
  Ohmyfood: require("../../assets/projet3.webp"),
};

const projectLinks = {
  Ohmyfood: {
    github: "https://github.com/MartinDHM/Ohmyfood",
    githubPages: "https://martindhm.github.io/Ohmyfood/",
  },
  "Print-it": {
    github: "https://github.com/MartinDHM/Print-it",
    githubPages: "https://martindhm.github.io/Print-it/",
  },
  ArchiWebos: {
    github: "https://github.com/MartinDHM/ArchiWebos",
  },
  "Kasa-App": {
    github: "https://github.com/MartinDHM/Kasa-App",
  },
  NinaCarducci: {
    github: "https://github.com/MartinDHM/NinaCarducci",
    githubPages: "https://martindhm.github.io/NinaCarducci/",
  },
  "724events": {
    github: "https://github.com/MartinDHM/724events",
  },
  ArgentBankApp: {
    github: "https://github.com/MartinDHM/ArgentBankApp",
  },
};

const projectDescriptions = {
  "Print-it":
    "Ce projet a été créé dans le but de m'immerger dans le monde du langage JavaScript, une technologie extrêmement appréciée par la communauté des développeurs web. Il a été élaboré de manière très éducative, m'accompagnant dans mes premières explorations et m'aidant à maîtriser les fondements de ce langage dynamique",
  ArchiWebos:
    "J'ai eu la chance enthousiasmante d'être affecté en renfort au sein d'une équipe dédiée à la création du site portfolio d'une architecte d'intérieur de grand talent.",
  "Kasa-App":
    "Je suis recruté en freelance par Kasa, un acteur majeur de la location d'appartements entre particuliers en France depuis près de 10 ans. Mon rôle consiste à développer leur nouvelle plateforme web, ce qui représente une excellente opportunité pour enrichir mon portfolio de freelance.",
  NinaCarducci:
    "En tant que développeur freelance, je me lance dans l'offre de services d'optimisation SEO à de nouveaux clients. J'ai préalablement analysé plusieurs sites web et contacté les administrateurs des sites ayant un potentiel d'optimisation pour leur proposer mes services. Parmi mes prospects, se trouve le site de Nina Carducci, une photographe recommandée par un ami",
  "724events":
    "En tant que développeur front-end freelance, je suis sollicité par l'agence événementielle 724events pour une mission. Ils ont pour objectif de mettre en ligne la nouvelle version de leur site vitrine, qui est une page unique",
  ArgentBankApp:
    "Je rejoins Argent Bank en tant que développeur front-end. C'est une nouvelle banque en ligne qui vise à se démarquer dans le secteur bancaire. En collaboration avec Mila, la cheffe de projet, je travaille sur la création du tableau de bord des utilisateurs. Nous recevons deux courriers électroniques du CTO, Avery Moreau",
  Ohmyfood:
    'Mon projet, nommé "OhMyFood", vise à regrouper les menus de restaurants gastronomiques et à proposer bien plus que une simple réservation. Les clients auront la liberté de personnaliser leur menu, et leurs plats seront prêts dès leur arrivée, éliminant ainsi les interminables attentes au restaurant ',
};

function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Page actuelle du slider
  const projectsPerPage = 3; // Nombre de projets à afficher par page

  useEffect(() => {
    fetch("https://api.github.com/users/MartinDHM/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  // Divisez les projets en groupes de trois projets.
  const projectsGroups = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    projectsGroups.push(projects.slice(i, i + projectsPerPage));
  }

  const handleNextPage = () => {
    if (currentPage < projectsGroups.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // Si nous atteignons la dernière page, revenons au début.
      setCurrentPage(0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      // Si nous sommes sur la première page et cliquons sur "Précédent", revenons à la dernière page.
      setCurrentPage(projectsGroups.length - 1);
    }
  };

  return (
    <div>
      {projectsGroups.length > 0 && (
        <div>
          <div className="slider-group">
            {projectsGroups[currentPage].map((project) => (
              <div key={project.id} className="project-card">
                <div
                  style={{
                    backgroundImage: `url(${projectImages[project.name]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p className="description">
                      {projectDescriptions[project.name]}
                    </p>{" "}
                    {/* Affiche la description */}
                    <div>
                      {projectLinks[project.name] && (
                        <>
                          {projectLinks[project.name].githubPages ? (
                            <a
                              href={projectLinks[project.name].githubPages}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button github-pages-button"
                            >
                              Voir les GitHub Pages
                            </a>
                          ) : null}
                          <a
                            href={projectLinks[project.name].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                          >
                            Voir sur GitHub
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-navigation">
            <button
              onClick={handlePrevPage}
              className="slider-button slider-button-prev"
            >
              Précédent
            </button>
            <button
              onClick={handleNextPage}
              className="slider-button slider-button-next"
            >
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubProjects;
