
import "../App.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title">Everything You Need in One Platform</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3 className="feature-heading">AI-Powered Analytics</h3>
          <p className="feature-description">
            Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-heading">Bank-Grade Security</h3>
          <p className="feature-description">
            Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-heading">Superior Developer Experience</h3>
          <p className="feature-description">
            With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.
          </p>
        </div>
      </div>
    </section>
  );
}
