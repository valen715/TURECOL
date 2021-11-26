import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Antioquia = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Antioquia</h1>
        <img class="imagenes" src={imagen.img13} width="150" height="100" />
        <p class="text">
          {" "}
          Antioquia es un departamento perteneciente a la región Andina, es el
          departamento con mejor progreso y desarrollo en todo el país, tiene la
          ciudad que esta en el puesto dos con mas habitantes la cual es
          Medellín que a la vez es su capital, cuenta con una gastronomía
          exquisita, pues acá pertenece la bandeja paisa.{" "}
        </p>
        <p class="text">
          Antioquia tiene una superficie de 63.612 Km2, tiene una población
          aproximadamente de 5.671.689 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Antioqueños, la capital
          de Antioquia es Medellín y cuenta con 1.698.777 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img14} width="150" height="100" />
        <p class="text">
          {" "}
          En Antioquia hay muchos lugares naturales los cuales podemos visitar,
          mientras los visitamos también podemos aprender de los ecosistemas y
          los paisajes que se observan unos de estos lugares son: Ríos melcocho
          en Cocorná, Paramo del Sol en Urrao, Cerro tusa en Venecia Antioquia,
          Cerro Quitasol, Salto del Ángel, los saltos Ecoparque, entre muchos
          otros.{" "}
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
export default Antioquia;
