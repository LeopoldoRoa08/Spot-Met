import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77b8ff4ba2afaa7ddf0df15f18ca953b769a9252?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="logo-1"
            alt="Logo 1"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19207533a2b7aa690b00293b62d2cb3a44e9ad71?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="logo-2"
            alt="Logo 2"
          />
        </div>
        <nav className="nav-section">
          <div className="nav-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
              className="nav-icon-bg"
              alt="Navigation icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
              className="nav-icon-overlay"
              alt="Navigation icon overlay"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fc559447a9ffe1db338d67dbfa0da853f88b427?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="nav-icon-2"
            alt="Navigation icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="nav-icon-3"
            alt="Navigation icon"
          />
        </nav>
      </div>
    </header>
  );
};
