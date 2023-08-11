import React, {useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fechaimg from '../../images/Rematemain/fecha.svg'
import './Rematemain.css'
import vaca from '../../images/Rematemain/vaca.png'
import video2 from '../../images/video.mp4'
import imagen1 from '../../images/Rematemain/galeria1.jpg'
import imagen2 from '../../images/Rematemain/galeria2.jpg'
import imagen3 from '../../images/Rematemain/galeria3.jpg'
import imagen4 from '../../images/Rematemain/galeria4.jpg'
import imagen5 from '../../images/Rematemain/galeria5.jpg'
import imagen6 from '../../images/Rematemain/galeria6.jpg'

const RemateMain = () => {
  const customStyles = {
    color: 'black',
    fontWeight: 900,
    fontSize: '45px',
  };
  const videoRef = useRef(null);
  const phoneNumber = '5492314441794'; // Número de teléfono con el código de país (54 para Argentina)
  const message = encodeURIComponent('Me anuncio de la página web Ferias del Centro, estoy interesado en participar en el próximo remate.'); // Mensaje predeterminado codificado

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
  };


  useEffect(() => {
    const video = videoRef.current;
   

    const handlePlay = () => {
      video.play().catch(error => {
        console.log('La reproducción automática fue bloqueada:', error);
      });
    };

    const handlePause = () => {
      video.pause();
    };


    const handleScroll = () => {
      const videoRect = video.getBoundingClientRect();
      const isInView = videoRect.top >= 0 && videoRect.bottom <= window.innerHeight;

      if (isInView) {
        handlePlay();
      } else {
        handlePause();
      }
    };
   

    // Agregar los eventos al montar el componente
    window.addEventListener('scroll', handleScroll);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Remover los eventos al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className="volver-btn-container">
        {/* Botón de "Volver atrás" */}
        <Link to="/" className="volver-btn">Volver atrás</Link>
      </div>
      <div className='rematemain-inicio'>
      <video ref={videoRef} className='rematemain-img' autoPlay muted loop>
        <source src={video2} type="video/mp4" />
      </video> 
        <div className='description-foto'>
            <h4 className='remateferia'>REMATE FERIA MENSUAL</h4>
            <div className='remate-fecha-calendario'>
              <img src={fechaimg} className='fecha-img' alt="calendarioimagen" />
              <h4 className='rematefecha'>16 DE AGOSTO</h4>
            </div>
        </div>
      </div>
      <div className='remate-description'>
        <h4 className='acerca-remate'>Acerca de este remate</h4>
        <p className='parrafo'>
          Ferias del centro srl se complace en anunciar su próximo Remate Mensual, un evento imperdible para los amantes 
          de la ganadería y la inversión en el campo. En esta ocasión, se ofrecerán una gran variedad de haciendas 
          de excelente calidad, incluyendo: <br></br>
          <strong>800</strong> Vacunos.<br></br>
          <strong>500</strong> Terneros/as de invernada, una excelente oportunidad para iniciar o ampliar tu negocio ganadero.<br></br>
          <strong>70</strong> Vacas preñadas y con cria, una excelente oportunidad para iniciar o ampliar tu negocio ganadero.<br></br>
          <h4>¡Estamos emocionados de compartir que pronto tendremos más novedades sobre la cantidad total de terneros! Mantente al tanto y no te pierdas ninguna actualización. ¡Gracias por confiar en nosotros!</h4>
        </p>
      </div>
      <h4 className='title-galeria'>Galería de imagenes:</h4>
      <div className='galeria-imagenes'>
      <Carousel
        showThumbs={true} // Mostrar controles de navegación
        showStatus={false}
        infiniteLoop={false}
        autoPlay={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button className="carousel-arrow prev" onClick={onClickHandler}>
              <i className="fas fa-chevron-left" style={customStyles}></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button className="carousel-arrow next" onClick={onClickHandler}>
              <i className="fas fa-chevron-right" style={customStyles}></i>
            </button>
          )
        }
      >
        <div>
          <img src={imagen1} loading="lazy" alt="Imagen 1" className="imagen-carousel" />
        </div>
        <div>
          <img src={imagen2} loading="lazy" alt="Imagen 2" className="imagen-carousel" />
        </div>
        <div>
          <img src={imagen3} loading="lazy" alt="Imagen 3" className="imagen-carousel" />
        </div>
        <div>
          <img src={imagen4} loading="lazy" alt="Imagen 3" className="imagen-carousel" />
        </div>
        <div>
          <img src={imagen5} loading="lazy" alt="Imagen 3" className="imagen-carousel" />
        </div>
        <div>
          <img src={imagen6} loading="lazy" alt="Imagen 3" className="imagen-carousel" />
        </div>
        {/* Puedes agregar más imágenes aquí */}
      </Carousel>
      </div>
      <div className='remate-participa'>
        <div className='background'>
          <img src={vaca} className='vaca-img' alt="vacaimagen" />
          <div className='texto'>
            <h4 className='texto1'>Aporta tu ganado y participa en nuestros remates mensuales</h4>
            <p className='texto2'>Únete a nuestra comunidad ganadera y aprovecha la oportunidad de destacarte en el mercado.
              Aporta tu hacienda para nuestros remates y maximiza tus beneficios.
            </p>
            <button className='boton-participar' onClick={handleWhatsAppClick}>
              Participar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemateMain;