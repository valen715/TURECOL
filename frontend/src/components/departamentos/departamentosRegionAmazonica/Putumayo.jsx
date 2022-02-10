import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Putumayo = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Putumayo</h1>
        <img className="imagenes" src={imagen.img9} width="150" height="100" />
        <p className="text">
          {" "}
          El Putumayo es un departamento perteneciente a la región Amazónica,
          este departamento es muy rico en recursos naturales, la actividad
          tradicional de este departamento es la ganadería, pero los ingresos
          vienen de las regalías, es un excelente lugar para reconectarse con
          los ancestros, en Putumayo podrás encontrar las reservas indígenas
          Santa Rosa del Guamuez, Santa Rosa de Sucumbíos, Afilador y Yarinal
          San Marcelino.{" "}
        </p>
        <p className="text">
          El Putumayo tiene una superficie de 24.885 Km2, tiene una población
          aproximadamente de 378.483 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Putumayense, la capital del
          Putumayo es Mocoa y cuenta con 18.956 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img10} width="150" height="100" />
        <p className="text">
          {" "}
          En el Putumayo destacan dos parques para visitar el primero es El
          Parque Nacional Natural La Paya, este es uno de los parques con mayor
          importancia para la fauna de la región Amazónica en este destacan
          especies de mamíferos tales como la danta, la boruga, el delfín rosado
          o bufeo, el cerrillo y el puerco de monte; reptiles como la charapa y
          el caimán negro.{" "}
        </p>
        <p className="text">
          El segundo parque es el Parque Nacional Natural Serranía de los
          Churumbelos Auka-Wasi este parque también está protegida ya que
          habitan al menos 26% de todas las aves del país, también encontramos
          mariposas, anfibios, reptiles y mamíferos.
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
export default Putumayo;
