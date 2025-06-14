"use client";
import * as React from "react";
import styles from "./ReservarEspaciosAuditorios.module.css";

function ReservarEspaciosAuditorios() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/5759af412198b5a3885dff8721f52b837a5b3427?placeholderIfAbsent=true"
              className={styles.logo1}
              alt="Logo 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/5fc5908baf15d9f9cdfb686f1aecdd4e763905f2?placeholderIfAbsent=true"
              className={styles.logo2}
              alt="Logo 2"
            />
          </div>
          <div className={styles.navigationIcons}>
            <div className={styles.iconContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true"
                className={styles.iconBackground}
                alt="Icon background"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/2244eee61c86ad5995a8c588ef6e4612733ca15c?placeholderIfAbsent=true"
                className={styles.iconOverlay}
                alt="Icon overlay"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/6c7a43d9519d83184ea0fc9f79ace42fdabfd8d6?placeholderIfAbsent=true"
              className={styles.navIcon1}
              alt="Navigation icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/5d88aab2b1b666849b92aba3f0d8946b35a76cb1?placeholderIfAbsent=true"
              className={styles.navIcon2}
              alt="Navigation icon 2"
            />
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.title}>
          Reservar Espacio
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/38abf45ba2ff96fb8eaf7e9404775b2b5065a3dd?placeholderIfAbsent=true"
          className={styles.heroImage}
          alt="Hero image"
        />

        <div className={styles.contentSection1}>
          <div className={styles.row}>
            <div className={styles.textColumn}>
              <div className={styles.orangeTextBox}>
                <span className={styles.normalText}>
                  Es uno de los mayores atractivos que posee la
                </span>{" "}
                <span className={styles.boldText}>Universidad Metropolitana</span>
                <span className={styles.normalText}>
                  . Se trata de un amplio y diverso conjunto de áreas y
                  edificaciones dispuestas a lo largo y ancho de su campus. En
                  ellos tienen lugar múltiples actividades destinadas al{" "}
                </span>
                <span className={styles.whiteText}>
                  fomento y disfrute de la cultura, la ciencia, la recreación y
                  el esparcimiento
                </span>
                <span className={styles.normalText}>
                  .
                </span>{" "}
              </div>
            </div>
            <div className={styles.imageColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/8c42ed1b18c4ca12573b73fc96e1458e1862e281?placeholderIfAbsent=true"
                className={styles.sectionImage}
                alt="Section image 1"
              />
            </div>
          </div>
        </div>

        <div className={styles.contentSection2}>
          <div className={styles.row}>
            <div className={styles.imageColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/735c9c4708ebfcf3e66243a778092de6bfcef808?placeholderIfAbsent=true"
                className={styles.sectionImage}
                alt="Section image 2"
              />
            </div>
            <div className={styles.textColumn}>
              <div className={styles.blackTextBox}>
                5 auditorios con capacidad entre{" "}
                <span className={styles.boldWhiteText}>120 y 180 personas</span>:<br />
                <ul className={styles.auditoriumList}>
                  <li>
                    <span className={styles.italicBoldText}>
                      Manoa
                    </span>
                  </li>
                  <li>
                    <span className={styles.italicBoldText}>
                      Francesca Pensieri
                    </span>
                  </li>
                  <li>
                    <span className={styles.italicBoldText}>
                      Polar
                    </span>
                  </li>
                  <li>
                    <span className={styles.italicBoldText}>
                      Julio Sosa Rodríguez
                    </span>
                  </li>
                  <li>
                    <span className={styles.italicBoldText}>
                      Ana Teresa Arismendi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaButton}>
          ¡Reserva Ya!
        </div>

        <div className={styles.breadcrumb}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/c42ec600022b3fae885d2bbdd8394046eae346c4?placeholderIfAbsent=true"
            className={styles.breadcrumbIcon}
            alt="Home icon"
          />
          <div className={styles.breadcrumbText}>
            Inicio
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0915a6f2bdb4525859e13c1d5f0d8db/2b708494abc0c92a344e20f877db113f79b8c86d?placeholderIfAbsent=true"
          className={styles.footerBackground}
          alt="Footer background"
        />
        <div className={styles.footerText}>
          Copyright © 2025 - Spotmet | Síguenos:{" "}
          <span className={styles.footerBold}>Instagram</span> |{" "}
          <span className={styles.footerBold}>Facebook</span>
        </div>
      </div>
    </div>
  );
}

export default ReservarEspaciosAuditorios;
