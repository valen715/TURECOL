import React from "react";
import imagen from "../images/imagen";
import "./Estilos/contactos.css"

const Contacto = () => {
  return (
    <section className="container-1 flex text-center">
      <h1 className="titulo">Contactanos</h1>
      <div className="container">
        <div className="columna">
          <h2 className="card-titulo">Sergio David Mosquera Moreno</h2>
          <hr />
          <img src={imagen.img72} class="img-card" />
          <hr />
          <p className="card-parrafo">
            Correo: Sergio_Mosquera23211@elpoli.edu.co
          </p>
          <p className="card-parrafo">
            Teléfono: 310-4144655
          </p>

        </div>
        <div className="columna">
          <h2 className="card-titulo">Valentina Restrepo Montoya</h2>
          <hr />
          <img src={imagen.img73} class="img-card" />
          <hr />
          <p className="card-parrafo">
            Correo: valentina_restrepo23211@elpoli.edu.co
          </p>
          <p className="card-parrafo">
            Teléfono: 321 7281317
          </p>
        </div>

        <div className="columna">
          <h2 className="card-titulo">Valentina Pulgarín Fernández</h2>
          <hr />
          <img src={imagen.img74} class="img-card" />
          <hr />
          <p className="card-parrafo">
            Correo: valentina_pulgarin23211@elpoli.edu.co
          </p>
          <p className="card-parrafo">
            Teléfono: 3206397349
          </p>
        </div>
      </div>

        
      
    </section>

  );
};
export default Contacto;