import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Casanare = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Casanare </h1>
        <img className="imagenes" src={imagen.img51} width="150" height="100" />
        <p className="text">
          {" "}
          Casanare es un departamento perteneciente a la región de la Orinoquia,
          este departamento cuenta con una gran riqueza petrolera, se ha ido
          desarrollando mucho más el sector turístico.{" "}
        </p>
        <p className="text">
          Casanare tiene una superficie de 44.640 Km2, tiene una población
          aproximadamente de 334.027 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Casanareños, la capital de
          Casanare es Yopal y cuenta con 46.124 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img52} width="150" height="100" />
        <p className="text">
          {" "}
          Al visitar El Casanare podemos visitar Los Farallones, es una Serranía
          de gran importancia para el país, también visitar el municipio de Paz
          de Ariporo ya que es un municipio con extensas llanuras y es
          considerado una reserva importante para la fauna y la flora, este
          lugar es ideal para hacer el ecoturismo.{" "}
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
export default Casanare;
