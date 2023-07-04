import React from 'react';
import './Footer.css';
import imagenfooter from '../../images/Logo-main.png'
import ig from '../../images/INSTAGRAM.svg'
import mail from '../../images/GMAIL.svg'
import facebook from '../../images/FACEBOOK.svg'
import designer from '../../images/designer.svg'
import developer from '../../images/developer.svg'


const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = 'info@feriasdelcentro.com';
    const subject = 'Consulta';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.527708682464!2d-61.112106284277544!3d-36.226672914814706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe3aca4a8acff%3A0x7e445efeccd9b9a4!2sFerias%20del%20Centro!5e0!3m2!1ses!2sar!4v1687544297990!5m2!1ses!2sar"
        width="100%"
        height="195"
        style={{ border: 0, marginTop: '40px', backgroundColor:'#ECE7E4'}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        margin-top="20px"
      ></iframe>
      <footer>
          <div className='footer-row'>
            <div className='footer-column1'>
              <img className='img-footer' src={imagenfooter} alt='imagenfooter'></img>
            </div>
            <div className='footer-column2'>
              <h4 className='nuestrasredes'>Encontranos en:</h4>
              <a href="https://www.instagram.com/ferias.del.centro.srl/?hl=es" target="_blank" rel="noopener noreferrer">
                <img className='img-ig' src={ig} alt='imagenig' />
              </a>
              <img
                className='img-mail'
                src={mail}
                alt='imagenmail'
                onClick={handleEmailClick}
              />
              <a href="https://www.facebook.com/cesarabel.diez" target="_blank" rel="noopener noreferrer">
                <img className='img-facebook' src={facebook} alt='imagenfacebook'></img>
              </a>
            </div>
          </div>
      </footer>
      <footer className='footer2'>
        <h4 className='derechosreservados'>© Todos los derechos reservados</h4>  
        <div className='footer2-nombres'>
          <h4 className='developer-footer'><img className='developer-img' src={developer} alt='developerfooter'></img>Manuel Alejandro García</h4>
          <h4 className='designer-footer'><img className='designer-img' src={designer} alt='developerfooter'></img>Ignacio Murgades Manso</h4> 
        </div>
      </footer>
    </div>
  );
};

export default Footer;