import React, { useEffect, useState } from "react";
import LoginUtils from "../../utils/login.util";

const Menu = () => {
  const [logueado, setLogueado] = useState(false);

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
    <header>
      <nav>
        {logueado && (
          <>
            

            <ul className="enlaces-menu">
              <li>
                <a href="/">Inicio</a>
                
              </li>         
              
              <li>
                <a href="contacto">Contacto</a>
              </li>
            </ul>

            <button className="ham" type="button">
              <span className="br-1"></span>
              <span className="br-2"></span>
              <span className="br-3"></span>
            </button>
          </>
        ) ||
          (
            <>
              <ul className="enlaces-menu">
                <li>
                  <h1>Turecol</h1>
                </li>
              </ul>
            </>
          )
        }
      </nav>
    </header>
  );
};

export default Menu;
