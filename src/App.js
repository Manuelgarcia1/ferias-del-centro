import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Remates from "./components/Remates/Remates";
import RemateMain from "./components/Rematemain/Rematemain";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import WhatsappLink from './components/WhatsappLink/WhatsappLink';

const App = () => {
  const phoneNumber = '542314440279'; // Número de teléfono para WhatsApp

  return (
    <Router>
      <div>
        <Route exact path="/" component={Nav} />

        <Switch>
          <Route exact path="/" component={Remates} />
          <Route path="/rematemain" component={RemateMain} />
        </Switch>

        <Route exact path="/" component={Contacto} />
        <Route exact path="/" component={Footer} />
      </div>
      <WhatsappLink phoneNumber={phoneNumber} />
    </Router> 
  );
};

export default App;