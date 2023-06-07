import React, { useEffect, useRef } from 'react';
import './Remates.css';
import rematesimg from '../../images/Imagen-card.jpg';
import ubi from '../../images/ubi-remates.png'
import calendario from '../../images/calendario-remates.png'
import hora from '../../images/hora-remates.png'
import venta from '../../images/venta-remates.png'


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
          <img src={rematesimg} alt="Imagen-card" />
          <div className='content-card'>
            <h4 className='texto-cantidad'>2500</h4>
            <h4 className='texto-vacunos'>Vacunos</h4>
            <h4 className='texto-footer'>Gordo, invernada y cria</h4>
          </div>
        </div>
        <div className='remate-column1'>
            <div>
              <h4 className='remate-feria'>Remate feria Mensual</h4>
            </div>
            <div>
              <h4 className='remate-fecha'>30 de julio</h4>
            </div>
            
        </div> 
      </div>


      <div className="card" >
        <div className="card-image">
          <img src={rematesimg} alt="Imagen de la tarjeta" />
        </div>
        <div className="card-content">
          <h3>Título de la tarjeta</h3>
          <p>Contenido de la tarjeta</p>
        </div>
        <div className="card-content">
          <h3>Título de la tarjeta</h3>
          <p>Contenido de la tarjeta</p>
        </div>
       
        
      </div>
      

      

      {/* Agrega más tarjetas aquí */}
    </div>
  );
};

export default Card;