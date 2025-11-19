import React, { useState, useEffect } from "react";

const images = [
  "/GuviCertification - advance_js.png",
  "/GuviCertification - react.png",
  "/GuviCertification - final.png",
  "/GuviCertification - database.png",
  "/GuviCertification - node.png",
  "/GuviCertification - javascript.png",
  "/GuviCertification - html,css.png",
];

export default function CertificateSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [hover, setHover] = useState(false);

  const gold = "#d4af37";

  // Automatic slideshow respecting hover
  useEffect(() => {
    const slide = setInterval(() => {
      if (!hover) next();
    }, 2800);

    return () => clearInterval(slide);
  }, [hover]);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  // PAGE styles
  const sectionStyle = {
    padding: "70px 0",
    textAlign: "center",
    color: "#ffffff",
  };

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "600",
    marginBottom: "40px",
  };

  const wrapperStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "650px",
    margin: "auto",
  };

  const containerStyle = {
    overflow: "hidden",
    borderRadius: "18px",
    boxShadow: hover
      ? `0 0 25px ${gold}`
      : "0 0 20px rgba(0,0,0,0.35)",
    transition: "all 0.4s ease",
    transform: hover ? "scale(1.04)" : "scale(1)",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
    opacity: fade ? 1 : 0,
    transition: "opacity 0.6s ease-in-out",
  };

  // BUTTON STYLE
  const navButton = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: gold,
    color: "#1b1733",
    padding: "12px 25px",
    borderRadius: "999px",
    border: "2px solid transparent",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
  };

  return (
    <div id="certificates" style={sectionStyle}>
      <h2 style={titleStyle}>
        <span style={{ color: gold }}>{"<"}</span>
        Certificates
        <span style={{ color: gold }}>{"/>"}</span>
      </h2>

      <div style={wrapperStyle}>
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          style={{ ...navButton, left: "-95px" }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.border = `2px solid ${gold}`;
            e.target.style.color = gold;
            e.target.style.boxShadow = `0 0 15px ${gold}`;
            e.target.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = gold;
            e.target.style.border = "2px solid transparent";
            e.target.style.color = "#1b1733";
            e.target.style.boxShadow = "none";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          ‹ Prev
        </button>

        {/* IMAGE */}
        <div
          style={containerStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src={images[current]} alt="Certificate" style={imageStyle} />
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          style={{ ...navButton, right: "-95px" }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.border = `2px solid ${gold}`;
            e.target.style.color = gold;
            e.target.style.boxShadow = `0 0 15px ${gold}`;
            e.target.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = gold;
            e.target.style.border = "2px solid transparent";
            e.target.style.color = "#1b1733";
            e.target.style.boxShadow = "none";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}
