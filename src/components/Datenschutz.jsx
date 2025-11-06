import React from "react";

const Datenschutz = () => {
  return (
    <div className="py-10 px-4 whitespace-normal break-words" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p>
        Wir legen großen Wert auf den Schutz Ihrer personenbezogenen Daten und behandeln diese vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).
      </p>

      <p>
        <strong>1. Erhebung und Verarbeitung von Daten:</strong><br />
        Beim Besuch unserer Website werden automatisch Informationen wie Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage protokolliert. Diese Daten dienen ausschließlich statistischen Zwecken und der Verbesserung unserer Website.
      </p>

      <p>
        <strong>2. Kontaktformular und E-Mail-Kontakt:</strong><br />
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben zum Zweck der Bearbeitung gespeichert. Eine Weitergabe an Dritte erfolgt nicht ohne Ihre Einwilligung. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.
      </p>

      <p>
        <strong>3. Cookies:</strong><br />
        Unsere Website verwendet Cookies, um bestimmte Funktionen bereitzustellen und die Benutzerfreundlichkeit zu verbessern. Session-Cookies werden nach dem Besuch automatisch gelöscht, permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie können die Installation von Cookies in Ihren Browser-Einstellungen verhindern. In diesem Fall kann die Funktionalität der Website eingeschränkt sein.
      </p>

      <p>
        <strong>4. Analyse-Tools und Plugins:</strong><br />
        Wir nutzen folgende Tools auf unserer Website:
        <ul className="list-disc ml-5 mt-2">
          <li>Google Analytics (mit IP-Anonymisierung) – <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Opt-Out möglich</a></li>
          <li>Google Maps</li>
          <li>Google Web Fonts</li>
          <li>Google reCAPTCHA (Schutz vor Spam im Kontaktformular)</li>
          <li>YouTube-Plugins</li>
          <li>WhatsApp-Kontakt (Telefonnummer und Nachrichten werden bei WhatsApp gespeichert)</li>
        </ul>
      </p>

      <p>
        <strong>5. Hosting:</strong><br />
        Unsere Website wird bei <strong>Netcup</strong> gehostet. Personenbezogene Daten werden auf den Servern des Hosters gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Es besteht ein Vertrag zur Auftragsverarbeitung mit Netcup, um den Datenschutz zu gewährleisten.
      </p>

      <p>
        <strong>6. Rechte der Nutzer:</strong><br />
        Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und Zweck. Außerdem können Sie Berichtigung, Sperrung oder Löschung dieser Daten verlangen sowie unter bestimmten Umständen die Einschränkung der Verarbeitung. Zusätzlich haben Sie das Recht auf Datenübertragbarkeit sowie auf Beschwerde bei der zuständigen Aufsichtsbehörde.
      </p>

      <p>
        <strong>7. Verantwortlicher für den Datenschutz:</strong><br />
        RUPA Bauprojekt GbR<br />
        Tatiana Miller<br />
        E-Mail: <a href="mailto:rupa-bauprojekt@gmx.de" className="text-blue-600 underline" style={{ wordBreak: "break-word" }}>rupa-bauprojekt@gmx.de</a>
      </p>

      <p>
        <strong>8. SSL / TLS-Verschlüsselung:</strong><br />
        Unsere Website nutzt SSL-/TLS-Verschlüsselung, um vertrauliche Daten sicher zu übertragen. Eine verschlüsselte Verbindung erkennen Sie an "https://" und dem Schloss-Symbol im Browser.
      </p>

      <p>
        <strong>9. Cookie-Banner:</strong><br />
        Beim ersten Besuch erscheint ein Cookie-Banner, um Ihre Einwilligung zur Speicherung bestimmter Cookies einzuholen. Ohne Zustimmung werden nur unbedingt erforderliche Cookies gesetzt.
      </p>
    </div>
  );
};

export default Datenschutz;