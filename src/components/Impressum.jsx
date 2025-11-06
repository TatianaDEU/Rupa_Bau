import React from "react";

const Impressum = ({ isMobile }) => {
  return (
    <div
      className="py-10 px-4 whitespace-normal break-words"
      style={{
        overflowWrap: "break-word",
        wordBreak: "break-word",
        paddingTop: isMobile ? "50px" : "40px", // Abstand oben bei Mobil
      }}
    >
      {/* Überschrift */}
      <h1
        className="font-bold mb-6"
        style={{ fontSize: isMobile ? "25px" : "32px" }} // kleinerer Titel auf Mobil
      >
        Impressum
      </h1>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>RUPA Bauprojekt GbR</strong><br />
        Baumkampsweg 34A<br />
        38553 Wasbüttel
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Handelsregister:</strong> Handwerkskammer Braunschweig-Lüneburg-Stade
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Vertreten durch:</strong><br />
        Pavel Secrieru<br />
        Ruslan Secrieru-Sandu
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Berufsbezeichnung und zuständige Kammer:</strong><br />
        Bauunternehmer / Bauhandwerk<br />
        Zuständige Kammer: Handwerkskammer Braunschweig-Lüneburg-Stade<br />
        Staat, in dem die Berufsbezeichnung verliehen wurde: Deutschland
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Kontakt:</strong><br />
        Telefon: 01577 4027411 / 0177 4202181<br />
        E-Mail: <a href="mailto:rupa-bauprojekt@gmx.de" style={{ color: "#1d4ed8", textDecoration: "underline" }}>rupa-bauprojekt@gmx.de</a>
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Umsatzsteuer-ID:</strong><br />
        Gemäß § 13b UStG geht die Umsatzsteuerschuld auf den Auftraggeber/Rechnungsempfänger über.
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>EU-Streitschlichtung:</strong><br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" style={{ color: "#1d4ed8", textDecoration: "underline" }}>https://ec.europa.eu/consumers/odr/</a><br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <p style={{ fontSize: isMobile ? "14px" : "16px", marginBottom: "1rem" }}>
        <strong>Verbraucherstreitbeilegung / Universalschlichtungsstelle:</strong><br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  );
};

export default Impressum;