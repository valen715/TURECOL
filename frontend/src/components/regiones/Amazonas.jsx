import React from "react";


const Amazonas = () => {
  return (
    <>
      <header>
        <h1 class="amazonas">Región Amazónica</h1>
        <div class="departamentos">
        <a href="/AmazonasD" className="button-depart">
        {" "}
          <button class="button-depart" onclick="accion">
            Amazonas            
          </button>
        </a>
        <a href="/Caqueta" className="button-depart">
        {" "}
          <button class="button-depart" onclick="accion">
            Caquetá
          </button>
        </a>
        <a href="/Guainia" className="button-depart">
        {" "}
          <button class="button-depart" onclick="accion">
            Guainía
          </button>
        </a>
        <a href="/Guaviare" className="button-depart">
        {" "}
          <button class="button-depart" onclick="accion">
            Guaviare
          </button>
        </a>
        <a href="/Putumayo" className="button-depart">
        {" "}
          <button class="button-depart" onclick="accion">
            Putumayo
          </button>
        </a>
        <a href="Vaupes" className="button-depart">
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
