const { Router } = require('express')
const router = Router();
const IsAuth = require('../middlewares/midd')
const {getFrutas, postFruta, getFruta, updateFruta, deleteFruta} = require('../controllers/frutas')



router.route('/')
    .get(IsAuth, getFrutas)
    .post(postFruta);
    

router.route('/:id')
    .get(getFruta)
    .delete(deleteFruta)
    .put(updateFruta);

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
