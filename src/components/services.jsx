import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS

export const Services = (props) => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,   // Dauer der Animation
      easing: "ease-in-out",
      once: true       // Animation nur einmal beim Scrollen
    });
  }, []);

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Unsere Leistungen</h2>
          <p>Individuelle Lösungen für jedes Bauvorhaben.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.name}-${i}`} 
                  className="col-md-4"
                  data-aos="fade-up"           // Animation beim Scrollen
                  data-aos-delay={i * 100}    // kleine Verzögerung für Stagger-Effekt
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};