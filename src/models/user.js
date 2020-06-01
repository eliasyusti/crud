const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const  Shema  = mongoose.Schema;

const UsersShema = new Shema ({

    email:{ type: String, unique: true, lowercase: true},

    rol:{type: String},

    password:{ type: String, select: false}
    
});

UsersShema.pre('save', (next) =>{

    let User = this
   
    bcrypt.genSalt(10, (err, salt) =>{

        if(err) return next()

        bcrypt.hash(User.password, salt, null, (err, hash) => {
            if (err) return next(err)

            User.password = hash
            next()
        })
    })
})


module.exports = mongoose.model('User', UsersShema);

/*frutasControl.getFrutas = (req, res) => {
       Fruta.findOne({_id: req.params.id})
    .populate('User') // <- use the populate() function
    .exec(function(err, fruta) {
        res.json(fruta);
    });
    };*/

