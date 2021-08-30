import React from "react";
import axios from 'axios';

const Registro = () => {

  function registrar() {
    const usuario = {
      nombre: document.getElementById("nombres").value,
      correo: document.getElementById("correo").value,
      clave: document.getElementById("clave").value,
    };
    
    axios
      .post("http://localhost:3000/usuarios/registrarUsuario", usuario)
      .then(function (response) {
        // Se ejecuta siempre que el servidor ejecute todo correctamente
        console.log(response);
        console.log("Usuario registrado con exito");
      })
      .catch(function (error) {
        // Se ejecuta siempre que ocurra algún error
        console.log(error);
        console.log("El usuario no pudo ser registrado con exito");
      });
  }

  return (
    <div>
      <h1>Este es el registro</h1>
        <div>
          <label for="nombres">Nombre:</label>
          <input id="nombres" name="nombres" />
          <br />
          <label for="correo">Correo:</label>
          <input id="correo" name="correo" />
          <br />
          <label for="clave">Contraseña:</label>
          <input id="clave" name="clave" />

          <input type="submit" value="Registrar" onClick={registrar} />
        </div>
    </div>
  );
};

export default Registro;
