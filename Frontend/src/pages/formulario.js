import React from "react";
import "../style/formulariostyle.scss";

class Formulario extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="mx-auto vh-95 principal">
          <h4 className="mt-4">Electrodomésticos</h4>
          <div>
            <form>
              <div class="form-group mb-4">
                <label for="exampleFormControlSelect1"></label>
                <select
                  className="form-control justify-content-center mb-3 "
                  id="exampleFormControlSelect1"
                >
                  <option>Electrodomésticos presentes</option>
                  <option>Lavadora</option>
                  <option>Nevera</option>
                  <option>Horno microondas</option>
                  <option>Olla arrocera</option>
                  <option>Plancha de ropa</option>
                  <option>Computadora</option>
                  <option>Celular</option>
                  <option>bombillo</option>
                </select>
              </div>
            </form>
            <form>
              <h4 className="mb-3"> Cantidad </h4>
              <div className="col-lg-6 offset-lg-3 justify-content-center mb-5">
                <input
                  type="number"
                  min="0"
                  className="form-control input mb-3"
                  placeholder="Cantidad de electrodomésticos"
                />
              </div>

              <h4 className="mb-3"> Potencia (Watts)</h4>
              <div className="col-lg-6 offset-lg-3 justify-content-center mb-5">
                <input
                  type="number"
                  min="1"
                  className="form-control input mb-3"
                  placeholder="Potencia"
                />
              </div>

              <h4 className="mb-3">Horas de uso diario</h4>
              <div className="col-lg-6 offset-lg-3 justify-content-center mb-5">
                <input
                  type="number"
                  min="1"
                  className="form-control input mb-3"
                  placeholder="Horas de uso"
                />
              </div>

              <h4 className="mb-3"> Consumo Diario</h4>
              <div className="col-lg-6 offset-lg-3 justify-content-center mb-5">
                <input
                  type="number"
                  min="0"
                  className="form-control input mb-3"
                  placeholder="Consumo Diario"
                />
              </div>

              <div className="d-flex align-start justify-content-center mb-3">
                <button class="btn btn-success m-3 px-4">Agregar</button>

                <button class="btn btn-success m-3 px-4">Modificar</button>

                <button class="btn btn-success m-3 px-4">Eliminar</button>
              </div>

              <div>
                <a class="btn btn-success m-3 px-5 XD" href="/resultado">
                  Continuar
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;
