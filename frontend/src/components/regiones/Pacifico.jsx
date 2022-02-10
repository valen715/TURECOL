import React from "react";
import "./style/region.css"


const Pacifico = () => {
  return (
    <header>
      <div className="departamento">
        <h1 className="titulo">Región Pacífica</h1>
        <a href="/CaucaP" className="button-depa">
          <button className="button-depart" onclick="accion">
            Cauca
          </button>
        </a>
        <a href="/Choco" className="button-depa">
          <button className="button-depart" onclick="accion">
            Choco
          </button>
        </a>
        <a href="/Narino" className="button-depa">
          <button className="button-depart" onclick="accion">
            Nariño
          </button>
        </a>
        <a href="/ValleCauca" className="button-depa">
          <button className="button-depart" onclick="accion">
            Valle del Cauca
          </button>
        </a>

      </div>
    </header>
  );
};

export default Pacifico;
