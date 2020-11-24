import React from "react";
import "../style/style.css";
class Resultado extends React.Component {
  render() {
    return (    
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <form>
            <div className="form-group ">
              <label for="exampleInputEmail1">Horas solar pico</label>
              <input
                type="email"
                className="form-control input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese horas solar pico"
              ></input>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Potencial panel</label>
                <input
                type="email"
                className="form-control input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese horas solar pico">

                </input>
                
            </div>
            <a type="submit" className="btn btn-success m-3 px-3 " href="/totalpaneles">
              Total paneles  
            </a>
            <a type="submit" className="btn btn-success m-3 px-4 " href="/formulario">
               Regresar 
            </a>
          </form>
        </div>
      </div> 
    );
  }
}

export default Resultado;
