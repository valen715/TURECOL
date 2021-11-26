import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Bolivar = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Bolivar</h1>
        <img class="imagenes" src={imagen.img35} width="150" height="100" />
        <p class="text">
          {" "}
          Bolívar es un departamento perteneciente a la región caribeña este
          departamento esta lleno de diversidad y belleza natural, además de que
          es uno de los principales destinos turísticos de Colombia, lo que hace
          único este territorio son sus mares, su arquitectura y el clima que lo
          asociamos con unas buenas vacaciones.{" "}
        </p>
        <p class="text">
          Bolívar tiene una superficie de 25.978 Km2, tiene una población
          aproximadamente de 2.122.021 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Bolivarense, la capital
          del Bolívar es Cartagena y cuenta con 661.830 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img36} width="150" height="100" />
        <p class="text">
          {" "}
          Lo bueno de visitar este departamento es que podemos hacer ecoturismo
          por tierra y por mar, unos de los lugares que se pueden visitar
          estando en Bolívar son: Santuario de Fauna y Flora Los Colorados, en
          este podemos encontrar rutas de senderismo, miradores naturales,
          observación de la fauna y la flora; Islas del Rosario, Parque Corales
          del Rosario y de San Bernardo, también podemos visitar ciudades o
          islas las cuales son muy turísticas como: Cartagena, Barú, San
          Jacinto, entre otros.{" "}
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
export default Bolivar;
