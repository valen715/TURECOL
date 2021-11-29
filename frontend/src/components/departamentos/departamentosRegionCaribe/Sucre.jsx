import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Sucre = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Sucre</h1>
        <img class="imagenes" src={imagen.img47} width="150" height="100" />
        <p class="text">
          {" "}
          Sucre es un departamento perteneciente a la región caribeña, este
          departamento cuenta con bastantes riquezas naturales, su actividad
          económica es diversa: aunque tiene un gran potencial turístico, este
          sector está muy poco desarrollado.{" "}
        </p>
        <p class="text">
          Sucre tiene una superficie de 10.917 Km2, tiene una población
          aproximadamente de 859.909 habitantes, este departamento fue creado en
          el año 1966, a sus habitantes se les llama Sucreños, la capital de
          Sucre es Sincelejo y cuenta con 148.410 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img48} width="150" height="100" />
        <p class="text">
          {" "}
          En este departamento hay muchos sitios que visitar la mayoría de estos
          lugares son naturales algunos de ellos son: Santuario de Fauna y Flora
          El Corchal El Mono Hernández, tiene una superficie de 3800 hectáreas.
          Clima tropical cálido con 27 grados centígrados; Reserva Natural
          Sanguaré, Está dedicado al turismo sostenible proporcionado por El
          Golfo Buceo & Verano; investigación científica básica, restauración de
          ecosistemas degradados, trabajo con comunidades locales, educación
          ambiental, pastoreo sostenible y el uso de recursos forestales no
          maderables, entre otros lugares.{" "}
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
export default Sucre;
