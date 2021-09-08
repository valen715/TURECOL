import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Meta = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Meta</h1>
        <img class="imagenes" src={imagen.img53} width="150" height="100" />
        <p class="text">
          {" "}
          El Meta es un departamento perteneciente a la región de la Orinoquia,
          es uno de los departamentos con mayor riqueza, tiene importantes
          regalías gracias a los descubrimientos de petróleo, n los últimos años
          se ha venido destacando por su crecimiento en el sector turístico.{" "}
        </p>
        <p class="text">
          El Meta tiene una superficie de 85.635 Km2, tiene una población
          aproximadamente de 979.683 habitantes, este departamento fue creado en
          el año 1959, a sus habitantes se les llama Metenses, la capital de El
          Meta es Villavicencio y cuenta con 393.511 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img54} width="150" height="100" />
        <p class="text">
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

      <a href="/crearOpiniones" className="button-enlace">
        {" "}
        <button className="button-ver-mas">Crear opinión</button>
      </a>
    </header>
  );
};
export default Meta;
