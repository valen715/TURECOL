import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Choco = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Choco</h1>
        <img class="imagenes" src={imagen.img59} width="150" height="100" />
        <p class="text">
          {" "}
          El Choco es un departamento perteneciente de la región Pacífica, El
          Chocó es un departamento de Colombia con una riqueza natural
          incomparable, se destacan la minería, la explotación de maderas, la
          pesca.{" "}
        </p>
        <p class="text">
          El Choco tiene una superficie de 46.530 Km2, tiene una población
          aproximadamente de 505.046 habitantes, este departamento fue creado en
          el año 1947, a sus habitantes se les llama Chocoanos, la capital del
          Choco es Quibdó y cuenta con 113.473 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img60} width="150" height="100" />
        <p class="text">
          {" "}
          Cuando visitemos este departamento debemos de conocer los siguientes
          parques: El Parque Nacional Natural de Utría, La combinación de la
          selva tropical y el mar hacen de este parque natural una réplica
          exacta del paraíso; El Parque Nacional Natural los Katíos, El parque
          tiene una extensión de 72.000 hectáreas; El Parque Nacional Tatamá,
          Tiene un alto grado de conservación y una gran belleza, ya que está
          cubierto de selva andina. El clima es templado y hay una gran variedad
          de especies vegetales, algunas de las cuales son muy raras.{" "}
        </p>
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>
    </header>
  );
};
export default Choco;
