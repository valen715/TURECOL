import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Boyaca = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Boyaca</h1>
        <img class="imagenes" src={imagen.img15} width="150" height="100" />
        <p class="text">
          {" "}
          Boyacá es un departamento perteneciente a la región Andina, es un
          departamento de arquitectura muy coloquial, fuera de ser un lugar
          hermoso y que tiene unos hermosos paisajes.{" "}
        </p>
        <p class="text">
          Boyacá tiene una superficie de 23.189 Km2, tiene una población
          aproximadamente de 1.278.061 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Boyacense, la capital de
          Boyacá es Tunja y cuenta con 123.625 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img16} width="150" height="100" />
        <p class="text">
          {" "}
          En Boyacá tiene sitios ecoturísticos muy buenos los cuales debemos
          visitar al ir a este departamento algunos de ellos son: la Laguna de
          Tota, ya que es la laguna mas grande de toda Colombia y nos regala un
          paisaje Hermoso; Santuario de Fauna y Flora Iguaque, esta fue
          establecida en 1977, y cuenta con 46 áreas naturales del país, una
          caminata ecológica dura aproximadamente 2 horas por los senderos que
          conducen a la Laguna de Iguaque, una de las ocho lagunas que se
          encuentran en esta reserva; entre otros.{" "}
        </p>
      </div>

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>
    </header>
  );
};
export default Boyaca;
