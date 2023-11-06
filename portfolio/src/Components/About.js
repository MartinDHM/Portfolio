import React from "react";
import "../main.css"; // Importez le fichier CSS

function AboutMe() {
  return (
    <div className="about-me">
      <Section title="Qui suis-je ?">
        En tant que développeur Front-end, je suis animé par la création
        d'interfaces web à la fois élégantes et performantes. Mon domaine
        d'expertise couvre un large éventail de technologies, notamment React,
        JavaScript, et bien d'autres. J'ai une affinité particulière pour la
        conception d'expériences utilisateur qui soient à la fois fluides et
        captivantes.
      </Section>
      <Section title="Mon Histoire">
        Mon parcours m'a conduit récemment à embrasser le domaine du
        développement web. Après avoir suivi avec enthousiasme la formation
        d'Openclassroom, j'ai consolidé mes compétences dans le développement
        Front-end. Auparavant, j'ai exploré d'autres domaines, mais c'est dans
        la création web que j'ai trouvé ma véritable passion.
      </Section>
      <Section title="Ma Philosophie">
        En matière de conception web, je suis un fervent défenseur de la
        simplicité, de la convivialité et de l'accessibilité. Chaque site web
        que je crée est conçu avec l'idée que la technologie devrait servir
        l'humain. Mon objectif est de rendre chaque interaction en ligne aussi
        fluide et agréable que possible, tout en garantissant une accessibilité
        universelle.
      </Section>
      <Section title="Ma Proposition">
        Mon engagement est de créer des expériences web exceptionnelles pour mes
        clients en utilisant des technologies Front-end modernes. Mon approche
        s'adapte à chaque projet pour répondre aux besoins spécifiques. Qu'il
        s'agisse de sites réactifs, de web apps interactives ou d'une
        optimisation de l'expérience utilisateur, je m'engage à fournir des
        solutions sur mesure.
      </Section>
      <Section title="Vous et moi">
        Mon engagement est de créer des expériences web exceptionnelles pour mes
        clients en utilisant des technologies Front-end modernes. Mon approche
        s'adapte à chaque projet pour répondre aux besoins spécifiques. Qu'il
        s'agisse de sites réactifs, de web apps interactives ou d'une
        optimisation de l'expérience utilisateur, je m'engage à fournir des
        solutions sur mesure.
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="about-section">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default AboutMe;
