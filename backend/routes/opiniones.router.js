const exprees = require('express');
const router = exprees.Router();

// Llamamos al controllador de usuario
const opinion = require('../controllers/opiniones.controller');

// Creamos una ruta por la cual se podra acceder a el servicio
// Desde la web o por postman
router.post('/crear-opinion', opinion.crearComentario);
router.get('/todas-opiniones', opinion.getAllComentarios);

module.exports = router;