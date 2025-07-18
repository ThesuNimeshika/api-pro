import React from "react";
import background from "../assets/bg.png";
import "../App.css";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section hero-vibrant"
      style={{
        background: `url(${background}) center/cover no-repeat`,
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        overflow: "hidden",
        flexDirection: window.innerWidth <= 600 ? "column" : "row"
      }}
    >
      {/* Large Soft Glow Ring */}
      <div className="hero-ring"></div>
      {/* Foreground Content */}
      <div className="hero-card" style={{
        padding: window.innerWidth <= 600 ? "1rem 0.2rem" : "3rem 2rem",
        maxWidth: window.innerWidth <= 600 ? "100vw" : "800px",
        fontSize: window.innerWidth <= 600 ? "0.98em" : undefined,
        borderRadius: window.innerWidth <= 600 ? "16px" : "24px",
        margin: window.innerWidth <= 600 ? "0 0.1rem" : undefined
      }}>
        <h1 style={{ fontSize: window.innerWidth <= 600 ? "1.5rem" : undefined }}>
          Effortless <span className="highlight">API Management</span>. Powerful Results.
        </h1>
        <p style={{ fontSize: window.innerWidth <= 600 ? "1rem" : undefined }}>
          API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
        </p>
        <button className="cta-button" style={{ fontSize: window.innerWidth <= 600 ? "0.98rem" : undefined, padding: window.innerWidth <= 600 ? "0.6rem 1.2rem" : undefined }}>
          Get Started for Free
        </button>
      </div>
      {/* Overlay for slight transparency */}
      <div className="hero-bg-overlay" />
    </section>
  );
};

export default HeroSection;
