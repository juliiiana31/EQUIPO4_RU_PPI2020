import React from "react";
import "../style/style.css";

class ElectrodomesticosAdmin extends React.Component {
  render() {
    return (
      <div className="row vh-100">
        <div className="mx-auto vh-95 principal">
          <div className="col-sm-12 my-auto ">
            <h3 className="col-lg-8 offset-lg-2 row justify-content-center mb-4">
              Electrodomesticos
            </h3>
            <table className="table table-responsive table-bordered text-center table-admin">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Microondas</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nevera</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Horno</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>televisor</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Secadora</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Lavadora</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Computadora</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Licuadora</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex align-start justify-content-center ">
              <button class="btn btn-success m-3 px-4">Crear</button>

              <button class="btn btn-success m-3 px-4">Consultar</button>

              <button class="btn btn-success m-3 px-4">Editar</button>

              <button class="btn btn-success m-3 px-4">Eiminar</button>
            </div>
            <a type="submit" class="btn btn-success m-3 px-3 " href="/iniciosesion">
               Regresar
            </a>

            <a type="submit" class="btn btn-success m-3 px-4 " href="/resultado">
               Continuar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ElectrodomesticosAdmin;
