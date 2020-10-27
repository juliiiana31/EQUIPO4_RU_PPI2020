import React from "react";
import "../style/style.css";
import Paneles from "../imagenes/Paneles2.PNG";
class Resultado extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="mx-auto vh-95 principal">
          <div className="container"></div>
          <div>
            <div>
              <img
                src={Paneles}
                class="rounded mx-auto d-block mb-5"
                alt="Paneles2"
              />
            </div>
          </div>
          
          <h3 className="d-flex align-start justify-content-center">
              -Paneles Solares-
            </h3>
            
        </div>
        <div className="col-lg-9 offset-lg-6 row justify-content-center mb-6"></div>
        <div>
        <a
                class="btn btn-success m-3 px-4"
                href="/inicio"
                role="button"
              >
                Cerrar Sesión
              </a> 
        </div>
      </div>
    );
  }
}
export default Resultado;