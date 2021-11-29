import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const NorteSantander = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Norte de Santander</h1>
        <img class="imagenes" src={imagen.img23} width="150" height="100" />
        <p class="text">
          {" "}
          Norte de Santander es un departamento perteneciente a la región
          Andina, este territorio este cruzado por la cordillera Oriental, este
          departamento se caracteriza por tener cerros, mesetas, llanuras y
          paramos, también podemos decir que tiene un ecosistema bastante
          variado con mucha diversidad de flora y fauna.{" "}
        </p>
        <p class="text">
          El Norte de Santander tiene una superficie de 21.658 Km2, tiene una
          población aproximadamente de 1.367.716 habitantes, este departamento
          fue creado en el año 1910, a sus habitantes se les llama
          Nortesantandereano, la capital de Norte de Santander es Cúcuta y
          cuenta con 525.465 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img24} width="150" height="100" />
        <p class="text">
          {" "}
          En este departamento nos podemos encontrar con un parque ecológico
          bastante bonito llamado El Área Única Natural de los Estoraques el
          cual esta lleno de ecosistemas hermosos, en cuanto a la fauna y la
          flora nos podemos encontrar con que gran variedad de árboles, al igual
          que en la fauna podemos encontrar especies endémicas{" "}
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <a href="/crearOpiniones" className="button-enlace">
              {" "}
              <button
                type="button"
                className="btn btn-outline button-ver-mas button-ver-mas-mensaje"
              >
                crear opinion
              </button>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-9 ">
            <a href="/opiniones" className="button-ver-opiniones">
              {" "}
              <button
                type="button"
                className="btn btn-outline button-ver-mas button-ver-mas-mensaje"
              >
                Ver opiniones
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NorteSantander;
