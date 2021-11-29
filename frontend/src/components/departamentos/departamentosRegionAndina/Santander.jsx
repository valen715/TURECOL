import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Santander = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="Santander">Santander</h1>
        <img class="imagenes" src={imagen.img29} width="150" height="100" />
        <p class="text">
          {" "}
          Santander es un departamento perteneciente a la región Andina, este
          departamento se ha ido desarrollando en los últimos años su economía
          esta bastante diversificada y posee grandes recursos naturales, además
          este departamento tiene una cultura bastante fuera de lo común.{" "}
        </p>
        <p class="text">
          Santander tiene una superficie de 30.537 Km2, tiene una población
          aproximadamente de 2.071.016 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Santandereano, la
          capital de Santander es Bucaramanga y cuenta con 499.932 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img30} width="150" height="100" />
        <p class="text">
          {" "}
          En Santander podemos encontrar lugares naturales los cuales podremos
          visitar uno de ellos es la Cascada de Juan Curi, también esta la Mesa
          de los Santos de este sitio se puede observar el cañón del Chicamocha,
          tenemos las Gachas es un lugar muy reconocido por sus enormes
          cráteres.{" "}
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
export default Santander;
