import React, { useEffect, useState } from "react";
import "../../main.css";

import projet12 from "../../assets/projet12.webp";
import kameha from "../../assets/kameha.webp";
import tmbarbe from "../../assets/tm.webp";
import discordreact from "../../assets/DiscordReact.webp";
import pronocdm from "../../assets/pronocdm.webp";
import undercover from "../../assets/undercover.webp";

const projectImages = {
  Portfolio: projet12,
  KamehaMaisSpam: kameha,
  TmBarber: tmbarbe,
  DiscordReact: discordreact,
  PronoCDM: pronocdm,
  Undercover: undercover,
};

const projectDescriptions = {
  Portfolio: {
    description:
      "Bienvenue sur mon portfolio en ligne ! Vous pouvez explorer mes projets, compétences et expériences professionnelles ici.",
    technologies: ["#React", "#JavaScript", "#CSS", "#ParticuleJs"],
  },
  KamehaMaisSpam: {
    description:
      "Création d'un jeu de combat en 2D avec Unity sur une interface web. Apprentissage de la gestion d'animations et de l'intégration web.",
    technologies: ["#HTML", "#CSS", "#Unity"],
  },
  TmBarber: {
    description:
      "Projet réalisé pour un barber. Apprentissage sur bases de données et création d'API.",
    technologies: ["#HTML", "#CSS", "#ReactJS", "#ExpressJS", "#MySQL"],
  },
  DiscordReact: {
    description:
      "Clone de Discord avec React, gestion de salons et messages en temps réel.",
    technologies: ["#React", "#NodeJS", "#Socket.IO", "#MySQL", "#Auth0"],
  },
  PronoCDM: {
    description:
      "Creation d'un site de pronostics sportifs avec React et Node.js. Gestion des utilisateurs, des pronostics et des résultats.",
    technologies: ["#React", "#JavaScript", "#CSS"],
  },
  Undercover: {
    description:
      "Creation du jeu Undercover, un jeu de société en ligne avec React et Node.js. Gestion des parties, des joueurs et des rôles.",
    technologies: ["#React", "#JavaScript", "#CSS"],
  },
};

const projectLinks = {
  Portfolio: {
    github: "https://github.com/MartinDHM/Portfolio",
  },
  KamehaMaisSpam: {
    github: "https://github.com/MartinDHM/KamehaMaisSpam",
    githubPages: "https://martindhm.github.io/KamehaMaisSpam/",
  },
  TmBarber: {
    githubPages: "https://www.tm-barber.com",
  },
  DiscordReact: {
    github: "https://github.com/MartinDHM/DiscordRemake",
  },
  PronoCDM: {
    github: "https://github.com/MartinDHM/PronoCDM",
  },
  Undercover: {
    github: "https://github.com/MartinDHM/UndercoverAnime",
  },
};

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/MartinDHM/repos",
        );

        if (!response.ok) {
          throw new Error("Erreur API GitHub");
        }

        const data = await response.json();

        const localProjectNames = Object.keys(projectDescriptions);

        const mergedProjects = localProjectNames.map((name, index) => {
          const githubProject = data.find((repo) => repo.name === name);

          return githubProject ? githubProject : { id: `local-${index}`, name };
        });

        setProjects(mergedProjects);
      } catch (error) {
        console.error("Erreur fetch GitHub:", error);
      }
    };

    fetchProjects();
  }, []);

  // Pagination par 3 projets
  const projectsGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectsGroups.push(projects.slice(i, i + 3));
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < projectsGroups.length - 1 ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : projectsGroups.length - 1));
  };

  return (
    <section className="projects-section">
      <h2 className="projets-title">Mes Projets :</h2>

      {projectsGroups.length === 0 ? (
        <p>Chargement des projets...</p>
      ) : (
        <>
          <div className="Slider-content">
            <div className="slider-group">
              {projectsGroups[currentPage].map((project) => {
                const name = project.name;

                const description =
                  projectDescriptions[name]?.description ||
                  "Pas de description disponible.";

                const technologies =
                  projectDescriptions[name]?.technologies || [];

                const imageSrc = projectImages[name];

                const links = projectLinks[name] || {};

                return (
                  <div key={project.id || name} className="project-card">
                    {imageSrc && (
                      <img className="project-img" src={imageSrc} alt={name} />
                    )}

                    <div className="project-content">
                      <h3 className="projet-title">{name}</h3>

                      <p className="description">{description}</p>

                      <div className="technologies">
                        {technologies.map((tech) => (
                          <span key={tech} className="technology">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(links.github || links.githubPages) && (
                        <div className="github-position">
                          {links.githubPages && (
                            <a
                              href={links.githubPages}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              Voir le site
                            </a>
                          )}

                          {links.github && (
                            <a
                              href={links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              Voir sur GitHub
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="slider-navigation">
            <button onClick={handlePrevPage} className="slider-button">
              Précédent
            </button>

            <button onClick={handleNextPage} className="slider-button">
              Suivant
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default GitHubProjects;
