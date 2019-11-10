const express = require('express');
const router = express.Router();

var Fruta = require('../models/frutas');

router.get('/', async (req, res) => {
        const frutas = await Fruta.find();
        res.json(frutas);
    

});

router.post('/', async (req, res) => {

        console.log(req.body);


});

module.exports = router;