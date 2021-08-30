const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseConnection');

// Definimos una clase ES6 de javascript
class Lugar extends Model {
}

// Configuración para el modelo de sequelize
const opciones = { 
    sequelize: sequelize, // Base de datos a la cual se va a conectar
    tableName: 'lugares', // Nombre de la tabla o entidad en la bd
    timestamps : false // Creación de reporte y/o actualización: false
};

// Creamos nuestra 'Entidad' en express
Lugar.init({
    "id_lugar": { type: DataTypes.BIGINT, primaryKey: true},
    "nombre": { type: DataTypes.STRING(40) },
}, opciones);

// Exportamos Usuarios para poder usarlo en otros archivos javascript
module.exports = Lugar;