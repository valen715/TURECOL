import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Risaralda = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Risaralda</h1>
        <img class="imagenes" src={imagen.img27} width="150" height="100" />
        <p class="text">
          {" "}
          Risaralda es un departamento perteneciente a la región Andina, es uno
          de los varios departamentos cafeteros de Colombia, su comercio esta
          muy bien desarrollado, una de sus actividades principales es el
          turismo y para este departamento es muy importante la industria de la
          confección.{" "}
        </p>
        <p class="text">
          Risaralda tiene una superficie de 4.140 Km2, tiene una población
          aproximadamente de 957.250 habitantes, este departamento fue creado en
          el año 1966, a sus habitantes se les llama Risaraldense, la capital
          del Risaralda es Pereira y cuenta con 412.134 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img28} width="150" height="100" />
        <p class="text">
          {" "}
          En Risaralda tenemos sitios turísticos muy interesantes los cuales
          podemos visitar y conocer tenemos la Laguna del Otún que tiene un
          paisaje hermoso; Santuario Fauna y Flora Otún Quimbaya, son vastas
          áreas de bosques andinos con alta biodiversidad y están ubicadas en el
          corazón de la zona cafetalera de la cordillera central, en este lugar
          podemos encontrar gran variedad de animales; Alto el Nudo esta ubicado
          en el municipio de dos quebradas y aquí podemos encontrar diversidad
          de fauna y flora con senderos ecológicos los cuales podremos recorrer.{" "}
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
export default Risaralda;
