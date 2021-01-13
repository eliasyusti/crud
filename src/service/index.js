'use strict'

const jwt = require ('jwt-simple')
const config = require('../config')


function createToken(user){

    const payload = {

        sub: user._id
    }

    return jwt.encode(payload, config.SECRET_TOKEN )

}

function decodeToken(token){

    const decoded = new Promise ((resolve, reject) => {

        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN)

        resolve(payload.sub)
        } catch(err){
            reject ({

                status:500,
                message:'token invalido'
            });
        }


    })

    return decoded
}

module.exports = {

    createToken,
    decodeToken
}