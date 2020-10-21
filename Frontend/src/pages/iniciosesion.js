import React from "react";
import "../style/style.css";
import Logo from "../imagenes/Logo.PNG";
class Iniciosesion extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <div>
            <img src={Logo} class="rounded mx-auto d-block mb-5" alt="logo" />
          </div>
          <div className="d-flex align-start flex-column bd-highlight mb-3">
            <h3 className="col-lg-6 offset-lg-3  row justify-content-center mb-4">
              Iniciar Sesión
            </h3>
            <div className="col-lg-6 offset-lg-3  row justify-content-center">
              <input
                type="text"
                className="form-control input mb-3"
                placeholder="Nombre de Usuario"
              />
              <input
                type="password"
                className="form-control input mb-3"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-flex align-start justify-content-center mb-3">
              <a class="btn btn-success m-3 px-4" href="/" role="button">
                Regresar
              </a>
              <a
                class="btn btn-success m-3 px-4"
                href="/formulario"
                role="button"
              >
                Ingresar
              </a>
              <a class="btn btn-success m-3" href="/electrodomesticosAdmin" role="button">
                Administrador
              </a>
            </div>
            <div className="col-lg-6 offset-lg-3  row justify-content-center mb-4">
              <a href="/recuperaciongmail">¿Olvidó su contraseña?</a>
              <a href="/registro">¿Aún no tiene cuenta? Regístrese</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Iniciosesion;
