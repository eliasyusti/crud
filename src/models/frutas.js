const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
const User = require('../models/user');

const FrutasShema = new Schema({

    nombre:{ type: String, required: true},

    descripcion:{ type: String, required: true},

    user: { type: Schema.ObjectId, ref: "User" }

      
});

module.exports =  mongoose.model('frutas', FrutasShema);
