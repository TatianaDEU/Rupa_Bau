import React from "react";

export const Header = (props) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{props.data ? props.data.title : "Loading"}</h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
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