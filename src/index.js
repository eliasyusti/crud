const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());


//rutas
app.use('/api/frutas',require('./routes/routes.frutas'));

//archivos estaticos

app.use(express.static(path.join(__dirname,'public')));

//inicializacion del servidor
app.listen(app.get('port'), () => {

    console.log(`servidor en el puerto ${app.get('port')}`);
});