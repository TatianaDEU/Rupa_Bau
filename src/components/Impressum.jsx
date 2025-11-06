import React from "react";

const Impressum = () => {
  return (
    <div
      className="py-10 px-4 whitespace-normal break-words"
      style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
    >
      {/* Überschrift: groß auf Desktop, kleiner auf mobilen Geräten */}
      <h1 className="text-3xl sm:text-2xl font-bold mb-6">Impressum</h1>

      {/* Absätze: Standard 16px, auf Mobilgeräten 14px */}
      <p className="text-base sm:text-sm mb-4">
        <strong>RUPA Bauprojekt GbR</strong><br />
        Baumkampsweg 34A<br />
        38553 Wasbüttel
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Handelsregister:</strong> Handwerkskammer Braunschweig-Lüneburg-Stade
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Vertreten durch:</strong><br />
        Pavel Secrieru<br />
        Ruslan Secrieru-Sandu
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Berufsbezeichnung und zuständige Kammer:</strong><br />
        Bauunternehmer / Bauhandwerk<br />
        Zuständige Kammer: Handwerkskammer Braunschweig-Lüneburg-Stade<br />
        Staat, in dem die Berufsbezeichnung verliehen wurde: Deutschland
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Kontakt:</strong><br />
        Telefon: 01577 4027411 / 0177 4202181<br />
        E-Mail: <a href="mailto:rupa-bauprojekt@gmx.de" className="text-blue-600 underline">rupa-bauprojekt@gmx.de</a>
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Umsatzsteuer-ID:</strong><br />
        Gemäß § 13b UStG geht die Umsatzsteuerschuld auf den Auftraggeber/Rechnungsempfänger über.
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>EU-Streitschlichtung:</strong><br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 underline">https://ec.europa.eu/consumers/odr/</a><br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <p className="text-base sm:text-sm mb-4">
        <strong>Verbraucherstreitbeilegung / Universalschlichtungsstelle:</strong><br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  );
};

export default Impressum;