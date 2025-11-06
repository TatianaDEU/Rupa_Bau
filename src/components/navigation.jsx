import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    { id: "about", label: "Über uns" },
    { id: "services", label: "Leistungen" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Kontakt" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // setzt Unterstrich beim Klick
    }
    setIsOpen(false);
  };

  // Funktion, um die aktuelle Sektion zu erkennen
  const updateActiveSection = () => {
    const scrollPos = window.scrollY + 120; // Offset für Header
    for (let item of menuItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(item.id);
          return;
        }
      }
    }
    setActiveSection("about"); // Standard
  };

  // Beim Laden prüfen: Hash oder Scroll-Position
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuItems.some(item => item.id === hash)) {
      setActiveSection(hash); // sofort korrekt beim Laden
    } else {
      updateActiveSection(); // sonst anhand der Scroll-Position
    }

    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" onClick={handleToggle}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand page-scroll hidden-xs" href="#page-top">
            <span style={{ color: "#bc462e", fontWeight: 700 }}>RUPA</span> Bauprojekt
          </a>

          <a className="navbar-brand page-scroll visible-xs" href="#page-top">
            <img
              src="/img/logo.png"
              alt="RUPA Bauprojekt"
              style={{ height: "65px", display: "block", marginTop: "-20px" }}
            />
          </a>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? "in" : ""}`}>
          <ul className="nav navbar-nav navbar-right">
            {menuItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};