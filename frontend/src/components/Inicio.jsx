import React, { useEffect, useState } from "react";
import LoginUtils from "../utils/login.util";
import { useHistory } from "react-router-dom";
import imagen from "../images/imagen";
import "./Estilos/inicio.css"

const Inicio = () => {
  const history = useHistory();
  const [logueado, setLogueado] = useState(false);

  function cerrarSesion() {
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
                <h2 className="card-titulo">Región Amazonica</h2>
                <hr />
                <img src={imagen.img66} class="img-card" />
                <hr />
                <p className="card-parrafo">
                  Está conformado por 6 departamentos, tiene un clima tropical
                  húmedo, cuenta con 264.945 habitantes, tiene límites
                  geográficos con los países de Ecuador, Perú, Brasil y
                  Venezuela, también tiene límite dentro del país con la región
                  Andina y la región Orinoquía.
                </p>
                <a href="/amazonas" className="button-enlace">
                  <button className="button-ver-mas button-ver-mas-mensaje">Ver más</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Andina</h2>
                <hr />
                <img src={imagen.img67} class="img-card" />
                <hr />
                <p className="card-parrafo">
                  Esta conformada por 10 departamentos, tiene un clima templado,
                  cuenta con 37.068.593 habitantes, tiene límites geográficos
                  con el país de Venezuela, también tiene límite dentro del país
                  con todas las otras regiones (Amazónica, Orinoquía, Pacífica y
                  Caribe).
                </p>
                <a href="/andina" className="button-enlace">
                  <button className="button-ver-mas button-ver-mas-mensaje">Ver más</button>
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Caribe</h2>
                <hr />
                <img src={imagen.img68} class="img-card" />
                <hr />
                <p className="card-parrafo">
                  Esta conformado por 8 departamentos, tiene un clima tropical
                  seco, cuenta con 10.301.982 habitantes, tiene límites
                  geográficos con el país de Venezuela, también tiene limites
                  con el mar Caribe y el Pacífico, y también limita con la
                  región Andina.
                </p>
                <a href="/caribe" className="button-enlace">
                  <button className="button-ver-mas button-ver-mas-mensaje">Ver más</button>
                </a>
              </div>

              <div className="columna">
                <h2 className="card-titulo">Región Orinoquía</h2>
                <hr />
                <img src={imagen.img69} class="img-card" />
                <hr />
                <p className="card-parrafo">
                  Esta conformado por 4 departamentos, tiene un clima tropical
                  seco y monzónico, cuenta con 1.681.273 habitantes, tiene
                  límites geográficos con Venezuela y dentro del país con la
                  región Amazónica y la región Andina.
                </p>
                <a href="/orinoquia" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas button-ver-mas-mensaje">Ver más</button>{" "}
                </a>
              </div>
              <div className="columna">
                <h2 className="card-titulo">Región Pacífica</h2>
                <hr />
                <img src={imagen.img70} class="img-card" />
                <hr />
                <p className="card-parrafo">
                  Está conformado por 4 departamentos, tiene un clima tropical
                  húmedo y monzónico, cuenta con 1.500.753 habitantes, tiene
                  límites geográficos con los países de Panamá y Ecuador, dentro
                  del país tiene límite con la región Andina y limita con el
                  océano Pacífico.
                </p>
                <a href="/pacifico" className="button-enlace">
                  {" "}
                  <button className="button-ver-mas button-ver-mas-mensaje">Ver más</button>
                </a>
              </div>

              <a href="/opiniones" className="button-ver-opiniones">
                {" "}
                <button className="button-ver-mas button-ver-mas-mensaje">Ver las opiniones</button>
              </a>

              <a href="/ " className="button-cerrar-sesion">
                {" "}
                <button className="button-ver-mas button-ver-mas-mensaje" onClick={cerrarSesion}>
                  Cerrar sesión
                </button>
              </a>
            </>
          )) || (
              <>
                <div Class="ingreso">
                  <img src={imagen.img65} class="ingreso-logo" />
                  <a href="/login" className="button-enlace">
                    {" "}
                    <button className="button-ver-mas button-ver-mas-mensaje">iniciar sesión</button>
                  </a>
                  <a href="/registro" className="button-enlace">
                    {" "}
                    <button className="button-ver-mas button-ver-mas-mensaje">Registrarse</button>
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
