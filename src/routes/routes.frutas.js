const express = require('express');
const router = express.Router();

var Fruta = require('../models/frutas');

router.get('/', async (req, res) => {
        const frutas = await Fruta.find();
        console.log(frutas);
        res.json('recivido');
    

});

module.exports = router;