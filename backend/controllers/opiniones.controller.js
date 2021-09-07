const Opinion = require('../models/opinionesEntity');
const Usuario = require('../models/usuariosEntity');
const Lugar = require('../models/lugaresEntity');
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");

const opinionController = {};

opinionController.crearComentario = async (req, res) => {
    // Creamos un where con dos condiciones.
    // 1. el id_usuario sea el que se envío
    // 2. el id_lugar sea el que se envío
    const condicion = {
        where: {
            [Op.and]: [
                { id_usuario: req.body.id_usuario },
                { id_lugar: req.body.id_lugar }
            ]
        }
    }
    // consultamos a la bd si existe opinión para ese lugar
    const existeOpinion = await Opinion.findOne(condicion);
    // si existe, se modifica la opinión. Sino se crea
    if (existeOpinion) {
        existeOpinion.departamento = req.body.departamento;
        existeOpinion.calificacion = req.body.calificacion;
        existeOpinion.comentario = req.body.comentario;
        existeOpinion.save();
        return res.status(201).json({ status: 'Opinion actualizada' });
    } else {
        const newOpinion = Opinion.build(
            {
                "id_usuario": req.body.id_usuario,
                "id_lugar": req.body.id_lugar,
                "departamento": req.body.departamento,
                "calificacion": req.body.calificacion,
                "comentario": req.body.comentario,
            }
        );
        // Guarda la opinión en bd
        await newOpinion.save();
        return res.json({ status: 'Opinion creado' });
    }

}

opinionController.getAllComentarios = async (req, res) => {
    // Tomamos todas las opiniones de la bd
    const opiniones = await Opinion.findAll();
    // Vamos a pasar por cada opinión, para tomar
    // el nombre del usuario y el nombre del lugar.
    // recorremos las opiniones en cola.
    for (let i = 0; i < opiniones.length; i++) {
        let opinion = opiniones[i];
        // Consultamos el usuario asociado a esa opinión.
        const usuario = await Usuario.findByPk(opinion.id_usuario);
        // Consultamos el lugar asociado a esa opinión.
        const lugar = await Lugar.findByPk(opinion.id_lugar);
        // Creamos una nuva opinión con los datos recuperados.
        // pero esta no se guarda en la bd
        opinion = {
            "id_opinion": opinion.id_opinion,
            "nombre_usuario": usuario.getNombreCompleto(),
            "nombre_lugar": lugar.nombre,
            "departamento": opinion.departamento,
            "calificacion": opinion.calificacion,
            "comentario": opinion.comentario
        }
        // Aca modificamos la opinión.
        opiniones[i] = opinion;
    }

    if (opiniones) {
        return res.status(200).json(opiniones);
    } else {
        // No hay opiniones
        return res.sendStatus(204);
    }
}

module.exports = opinionController;