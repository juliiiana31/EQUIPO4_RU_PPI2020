import React from "react";
import "../style/style.css";
import Logo from "../imagenes/Logo.PNG";
class Inicio extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <div>
            <img src={Logo} className="rounded mx-auto d-block mb-5" alt="logo" />
          </div>
          <div className="d-flex align-start flex-column bd-highlight mb-3">
            <a className="btn btn-success m-3" href="/registro" role="button">
              Registrarse
            </a>

            <a className="btn btn-success m-3" href="/iniciosesion">
              Ingresar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
