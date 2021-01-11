const express = require('express');//importamos express

const router = express.Router();

module.exports = function(){
    //ruta de la home
    router.get('/', (request,response)=>{
        response.send('Index');
    });
    //ruta de nosotros
    router.get('/nosotros', (request,response)=>{
        response.send('Nosotros');
    });
    //retorno el router para hacelo disponible
    return router;
};




