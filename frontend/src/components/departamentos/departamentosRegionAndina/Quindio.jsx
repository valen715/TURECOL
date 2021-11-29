import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Quindio = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Quindio</h1>
        <img class="imagenes" src={imagen.img25} width="150" height="100" />
        <p class="text">
          {" "}
          El Quindío es un departamento perteneciente de la región Andina, es
          considerado como uno de los departamentos mas lindos de Colombia, su
          economía principalmente se basa en el cultivo de café al pasar del
          tiempo su turismo ha ido aumentando.{" "}
        </p>
        <p class="text">
          El Quindío tiene una superficie de 1.845 Km2, tiene una población
          aproximadamente de 568.473 habitantes, este departamento fue creado en
          el año 1966, a sus habitantes se les llama Quindiano, la capital del
          Quindío es Armenia y cuenta con 254.752 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img26} width="150" height="100" />
        <p class="text">
          {" "}
          En el Quindío hay un parque el cual es perfecto para el turismo
          ecológico y para aventurarse este es el Parque Nacional de los Nevados
          además de que es muy hermoso y sus paisajes son muy variados, también
          hay lugares como el parque de la vida, Balsaje por el rio la vieja en
          el Quindío, el jardín Botánico del Quindío, entre muchos otros.{" "}
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
export default Quindio;
