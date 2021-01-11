const express = require('express'); //importamos express
const routes = require('./routes');//importamos las rutas


//crear una aplicacion de express
const app = express();

app.use('/', routes());

//le decimos en que puerto tiene que correrlo, debe estar desocupado
app.listen(3000);


