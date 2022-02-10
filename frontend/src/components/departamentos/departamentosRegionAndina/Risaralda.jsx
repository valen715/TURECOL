import React from "react";
import imagen from "../../../images/imagen";
import "../style/departamento.css";

const Risaralda = () => {
  return (
    <header>
      <div className="divsito">
        <h1 className="titulo">Risaralda</h1>
        <img className="imagenes" src={imagen.img27} width="150" height="100" />
        <p className="text">
          {" "}
          Risaralda es un departamento perteneciente a la región Andina, es uno
          de los varios departamentos cafeteros de Colombia, su comercio esta
          muy bien desarrollado, una de sus actividades principales es el
          turismo y para este departamento es muy importante la industria de la
          confección.{" "}
        </p>
        <p className="text">
          Risaralda tiene una superficie de 4.140 Km2, tiene una población
          aproximadamente de 957.250 habitantes, este departamento fue creado en
          el año 1966, a sus habitantes se les llama Risaraldense, la capital
          del Risaralda es Pereira y cuenta con 412.134 habitantes.
        </p>{" "}
        <br></br>
        <img className="imagenes2" src={imagen.img28} width="150" height="100" />
        <p className="text">
          {" "}
          En Risaralda tenemos sitios turísticos muy interesantes los cuales
          podemos visitar y conocer tenemos la Laguna del Otún que tiene un
          paisaje hermoso; Santuario Fauna y Flora Otún Quimbaya, son vastas
          áreas de bosques andinos con alta biodiversidad y están ubicadas en el
          corazón de la zona cafetalera de la cordillera central, en este lugar
          podemos encontrar gran variedad de animales; Alto el Nudo esta ubicado
          en el municipio de dos quebradas y aquí podemos encontrar diversidad
          de fauna y flora con senderos ecológicos los cuales podremos recorrer.{" "}
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
export default Risaralda;
