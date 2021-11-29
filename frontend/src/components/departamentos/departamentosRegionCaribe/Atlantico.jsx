import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Atlantico = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Atlantico</h1>
        <img class="imagenes" src={imagen.img33} width="150" height="100" />
        <p class="text">
          {" "}
          El Atlántico es un departamento perteneciente a la región caribeña, es
          un departamento costero, es el cuarto mas poblado de Colombia, este
          sitio es perfecto para salir a turistear y disfrutar de la playa y sus
          paisajes, es muy conocido también por su exquisita gastronomía.{" "}
        </p>
        <p class="text">
          El Atlántico tiene una superficie de 3.388 Km2, tiene una población
          aproximadamente de 2.112.128 habitantes, este departamento fue creado
          en el año 1910, a sus habitantes se les llama Atlanticense, la capital
          del Atlántico es Barranquilla y cuenta con 1.111.538 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img34} width="150" height="100" />
        <p class="text">
          {" "}
          En este departamento hay muchos sitios que visitar la mayoría de estos
          lugares son naturales algunos de ellos son Laguna del Cisne, situada
          en el municipio de Puerto Colombia; Usiacurí, es un lugar pequeño pero
          lleno de naturaleza que lo hace parecer mágico; Sabanagrande al
          visitar este lugar podremos viajar por el rio Magdalena.{" "}
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
export default Atlantico;
