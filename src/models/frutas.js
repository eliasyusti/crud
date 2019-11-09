const mongoose = require('mongoose');

const  Shema  = mongoose.Schema;

const FrutasShema = new Shema({

    nombre:{ type: String, required: true},

    descripcion:{ type: String, required: true}
})

module.exports =  mongoose.model('frutas', FrutasShema);
