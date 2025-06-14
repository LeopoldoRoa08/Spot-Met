import React from 'react';
import { SpaceCard } from './Spacecard';
import './SpacesSection.css';

export const SpacesSection = () => {
  return (
    <section className="spaces-section">
      <div className="spaces-container">
        <div className="spaces-content">
          <SpaceCard
            title="Laboratorios"
            description="Utilizados para la investigación y enseñanza en sus programas de pregrado y posgrado. Estos laboratorios pueden incluir áreas como biología, química, física, entre otros programas ofrecidos por la universidad"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d0816167c991067b2a44af5e9e2255116d1a2165?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            sideImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce37279781e723ce00d001299e68568a2ac47e5?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
          />
        </div>

        <div className="spaces-content-2">
          <div className="centro-mundo-container">
            <div className="centro-mundo-column">
              <div className="centro-mundo-card">
                <h2 className="centro-mundo-title">
                  Centro Mundo X
                </h2>
                <article className="centro-mundo-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a007d6d6df8627f6123ff606b81e59317b93cdf?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                    className="centro-mundo-image"
                    alt="Centro Mundo X"
                  />
                  <p className="centro-mundo-description">
                    Espacio único dedicado al desarrollo de gemelos digitales
                    y experiencias inmersivas en el metaverso. Esta iniciativa
                    posiciona a la UNIMET como líder en la transformación
                    digital aplicada a la educación y la industria.{" "}
                  </p>
                  <div className="centro-mundo-footer">
                    <span className="centro-mundo-more-info">
                      Más información
                    </span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                      className="centro-mundo-arrow"
                      alt="Arrow icon"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="centro-mundo-side">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa49bbe9922ce850556001df9812de73c1f359e?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                className="centro-mundo-side-image"
                alt="Centro Mundo X side image"
              />
            </div>
          </div>
        </div>

        <div className="spaces-content-3">
          <div className="canchas-container">
            <div className="canchas-column">
              <div className="canchas-card">
                <h2 className="canchas-title">
                  Canchas
                  <br />
                </h2>
                <article className="canchas-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2485f52375aa44e2cd57716eb7a4ed5130380b79?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                    className="canchas-image"
                    alt="Canchas"
                  />
                  <p className="canchas-description">
                    Canchas de fútbol y rugby como parte del proyecto del
                    acondicionamiento de la Ciudad Deportiva UNIMET. En este
                    espacio además de ser acogedor, posibilita tener un
                    ambiente de confort y aire libre.
                  </p>
                  <div className="canchas-footer">
                    <span className="canchas-more-info">
                      Más información
                    </span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88866faa238272c20677bf8799714f022763ad?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                      className="canchas-arrow"
                      alt="Arrow icon"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="canchas-side">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/329cfae2cc75ecdc055ae9af073265c3dc14f2f6?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
                className="canchas-side-image"
                alt="Canchas side image"
              />
            </div>
          </div>
        </div>

        <nav className="breadcrumb">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true&apiKey=e4b6b4895e5740b8bc142de494713b62"
            className="breadcrumb-icon"
            alt="Home icon"
          />
          <span className="breadcrumb-text">Inicio</span>
        </nav>
      </div>
    </section>
  );
};
