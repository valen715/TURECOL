import React from "react";

const Caribe = () => {
  return (
    <header>
      <h1 class="andina">Región Caribe</h1>
      <div class="departamentos">
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Atlantico.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Atlantico
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Bolivar.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Bolivar
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Cesar.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Cesar
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Cordoba.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Cordoba
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Guajira.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          La Guajira
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Magdalena.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Magdalena
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/SanAyP.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          San Andres y Providencia
        </button>
      </a>
      <a href="/frontend/src/components/departamentos/departamentosRegionCaribe/Sucre.jsx" className="button-depa">
        <button class="button-depart" onclick="accion">
          Sucre
        </button>
      </a>
        
      </div>
    </header>
  );
};

export default Caribe;
