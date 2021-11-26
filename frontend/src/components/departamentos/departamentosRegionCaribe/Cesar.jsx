import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Cesar = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="tiulo">Cesar</h1>
        <img class="imagenes" src={imagen.img37} width="150" height="100" />
        <p class="text">
          {" "}
          El Cesar es un departamento perteneciente a la región caribeña, es un
          departamento destacado por su ganadería, agricultura y su pesca, en
          los últimos años se ha visto un incremento y un mejor desarrollo en el
          turismo, se sabe que es el segundo departamento que más realiza
          exportaciones.{" "}
        </p>
        <p class="text">
          El Cesar tiene una superficie de 22.905 Km2, tiene una población
          aproximadamente de 1.041.203 habitantes, este departamento fue creado
          en el año 1967, a sus habitantes se les llama Cesarense, la capital
          del Cesar es Valledupar y cuenta con 274.946 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img38} width="150" height="100" />
        <p class="text">
          {" "}
          Al visitar el departamento del Cesar no se puede quedar sin conocer
          sus sitios ecoturísticos algunos de estos son el Río Magiriaimo el
          cual destaca por su gran diversidad de fauna y flora; si visitamos el
          municipio de Aguachica podemos encontrar muchas actividades acuáticas
          y de ecoturismo ya que queda entre la cordillera Oriental y el río
          Magdalena; también esta el bosque el Agüil, el cual posee gran
          diversidad ya que es una zona verde.{" "}
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
export default Cesar;
