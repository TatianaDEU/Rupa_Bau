import React from "react";

export const Header = (props) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prüfen, ob Daten vorhanden sind
  const paragraph = props.data?.paragraph || "Loading";
  const highlightWord = "Rupa";

  // Text splitten, um das Wort „Rupa“ einzufärben
  const parts = paragraph.split(new RegExp(`(${highlightWord})`, "gi"));

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{props.data ? props.data.title : "Loading"}</h1>
                <p>
                  {parts.map((part, i) =>
                    part.toLowerCase() === highlightWord.toLowerCase() ? (
                      <span key={i} style={{ color: "#bc462e", fontWeight: 600 }}>
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg"
                  onClick={handleScroll}
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};