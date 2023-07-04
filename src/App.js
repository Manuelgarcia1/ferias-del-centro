import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav"
import Remates from "./components/Remates/Remates"
import WhatsappLink from './components/WhatsappLink/WhatsappLink';
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

function App() {
  const phoneNumber = '542314440279'; // Número de teléfono para WhatsApp
  return (
    <div>
      <Nav />
      <Remates />
      <WhatsappLink phoneNumber={phoneNumber} />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
