import React from "react";
import "../style/style.css";
class Resultado extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <form>
            <div class="form-group ">
              <label for="exampleInputEmail1">Horas solar pico</label>
              <input
                type="email"
                class="form-control input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese horas solar pico"
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Potencial panel</label>
              <input
                type="email"
                class="form-control input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese potencia del panel"
              ></input>
            </div>
            <button type="submit" class="btn btn-success ">
              <strong> Total paneles </strong>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Resultado;
