import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Huila = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Huila</h1>
        <img class="imagenes" src={imagen.img21} width="150" height="100" />
        <p class="text">
          {" "}
          Huila es un departamento perteneciente a la región Andina, este
          hermoso departamento tiene paisajes que recorrer que son de otro
          mundo, podemos disfrutar de sus aguas termales y también se puede
          practicar montañismo en la Sierra Nevada de los Coconucos.{" "}
        </p>
        <p class="text">
          Huila tiene una superficie de 19.890 Km2, tiene una población
          aproximadamente de 780.109 habitantes, este departamento fue creado en
          el año 1905, a sus habitantes se les llama Huilense u Opita, la
          capital del Huila es Neiva y cuenta con 248.008 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img22} width="150" height="100" />
        <p class="text">
          {" "}
          El Huila tiene lugares muy lindos que conocer unos de estos lugares
          son el Parque Cueva de los Guácharos, el cual es un sistema de cuevas
          protegidas por la selva virgen, estas cuevas son el hogar de animales
          como guacamayos y murciélagos, además de que el parque está habitado
          por más animales.{" "}
        </p>
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>

      <a href="/opiniones" className="button-ver-opiniones">
                {" "}
                <button className="button-ver-mas button-ver-mas-mensaje">Ver las opiniones</button>
              </a>
    </header>
  );
};
export default Huila;
