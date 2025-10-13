import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmr63tq",
        "template_eu3mm5c",
        e.target,
        "D3u7hkfkD7a3WMJeB"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setStatus("Nachricht erfolgreich gesendet!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Fehler beim Senden der Nachricht.");
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Kontakt</h2>
                <p>
                  Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns auf Ihre Nachricht!
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Nachricht"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>

                {status && (
                  <div
                    style={{
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "5px",
                      color: status.includes("Fehler") ? "#a94442" : "#3c763d",
                      backgroundColor: status.includes("Fehler") ? "#f2dede" : "#dff0d8",
                      border: status.includes("Fehler") ? "1px solid #ebccd1" : "1px solid #d6e9c6",
                    }}
                  >
                    {status}
                  </div>
                )}

                <button type="submit" className="btn btn-custom btn-lg">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>

          {/* Kontaktinformationen */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              
              <p>
                <span><i className="fa fa-map-marker"></i> Adresse</span>
                {props.data ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.data.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                  >
                    {props.data.address}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><i className="fa fa-phone"></i> Telefon</span>
                {props.data ? (
                  <>
                    <a
                      href={`tel:${props.data.phone1}`}
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      {props.data.phone1}
                    </a>
                    {props.data.phone2 && (
                      <>
                        {", "}
                        <a
                          href={`tel:${props.data.phone2}`}
                          style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                        >
                          {props.data.phone2}
                        </a>
                      </>
                    )}
                  </>
                ) : (
                  "loading"
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><i className="fa fa-envelope-o"></i> E-Mail</span>
                {props.data ? (
                  <a
                    href={`mailto:${props.data.email}`}
                    style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                  >
                    {props.data.email}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>

            {/* NEU: Instagram unter der E-Mail */}
            <div className="contact-item">
              <p>
                <span><i className="fa fa-instagram"></i> Instagram</span>
                {props.data ? (
                  <a
                    href={`https://instagram.com/${props.data.instagram.replace(/^@/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                  >
                    @{props.data.instagram.replace(/^@/, "")}
                  </a>
                ) : (
                  "loading"
                )}
              </p>
            </div>

          </div> 
        </div>
      </div>


      <div id="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Rupa Bauprojekt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </div>
  );
};