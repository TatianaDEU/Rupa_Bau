import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("");
  const [openInfo, setOpenInfo] = useState(null); // "impressum", "datenschutz" oder null
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 560);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iaj5qk8",
        "template_rox90sk",
        e.target,
        "31ixz013BMF8ViNvV"
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
                  />
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
                <div className="address-separator"></div>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            {props.data ? (
              <>
                <div className="contact-item">
                  <p>
                    <span><i className="fa fa-map-marker"></i> Adresse</span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        props.data.address.replace(/\n/g, " ")
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      {props.data.address.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </a>
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span><i className="fa fa-phone"></i> Telefon</span>
                    <a
                      href={`tel:${props.data.phone1}`}
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      {props.data.phone1}
                    </a>
                    {props.data.phone2 && (
                      <>
                        <br />
                        <a
                          href={`tel:${props.data.phone2}`}
                          style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                        >
                          {props.data.phone2}
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span><i className="fa fa-envelope-o"></i> E-Mail</span>
                    <a
                      href={`mailto:${props.data.email}`}
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      {props.data.email}
                    </a>
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span><i className="fa fa-instagram"></i> Instagram</span>
                    <a
                      href={`https://instagram.com/${props.data.instagram.replace(/^@/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      @{props.data.instagram.replace(/^@/, "")}
                    </a>
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span><i className="fa fa-facebook"></i> Facebook</span>
                    <a
                      href="https://www.facebook.com/rupa.bauprojekt"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}
                    >
                      @rupa.bauprojekt
                    </a>
                  </p>
                </div>
              </>
            ) : (
              "loading"
            )}
          </div>
        </div>
      </div>

      <div id="footer" className="bg-neutral-900 text-neutral-400 text-center py-6 text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} RUPA Bauprojekt GbR. Alle Rechte vorbehalten.</p>
          <p className="text-xs text-neutral-500">
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setOpenInfo("impressum")}
            >
              Impressum
            </span>{" "}
            |{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setOpenInfo("datenschutz")}
            >
              Datenschutz
            </span>
          </p>
          <p className="text-xs text-neutral-500">Design & Entwicklung von Tatiana Miller</p>
        </div>
      </div>

{openInfo && (
  <div
    onClick={() => setOpenInfo(null)} // Klick auf Overlay schließt das Modal
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // oben ausrichten
      zIndex: 1000,
      padding: isMobile ? "60px 10px 10px 10px" : "20px", // mehr Abstand oben auf Mobil
      overflowY: "auto",
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="modal-content"
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "600px",
        maxHeight: "90vh",
        overflowY: "auto",
        boxSizing: "border-box",
        whiteSpace: "normal",
        wordBreak: "break-word",
        fontSize: "16px",
      }}
    >
      <div style={{ width: "100%" }}>
        {openInfo === "impressum" && <Impressum isMobile={isMobile} />}
        {openInfo === "datenschutz" && <Datenschutz isMobile={isMobile} />}
      </div>
      <button
        style={{
          marginTop: "20px",
          marginBottom: isMobile ? "30px" : "20px",
          padding: "12px 0",
          width: "100%",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#bc462e",
          color: "#fff",
          border: "none",
        }}
        onClick={() => setOpenInfo(null)}
      >
        Schließen
      </button>
    </div>
  </div>
)}
    </div>
  );
};