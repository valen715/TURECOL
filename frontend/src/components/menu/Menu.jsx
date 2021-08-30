import React from 'react';

const Menu = () => {

    return (
        <header>
            <nav>
                <a href="index.html"><img class="logo" src="img/logo.png" alt="logo" /></a>

                <ul class="enlaces-menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="/">Lugares</a></li>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>

                <button class="ham" type="button">   
                    <span class="br-1"></span>
                    <span class="br-2"></span>
                    <span class="br-3"></span>
                </button>                       
            </nav>
        </header>
    )
}

export default Menu