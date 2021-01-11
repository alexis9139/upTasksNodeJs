const express = require('express'); //importamos express
const routes = require('./routes');//importamos las rutas
const path = require('path');//path ya lee lo que existe en las carpetas

//crear una aplicacion de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine','pug');

//añadir las carpetas de las vistas
app.set('views',path.join(__dirname,'views'));

app.use('/', routes());

//le decimos en que puerto tiene que correrlo, debe estar desocupado
app.listen(3000);


