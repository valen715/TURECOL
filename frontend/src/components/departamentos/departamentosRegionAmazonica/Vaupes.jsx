import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Vaupes = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Vaupés</h1>
        <img class="imagenes" src={imagen.img11} width="150" height="100" />
        <p class="text">
          {" "}
          El Vaupés es un departamento perteneciente a la región Amazónica, este
          departamento es un lugar ideal para visitar los ancestros, vivir y
          conocer de la cultura indígena, en Vaupés se pueden visitar lugares
          tales como Raudal del Jirijirimo, el cerro de Urania, el cerro Way
          Reriku o el Caño Cucura.{" "}
        </p>
        <p class="text">
          El Vaupés tiene una superficie de 65.268 Km2, tiene una población
          aproximadamente de 44.079 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Vaupense, la capital del
          Vaupés es Mitú y cuenta con 14.898 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img12} width="150" height="100" />
        <p class="text">
          {" "}
          Por ser un departamento selvático, es ideal para el turismo ecológico
          y de aventura. La mayoría de los habitantes son de las etnias
          indígenas y conservan su dialecto y cultura, la comida es la
          autóctona, por ello, su atractivo turístico es de gran interés para el
          turista. En Mitú, la capital, es posible encontrar alojamiento con
          relativa comodidad, existen algunos restaurantes para deleitarse con
          la cocina de la región y se ofrecen varias alternativas para recorrer
          la selva y los ríos.{" "}
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
export default Vaupes;
