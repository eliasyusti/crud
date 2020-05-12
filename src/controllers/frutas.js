'use strict'
const frutasControl = {};
const Fruta = require('../models/frutas');

frutasControl.getFrutas = async (req, res) =>{
        const frutas =  await Fruta.find();
        res.json(frutas);
}

frutasControl.getFruta = async (req, res) =>{
    const fruta = await Fruta.findById(req.params.id);
    res.json(fruta);
}

frutasControl.postFruta = async (req, res) =>{
        const { nombre, descripcion } = req.body;
        const fruta = new Fruta({nombre, descripcion});
        await fruta.save();
        res.json({status: 'tarea guardada'});
}

frutasControl.updateFruta = async (req, res) =>{
        const { nombre, descripcion} = req.body;
        const newFruta = { nombre, descripcion};
        await Fruta.findByIdAndUpdate(req.params.id, newFruta);
        res.json({status: 'informacion actualizada'});
}

frutasControl.deleteFruta = async (req, res) =>{
    await Fruta.findByIdAndDelete(req.params.id);
    res.json({status: 'fruta eliminada'});
}

module.exports = frutasControl;
