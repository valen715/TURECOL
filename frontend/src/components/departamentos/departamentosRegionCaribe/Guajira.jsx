import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Guajira = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Guajira</h1>
        <img class="imagenes" src={imagen.img41} width="150" height="100" />
        <p class="text">
          {" "}
          La Guajira es un departamento de la región caribeña, es uno de los
          territorios mas hermoso y mas exótico por sus paisajes, la mayor
          fuente de ingreso económico de este departamento es la minería, la
          explotación de sal y sobre todo su sector turístico el cual se ha
          desarrollado mucho más.{" "}
        </p>
        <p class="text">
          La Guajira tiene una superficie de 20.848 Km2, tiene una población
          aproximadamente de 985.498 habitantes, este departamento fue creado en
          el año 1964, a sus habitantes se les llama Guajiros, la capital de La
          Guajira es Riohacha y cuenta con 188.014 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img42} width="150" height="100" />
        <p class="text">
          {" "}
          Al visitar La Guajira podemos visitar el Parque Natural Macuira, que
          es un lugar sagrado para los Wayuu, pero cuenta con mucha vegetación y
          animales, también podemos visitar El Faro y de allí observar los
          paisajes{" "}
        </p>
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>
    </header>
  );
};
export default Guajira;
