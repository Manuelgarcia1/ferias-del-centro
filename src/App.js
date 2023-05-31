
import './App.css';
import Nav from "./components/Nav/Nav"
import Remates from "./components/Remates/Remates"
import WhatsappLink from './components/WhatsappLink/WhatsappLink';

function App() {
  const phoneNumber = '542314440279'; // Número de teléfono para WhatsApp
  return (
    <div>
      <Nav />
      <Remates />
      <WhatsappLink phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;
