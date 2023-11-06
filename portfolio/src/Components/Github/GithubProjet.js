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
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {projectsGroups.length > 0 && (
        <div>
          <div className="slider-group">
            {projectsGroups[currentPage].map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  backgroundImage: `url(${projectImages[project.name]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="project-content">
                  <h3>{project.name}</h3> {/* Affiche le titre du projet */}
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
            ))}
          </div>
          <div className="slider-navigation">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="slider-button"
            >
              Précédent
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === projectsGroups.length - 1}
              className="slider-button"
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
