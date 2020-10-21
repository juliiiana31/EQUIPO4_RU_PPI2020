import React from "react";
import "../style/style.css";
import Paneles from "../imagenes/Paneles1.PNG";
class Resultado extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div>
            <div>
              <img
                src={Paneles}
                class="rounded mx-auto d-block mb-5"
                alt="Paneles1"
              />
            </div>
          </div>
          <h1> Horas Pico</h1>
          <h1> Total Paneles Solares</h1>
        </div>
        <div>
        <a
                class="btn btn-success m-3 px-4"
                href="/totalpaneles"
                role="button"
              >
                Total Paneles
              </a>
        </div>
      </div>
    );
  }
}
export default Resultado;
