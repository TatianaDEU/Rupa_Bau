import React from "react";

const Datenschutz = ({ isMobile }) => {
  return (
    <div
      className="py-10 px-4 whitespace-normal break-words"
      style={{
        overflowWrap: "break-word",
        wordBreak: "break-word",
        paddingTop: isMobile ? "50px" : "40px", // mehr Abstand oben auf Mobil
      }}
    >
      <h1
        className="font-bold mb-6"
        style={{ fontSize: isMobile ? "25px" : "32px" }} // kleinerer Titel auf Mobil
      >
        Datenschutzerklärung
      </h1>

      <p>
        Wir legen großen Wert auf den Schutz Ihrer personenbezogenen Daten und behandeln diese vertraulich
        und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).
      </p>

      <p>
        <strong>1. Erhebung und Verarbeitung von Daten:</strong><br />
        Beim Besuch unserer Website werden automatisch Informationen wie Browsertyp, Betriebssystem,
        Referrer-URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage protokolliert.
        Diese Daten dienen ausschließlich statistischen Zwecken und der Verbesserung unserer Website.
      </p>

      <p>
        <strong>2. Kontaktformular und E-Mail-Kontakt:</strong><br />
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben
        (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung gespeichert und über EmailJS, unseren
        E-Mail-Dienstleister, übermittelt. Eine Weitergabe an andere Dritte erfolgt nicht ohne Ihre Einwilligung.
        Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre
        Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung
        berührt wird. Nach Bearbeitung Ihrer Anfrage werden Ihre Daten gelöscht.
      </p>

      <p>
        <strong>3. Cookies:</strong><br />
        Unsere Website verwendet nur unbedingt erforderliche Cookies, die für den Betrieb der Website notwendig sind.
        Über das Cookie-Banner haben Sie die Möglichkeit, weitere Kategorien wie Analytics oder Marketing zu aktivieren.
        Aktuell werden diese Optionen auf der Website nicht genutzt. Ohne Zustimmung werden nur unbedingt erforderliche Cookies gesetzt.
      </p>

      <p>
        <strong>4. Analyse-Tools und Plugins:</strong><br />
        Derzeit werden keine aktiven Analyse- oder Marketing-Tools eingesetzt. Zukünftig können Sie über das
        Cookie-Banner auswählen, welche Kategorien aktiviert werden sollen.
      </p>

      <p>
        <strong>5. Hosting:</strong><br />
        Unsere Website wird bei <strong>Netcup</strong> gehostet. Personenbezogene Daten werden auf den Servern des
        Hosters gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Ein
        Vertrag zur Auftragsverarbeitung besteht, um den Datenschutz zu gewährleisten.
      </p>

      <p>
        <strong>6. Social-Media-Links:</strong><br />
        Auf unserer Website befinden sich Links zu externen Plattformen wie Instagram und Facebook.
        Wir haben keinen Einfluss auf die dortige Datenverarbeitung. Bitte beachten Sie die jeweiligen
        Datenschutzbestimmungen der Plattformen.
      </p>

      <p>
        <strong>7. Rechte der Nutzer:</strong><br />
        Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger
        und Zweck. Außerdem können Sie Berichtigung, Sperrung oder Löschung dieser Daten verlangen sowie unter
        bestimmten Umständen die Einschränkung der Verarbeitung. Zusätzlich haben Sie das Recht auf Datenübertragbarkeit
        sowie auf Beschwerde bei der zuständigen Aufsichtsbehörde.
      </p>

      <p>
        <strong>8. SSL / TLS-Verschlüsselung:</strong><br />
        Unsere Website nutzt SSL-/TLS-Verschlüsselung, um vertrauliche Daten sicher zu übertragen.
        Eine verschlüsselte Verbindung erkennen Sie an "https://" und dem Schloss-Symbol im Browser.
      </p>

      <p>
        <strong>9. Cookie-Banner:</strong><br />
        Beim ersten Besuch erscheint ein Cookie-Banner, um Ihre Einwilligung zur Speicherung bestimmter Cookies einzuholen.
        Ohne Zustimmung werden nur unbedingt erforderliche Cookies gesetzt.
      </p>
    </div>
  );
};

export default Datenschutz;