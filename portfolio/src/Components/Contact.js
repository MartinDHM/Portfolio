import React, { useState } from "react";
import "../main.css"; // Importez le fichier CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateMailtoLink = () => {
    const { name, email, subject, message } = formData;
    const mailtoUri = `mailto:martin.duhem1@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`
    )}`;
    return mailtoUri;
  };

  // Vérifie si tous les champs sont remplis
  const isFormValid = () => {
    const { name, email, subject, message } = formData;
    return name !== "" && email !== "" && subject !== "" && message !== "";
  };

  const handleContactClick = (e) => {
    if (!isFormValid()) {
      e.preventDefault(); // Empêche le lien de s'ouvrir si le formulaire n'est pas valide
      setFormError("Veuillez remplir tous les champs du formulaire.");
    } else {
      setFormError(null); // Réinitialise l'erreur s'il n'y en a pas
    }
  };

  return (
    <div className="contact-container">
      <div className="wave-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#2a2a2a"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,181.3C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="contact-form">
        <h2>Contactez-moi</h2>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          {formError && <p className="form-error">{formError}</p>}
        </div>
        <a
          href={generateMailtoLink()}
          className={`contact-button ${isFormValid() ? "" : "disabled"}`}
          onClick={handleContactClick}
        >
          Envoyer
        </a>
      </section>
    </div>
  );
}

export default Contact;
