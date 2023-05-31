import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappLink.css';

const WhatsappLink = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="button-container" onClick={handleClick}>
      <div className="message">
        <FaWhatsapp className="icon" />
        ¿Podemos ayudarte?
      </div>
    </div>
  );
};

export default WhatsappLink;