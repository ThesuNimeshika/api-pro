

const companies = [
  { name: "InnovateCorp", icon: "💡" },
  { name: "QuantumLeap Tech", icon: "🚀" },
  { name: "DataWeave Solutions", icon: "🧬" },
  { name: "NextGen Systems", icon: "🔗" },
  { name: "Apex Digital", icon: "🌐" }
];

export default function SocialProofSection() {
  return (
    <section className="social-proof-section">
      <h2 className="social-proof-title">Trusted by the World's Most Innovative Companies</h2>
      <div className="social-proof-logos">
        {companies.map((company, idx) => (
          <span
            key={company.name}
            className="social-proof-logo"
            style={{
              animation: `fadeInUp 0.6s ${0.1 + idx * 0.1}s both`
            }}
          >
            <span style={{ fontSize: "1.3em", marginRight: "0.5em" }}>{company.icon}</span>
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
