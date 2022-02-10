import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const SanAyP = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">San Andrés y Providencia</h1>
        <img className="imagenes" src={imagen.img45} width="150" height="100" />
        <p className="text">
          {" "}
          San Andrés y Providencia es un departamento perteneciente a la región
          caribeña, pero este además de ser un departamento tiene algo especial
          y es que es una isla que pareciera que estuviera fuera del país además
          de que es el departamento más pequeño de Colombia, la economía de este
          territorio se basa principalmente en el turismo y el comercio.{" "}
        </p>
        <p className="text">
          San Andrés y Providencia tiene una superficie de 52 Km2, tiene una
          población aproximadamente de 68.283 habitantes, este departamento fue
          creado en el año 1991, a sus habitantes se les llama Sanandresanos, la
          capital de San Andrés y Providencia es San Andrés y cuenta con 55.125
          habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img46} width="150" height="100" />
        <p className="text">
          {" "}
          En este departamento abundan los lugares para visitar esto se debe a
          que este es su ingreso económico principal, algunos de estos sitios
          son: Bahía Sardinas, Cueva de Morgan, Hoyo Soplador, Punta Sur, Spray
          Bight, La Loma, Big Pond, Cayos Bolívar y Albuquerque, Bahía
          Aguadulce, El acuario, Johnny Cay, Pax Hole.{" "}
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
export default SanAyP;
