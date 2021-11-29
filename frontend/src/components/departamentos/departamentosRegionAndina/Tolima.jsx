import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Tolima = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Tolima</h1>
        <img class="imagenes" src={imagen.img31} width="150" height="100" />
        <p class="text">
          {" "}
          El Tolima es un departamento perteneciente a la región Andina, este
          departamento es muy importante gracias a la gran riqueza natural que
          provee, este territorio también posee gran diversidad en sus suelos y
          climas, además se ha notado un gran avance en el turismo.{" "}
        </p>
        <p class="text">
          El Tolima tiene una superficie de 23.562 Km2, tiene una población
          aproximadamente de 1.412.230 habitantes, este departamento fue creado
          en el año 1886, a sus habitantes se les llama Tolimense, la capital
          del Tolima es Ibagué y cuenta con 396.423 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img32} width="150" height="100" />
        <p class="text">
          {" "}
          El Tolima tiene gran variedad de sitios turísticos los cuales podemos
          visitar uno de ellos podría ser el Parque Ecológico Ciudad Reptilia,
          es un lugar para hacer ecoturismo y aprender de los reptiles ya que es
          un zoo criadero, también está el Jardín Botánico San Jorge donde se
          encuentran las muestras de la rica y diversa vegetación de todo
          Colombia.{" "}
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
export default Tolima;
