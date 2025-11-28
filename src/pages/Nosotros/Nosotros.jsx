import React from 'react';
import './Nosotros.css';
import { FaCheck , FaBullhorn} from 'react-icons/fa';
import nosotrosImg from '../../assets/nosotros/nosotros-img.jpg';
import { nosotrosData } from '../../data/nosotrosData';

const Nosotros = () => {
  return (
    <main>
      <div className="container-padre">
        <div className="nosotros-item">
          <h1>Nosotros</h1>
        </div>

        <div className="nosotros-img">
          <img
            src={nosotrosImg}
            className="imgNosotros"
            alt="Nosotros"
          />
        </div>

        <div className="subtitulo-nosotros">
          <h2>Sobre Nosotros: Moda con Propósito</h2>
        </div>

        <div className="nosotros-grid">
          <div className="nosotros-info">
            <p>
              En <span>Segundo Estreno</span> {nosotrosData.intro}
            </p>

            <h2>Nuestro compromiso</h2>

            <p>
              {nosotrosData.compromisoIntro}
            </p>

            {nosotrosData.compromisos.map((compromiso) => (
              <p key={compromiso.id}>
                <FaCheck className="check-icon" />
                {compromiso.texto}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slider-track">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfybTvsTrbQmw8D4dqch2M9WnWAWmrgp7VvIBuC4MTE1yQDXw/viewform?usp=sharing&ouid=115459216340217954203"
            className="slide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBullhorn className="fa-bullhorn" aria-hidden="true" />
            <p>
              SI QUERÉS PUBLICITAR TU MARCA HACÉ CLICK AQUÍ Y COMPLETÁ EL
              FORMULARIO
            </p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;