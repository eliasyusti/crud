const express = require('express');
const router = express.Router();

var Fruta = require('../models/frutas');

router.get('/', async (req, res) => {
        const frutas = await Fruta.find();
        res.json(frutas);
    

});

router.get('/:id', async (req, res) => {
        const fruta = await Fruta.findById(req.params.id);
        res.json(fruta);
    

});

router.post('/', async (req, res) => {

        const { nombre, descripcion } = req.body;
        const fruta = new Fruta({nombre, descripcion});
        await fruta.save();
        res.json({status: 'tarea guardada'});
});

router.put('/:id',async (req, res) => {

        const { nombre, descripcion} = req.body;
        const newFruta = { nombre, descripcion};
        await Fruta.findByIdAndUpdate(req.params.id, newFruta);
        res.json({status: 'informacion actualizada'});
});

router.delete('/:id', async (req, res) => {

        await Fruta.findByIdAndDelete(req.params.id);
        res.json({status: 'fruta eliminada'});
});

module.exports = router;