import React, { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Menü schließen nach Klick
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={handleToggle}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* Desktop-Logo (Text) */}
          <a className="navbar-brand page-scroll hidden-xs" href="#page-top">
            <span style={{ color: "#bc462e", fontWeight: 700 }}>RUPA</span> Bauprojekt
          </a>

          {/* Mobile-Logo (Bild) */}
          <a className="navbar-brand page-scroll visible-xs" href="#page-top">
            <img src="/img/logo.png" alt="RUPA Bauprojekt" style={{ height: "65px", display: "block", marginTop: "-20px"  }} />
          </a>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? "in" : ""}`}>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "about")}>
                Über uns
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "services")}>
                Leistungen
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};