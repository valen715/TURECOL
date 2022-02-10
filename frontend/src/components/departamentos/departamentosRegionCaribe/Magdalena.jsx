import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Magdalena = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Magdalena</h1>
        <img className="imagenes" src={imagen.img43} width="150" height="100" />
        <p className="text">
          {" "}
          El Magdalena es un departamento perteneciente a la región caribeña,
          este departamento es un de los departamentos considerados como los mas
          importantes como sitio turístico, su actividad económica es muy
          variada, pero el desarrollo ha sido notorio.{" "}
        </p>
        <p className="text">
          El Magdalena tiene una superficie de 23.188 Km2, tiene una población
          aproximadamente de 1.235.425 habitantes, este departamento fue creado
          en el año 1964, a sus habitantes se les llama Magdalenense, la capital
          del Magdalena es Santa Marta y cuenta con 299.758 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img44} width="150" height="100" />
        <p className="text">
          {" "}
          En este departamento se encuentra uno de los parques más importantes
          del país el cual esta abierto para los turistas, El Parque Nacional
          Natural Tayrona guarda una porción de la Sierra Nevada de Santa Marta,
          se encuentra lleno de bosques secos y húmedos, de colinas bajas,
          acantilados, varias bahías y playas preciosas.{" "}
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
export default Magdalena;
