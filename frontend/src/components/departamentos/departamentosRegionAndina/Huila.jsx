import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Huila = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Huila</h1>
        <img className="imagenes" src={imagen.img21} width="150" height="100" />
        <p className="text">
          {" "}
          Huila es un departamento perteneciente a la región Andina, este
          hermoso departamento tiene paisajes que recorrer que son de otro
          mundo, podemos disfrutar de sus aguas termales y también se puede
          practicar montañismo en la Sierra Nevada de los Coconucos.{" "}
        </p>
        <p className="text">
          Huila tiene una superficie de 19.890 Km2, tiene una población
          aproximadamente de 780.109 habitantes, este departamento fue creado en
          el año 1905, a sus habitantes se les llama Huilense u Opita, la
          capital del Huila es Neiva y cuenta con 248.008 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img22} width="150" height="100" />
        <p className="text">
          {" "}
          El Huila tiene lugares muy lindos que conocer unos de estos lugares
          son el Parque Cueva de los Guácharos, el cual es un sistema de cuevas
          protegidas por la selva virgen, estas cuevas son el hogar de animales
          como guacamayos y murciélagos, además de que el parque está habitado
          por más animales.{" "}
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
export default Huila;
