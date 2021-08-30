import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const Registro = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  function registrar() {
    const usuario = {
      nombres: document.getElementById("nombres").value,
      correo: document.getElementById("correo").value,
      clave: document.getElementById("clave").value,
    };

    axios
      .post("http://localhost:3000/usuarios/registrarUsuario", usuario)
      .then(function (response) {
        // Se ejecuta siempre que el servidor ejecute todo correctamente
        console.log(response);
        console.log("Usuario registrado con exito");
        addToast("Usuario registrado exitosamente", { appearance: "success" });
        history.push("/");
      })
      .catch(function (error) {
        // Se ejecuta siempre que ocurra algún error
        console.log(error);
        addToast("Usuario no registrado", { appearance: "error" });
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
