import React from 'react';
import './Footer.css';
import imagenfooter from '../../images/Footer/Logo-main.png'
import ig from '../../images/Footer/INSTAGRAM.svg'
import mail from '../../images/Footer/GMAIL.svg'
import facebook from '../../images/Footer/FACEBOOK.svg'
import designer from '../../images/Footer/designer.svg'
import developer from '../../images/Footer/developer.svg'


const Footer = () => {
  const handleEmailClick = () => {
    const emailAddress = 'info@feriasdelcentro.com';
    const subject = 'Consulta';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  

  return (
    <div>   
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
        <h4 className='developer-footer'>
           <a className='link-wsp' href="https://api.whatsapp.com/send?phone=5492314464231">
            <img className='developer-img' src={developer} alt='developerfooter' />
             Manuel Alejandro García
           </a>
        </h4>
        <h4 className='designer-footer'>
          <a className='link-wsp' href="https://api.whatsapp.com/send?phone=5492314574384">
            <img className='designer-img' src={designer} alt='developerfooter' />
            Ignacio Murgades Manso
          </a>
        </h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;