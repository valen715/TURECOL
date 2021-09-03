import React from "react";

const Pacifico = () => {
  return (
    <header>
      <h1 class="andina">Región Pacífica</h1>
      <div class="departamentos">
      <a href="/frontend/src/components/departamentos/departamentosRegionPacifica/Cauca.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Cauca
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionPacifica/Choco.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Choco
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionPacifica/Narino.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Nariño
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionPacifica/ValleDelCauca.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Valle del Cauca
        </button>
      </a>
        
      </div>
    </header>
  );
};

export default Pacifico;
