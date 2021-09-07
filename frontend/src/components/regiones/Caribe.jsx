import React from "react";
import "./style/region.css"


const Caribe = () => {
  return (
    <header>
      <div class="departamento">
        <h1 class="titulo">Región Caribe</h1>
        <a href="/Atlantico" className="button-depa">
          <button class="button-depart" onclick="accion">
            Atlantico
          </button>
        </a>
        <a href="/Bolivar" className="button-depa">
          <button class="button-depart" onclick="accion">
            Bolivar
          </button>
        </a>
        <a href="/Cesar" className="button-depa">
          <button class="button-depart" onclick="accion">
            Cesar
          </button>
        </a>
        <a href="/Cordoba" className="button-depa">
          <button class="button-depart" onclick="accion">
            Cordoba
          </button>
        </a>
        <a href="/Guajira" className="button-depa">
          <button class="button-depart" onclick="accion">
            La Guajira
          </button>
        </a>
        <a href="/Magdalena" className="button-depa">
          <button class="button-depart" onclick="accion">
            Magdalena
          </button>
        </a>
        <a href="/SanAyP" className="button-depa">
          <button class="button-depart" onclick="accion">
            San Andres y Providencia
          </button>
        </a>
        <a href="/Sucre" className="button-depa">
          <button class="button-depart" onclick="accion">
            Sucre
          </button>
        </a>

      </div>
    </header>
  );
};

export default Caribe;
