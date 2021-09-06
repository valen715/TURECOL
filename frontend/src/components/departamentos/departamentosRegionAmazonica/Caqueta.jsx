import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Caqueta = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Caquetá</h1>
        <img class="imagenes" src={imagen.img3} />
        <p class="text">
          {" "}
          El Caquetá es un departamento perteneciente a la región Amazónica en
          el gran podemos observar que hay grandes riquezas naturales, en este
          departamento se da la producción de madera y se practica la
          agricultura siendo esta su principal actividad económica.{" "}
        </p>
        <p class="text">
          El Caquetá tiene una superficie de 88.965 Km2, tiene una población
          aproximadamente de 485.834 habitantes, este departamento fue creado en
          el año 1981, a sus habitantes se les llama Caqueteño, la capital del
          Caquetá es Florencia y cuenta con 101.274 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img4} />
        <p class="text">
          {" "}
          En el Caquetá podemos encontrar dos parques naturales los cuales
          podemos visitar el primero es El Parque Nacional Natural Cordillera de
          los Picachos este se encuentra ubicado en uno de los municipios
          principales del Caquetá, San Vicente del Caguán cuenta con una gran
          extensión, tiene ecosistemas muy variados y tiene una gran diversidad
          de flora y fauna.{" "}
        </p>
        <p class="text">
          El otro parque es el Parque Nacional Natural Serranía de Chiribiquete
          este tiene varias sedes a lo largo del país, pero una de ellas queda
          en este departamento en el municipio de San Vicente del Caguán, la
          fauna en este parque es muy variada, podemos encontrar al menos 5
          especies endémicas, cuenta con 1.676 especies de fauna y 2.138
          especies de flora.
        </p>
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas button-ver-mas-mensaje">
          Crear opinión
        </button>
      </a>
    </header>
  );
};
export default Caqueta;
