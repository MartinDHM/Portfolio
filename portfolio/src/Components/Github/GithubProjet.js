import React, { useEffect, useState } from "react";
import "../../main.css";

import projet12 from "../../assets/projet12.webp";
import kameha from "../../assets/kameha.webp";
import tmbarbe from "../../assets/tm.webp";
import discordreact from "../../assets/discordreact.webp";

const projectImages = {
  Portfolio: projet12,
  KamehaMaisSpam: kameha,
  TmBarber: tmbarbe,
  DiscordReact: discordreact,
};

const projectDescriptions = {
  Portfolio: {
    description:
      "Bienvenue sur mon portfolio en ligne ! Vous pouvez explorer mes projets, compétences et expériences professionnelles ici.",
    technologies: ["#React", "#JavaScript", "#CSS", "#ParticuleJs"],
  },
  KamehaMaisSpam: {
    description:
      "Plongez dans un univers collaboratif passionnant où les mondes des jeux vidéo et des animés se rencontrent !",
    technologies: ["#HTML", "#CSS", "#Unity"],
  },
  TmBarber: {
    description:
      "Projet réalisé pour un barber. Apprentissage sur bases de données et création d'API.",
    technologies: ["#HTML", "#CSS", "#ReactJS", "#ExpressJS", "#MySQL"],
  },
  DiscordReact: {
    description:
      "Clone de Discord avec React, gestion de salons de discussion et messages en temps réel.",
    technologies: ["#React", "#NodeJS", "#Socket.IO", "#MySQL", "#Auth0"],
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
};

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/MartinDHM/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erreur fetch GitHub:", error));
  }, []);

  // Filtrer seulement les projets que l'on connaît
  const filteredProjects = projects.filter((p) => projectDescriptions[p.name]);

  // Pagination
  const projectsGroups = [];
  for (let i = 0; i < filteredProjects.length; i += 3) {
    projectsGroups.push(filteredProjects.slice(i, i + 3));
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < projectsGroups.length - 1 ? prev + 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : projectsGroups.length - 1));
  };

  return (
    <section>
      <h2 className="projets-title">Mes Projets :</h2>
      {projectsGroups.length > 0 ? (
        <div className="Slider-content">
          <div className="slider-group">
            {projectsGroups[currentPage].map((project) => {
              const name = project.name;
              const description =
                projectDescriptions[name]?.description ||
                "Pas de description disponible.";
              const technologies =
                projectDescriptions[name]?.technologies || [];
              const imageSrc = projectImages[name] || "";
              const links = projectLinks[name] || {};

              return (
                <div key={project.id} className="project-card">
                  <div className="project-content">
                    {imageSrc && (
                      <img className="project-img" src={imageSrc} alt={name} />
                    )}
                    <h3 className="projet-title">{name}</h3>
                    <div>
                      <p className="description">{description}</p>
                      <p className="technologies">
                        {technologies.map((tech, index) => (
                          <div key={index} className="technology">
                            {tech}
                            {index < technologies.length - 1 && (
                              <div className="separator"> </div>
                            )}
                          </div>
                        ))}
                      </p>
                      {links.github || links.githubPages ? (
                        <div className="github-position">
                          {links.githubPages && (
                            <a
                              href={links.githubPages}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              <span>Voir le site</span>
                            </a>
                          )}
                          {links.github && (
                            <a
                              href={links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              <span>Voir sur GitHub</span>
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
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
      ) : (
        <p>Chargement des projets...</p>
      )}
    </section>
  );
};

export default GitHubProjects;
