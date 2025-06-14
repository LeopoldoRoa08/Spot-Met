import React from 'react';
import './PagoCorrecto.css';

const PagoCorrecto = (props) => {
  return (
    <div className="pago-correcto">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/bf9d49ec4d50453d0e9fc5370c2370a95e22ab81?placeholderIfAbsent=true"
              className="logo-image"
              alt="Logo"
            />
          </div>
          <div className="header-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true"
              className="icon-1"
              alt="Icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/d49db4fe479e1b759474f320fb48445655527ccf?placeholderIfAbsent=true"
              className="icon-2"
              alt="Icon 2"
            />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="content-inner">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/7be1cb732c5b01e11bb85977756605b1d5ac439a?placeholderIfAbsent=true"
            className="background-shape"
            alt="Background shape"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/2443edc34c0b3400625cc69b635ef845fdd9ddec?placeholderIfAbsent=true"
            className="success-icon"
            alt="Success icon"
          />
          <div className="success-title">
            Transacción Exitosa
          </div>
          <div className="reservations-link">
            Ir a mis reservas
          </div>
        </div>
      </div>

      <div className="footer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0ee00be008dd423aadc13fb6ab914f24/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true"
          className="footer-background"
          alt="Footer background"
        />
        <div className="footer-content">
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span className="social-link">Instagram</span> |{" "}
          <span className="social-link">Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default PagoCorrecto;
