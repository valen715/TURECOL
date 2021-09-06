import React from 'react';
import axios from 'axios';
import LoginUtils from '../utils/login.util';
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import "./Estilos/crearOpiniones.css"


const CrearOpiniones = () => {
    const { addToast } = useToasts();
    const history = useHistory();

    function registrarOpinion() {
        const opinion = {
            id_lugar: document.getElementById("lugar").value,
            id_usuario: LoginUtils.getUsuario()?.id_usuario,
            departamento: document.getElementById("departamento").value,
            calificacion: document.getElementById("calificacion").value,
            comentario: document.getElementById("comentario").value,
        };

        axios
            .post("http://localhost:3000/opiniones/crear-opinion", opinion)
            .then(function ({ data, status }) {
                // Se ejecuta siempre que el servidor ejecute todo correctamente
                if (status === 200) {
                    addToast("Opinion creada exitosamente", { appearance: "success" });
                } else {
                    addToast("Opinion modificada exitosamente", { appearance: "success" });
                }
            })
            .catch(function (error) {
                // Se ejecuta siempre que ocurra algún error
                console.log(error);
                addToast("oh no, un error a ocurrido", { appearance: "error" });
            });
    }

    return (
        
        <div>
            <h1 class="titulo-1">Escribe tus opiniones</h1>
            <div class="crear-opinion">
                <label for="lugar">Región:</label>
                <select name="lugar" id="lugar">
                    <option value="1">Amazonas</option>
                    <option value="2">Andina</option>
                    <option value="3">Caribe</option>
                    <option value="4">Orinoquia</option>
                    <option value="5">Pacifico</option>
                </select>
                <br />
                <label for="departamento">Departamento:</label>
                <input name="departamento" id="departamento"  rows="10" ></input>
                <br />
                <br />
                <label class="calificacion" for="calificacion">Calificación:</label>
                <input id="calificacion" name="calificacion" max="5" maxLength="1" minLength="1" />
                <br />
                <label class="comentario" for="comentario">Comentario:</label>
                <textarea name="comentario" id="comentario" cols="30" rows="10"></textarea>
                <br />
                <input type="submit" value="Registrar opinion" onClick={registrarOpinion} />
            </div>
        </div>
    )
}

export default CrearOpiniones;