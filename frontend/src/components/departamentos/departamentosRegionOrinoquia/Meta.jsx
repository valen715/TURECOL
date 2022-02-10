import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Meta = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Meta</h1>
        <img className="imagenes" src={imagen.img53} width="150" height="100" />
        <p className="text">
          {" "}
          El Meta es un departamento perteneciente a la región de la Orinoquia,
          es uno de los departamentos con mayor riqueza, tiene importantes
          regalías gracias a los descubrimientos de petróleo, n los últimos años
          se ha venido destacando por su crecimiento en el sector turístico.{" "}
        </p>
        <p className="text">
          El Meta tiene una superficie de 85.635 Km2, tiene una población
          aproximadamente de 979.683 habitantes, este departamento fue creado en
          el año 1959, a sus habitantes se les llama Metenses, la capital de El
          Meta es Villavicencio y cuenta con 393.511 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img54} width="150" height="100" />
        <p className="text">
          {" "}
          Este hermoso departamento tiene lugares para visitar tales como: El
          Parque Nacional Natural Sierra de la Macarena, Es una combinación de
          ecosistemas pantanosos y selváticos, donde los visitantes pueden
          disfrutar de una gran variedad de muestras de flora y fauna; El Parque
          Tinigua, El parque alberga diferentes tipos de ecosistemas, flora y
          fauna, muchas aves y reptiles, varios simios, así como nutrias,
          tapires, ciervos de sabana y tigres; entre otros más.{" "}
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
export default Meta;
