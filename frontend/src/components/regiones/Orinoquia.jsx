import React from "react";

const Orinoquia = () => {
  return (
    <header>
      <h1 class="andina">Región Orinoquía</h1>
      <div class="departamentos">
      <a href="/Arauca" className="button-depa">
        <button class="button-depart" onclick="accion">
          Arauca
        </button>
      </a>
      <a href="/Casanare" className="button-depa">
        <button class="button-depart" onclick="accion">
          Casanare
        </button>
      </a>
      <a href="/Meta" className="button-depa">
        <button class="button-depart" onclick="accion">
          Meta
        </button>
      </a>
      <a href="/Vichada" className="button-depa">
        <button class="button-depart" onclick="accion">
          Vichada
        </button>
      </a>
        
      </div>
    </header>
  );
};

export default Orinoquia;
