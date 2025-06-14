import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { SearchInterface } from './SearchInterface';
import { SpacesSection } from './SpacesSection';
import { Footer } from './Footer';
import './VerEspaciosGeneral.css';

export const VerEspaciosGeneral = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <Header />
        <HeroSection />
        <section className="section-title">
          <h2>Ver espacios</h2>
        </section>
      </div>
      <SearchInterface />
      <SpacesSection />
      <Footer />
    </div>
  );
};

export default VerEspaciosGeneral;
