import React, { useEffect, useRef } from 'react';
import './Remates.css';
import rematesimg from '../../images/vacas.jpg';


const Card = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const revealTitle = () => {
      const title = titleRef.current;
      const titlePosition = title.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (titlePosition < screenPosition) {
        title.classList.add("title-remates-visible");
      }
    };

    window.addEventListener("scroll", revealTitle);
    return () => {
      window.removeEventListener("scroll", revealTitle);
    };
  }, []);

  return (
    <div>
      <h1 ref={titleRef} className='title-remates' id='Remates' >Nuestros remates</h1>
      <div className="card" >
        <div className="card-image">
          <img src={rematesimg} alt="Imagen de la tarjeta" />
        </div>
        <div className="card-content">
          <h3>Título de la tarjeta</h3>
          <p>Contenido de la tarjeta</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src={rematesimg} alt="Imagen de la tarjeta" />
        </div>
        <div className="card-content">
          <h3>Título de la segunda tarjeta</h3>
          <p>Contenido de la segunda tarjeta</p>
        </div>
      </div>

      {/* Agrega más tarjetas aquí */}
    </div>
  );
};

export default Card;