import React, { useEffect, useState } from "react";
import LoginUtils from "../utils/login.util";
import { useHistory } from "react-router-dom";

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
                <img src="img/regionAndina.jpg" className="img" alt="" />
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
                <img src="img/regionCaribe.jpg" className="img" alt="" />
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
                <img src="img/regionAmazonas.jpg" className="img" alt="" />
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
                <img src="img/regionOrinoquia.jfif" className="img" alt="" />
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
                <img src="img/regionPacifica.jpg" className="img" alt="" />
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
                <h2 className="card-titulo">Salir</h2>
                <hr />
                <img src="img/regionPacifica.jpg" className="img" alt="" />
                <hr />
                <a href="/pacifico" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas" onClick={cerrarSesion}>Cerrar sesión</button>
                </a>
              </div>
            </>
          )) || (
            <>
              <div className="columna">
                <h2 className="card-titulo">Registro usuario</h2>
                <hr />
                <img src="img/regionPacifica.jpg" className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, facere. Quam ad numquam blanditiis. Excepturi,
                  dolorum voluptatibus dicta minus provident rem unde, cumque
                  debitis illum quis ipsum ducimus ut cum!
                </p>
                <a href="/registro" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">Nuevo usuario</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Iniciar sesión.</h2>
                <hr />
                <img src="img/regionPacifica.jpg" className="img" alt="" />
                <hr />
                <p className="card-parrafo">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, facere. Quam ad numquam blanditiis. Excepturi,
                  dolorum voluptatibus dicta minus provident rem unde, cumque
                  debitis illum quis ipsum ducimus ut cum!
                </p>
                <a href="/login" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas">ingresar</button>
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
