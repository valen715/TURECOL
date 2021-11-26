import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Narino = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Narino</h1>
        <img class="imagenes" src={imagen.img61} width="150" height="100" />
        <p class="text">
          {" "}
          Nariño es un departamento perteneciente a la región Pacífica, El
          departamento de Nariño es un importante productor agrícola y
          agroindustrial, su actividad turística se ha venido desarrollando con
          el tiempo y cada vez toma mayor importancia.{" "}
        </p>
        <p class="text">
          Nariño tiene una superficie de 46.530 Km2, tiene una población
          aproximadamente de 505.046 habitantes, este departamento fue creado en
          el año 1947, a sus habitantes se les llama Chocoanos, la capital del
          Nariño es Quibdó y cuenta con 113.473 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img62} width="150" height="100" />
        <p class="text">
          {" "}
          En Nariño podemos visitar lugares como el Parque Sanquianga, es bañado
          por las aguas del Océano Pacífico. Es uno de los mayores bosques de
          manglares del mundo. Cubre más de 80.000 hectáreas, y el 20% de los
          manglares de Colombia se encuentran aquí. El parque alberga sesenta
          especies de peces, treinta especies de moluscos, una veintena de
          especies de aves y doce especies de reptiles; pero también hay lugares
          naturales donde podemos ir como: Laguna Verde, Volcán Galeras, Cañón
          de Juanambú, entre muchos otros.{" "}
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
export default Narino;
