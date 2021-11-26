import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const AmazonasD = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Amazonas</h1>
        <img class="imagenes" src={imagen.img1} />
        <p class="text">
          {" "}
          El Amazonas es un departamento de la región amazónica, este es uno de
          los departamentos de Colombia mas rico en flora y fauna, también tiene
          una gran riqueza étnica ya que cuenta con aproximadamente 26 etnias.{" "}
        </p>
        <p class="text">
          El Amazonas tiene una superficie de 109.665 Km2, tiene una población
          aproximadamente de 56.036 habitantes, este departamento fue creado en el año
          1991, a sus habitantes se les llama Amazonenses, la capital del
          Amazonas es el municipio de Leticia y cuenta con 23.180 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img2} />
        <p class="text">
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

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas button-ver-mas-mensaje">
          Crear opinión
        </button>
      </a>

      <a href="/opiniones" className="button-ver-opiniones">
                {" "}
                <button className="button-ver-mas button-ver-mas-mensaje">Ver las opiniones</button>
              </a>
    </header>
  );
};
export default AmazonasD;
