import React from 'react';
import '../styles/feature.css';

// Define the feature data as JSON
const featureData = [
  {
    title: "Access up to $100,000",
    description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  },
  {
    title: "You choose invoices to get paid",
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  },
  {
    title: "Simple pricing",
    description: "Only pay for what you use, if you don't need us, there are no costs.",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  },
  {
    title: "Click and quick",
    description: "We fund each invoice once approved and collect payment to optimise your cash flow.*",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  },
  {
    title: "Flexible",
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  },
  {
    title: "Invest in your business",
    description: "Only pay for what you use, if you don't need us, there are no costs.",
    imgSrc: "assets/icon.png",
    altText: "Feature icon",
  }
];

function Feature() {
  return (
    <section className="feature">
      <div className="feature-intro">
        <h1>Outsource payment collection</h1>
        <p>Faster and flexible access to cash flow from one or all your invoices.</p>
      </div>
      <div className="feature-cards">
        {featureData.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.imgSrc} alt={feature.altText} />
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
