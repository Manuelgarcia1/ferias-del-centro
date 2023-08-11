import React, { useState, useEffect, useRef} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Importa los estilos predeterminados de react-tabs
import '../Nosotros/Nosotros.css';
import iconhistoria from '../../images/Nosotros/historia.svg';
import iconactualidad from '../../images/Nosotros/actualidad.png'
import icon from '../../images/Nosotros/grupo.svg'
import nosotros from '../../images/Nosotros/nosotros.jpg'
import iconmap from '../../images/Nosotros/iconmap.png'
const mapURL = 'https://goo.gl/maps/XYnDpZTFkm2vqwQi6';


const Nosotros = () => {
  const titleRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const [expandedContents, setExpandedContents] = useState({
    first: false,
    second: false,
    third: false
  });

  const paragraphContent = `En el año 1982, en una charla entre amigos y compañeros de trabajo, surge la idea de fundar una casa consignataria de hacienda, sabiendo que su capital mas grande no era el económico, sino que posiblemente era su juventud, sus ganas de emprender y la pasión que compartían por la actividad. De esta manera, fijando como pilares de su proyecto la pasión y la amistad, es que Juan Carlos Biondini, César Abel Diez, Jose Alberto Biscardi y Raul Zabatoni, dan origen a FERIAS DEL CENTRO S.R.L. A lo largo de sus más de 40 años de trayectoria, su enfoque principal fue prestar el mejor servicio en la comercialización de hacienda bovina, porcina y yeguarizos, mediante remates generales, especiales y ventas directas, haciendo de éste algo personalizado y activo, generando un vínculo con el productor que en ocasiones iba mucho más allá de lo comercial, convirtiéndose en un día a día más familiar.`;
  const secondParagraphContent =
    'En la actualidad, la firma se contrajo solo a la comercialización de hacienda bovina, realizando un remate mensual de haciendas generales el tercer miércoles de cada mes, complementando con venta directa de gordo e invernada y los clásicos remates anuales de reproductores. En cuanto a su estructura y composición, con el paso de los años, la firma dejó de ser una empresa entre socios amigos, para convertirse en una empresa familiar, dado que el único socio fundador activo es Cesar Abel Diez, que dentro de su equipo de trabajo, lo acompaña su hijo Tomás.';
  const treeParagraphContent = 'Ferias del Centro SRL te invita cordialmente a visitarnos en nuestra ubicación en la Avenida Brown 355. Nuestra empresa líder en la comercialización de hacienda bovina ha recorrido un camino desde sus humildes inicios hasta la consolidación en la industria. En nuestro local, contarás con el apoyo de un equipo altamente calificado, dispuesto a asesorarte y responder tus consultas. Desde nuestros fundadores hasta los actuales miembros, todos compartimos la pasión por la actividad ganadera y nos dedicamos a brindar un servicio excepcional a nuestros clientes. Nuestro éxito y larga trayectoria son el resultado del compromiso de todo nuestro equipo. Únete a nuestra historia y descubre cómo hemos mantenido nuestra vanguardia en el mercado ganadero durante más de 40 años.Además, hemos proporcionado un mapa interactivo para facilitar tu visita y guiarte directamente a nuestra ubicación.'
  const maxCharactersToShow = 300;


  const handleToggleContent = (key) => {
    setExpandedContents(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  useEffect(() => {
    const revealTitle = () => {
      const title = titleRef.current;
      const titlePosition = title.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (titlePosition < screenPosition) {
        title.classList.add("title-nosotros-visible");
      }
    };

    window.addEventListener("scroll", revealTitle);
    return () => {
      window.removeEventListener("scroll", revealTitle);
    };
  }, []);

  return (
    <div>
      <h1 ref={titleRef} className='title-nosotros' id='Nosotros'>
        <img className='icon-nosotros' src={icon} alt="grupoicon" />
           Sobre nosotros
      </h1>
      <div className='column-nosotros'>
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <TabList>
            <Tab>
              <div className='column-historia'>
                <img className='imagen-historia' src={iconhistoria} alt='icon'></img>
                <h4 className='nosotros-tittle'>Nuestra historia</h4>
              </div>
            </Tab>
            <Tab>
              <div className='column-actualidad'>
                <img className='imagen-actualidad' src={iconactualidad} alt='icon'></img>
                <h4 className='nosotros-tittle'>Actualidad</h4>
              </div>
            </Tab>
          </TabList>
          <TabPanel className='nosotros-parrafo'>
            {expandedContents.first ? (
              <p>{paragraphContent}</p>
             ) : (
              <p>{paragraphContent.slice(0, maxCharactersToShow)}...</p>
            )}
            {paragraphContent.length > maxCharactersToShow && (
              <button
                className={expandedContents.first ? 'button-ver-menos' : 'button-ver-mas'}
                onClick={() => handleToggleContent("first")}
              >
              {expandedContents.first ? 'Ver menos' : 'Ver más'}
              </button>
            )}
          </TabPanel>
          <TabPanel className='nosotros-parrafo'>
            {expandedContents.second ? (
              <p>{secondParagraphContent}</p>
            ) : (
              <p>{secondParagraphContent.slice(0, maxCharactersToShow)}...</p>
            )}
            {secondParagraphContent.length > maxCharactersToShow && (
              <button
                className={expandedContents.second ? 'button-ver-menos' : 'button-ver-mas'}
                onClick={() => handleToggleContent("second")}
              >
                {expandedContents.second ? 'Ver menos' : 'Ver más'}
              </button>
            )}
          </TabPanel>
        </Tabs>
        <div className='row-nosotros'>
          <img className='img-nosotros' src={nosotros} alt='imagen'></img>
        </div>
      </div>
      <div className='nosotros-contactanos'>
          <h4 className='contactanos-title'>Contacta con nosotros en persona y conocenos!</h4>
          <div className='contactanos-parrafo'>
            {expandedContents.third ? (
            <p>{treeParagraphContent}</p>
            ) : (
           <p>{treeParagraphContent.slice(0, maxCharactersToShow)}...</p>
           )}
           {treeParagraphContent.length > maxCharactersToShow && (
            <button
              className={expandedContents.third ? 'button-ver-menos' : 'button-ver-mas'}
              onClick={() => handleToggleContent("third")}
            >
             {expandedContents.third ? 'Ver menos' : 'Ver más'}
            </button>
          )}
      </div>
          <h4 className='mensaje-final'>¡Esperamos verte pronto!</h4>
          <div className='nosotros-mapa'>
            <img className='iconmapa' src={iconmap} alt='mapa'></img>
            <a className='maps' href={mapURL} target='_blank' rel='noopener noreferrer'>
              Abrir en Google Maps
            </a>
          </div>
        </div>
    </div>
  );
};

export default Nosotros;