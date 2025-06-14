import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
        className="footer-bg"
        alt="Footer background"
      />
      <div className="footer-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
          className="footer-bg-overlay"
          alt="Footer background overlay"
        />
        <div className="footer-inner">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="footer-bg-inner"
            alt="Footer background inner"
          />
          <p className="footer-text">
            Copyright © 2025 - Spotmet | Síguenos:{" "}
            <span style={{fontWeight: 700}}>Instagram</span> |{" "}
            <span style={{fontWeight: 700}}>Facebook</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
