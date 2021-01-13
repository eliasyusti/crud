const { Router } = require('express')
const IsAuth = require('../middlewares/midd')
const router = Router();
const {registrar, loguear} = require('../controllers/userCtrl')




function private (req, res){

    console.log(req)
    res.status(200).send({message: 'tienes acceso'})
    

}

router.route('/private')
.get(IsAuth, private)


router.route('/registrar')
.post(registrar)

router
.post('/loguear', loguear)


module.exports = router;