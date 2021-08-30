import React from "react";

const Orinoquia = () => {
  return (
    <header>
      <h1 class="andina">Región Orinoquía</h1>
      <div class="departamentos">
        <button class="button-depart" onclick="accion">
          Meta
        </button>
        <button class="button-depart" onclick="accion">
          Arauca
        </button>
        <button class="button-depart" onclick="accion">
          Casanare
        </button>
        <button class="button-depart" onclick="accion">
          Vichada
        </button>
      </div>
    </header>
  );
};

export default Orinoquia;
