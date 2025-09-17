import React, { useState } from "react";
import { Image } from "./image";

export const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (largeImage) => {
    setSelectedImage(largeImage);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Werfen Sie einen Blick auf unsere abgeschlossenen Bauprojekte und lassen Sie sich von Qualität, Design und Präzision inspirieren.
          </p>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                    <Image
                      title={d.title}
                      smallImage={d.smallImage}
                      largeImage={d.largeImage}
                      onClick={handleImageClick}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>

      {/* Modal für das große Bild */}
      {selectedImage && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </div>
  );
};