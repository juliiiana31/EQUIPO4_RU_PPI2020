import React from "react";
import "../style/style.css";
class Resultado extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <h3 className="d-flex align-start justify-content-center">
            Paneles Solares
          </h3>
          
          <p> Para las caracteristicas de su hogar se recomiendan: </p> 
        <div className="d-flex align-start flex-column bd-highlight mb-3">
       
        <a class="btn btn-success" href="/">
          Cerrar Sesión
        </a>
        </div>
      </div>
      </div>
    );
  }
}
export default Resultado;