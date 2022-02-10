import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Cordoba = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Cordoba</h1>
        <img className="imagenes" src={imagen.img39} width="150" height="100" />
        <p className="text">
          {" "}
          Córdoba es un departamento de la región caribeña, este departamento es
          destacado mayormente por la actividad agrícola, precaria y minera, es
          un territorio lleno de culturas y de tradiciones, su ubicación hace
          que sea uno de los departamentos mas privilegiados para practicar el
          ecoturismo.{" "}
        </p>
        <p className="text">
          Córdoba tiene una superficie de 23.980 Km2, tiene una población
          aproximadamente de 1.736.218 habitantes, este departamento fue creado
          en el año 1951, a sus habitantes se les llama Cordobés, la capital de
          Córdoba es Montería y cuenta con 270.954 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img40} width="150" height="100" />
        <p className="text">
          {" "}
          Se puede empezar visitando la Ciénaga de Ayapel, en este sitio se
          suelen desplazar en planchones de madera este lugar en muy rico en
          biodiversidad, también se puede visitar el Zooparque Los Caimanes, el
          cual esta ubicado en el municipio de Buenavista, entre otros lugares.{" "}
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
export default Cordoba;
