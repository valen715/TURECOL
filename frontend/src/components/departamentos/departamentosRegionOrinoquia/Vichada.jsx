import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Vichada = () => {
  return (
    <header>
      <div class="divsito">
        <h1 class="titulo">Vichada</h1>
        <img class="imagenes" src={imagen.img55} width="150" height="100" />
        <p class="text">
          {" "}
          Vichada es un departamento perteneciente a la región de la Orinoquia,
          este esta en el segundo puesto de los departamentos mas grandes de
          Colombia, posee una gran riqueza hídrica eso hace que este territorio
          sea un gran lugar ecoturístico.{" "}
        </p>
        <p class="text">
          Vichada tiene una superficie de 100.242 Km2, tiene una población
          aproximadamente de 22.766 habitantes, este departamento fue creado en
          el año 1991, a sus habitantes se les llama Vichadenses, la capital de
          Vichada es Puerto Carreño y cuenta con 9.080 habitantes.
        </p>{" "}
        <br></br>
        <img class="imagenes2" src={imagen.img56} width="150" height="100" />
        <p class="text">
          {" "}
          Hablando del turismo en vichada y enfocados un poco de la naturaleza
          el departamento cuenta con el Parque Natural Tuparro, Dentro del
          parque existen enormes formaciones rocosas que conforman el Escudo
          Guayanés, que junto con las playas de arena blanca del río Tuparro
          crean escenarios muy similares a los que se pueden evaluar dentro del
          Parque Nacional Tayrona. y la Reserva Indígena Unuma Baja, entre
          muchos más lugares.{" "}
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
export default Vichada;
