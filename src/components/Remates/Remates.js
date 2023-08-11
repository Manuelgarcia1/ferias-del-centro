import React, { useEffect, useRef } from 'react';
import './Remates.css';
import rematesimg from '../../images/Remates/Imagen-card.jpg';
import ubi from '../../images/Remates/ubi-remates.png'
import calendario from '../../images/Remates/calendario-remates.png'
import hora from '../../images/Remates/hora-remates.png'
import venta from '../../images/Remates/venta-remates.png'
import remates from '../../images/Remates/remates.svg'
import iconvaca from '../../images/Remates/iconvaca.svg'
import importante from '../../images/Remates/importante.svg'
import flyer1 from '../../images/Remates/vacasgordas.jpg'


  const Card = () => {
    
  const titleRef = useRef(null);
  
  
  const handleVerRemateClick = () => {
    window.open('/rematemain', '_blank');
  };
  
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
        <h1 ref={titleRef} className='title-remates' id='Remates'>
          <img className='vaca-title' src={iconvaca} alt="Descripción de la imagen" />
            Remates mensuales
        </h1>
        <div className="card" >
          <div className='card-column1'>
            <img className='card-img' src={rematesimg} alt='fondocard'></img>
            <div className='content-img'>
                <h4 className='cantidad'>800</h4>
                <h4 className='vacunos'>Vacunos</h4>
                <h4 className='tipo'>Gordo, invernada y cria</h4>
            </div>
          </div>
          <div className='card-column2'>
            <div className='row1'>
              <div className='row1-remates'>
                <h4 className='remate-feria'>Remate Feria</h4>
                <h4 className='remate-mensual'>Mensual</h4> 
              </div>
              <div className='row1-fecha'> 
                  <img src={calendario} className='calendario-img' alt="Calendario" />
                  <h4>16 de Agosto</h4>
              </div>
            </div>
            <div className='row2'>
              <div>
                  <h4 className='destacamos'>Destacamos</h4>
                  <h4 className='hacienda'><strong>500</strong> terneros/ as de invernada  </h4>
                  <h4 className='hacienda'><strong>70</strong> vacas preñadas y con cria  </h4>
              </div>
              <div className='importante-flex'>
                <img src={importante} alt="Importante" />
                <h4 className='importante'>IMPORTANTE: <br></br>las haciendas deberan ingresar en su totalidad el día anterior sin excepción</h4>
              </div>
            </div>
            <div className='row3'>
              <div className='column1'>
                <img src={ubi} alt="Calendario" />
                <h4 className='sociedadrural'>Sociedad rural</h4>
              </div>
              <div className='column2'>
                <img src={hora} alt="Calendario" />
                <h4 className='horario'>13hs</h4>
              </div>
              <div className='column3'>
                <img src={venta} alt="Calendario" />
                <h4 className='ventacontado'>venta contado y plazo</h4>
              </div>
            </div>
            <div className='row4'>
              <button className='boton-remate' onClick={handleVerRemateClick}>Ver remate</button>
            </div>
          </div>
        </div>
        <div className="flyer-container">
            <h2>Remate Especial: Genética Sobresaliente</h2>
            <h3>Cabaña "El Rincón"</h3>
            <img className='flyer1' src={flyer1} alt="Flyer de Cabaña 'El Rincón'" />
        </div>
        <img className='img-footer-remates' src={remates} alt='imagen-remates'></img>
        
    </div>
  );
};

export default Card;