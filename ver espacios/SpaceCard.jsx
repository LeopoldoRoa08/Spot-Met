import React from 'react';
import './SpaceCard.css';

export const SpaceCard = ({
  title,
  description,
  imageUrl,
  sideImageUrl,
  isReversed = false
}) => {
  const cardContent = (
    <div className="space-card">
      <h2 className="space-card-title">
        {title}
      </h2>
      <article className="space-card-content">
        <img
          src={imageUrl}
          className="space-card-image"
          alt={title}
        />
        <p className="space-card-description">
          {description}
        </p>
        <div className="space-card-footer">
          <span className="more-info-text">
            Más información
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="arrow-icon"
            alt="Arrow icon"
          />
        </div>
      </article>
    </div>
  );

  const sideImage = (
    <img
      src={sideImageUrl}
      className="side-image"
      alt={`${title} side image`}
    />
  );

  return (
    <div className="space-card-container">
      <div className="space-card-column">
        {isReversed ? sideImage : cardContent}
      </div>
      <div className="space-card-column space-card-column-right">
        {isReversed ? cardContent : sideImage}
      </div>
    </div>
  );
};
