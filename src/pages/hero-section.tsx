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
        overflow: "hidden"
      }}
    >
      {/* Large Soft Glow Ring */}
      <div className="hero-ring"></div>
      {/* Foreground Content */}
      <div className="hero-card">
        <h1>
          Effortless <span className="highlight">API Management</span>. Powerful Results.
        </h1>
        <p>
          API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
        </p>
        <button className="cta-button">
          Get Started for Free
        </button>
      </div>
      {/* Overlay for slight transparency */}
      <div className="hero-bg-overlay" />
    </section>
  );
};

export default HeroSection;
