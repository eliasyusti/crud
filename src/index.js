const express = require('express');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares

//rutas

//archivos estaticos


//inicializacion del servidor
app.listen(app.get('port'), () => {

    console.log(`servidor en el puerto ${app.get('port')}`);
});