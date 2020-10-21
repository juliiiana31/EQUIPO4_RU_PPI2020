import React from "react";
import "../style/style.css";
import Logo from "../imagenes/Logo.PNG";

class Registro extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="mx-auto vh-95 principal">
          <div>
            <img src={Logo} class="rounded mx-auto d-block mb-5" alt="logo" />
          </div>

          <div className="">
            <h3 className="col-lg-8 offset-lg-2 row justify-content-center mb-4">
              Registrarse
            </h3>
            <form>
              <div className="form-group offset-lg-2 row justify-content-center mb-4">
                <div class="form-group">
                  <label for="correo">
                    Correo:
                  </label>
                  <input
                    type="email"
                    class="form-control input"
                    placeholder="Correo Electronico"
                    id="correo"
                  ></input>
                </div>

                <input
                  type="text"
                  className="form-control input mb-3"
                  placeholder="Nombre"
                />

                <input
                  type="text"
                  className="form-control input mb-3"
                  placeholder="Apellido"
                />

                <input
                  type="text"
                  className="form-control input mb-3"
                  placeholder="Cédula"
                />

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
            </form>

            <div className="d-flex align-start justify-content-center mb-3">
              <a class="btn btn-success m-3 px-4" href="/" role="button">
                Regresar
              </a>
              <a
                class="btn btn-success m-3 px-4"
                href="/iniciosesion"
                role="button"
              >
                Guardar
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
