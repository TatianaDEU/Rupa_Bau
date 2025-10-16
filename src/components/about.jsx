import React from "react";

export const About = (props) => {
  const paragraph = props.data?.paragraph || "loading...";

  // Paragraph in Wörter splitten
  const words = paragraph.split(" ");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="/img/about.jpg"
              style={{ borderRadius: "8px" }}
              alt="RUPA Bauprojekt" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Über uns</h2>
              <p>
                {words.map((word, i) => {
                  if (i === 1) {
                    return (
                      <span key={i} style={{ color: "#bc462e", fontWeight: 600 }}>
                        {word}{" "}
                      </span>
                    );
                  } else {
                    return word + " ";
                  }
                })}
              </p>
              <h3>Warum wir?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};