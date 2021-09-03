import React from "react";

const Orinoquia = () => {
  return (
    <header>
      <h1 class="andina">Región Orinoquía</h1>
      <div class="departamentos">
      <a href="/frontend/src/components/departamentos/departamentosRegionOrinoquia/Arauca.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Arauca
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionOrinoquia/Casanare.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Casanare
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionOrinoquia/Meta.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Meta
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionOrinoquia/Vichada.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Vichada
        </button>
      </a>
        
      </div>
    </header>
  );
};

export default Orinoquia;
