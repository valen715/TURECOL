const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseConnection');

// Definimos una clase ES6 de javascript
class Opinion extends Model {
}

// Configuración para el modelo de sequelize
const opciones = { 
    sequelize: sequelize, // Base de datos a la cual se va a conectar
    tableName: 'opiniones', // Nombre de la tabla o entidad en la bd
    timestamps : false // Creación de reporte y/o actualización: false
};

// Creamos nuestra 'Entidad' en express
Opinion.init({
    "id_comentario": { type: DataTypes.BIGINT, primaryKey: true},
    "id_usuario": { type: DataTypes.NUMBER },
    "id_lugar": { type: DataTypes.NUMBER },
    "calificacion": { type: DataTypes.NUMBER },
    "comentario": { type: DataTypes.STRING(256) },
}, opciones);

// Exportamos Usuarios para poder usarlo en otros archivos javascript
module.exports = Opinion;