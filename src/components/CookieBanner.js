import React, { useState, useEffect } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  // Prüfen, ob der Cookie schon gesetzt ist
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieAccepted="));
    if (!cookie) setVisible(true);
  }, []);

  const acceptAll = () => {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `cookieAccepted=true; path=/; max-age=${maxAge}`;
    document.cookie = `analytics=true; path=/; max-age=${maxAge}`;
    document.cookie = `marketing=true; path=/; max-age=${maxAge}`;
    setVisible(false);
  };

  const acceptNecessary = () => {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `cookieAccepted=true; path=/; max-age=${maxAge}`;
    document.cookie = `analytics=false; path=/; max-age=${maxAge}`;
    document.cookie = `marketing=false; path=/; max-age=${maxAge}`;
    setVisible(false);
  };

  const saveSettings = () => {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `cookieAccepted=true; path=/; max-age=${maxAge}`;
    document.cookie = `analytics=${preferences.analytics}; path=/; max-age=${maxAge}`;
    document.cookie = `marketing=${preferences.marketing}; path=/; max-age=${maxAge}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={bannerStyle}>
      {!showSettings ? (
        <>
          <span style={{ flex: 1, marginBottom: "10px" }}>
            Wir verwenden Cookies, um Ihr Nutzererlebnis zu verbessern und die Website zu analysieren. 
            Sie können alle akzeptieren oder nur notwendige Cookies zulassen.
          </span>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={acceptAll} style={primaryButton}>
              Alle akzeptieren
            </button>
            <button onClick={acceptNecessary} style={secondaryButton}>
              Nur notwendige
            </button>
            <button onClick={() => setShowSettings(true)} style={secondaryButton}>
              Einstellungen
            </button>
          </div>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <h3 style={{ marginBottom: "10px" }}>Cookie-Einstellungen</h3>
          <div style={checkboxContainer}>
            <label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({ ...preferences, analytics: e.target.checked })
                }
              />{" "}
              Analytics-Cookies (zur Verbesserung der Website)
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({ ...preferences, marketing: e.target.checked })
                }
              />{" "}
              Marketing-Cookies (für personalisierte Inhalte)
            </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={saveSettings} style={primaryButton}>
              Speichern & Schließen
            </button>
            <button onClick={() => setShowSettings(false)} style={secondaryButton}>
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const bannerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  background: "#f8f8f8",
  color: "#333",
  padding: "20px",
  boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  zIndex: 1000,
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
};

const primaryButton = {
  padding: "10px 18px",
  background: "#bc462e",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryButton = {
  padding: "10px 18px",
  background: "#fff",
  color: "#bc462e",
  border: "2px solid #bc462e",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

const checkboxContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "10px",
};