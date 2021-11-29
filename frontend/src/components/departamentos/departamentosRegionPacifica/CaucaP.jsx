import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const CaucaP = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Cauca</h1>
        <img class="imagenes" src={imagen.img57} width="150" height="100" />
        <p class="text">
          {" "}
          El cauca es un departamento perteneciente a la región Pacífica, El
          departamento del Cauca es rico en maderas, tiene grandes reservas
          forestales, de vocación agrícola y turística. El territorio del
          departamento del Cauca es uno de los más quebrados del país, pues allí
          se encuentra el Macizo Colombiano, nudo en que se entrelazan las
          cordilleras Central y Occidental.{" "}
        </p>
        <p class="text">
          El Cauca tiene una superficie de 29.308 Km2, tiene una población
          aproximadamente de 1.404.313 habitantes, este departamento fue creado
          en el año 1536, a sus habitantes se les llama Caucanos, la capital del
          Cauca es Popayán y cuenta con 200.989 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img58} width="150" height="100" />
        <p class="text">
          {" "}
          Este departamento tiene tres parques significativos gracias a su
          riqueza natural, estos parques son: El Parque Nacional Natural
          Munchique, este es un lugar donde habitan animales como: osos de
          anteojos, osos hormigueros, osos perezosos, tigrillos, tigres, zorros,
          venados, ardillas y murciélagos; El Parque Nacional Natural Puracé, es
          un lugar donde habitan animales como: el cóndor, colibrí, venado
          conejo y rojo, danta, loro orejiamarillo, pavas y muchas especies más
          y El Parque Nacional Natural Isla Gorgona que pertenece al Pacífico
          colombiano, junto con Isla Malpelo son las únicas islas del Pacífico
          que pertenecen a Colombia.{" "}
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
export default CaucaP;
