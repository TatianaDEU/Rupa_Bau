import React, { useState, useEffect } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  // Prüfen, ob der Cookie schon gesetzt ist
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieAccepted="));
    if (!cookie) setVisible(true);
  }, []);

  const acceptCookies = () => {
    // Cookie für 1 Jahr setzen
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `cookieAccepted=true; path=/; max-age=${maxAge}`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={bannerStyle}>
      <span>Diese Website verwendet Cookies, um das Nutzererlebnis zu verbessern.</span>
      <button onClick={acceptCookies} style={buttonStyle}>
        Akzeptieren
      </button>
    </div>
  );
};

const bannerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  background: "#333",
  color: "#fff",
  padding: "15px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  zIndex: 1000,
};

const buttonStyle = {
  marginLeft: "10px",
  padding: "8px 16px",
  background: "#bc462e",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};