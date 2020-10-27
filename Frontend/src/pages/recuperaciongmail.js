import React from "react";
import "../style/style.css";
import Logo from "../imagenes/Logo.PNG";
class Recuperaciongmail extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <img src={Logo} class="rounded mx-auto d-block mb-5" alt="logo" />
          <h3 className="col-lg-12 offset-lg-0 row justify-content-center mb-4">
            Recuperar tu cuenta
          </h3>
          <div className="d-flex flex-column bd-highlight mb-2">
            <input
              type="text"
              className="form-control input mb-3"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div className="d-flex align-start justify-content-center">
            <a
              class="btn btn-success m-3 px-4"
              href="/iniciosesion"
              role="button"
            >
              Ingresar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recuperaciongmail;
