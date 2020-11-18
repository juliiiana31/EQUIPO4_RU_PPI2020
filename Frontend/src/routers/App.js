import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Iniciosesion from "../pages/iniciosesion";
import Formulario from "../pages/formulario";
import Registro from "../pages/registro";

import ElectrodomesticosAdmin from "../pages/electrodomesticosAdmin";
import Resultado from "../pages/resultado";
import Recuperaciongmail from "../pages/recuperaciongmail";
import TotalPaneles from "../pages/totalpaneles";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciosesion" component={Iniciosesion} />

        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciosesion" component={Iniciosesion} /> */}

        <Route exact path="/" component={Inicio} />
        <Route exact path="/iniciosesion" component={Iniciosesion} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/formulario" component={Formulario} />
        <Route exact path="/recuperaciongmail" component={Recuperaciongmail} />
        <Route
          exact
          path="/electrodomesticosAdmin"
          component={ElectrodomesticosAdmin}
        />
        <Route exact path="/totalpaneles" component={TotalPaneles}/>
        <Route exact path="/resultado" component={Resultado} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
