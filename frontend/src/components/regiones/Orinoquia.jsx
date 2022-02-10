import React from "react";
import "./style/region.css"


const Orinoquia = () => {
  return (
    <header>
      <div className="departamento">
        <h1 className="titulo">Región Orinoquía</h1>
        <a href="/Arauca" className="button-depa">
          <button className="button-depart" onclick="accion">
            Arauca
          </button>
        </a>
        <a href="/Casanare" className="button-depa">
          <button className="button-depart" onclick="accion">
            Casanare
          </button>
        </a>
        <a href="/Meta" className="button-depa">
          <button className="button-depart" onclick="accion">
            Meta
          </button>
        </a>
        <a href="/Vichada" className="button-depa">
          <button className="button-depart" onclick="accion">
            Vichada
          </button>
        </a>

      </div>
    </header>
  );
};

export default Orinoquia;
