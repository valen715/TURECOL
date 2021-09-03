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
            

            <ul class="enlaces-menu">
              <li>
                <a href="/">Inicio</a>
              </li>         
              
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>

            <button class="ham" type="button">
              <span class="br-1"></span>
              <span class="br-2"></span>
              <span class="br-3"></span>
            </button>
          </>
        ) ||
          (
            <>
              <ul class="enlaces-menu">
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
