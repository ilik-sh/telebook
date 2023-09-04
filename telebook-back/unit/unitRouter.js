const Router = require('express')
const unitController = require('./unitController')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')
const { unitCreateValidator, unitIdValidator } = require('./unitValidator')
const router = new Router

router.post('/', unitCreateValidator, validationMiddleware, unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', nameValidator, validationMiddleware, unitController.getOneByName)
router.get('/findById/:unitId', unitIdValidator, validationMiddleware, unitController.getOneById)
router.get('/findSubunits/:unitId', unitIdValidator, validationMiddleware, unitController.getSubunits)
router.get('/findDeaneries', unitController.getDeaneries)
router.get('/findChairs', unitController.getChairs)


module.exports = router