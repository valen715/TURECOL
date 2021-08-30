import React from "react";

const Andina = () => {
  return (
    <header>
      <h1 class="andina">Región Andina</h1>

      <div class="departamentos">
        <button class="button-depart" onclick="accion">
          Antioquia
        </button>
        <button class="button-depart" onclick="accion">
          Boyacá
        </button>
        <button class="button-depart" onclick="accion">
          Caldas
        </button>
        <button class="button-depart" onclick="accion">
          Cundinamarca
        </button>
        <button class="button-depart" onclick="accion">
          Huila
        </button>
        <button class="button-depart" onclick="accion">
          Norte de Santander
        </button>
        <button class="button-depart" onclick="accion">
          Quindío
        </button>
        <button class="button-depart" onclick="accion">
          Risaralda
        </button>
        <button class="button-depart" onclick="accion">
          Santander
        </button>
        <button class="button-depart" onclick="accion">
          Tolima
        </button>
      </div>
    </header>
  );
};

export default Andina;
