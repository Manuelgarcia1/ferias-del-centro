import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappLink.css';

const WhatsappLink = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (phoneNumber) => {
    setSelectedOption(phoneNumber);

    // Agrega el mensaje predeterminado que deseas enviar al destinatario
    const defaultMessage = encodeURIComponent(
      'Hola, me he comunicado desde la página web Ferias del Centro y tengo una consulta para realizar.'
    );

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="button-container" onClick={handleButtonClick}>
        <div className="message">
          <FaWhatsapp className="icon" />
          ¿Podemos ayudarte?
        </div>
      </div>
      <div className="button-container-mobile" onClick={handleButtonClick}>
        <div className="message-mobile">
          <FaWhatsapp className="icon-mobile" />
        </div>
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <h3>Seleccione una opción:</h3>
            <div className="opcion">
              <button onClick={() => handleOptionSelect('5492314614659')}>
                Pagos y cobranzas
              </button>
              <button onClick={() => handleOptionSelect('5492314628278')}>
                Senasa y guías
              </button>
              <button onClick={() => handleOptionSelect('5492314628281')}>
                Compra y venta de hacienda
              </button>
              <button onClick={() => handleOptionSelect('5492314441794')}>
                Facturación
              </button>
            </div>
            <button className="close-btn" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappLink;