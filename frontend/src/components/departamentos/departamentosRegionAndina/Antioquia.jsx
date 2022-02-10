import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Antioquia = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Antioquia</h1>
        <img className="imagenes" src={imagen.img13} width="150" height="100" />
        <p className="text">
          {" "}
          Antioquia es un departamento perteneciente a la región Andina, es el
          departamento con mejor progreso y desarrollo en todo el país, tiene la
          ciudad que esta en el puesto dos con mas habitantes la cual es
          Medellín que a la vez es su capital, cuenta con una gastronomía
          exquisita, pues acá pertenece la bandeja paisa.{" "}
        </p>
        <p className="text">
          Antioquia tiene una superficie de 63.612 Km2, tiene una población
          aproximadamente de 5.671.689 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Antioqueños, la capital
          de Antioquia es Medellín y cuenta con 1.698.777 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img14} width="150" height="100" />
        <p className="text">
          {" "}
          En Antioquia hay muchos lugares naturales los cuales podemos visitar,
          mientras los visitamos también podemos aprender de los ecosistemas y
          los paisajes que se observan unos de estos lugares son: Ríos melcocho
          en Cocorná, Paramo del Sol en Urrao, Cerro tusa en Venecia Antioquia,
          Cerro Quitasol, Salto del Ángel, los saltos Ecoparque, entre muchos
          otros.{" "}
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
export default Antioquia;
