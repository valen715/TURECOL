const Opinion = require('../models/opinionesEntity');
const Usuario = require('../models/usuariosEntity');
const Lugar = require('../models/lugaresEntity');
// Operadores de bd como OR, AND, etc...
const { Op } = require("sequelize");

const opinionController = {};

opinionController.crearComentario = async (req, res) => {
    const newOpinion = Opinion.build(
        {
            "id_usuario": req.body.id_usuario,
            "id_lugar": req.body.id_lugar,
            "calificacion": req.body.calificacion,
            "comentario": req.body.comentario,
        }
    );
    await newOpinion.save();
    console.log('Opinion almacenada con exito');
    res.json({ status: 'Opinion creado' });
}

// PILAS
class OpinionNodo {

    nodos = [];

    constructor(id, usuario, lugar, calificacion, comentario, opinionAnterior) {
        this.id = id;
        this.usuario = usuario;
        this.lugar = lugar;
        this.calificacion = calificacion;
        this.comentario = comentario;
        this.opinionAnterior = opinionAnterior;
    }
}


opinionController.getAllComentarios = async (req, res) => {
    const opiniones = await Opinion.findAll();
    for (let i = 0; i < opiniones.length; i++) {
        let opinion = opiniones[i];
        const usuario = await Usuario.findByPk(opinion.id_usuario);
        const lugar = await Lugar.findByPk(opinion.id_lugar);
        opinion = {
            "id_opinion": opinion.id_opinion,
            "nombre_usuario":  usuario.getNombreCompleto(),
            "nombre_lugar": lugar.nombre,
            "calificacion": opinion.calificacion,
            "comentario": opinion.comentario
        }
        opiniones[i] = opinion;
    }
    // SELECT * FROM usuarios WHERE correo = 'x' AND clave = 'Y';
    if (opiniones) {
        return res.status(200).json(opiniones);
    } else {
        return res.sendStatus(204);
    }
}

module.exports = opinionController;