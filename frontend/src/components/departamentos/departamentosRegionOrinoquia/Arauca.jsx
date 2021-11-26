import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Arauca = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Arauca</h1>
        <img class="imagenes" src={imagen.img49} width="150" height="100" />
        <p class="text">
          {" "}
          Arauca es un departamento perteneciente a la región de la Orinoquia,
          es uno de los departamentos mas extensos de Colombia, y su territorio
          esta habitado por ocho pueblos indígenas.{" "}
        </p>
        <p class="text">
          Arauca tiene una superficie de 23.818 Km2, tiene una población
          aproximadamente de 208.615 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Araucanos, la capital de
          Arauca es Arauca y cuenta con 42.829 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img50} width="150" height="100" />
        <p class="text">
          {" "}
          En Risaralda tenemos sitios turísticos muy interesantes los cuales
          podemos visitar y conocer tenemos el Parque Ecológico del Llano, aquí
          podemos incursionar por toda su naturaleza; también hay lugares como
          Los Araguatos Centro Recreacional, Cravo Norte, entre otros.{" "}
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
export default Arauca;
