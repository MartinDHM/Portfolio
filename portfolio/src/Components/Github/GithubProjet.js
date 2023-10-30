// GitHubProjects.js
import React, { useEffect, useState } from "react";
import "../../main.css";

// Créez un objet pour associer les noms de projet aux images
const projectImages = {
  "Projet-9-NinaCarducci": require("../../assets/projet9.webp"),
  "Projet-10-724events": require("../../assets/projet10.webp"),
  "Projet-11-ArgentBank": require("../../assets/projet11.webp"),
};

function GitHubProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/MartinDHM/repos?sort=created&per_page=3"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div>
      <div className="card-container">
        {Array.isArray(projects) &&
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={projectImages[project.name]} alt={project.name} />
              <h4 className="project-title">{project.name}</h4>
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                className="gitLink"
              >
                Voir sur GitHub
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GitHubProjects;
