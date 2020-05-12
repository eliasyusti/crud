'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require ('../service')



function registrar (req, res){
    
    const user = new User({

        email: req.body.email,
        password: req.body.password
    })

    user.save((err) => {

    if(err) {
        res.status(500).send({message: `error al crear usuario: ${err}`})
        return
    }

    return res.status(200).send({
        message: 'te as registrado de manera exitosa',
        token: service.createToken(user)})
    })


}

function loguear (req, res){
    User.findOne({email: req.body.email, password: req.body.password }, (err, user) => {

    
    if(err) {res.status(500).send({message: 'error'})
    return

}
    if(!user) {res.status(404).send({message: 'no existe el usuario'})

    return 
}


    req.user = user
    res.status(200).send({
        message: "te as logueado correctamente", 
        token: service.createToken(user)})

     })

    
}

module.exports = {

    registrar,
    loguear
    
}