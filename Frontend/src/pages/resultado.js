import React from "react";
import "../style/style.css";
import Paneles from "../imagenes/Paneles1.PNG";
class Resultado extends React.Component {
  render() {
    return (
      
      <div className="row">
      <div className="mx-auto vh-95 principal">
          <div>
            <div>
              <img
                src={Paneles}
                class="rounded mx-auto d-block mb-5"
                alt="Paneles1"
              />
            </div>
          </div>
          <h3 className="d-flex align-start flex-column bd-highlight mb-3">
              Horas Pico
            </h3>
            <h3 className="d-flex align-start flex-column bd-highlight mb-3">
              Total Paneles
            </h3>
        </div>
        <div>
        <div className="d-flex align-start justify-content-center mb-4">
              <a class="btn btn-success m-3 px-4" href="/totalpaneles" role="button">
                Total de Paneles
              </a>
              </div>
        </div>
      </div>
     
    );
  }
}
export default Resultado;
