import React from "react";

const Amazonas = () => {
  return (
    <>
      <header>
        <h1 class="andina">Región Amazónica</h1>
        <div class="departamentos">
          <button class="button-depart" onclick="accion">
            Amazonas
          </button>
          <button class="button-depart" onclick="accion">
            Caquetá
          </button>
          <button class="button-depart" onclick="accion">
            Guaninía
          </button>
          <button class="button-depart" onclick="accion">
            Guaviare
          </button>
          <button class="button-depart" onclick="accion">
            Putumayo
          </button>
          <button class="button-depart" onclick="accion">
            Vaúpes
          </button>
        </div>
      </header>
    </>
  );
};

export default Amazonas;
