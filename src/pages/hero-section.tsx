import React from "react";
import background from "../assets/bg.png";
import "../App.css";

const HeroSection: React.FC = () => {
  // Responsive style helper
  const isMobile = window.innerWidth <= 600;
  return (
    <section
      className="hero-section hero-vibrant"
      style={{
        background: `url(${background}) center/cover no-repeat`,
        position: "relative",
        minHeight: isMobile ? "60vh" : "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "0.2rem" : "2rem",
        overflow: "hidden",
        flexDirection: isMobile ? "column" : "row",
        width: "100vw",
        maxWidth: "100vw"
      }}
    >
      {/* Large Soft Glow Ring */}
      <div className="hero-ring"></div>
      {/* Foreground Content */}
      <div className="hero-card" style={{
        padding: isMobile ? "1rem 0.2rem" : "3rem 2rem",
        maxWidth: isMobile ? "98vw" : "800px",
        fontSize: isMobile ? "0.98em" : undefined,
        borderRadius: isMobile ? "16px" : "24px",
        margin: isMobile ? "0 auto" : undefined,
        boxSizing: "border-box",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: isMobile ? "1.3rem" : undefined }}>
          Effortless <span className="highlight">API Management</span>. Powerful Results.
        </h1>
        <p style={{ fontSize: isMobile ? "1rem" : undefined }}>
          API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
        </p>
        <button className="cta-button" style={{ fontSize: isMobile ? "0.98rem" : undefined, padding: isMobile ? "0.6rem 1.2rem" : undefined }}>
          Get Started for Free
        </button>
      </div>
      {/* Overlay for slight transparency */}
      <div className="hero-bg-overlay" />
    </section>
  );
};

export default HeroSection;
