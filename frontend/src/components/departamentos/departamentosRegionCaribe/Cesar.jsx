import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Cesar = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="tiulo">Cesar</h1>
        <img className="imagenes" src={imagen.img37} width="150" height="100" />
        <p className="text">
          {" "}
          El Cesar es un departamento perteneciente a la región caribeña, es un
          departamento destacado por su ganadería, agricultura y su pesca, en
          los últimos años se ha visto un incremento y un mejor desarrollo en el
          turismo, se sabe que es el segundo departamento que más realiza
          exportaciones.{" "}
        </p>
        <p className="text">
          El Cesar tiene una superficie de 22.905 Km2, tiene una población
          aproximadamente de 1.041.203 habitantes, este departamento fue creado
          en el año 1967, a sus habitantes se les llama Cesarense, la capital
          del Cesar es Valledupar y cuenta con 274.946 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img38} width="150" height="100" />
        <p className="text">
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
export default Cesar;
