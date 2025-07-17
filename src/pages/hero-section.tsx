import React from "react";
import "../App.css";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="hero-section" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)",
        padding: "3rem 1rem"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#1e293b"
        }}>
          Effortless API Management. Powerful Results.
        </h1>
        <p style={{
          fontSize: "1.25rem",
          textAlign: "center",
          maxWidth: "600px",
          marginBottom: "2rem",
          color: "#334155"
        }}>
          API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
        </p>
        <button className="hero-btn" style={{
          padding: "0.75rem 2rem",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#6366f1",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
          transition: "background 0.2s"
        }}>
          Get Started for Free
        </button>
      </section>

  
    </>
  );
};

export default HeroSection;
