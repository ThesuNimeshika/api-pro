

const plans = [
  {
    name: 'Starter',
    price: '$0 / month',
    features: [
      { text: '1 Project', icon: '📁' },
      { text: '10,000 API Calls/mo', icon: '🔄' },
      { text: 'Basic Analytics', icon: '📊' },
      { text: 'Community Support', icon: '💬' },
    ],
    buttonText: 'Start for Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49 / month',
    features: [
      { text: '10 Projects', icon: '📁' },
      { text: '1 Million API Calls/mo', icon: '🔄' },
      { text: 'AI-Powered Analytics', icon: '🤖' },
      { text: 'Advanced Security', icon: '🔒' },
      { text: 'Email Support', icon: '✉️' },
    ],
    buttonText: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: "Let's Talk",
    features: [
      { text: 'Unlimited Projects', icon: '📁' },
      { text: 'Custom API Call Volume', icon: '📈' },
      { text: 'On-Premise Deployment', icon: '🏢' },
      { text: 'Security Audits', icon: '🛡️' },
      { text: 'Dedicated 24/7 Support', icon: '🕑' },
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main className="pricing-main">
      <h2 className="pricing-title">Simple, Transparent Pricing for Teams of All Sizes</h2>
      <p className="pricing-subtitle">Start for free and scale as you go. No hidden fees, ever.</p>
      <div className="pricing-grid">
        {plans.map(({ name, price, features, buttonText, popular }) => (
          <div className={`pricing-card${popular ? ' popular' : ''}`} key={name}>
            {popular && (
              <div className="pricing-badge">Most Popular</div>
            )}
            <div className="pricing-header">
              <h3 className="pricing-plan-name">{name}</h3>
              <p className="pricing-plan-price">{price}</p>
            </div>
            <ul className="pricing-features">
              {features.map(({ text, icon }) => (
                <li key={text} className="pricing-feature">
                  <span className="pricing-feature-icon" aria-hidden="true">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>
            <button className="pricing-btn">{buttonText}</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pricing;
