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
      "Bienvenue sur mon portfolio en ligne ! Vous pouvez explorer mes projets, compétences et expériences professionnelles ici. Aperçu Dans ce portfolio, vous trouverez une variété de projets que j'ai réalisés au fil des années. Ces projets couvrent différents domaines, notamment le développement web, la conception graphique, et bien plus encore",
    technologies: ["#React", "#JavaScript", "#CSS", "#ParticuleJs"],
  },
  KamehaMaisSpam: {
    description:
      "Plongez dans un univers collaboratif passionnant où les mondes des jeux vidéo et des animés se rencontrent ! Notre projet, imprégné de notre passion commune pour ces domaines captivants.",
    technologies: ["#HTML", "#CSS", "#Unity"],
  },
  TmBarber: {
    description:
      "Ici un des projet sur lequel je suis le plus fier, ce projet à été réalisé pour un barber , j'y ai appris beaucoup de chose notamment approndir mon experience dans la conception de base de données et la creation d'API. ",
    technologies: ["#HTML", "#CSS", "#ReactJS", "#ExpressJS", "#MySQL"],
  },
  DiscordReact: {
    description:
      "Développement d’un clone de Discord avec React permettant la gestion de salons de discussion et l’envoi de messages en temps réel.",
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
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const projectsGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectsGroups.push(projects.slice(i, i + 3));
  }

  const handleNextPage = () => {
    if (currentPage < projectsGroups.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(projectsGroups.length - 1);
    }
  };

  return (
    <section>
      <h2 className="projets-title">Mes Projets :</h2>
      <div>
        {projectsGroups.length > 0 && (
          <div className="Slider-content">
            <div className="slider-group">
              {projectsGroups[currentPage].map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-content">
                    <img
                      className="project-img"
                      src={projectImages[project.name]}
                      alt={project.name}
                    />
                    <h3 className="projet-title">{project.name}</h3>
                    <div>
                      <p className="description">
                        {projectDescriptions[project.name].description}
                      </p>
                      <p className="technologies">
                        {projectDescriptions[project.name].technologies.map(
                          (tech, index) => (
                            <div key={index} className="technology">
                              {tech}
                              {index <
                                projectDescriptions[project.name].technologies
                                  .length -
                                  1 && <div className="separator"> </div>}
                            </div>
                          ),
                        )}
                      </p>
                      {projectLinks[project.name] && (
                        <div className="github-position">
                          {projectLinks[project.name].githubPages && (
                            <a
                              href={projectLinks[project.name].githubPages}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-button btn-3"
                            >
                              <span>Voir le site</span>
                            </a>
                          )}
                          <a
                            href={projectLinks[project.name].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button btn-3"
                          >
                            <span> Voir sur GitHub</span>
                          </a>
                        </div>
                      )}
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
    </section>
  );
};

export default GitHubProjects;
