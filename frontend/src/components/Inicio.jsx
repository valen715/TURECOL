import React, { useEffect, useState } from "react";
import LoginUtils from "../utils/login.util";
import { useHistory } from "react-router-dom";
import imagen from "../images/imagen"



const Inicio = () => {
    const history = useHistory();
  const [logueado, setLogueado] = useState(false);

  function cerrarSesion () {
    LoginUtils.SignOff();
    history.go(0);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (LoginUtils.getUsuario()) {
        setLogueado(true);
      }
    }
    return () => (mounted = false);
  }, []);

  return (
    <>
      {/* TABLA DE NAVEGACIÓN */}

      <script src="JS/main.js"></script>

      <header>
        {/* TARJETAS */}

        <section className="container flex text-center">
          {(logueado && (
            <>
              <div className="columna">
                <h2 className="card-titulo">Región Andina</h2>
                <hr />
                <img src={imagen.img5} className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nulla aliquam velit aut adipisci aperiam iusto maxime numquam,
                  temporibus, obcaecati molestias ratione repellendus illo.
                  Iusto repudiandae voluptate quam pariatur quae.
                </p>
                <a href="/andina" className="button-enlace">
                  <button className="button-ver-mas">Ver más</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Caribe</h2>
                <hr />
                <img src={imagen.img6} className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nulla aliquam velit aut adipisci aperiam iusto maxime numquam,
                  temporibus, obcaecati molestias ratione repellendus illo.
                  Iusto repudiandae voluptate quam pariatur quae....
                </p>
                <a href="/caribe" className="button-enlace">
                  <button className="button-ver-mas">Ver más</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Amazonica</h2>
                <hr />
                <img src={imagen.img4} className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nulla aliquam velit aut adipisci aperiam iusto maxime numquam,
                  temporibus, obcaecati molestias ratione repellendus illo.
                  Iusto repudiandae voluptate quam pariatur quae.
                </p>
                <a href="/amazonas" className="button-enlace">
                  <button className="button-ver-mas">Ver más</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Orinoquía</h2>
                <hr />
                <img src={imagen.img7} className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nulla aliquam velit aut adipisci aperiam iusto maxime numquam,
                  temporibus, obcaecati molestias ratione repellendus illo.
                  Iusto repudiandae voluptate quam pariatur quae.
                </p>
                <a href="/orinoquia" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Ver más</button>{" "}
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Pacífica</h2>
                <hr />
                <img src={imagen.img8} className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nulla aliquam velit aut adipisci aperiam iusto maxime numquam,
                  temporibus, obcaecati molestias ratione repellendus illo.
                  Iusto repudiandae voluptate quam pariatur quae.
                </p>
                <a href="/pacifico" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Ver más</button>
                </a>
              </div>
              <div className="columna">                               
                <a href="/opiniones" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Ver las opiniones</button>
                </a>
              </div>

              <div className="columna">                
                <a href="/crearOpiniones" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Crear opinión</button>
                </a>
              </div>

              <div className="columna">          
                <a href="/ "className="button-enlace">
                  {" "}
                  <button className="button-ver-mas" onClick={cerrarSesion}>Cerrar sesión</button>
                </a>
              </div>
            </>
          )) || (
            <>
              <div className="columna">
                <a href="/registro" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Registrarse</button>
                </a>
              </div>
              <div className="columna">
                <a href="/login" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">iniciar sesión</button>
                </a>
                
              </div>
              
            </>
          )}
        </section>
      </header>
    </>
  );
};

export default Inicio;
