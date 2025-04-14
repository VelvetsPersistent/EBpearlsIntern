import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Get instant cash flow with invoice factoring</h1>
        <p>Why wait? Get same day funding and a faster way to access cash flow.</p>
        <button className="hero-btn">Get Started</button>
        <div className="slider-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="hero-image">
        <img src="assets/hero-img.png" alt="Cash Flow Illustration" />
      </div>
    </section>
  );
}

export default Hero;
