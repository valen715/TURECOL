import React from "react";

const Caribe = () => {
  return (
    <header>
      <h1 class="andina">Región Caribe</h1>
      <div class="departamentos">
        <button class="button-depart" onclick="accion">
          Atlántico
        </button>
        <button class="button-depart" onclick="accion">
          Bolívar
        </button>
        <button class="button-depart" onclick="accion">
          Cesar
        </button>
        <button class="button-depart" onclick="accion">
          Córdoba
        </button>
        <button class="button-depart" onclick="accion">
          La Guajira
        </button>
        <button class="button-depart" onclick="accion">
          Magdalena
        </button>
        <button class="button-depart" onclick="accion">
          Sucre
        </button>
        <button class="button-depart" onclick="accion">
          San Andres y Providencia
        </button>
      </div>
    </header>
  );
};

export default Caribe;
