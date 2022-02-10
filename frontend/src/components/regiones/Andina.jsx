import React from "react";
import "./style/region.css"

const Andina = () => {
  return (
    <header>
      <div className="departamentos">
        <h1 className="titulo">Región Andina</h1>
        <div className="departamento">
          <a href="/Antioquia " className="button-depa">
            <button className="button-depart" onclick="accion">
              Antioquia
            </button>
          </a>
          <a href="/Boyaca" className="button-depa">
            <button className="button-depart" onclick="accion">
              Boyaca
            </button>
          </a>
          <a href="/Caldas" className="button-depa">
            <button className="button-depart" onclick="accion">
              Caldas
            </button>
          </a>
          <a href="/Cundinamarca" className="button-depa">
            <button className="button-depart" onclick="accion">
              Cundinamarca
            </button>
          </a>
          <a href="/Huila" className="button-depa">
            <button className="button-depart" onclick="accion">
              Huila
            </button>
          </a>
          <a href="/NorteSantander" className="button-depa">
            <button className="button-depart" onclick="accion">
              Norte de Santander
            </button>
          </a>
          <a href="/Quindio" className="button-depa">
            <button className="button-depart" onclick="accion">
              Quindio
            </button>
          </a>
          <a href="/Risaralda" className="button-depa">
            <button className="button-depart" onclick="accion">
              Risaralda
            </button>
          </a>
          <a href="/Santander" className="button-depa">
            <button className="button-depart" onclick="accion">
              Santander
            </button>
          </a>
          <a href="/Tolima" className="button-depa">
            <button className="button-depart" onclick="accion">
              Tolima
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Andina;
