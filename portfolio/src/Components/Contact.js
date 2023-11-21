import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5odzdhi",
        "template_e9n5ki5",
        form.current,
        "9I4VmzwtkuzPraE8M"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contact-container">
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
      <div className="contact-form">
        <h2>Contactez-moi</h2>
        <div className="form-container">
          {isLoading ? (
            <div className="loading-container">
              <p className="loading-message">Envoi en cours...</p>
              <div className="loader"></div>
            </div>
          ) : isSent ? (
            <p className="confirmation-message">
              Votre message a été envoyé avec succès!
            </p>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="fullName">Nom :</label>
                <input
                  type="text"
                  id="fullName"
                  name="user_name"
                  placeholder="Nom complet"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email_id">E-mail :</label>
                <input
                  type="email"
                  id="email_id"
                  name="user_email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <input type="submit" value="Envoyer" className="contact-button" />
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
