'use strict'

const express = require('express');
const bodyparser = require('body-parser');
const cors = require ('cors');
const app = express();





app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
app.use(express.json());


app.use('/api/frutas', require('./routes/routes.frutas'));
app.use('/api/user', require('./routes/routes.user'));


module.exports = app;