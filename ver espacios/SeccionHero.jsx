import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1a7bf6d4426185faffdc611ad1027a94645fc5?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
        className="hero-bg"
        alt="Hero background"
      />
      <h1 className="hero-title">Nuestros espacios</h1>
    </section>
  );
};