import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const AmazonasD = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Amazonas</h1>
        <img className="imagenes" src={imagen.img1} />
        <p className="text">
          {" "}
          El Amazonas es un departamento de la región amazónica, este es uno de
          los departamentos de Colombia mas rico en flora y fauna, también tiene
          una gran riqueza étnica ya que cuenta con aproximadamente 26 etnias.{" "}
        </p>
        <p className="text">
          El Amazonas tiene una superficie de 109.665 Km2, tiene una población
          aproximadamente de 56.036 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Amazonenses, la capital del
          Amazonas es el municipio de Leticia y cuenta con 23.180 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img2} />
        <p className="text">
          {" "}
          En el Amazonas hay varios parques naturales unos de ellos son el
          Amacayacu en el cual podemos avistar aproximadamente 150 especies
          mamíferas algunas de estas especies son el delfín rosado, el jaguar y
          el manatí; también está el parque Cahuinarí en este también podemos
          encontrar muchas especies tales como el puma, perro de agua, micos
          tití, maicero y mico de noche y también esta el parque Yaigojé
          Apaporis en donde podemos encontrar muchos tipos de aves, peces,
          mariposas y peces también cuenta con mas de 1.600 tipos de plantas.{" "}
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
export default AmazonasD;
