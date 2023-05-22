import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Navbar.css';
import vacasImage from '../../images/vacas.jpg';
import buenosaires from '../../images/buenosaires.svg';
import mapas from '../../images/mapa.png'

const carouselTexts = [
  {
    text: 'Ferias del centro SRL',
    text2: 'Somos una empresa con más de 35 años de trayectoria,<br /> buscando día a día ofrecer el mejor servicio de comercialización de hacienda.',
    image: mapas,
    ubi: 'San Carlos de Bolìvar',
  },
  {
    text: 'Ferias del centro SRL',
    text2: 'Somos  con más de 35 años de trayectoria,<br /> buscando día a día ofrecer el mejor servicio de comercialización de hacienda.',
    image: mapas,
    ubi: 'La mejor experiencia en clientes',
  },
  {
    text: 'Ferias del centro SRL',
    text2: 'Somos una empr trayectoria,<br /> buscando día a día ofrecer el mejor servicio de comercialización de hacienda.',
    image: mapas,
    ubi: 'nuestras redes',
  },
  {
    text: 'Ferias del centro SRL',
    text2: 'Somos unapresa con más de 35 años de trayectoria,<br /> buscando día a día ofrecer el mejor servicio de comercialización de hacienda.',
    image: mapas,
    ubi: 'El mejor servicio de haciendas de la provincia',
  },
];

function Nav() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselTexts.length - 1 : prevIndex - 1));
  };

  const handleNextArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselTexts.length - 1 ? 0 : prevIndex + 1));
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <main>
      <div className="imagen-nav">
        <img src={vacasImage} alt="vacas" />
        <div className="carousel-container">
          <Carousel
            showArrows={false} 
            selectedItem={currentIndex}
            showThumbs={false}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            infiniteLoop={true}
            dynamicHeight={false}
            interval={5000}
            transitionTime={500}
          >
            {carouselTexts.map((item, index) => (
              <div key={index} className="carousel-item">
                <h2 className="carousel-title">{item.text}</h2>
                <p className="carousel-description" dangerouslySetInnerHTML={{ __html: item.text2 }}></p>
                <div className="carousel-ubicacion">
                  <img className="carousel-image" src={item.image} alt="Imagen" />
                  <h4 className="ubicacion">{item.ubi}</h4>
                </div>
              </div>
            ))}
          </Carousel>
          <button className="carousel-arrow prev" onClick={handlePrevArrowClick}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-arrow next" onClick={handleNextArrowClick}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="navbar-container">
        <nav ref={navRef} className={`Navbar ${menuVisible ? 'hidden' : ''}`}>
          <img className='navbar-icon' src={buenosaires} alt="icono" />
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/">Remates</a>
          <a href="/">Contacto</a>
        </nav>
        {menuVisible && (
          <nav className="MobileNavbar">
            <a href="/">Inicio</a>
            <a href="/">Nosotros</a>
            <a href="/">Remates</a>
            <a href="/">Contacto</a>
          </nav>
        )}
        <div className={`hamburger-menu ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {menuVisible && <div className="overlay" onClick={closeMenu}></div>}
      </div>
      <div className="navbar-container">
        <nav ref={navRef} className={`Navbar ${menuVisible ? 'hidden' : ''}`}>
          <img className='navbar-icon' src={buenosaires} alt="icono" />
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/">Remates</a>
          <a href="/">Contacto</a>
        </nav>
        {menuVisible && (
          <nav className="MobileNavbar">
            <a href="/">Inicio</a>
            <a href="/">Nosotros</a>
            <a href="/">Remates</a>
            <a href="/">Contacto</a>
            <img className='mobile-icon' src={buenosaires} alt="icono" />
          </nav>
        )}
        <div className={`hamburger-menu ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {menuVisible && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </main>
  );
}

export default Nav;