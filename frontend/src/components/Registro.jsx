import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import imagen from "../images/imagen";
import "./Estilos/registro.css";

const Registro = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  function registrar() {
    const usuario = {
      nombres: document.getElementById("nombres").value,
      correo: document.getElementById("correo").value.toLowerCase(),
      clave: document.getElementById("clave").value,
    };
    if (usuario.nombres == 0 && usuario.correo == 0 && usuario.clave == 0) {
      addToast("faltan datos", { appearance: "info" });
      return addToast;
    }

    axios
      .post("http://localhost:3000/usuarios/registrarUsuario", usuario)
      .then(function ({ data, status }) {
        // Se ejecuta siempre que el servidor ejecute todo correctamente
        console.log(data, status);
        if (status === 200) {
          console.log(data);
          console.log("Usuario registrado con exito");
          addToast("Usuario registrado exitosamente", {
            appearance: "success",
          });
          history.push("/");
        }
      })
      .catch(function (error) {
        // Se ejecuta siempre que ocurra algún error
        if (error.response) {
          const { status } = error.response;
          if (status === 409) {
            addToast("Usuario existente", { appearance: "info" });
          } else {
            addToast("Usuario no registrado", { appearance: "error" });
          }
        } else {
          addToast("Usuario no registrado, algo salio mal.", {
            appearance: "error",
          });
        }
      });
  }

  return (
    <div className="registro-box">
      {/* <h1>Registro</h1> */}
      <img src={imagen.img65} className="logo" />
      <from>
        <label for="nombres">Nombre:</label>
        <input id="nombres" name="nombres" />
        <br />
        <label for="correo">Correo:</label>
        <input id="correo" name="correo" />
        <br />
        <label for="clave">Clave:</label>
        <input type="password" id="clave" name="clave" />

        <input type="submit" value="Registrar" onClick={registrar} />
      </from>
    </div>
  );
};

export default Registro;
