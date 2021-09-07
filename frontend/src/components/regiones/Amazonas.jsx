import React from "react";
import "./style/region.css"


const Amazonas = () => {
  return (
    <>
      <header>

        <div class="departamento">
          <h1 class="titulo">Región Amazónica</h1>
          <a href="/AmazonasD" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Amazonas
            </button>
          </a>
          <a href="/Caqueta" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Caquetá
            </button>
          </a>
          <a href="/Guainia" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Guainía
            </button>
          </a>
          <a href="/Guaviare" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Guaviare
            </button>
          </a>
          <a href="/Putumayo" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Putumayo
            </button>
          </a>
          <a href="Vaupes" className="button-depar">
            {" "}
            <button class="button-depart" onclick="accion">
              Vaupés
            </button>
          </a>
        </div>

      </header>
    </>
  );
};

export default Amazonas;
