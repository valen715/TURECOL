import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Guaviare = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Guaviare</h1>
        <img class="imagenes" src={imagen.img7} width="150" height="100" />
        <p class="text">
          {" "}
          El Guaviare es un departamento perteneciente a la región Amazónica
          tristemente es uno de los departamentos de Colombia menos conocido, la
          riqueza de este departamento se dice que es maravillosa, el Guaviare
          tiene como actividad económica principal la agricultura y también el
          área forestal.{" "}
        </p>
        <p class="text">
          El Guaviare tiene una superficie de 53.460 Km2, tiene una población
          aproximadamente de 112.621 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Guaviareño, la capital del
          Guaviare es San José del Guaviare y cuenta con 49.159 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img8} width="150" height="100" />
        <p class="text">
          {" "}
          El Guaviare tiene como sitio turístico la Reserva Nacional Natural
          Nukak esta zona esta protegida por la Zona de Reserva Forestal de la
          Amazonia, en esta reserva podemos encontrar una gran variedad de fauna
          y flora, esta reserva es territorio ancestral de varios grupos
          indígenas, esta reserva podemos encontrar especies como el puma, el
          tigre mariposo, la danta, el tigrillo, el venado colorado, el
          hormiguero gigante, el mono churuco, el armadillo gigante, y al menos
          10 especies de osos perezosos y monos, garzas, águila arpía, pavas,
          patos, guacamayas, loros, tucanes, pájaro carpintero, entre otros.{" "}
        </p>
        
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>
    </header>
  );
};
export default Guaviare;
