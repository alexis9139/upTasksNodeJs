const express = require('express');//importamos express

const router = express.Router();

//importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function(){
    //ruta de la home
    router.get('/', proyectosController.proyectosHome);

    //retorno el router para hacelo disponible
    return router;
};




