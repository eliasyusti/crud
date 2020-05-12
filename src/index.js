const express = require('express');
const path = require ('path');
const { mongoose } = require('./database');
const app = require('./app');




//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//inicializacion del servidor
app.listen(app.get('port'), () => {

    console.log(`servidor en el puerto ${app.get('port')}`);
});
