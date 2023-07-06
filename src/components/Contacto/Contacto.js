import React, { useEffect, useRef, useState } from 'react';
import './Contacto.css'
import logo from '../../images/logoform.svg'
import ubiform from '../../images/ubi-form.png'
import celularform from '../../images/contacto-form.png'
import emailform from '../../images/email-form.png'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contacto = () => {


  const titleRef = useRef(null);

  useEffect(() => {
    const revealTitle = () => {
      const title = titleRef.current;
      const titlePosition = title.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (titlePosition < screenPosition) {
        title.classList.add("title-contacto-visible");
      }
    };

    window.addEventListener("scroll", revealTitle);

    return () => {
      window.removeEventListener("scroll", revealTitle);
    };
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
  
    
  
    emailjs.sendForm('service_00semke', 'template_y38ov9q', e.target, 'I6AZh1jZE9b2rIC_c')
    .then((result) => {
      console.log(result.text);
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      console.log(error.text);
    });

    toast.success('Mensaje enviado con éxito', {
      autoClose: 3000, // Tiempo en milisegundos para que la notificación se cierre automáticamente
    });
  };
  

  return (
    <div>
      <h1 ref={titleRef} className='title-contacto' id='Contacto'>
        Contacto
      </h1>
      <div className='row-contacto'>
      <div className='column2-contacto'>
          <img className='logoform'src={logo} alt="icono" />
          <h4 className='description-form'>Completa nuestro formulario de contacto para<br/>comunicarte con nosotros. Estamos aquí para<br/>ayudarte.</h4>
          <h4 className='saludos-form'>Saludos!</h4>
          <div className='informacion-contacto'>
            <h4><img src={ubiform} alt='ubicacion'></img>Av.Brown</h4>
            <h4><img src={emailform} alt='ubicacion'></img>info@feriasdelcentro.com</h4>
            <h4><img src={celularform} alt='ubicacion'></img>+54 2314 584083</h4>
          </div>
        </div>
        <div className='column1-contacto'>
          <form onSubmit={sendEmail}>
            <div className='column1-contacto-row'>
              <input type="text" name="user_name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" name="user_email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <textarea name="message" placeholder="Escriba su mensaje aqui..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <input type="submit" value="Enviar" /> 
            <ToastContainer
            position="bottom-center"
            className="toast-container"
            toastClassName="toast-success"
            autoClose={3000}
          />     
          </form> 
        </div>
      </div>
    </div>
    
  );
};

export default Contacto;