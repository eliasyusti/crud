const { Router } = require('express')
const router = Router();
const IsAuth = require('../middlewares/midd')
const {getFrutas, postFruta, getFruta, updateFruta, deleteFruta} = require('../controllers/frutas')



router.route('/:id')
    .get(IsAuth, getFrutas)
    

router.route('/create/:id')
.post(postFruta);

router.route('/:id')
    .get(getFruta)
    .delete(deleteFruta)
    .put(updateFruta);



    module.exports = router;
