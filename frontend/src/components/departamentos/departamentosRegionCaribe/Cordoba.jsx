import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Cordoba = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Cordoba</h1>
        <img class="imagenes" src={imagen.img39} width="150" height="100" />
        <p class="text">
          {" "}
          Córdoba es un departamento de la región caribeña, este departamento es
          destacado mayormente por la actividad agrícola, precaria y minera, es
          un territorio lleno de culturas y de tradiciones, su ubicación hace
          que sea uno de los departamentos mas privilegiados para practicar el
          ecoturismo.{" "}
        </p>
        <p class="text">
          Córdoba tiene una superficie de 23.980 Km2, tiene una población
          aproximadamente de 1.736.218 habitantes, este departamento fue creado
          en el año 1951, a sus habitantes se les llama Cordobés, la capital de
          Córdoba es Montería y cuenta con 270.954 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img40} width="150" height="100" />
        <p class="text">
          {" "}
          Se puede empezar visitando la Ciénaga de Ayapel, en este sitio se
          suelen desplazar en planchones de madera este lugar en muy rico en
          biodiversidad, también se puede visitar el Zooparque Los Caimanes, el
          cual esta ubicado en el municipio de Buenavista, entre otros lugares.{" "}
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
export default Cordoba;
