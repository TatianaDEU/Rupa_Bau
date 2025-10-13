import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setShow(scrollTop > 200); // Ab wann der Pfeil erscheinen soll
    };

    window.addEventListener("scroll", handleScroll, { passive: true });


    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{
        display: show ? "flex" : "none",
      }}
    >
      <FaArrowUp />
    </button>
  );
};