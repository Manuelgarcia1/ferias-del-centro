import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Remates from "./components/Remates/Remates";
import RemateMain from "./components/Rematemain/Rematemain";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import WhatsappLink from './components/WhatsappLink/WhatsappLink';
import Nosotros from './components/Nosotros/Nosotros';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Nav} />
        <Route exact path="/" component={Nosotros} />
        <Switch>
          <Route exact path="/" component={Remates} />
          <Route path="/rematemain" component={RemateMain} />
        </Switch>
        <Route exact path="/" component={Contacto} />
        <Footer />
        <Route exact path="/" render={() => <WhatsappLink />} />
      </div>
    </Router> 
  );
};

export default App;