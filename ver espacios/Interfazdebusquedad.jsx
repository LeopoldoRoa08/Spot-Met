import React from 'react';
import './SearchInterface.css';

export const SearchInterface = () => {
  return (
    <section className="search-interface">
      <div className="filter-dropdown">
        Tipo de Espacio
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="search-icon"
            alt="Search icon"
          />
          <input
            type="text"
            placeholder="Buscar espacio..."
            className="search-input"
          />
        </div>
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="search-icon"
            alt="Search icon"
          />
          <input
            type="text"
            placeholder="Buscar espacio..."
            className="search-input"
          />
        </div>
      </div>
      <div className="search-container">
        <div className="search-input-wrapper">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aceaede4e66243e8151004dd6efc680090b2955?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="search-icon"
            alt="Search icon"
          />
          <input
            type="text"
            placeholder="Buscar espacio..."
            className="search-input"
          />
        </div>
      </div>
      <div className="location-dropdown">
        Ubicación
      </div>
    </section>
  );
};
