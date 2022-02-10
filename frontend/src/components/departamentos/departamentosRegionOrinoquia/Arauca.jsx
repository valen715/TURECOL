import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Arauca = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Arauca</h1>
        <img className="imagenes" src={imagen.img49} width="150" height="100" />
        <p className="text">
          {" "}
          Arauca es un departamento perteneciente a la región de la Orinoquia,
          es uno de los departamentos mas extensos de Colombia, y su territorio
          esta habitado por ocho pueblos indígenas.{" "}
        </p>
        <p className="text">
          Arauca tiene una superficie de 23.818 Km2, tiene una población
          aproximadamente de 208.615 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Araucanos, la capital de
          Arauca es Arauca y cuenta con 42.829 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img50} width="150" height="100" />
        <p className="text">
          {" "}
          En Risaralda tenemos sitios turísticos muy interesantes los cuales
          podemos visitar y conocer tenemos el Parque Ecológico del Llano, aquí
          podemos incursionar por toda su naturaleza; también hay lugares como
          Los Araguatos Centro Recreacional, Cravo Norte, entre otros.{" "}
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
export default Arauca;
