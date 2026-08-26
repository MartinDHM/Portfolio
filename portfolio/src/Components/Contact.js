import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!form.current || status === "loading") return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        "service_5odzdhi",
        "template_e9n5ki5",
        form.current,
        "9I4VmzwtkuzPraE8M",
      );

      form.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-heading">
          <span className="contact-badge">Un projet en tête ?</span>

          <h2>Contactez-moi</h2>

          <p>
            Parlons de votre projet web, de vos besoins en intelligence
            artificielle ou d'une éventuelle collaboration.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-card">
            <span className="contact-info-label">Travaillons ensemble</span>

            <h3>Construisons une solution adaptée à vos besoins.</h3>

            <p>
              Je suis disponible pour des missions en développement web,
              annotation de données, évaluation de modèles LLM et contrôle
              qualité.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  ✉
                </span>

                <div>
                  <strong>E-mail</strong>
                  <a href="mailto: martin.duhem1@gmail.com">
                    martin.duhem1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {status === "success" ? (
              <div className="contact-status contact-success" role="status">
                <div className="contact-status-icon" aria-hidden="true">
                  ✓
                </div>

                <h3>Message envoyé</h3>

                <p>
                  Merci pour votre message. Je vous répondrai dès que possible.
                </p>

                <button
                  type="button"
                  className="contact-secondary-button"
                  onClick={() => setStatus("idle")}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="fullName">Nom complet</label>

                    <input
                      type="text"
                      id="fullName"
                      name="user_name"
                      placeholder="Votre nom"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email">Adresse e-mail</label>

                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="votre@email.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject">Objet</label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Développement web, projet IA..."
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">Votre message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Présentez-moi votre projet ou votre besoin..."
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="contact-error-message" role="alert">
                    Une erreur est survenue. Vérifiez votre connexion ou
                    réessayez dans quelques instants.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="contact-loader" aria-hidden="true" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
