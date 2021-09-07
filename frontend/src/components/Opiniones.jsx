import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToasts } from "react-toast-notifications";
import './Estilos/opiniones.css';

const Opiniones = () => {
    const { addToast } = useToasts();
    // Se crea variable listaOpciones en estado inicial [], y su método para modificar su valor.
    const [listaOpiniones, setListaOpiniones] = useState([]);

    // Método se podría llamar "constructor", que nos ayuda a inicializar nuestas variables
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getAllOpiniones();
        }
        return () => (mounted = false);
    }, []);

    // Llamamos al backend, por medio de url
    // para tomar todas las opiniones existentes.
    function getAllOpiniones() {
        axios
            .get("http://localhost:3000/opiniones/todas-opiniones/")
            .then(function ({ data, status }) {
                // Se ejecuta siempre que el servidor ejecute todo correctamente
                if (status === 200) {
                    setListaOpiniones(data);
                    console.log(data)
                } else {
                    addToast("No hay opiniones", { appearance: "info" });
                }
            })
            .catch(function (error) {
                // Se ejecuta siempre que ocurra algún error
                addToast("oh no, un error a ocurrido", { appearance: "error" });
            });
    }

    return (
        <section className="container-2 flex text-center">
        <div>
            <h1>Opiniones</h1>
            {listaOpiniones.map((opinion, index) => {
                return (
                    <div key={index} className="opinion__contenedor">
                        <h3>Calificación: {opinion.calificacion}</h3>
                        <h4>Lugar: Región {opinion.nombre_lugar}</h4>
                        <h4>Departamento: {opinion.departamento}</h4>
                        <h4>Usuario: {opinion.nombre_usuario}</h4>
                        <p>{opinion.comentario}</p>
                    </div>
                )
            })}
        </div>
        </section>
    )
}

export default Opiniones