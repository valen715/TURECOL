import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Caldas = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Caldas</h1>
        <img className="imagenes" src={imagen.img17} width="150" height="100" />
        <p className="text">
          {" "}
          Caldas es un departamento perteneciente a la región Andina, es un
          departamento que su desarrollo se basa principalmente en las áreas
          agrícolas, la ganadería y el turismo, este departamento es un lugar
          que tiene mucha diversidad de fauna y flora.{" "}
        </p>
        <p className="text">
          Caldas tiene una superficie de 7.888 Km2, tiene una población
          aproximadamente de 989.942 habitantes, este departamento fue creado en
          el año 1905, a sus habitantes se les llama Caldense, la capital de
          Caldas es Manizales y cuenta con 378.887 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img18} width="150" height="100" />
        <p className="text">
          {" "}
          Si en nuestros planes esta visitar el departamento de Caldas hay
          varios lugares por los que deberías empezar conociendo uno de estos es
          el Nevado del Ruiz es un buen lugar para practicar la escalada o el
          montañismo, otro de estos sitios es el Parque Nacional Natural de los
          Nevados, este tiene una gran importancia gracias a sus ecosistemas
          esto hace que se convierta en el mas importante del departamento de
          Caldas, en este parque podemos encontrar algunos mamíferos y aves
          también; entre otros lugares más.{" "}
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
          <div className="col-10 ">
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
export default Caldas;
