import React from "react";

const Pacifico = () => {
  return (
    <header>
      <h1 class="andina">Región Pacífica</h1>
      <div class="departamentos">
      <a href="/CaucaP" className="button-depa">
        <button class="button-depart" onclick="accion">
          Cauca
        </button>
      </a>
      <a href="/Choco" className="button-depa">
        <button class="button-depart" onclick="accion">
          Choco
        </button>
      </a>
      <a href="/Narino" className="button-depa">
        <button class="button-depart" onclick="accion">
          Nariño
        </button>
      </a>
      <a href="/ValleCauca" className="button-depa">
        <button class="button-depart" onclick="accion">
          Valle del Cauca
        </button>
      </a>
        
      </div>
    </header>
  );
};

export default Pacifico;
