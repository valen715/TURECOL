import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Cundinamarca = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Cundinamarca</h1>
        <img class="imagenes" src={imagen.img19} width="150" height="100" />
        <p class="text">
          {" "}
          Cundinamarca es un departamento perteneciente a la región Andina, es
          uno de los departamentos mas importantes de Colombia ya que su
          economía se basa en casi todos los sectores.{" "}
        </p>
        <p class="text">
          Cundinamarca tiene una superficie de 24.210 Km2, tiene una población
          aproximadamente de 2.721.368 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Cundinamarqués, la
          capital de Cundinamarca es Santafé de Bogotá y cuenta con 8.314.305
          habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img20} width="150" height="100" />
        <p class="text">
          {" "}
          Este hermoso departamento tiene lugares para visitar tales como:
          Laguna de Guatavita, el parque y la laguna son un gran atractivo
          nacional; Parque Ecológico Jericó, es un lugar en el cual podemos
          disfrutar de la naturaleza y de actividades ecológicas, y muchos otros
          lugares más.{" "}
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
          <div className="col-10 ">
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
export default Cundinamarca;
