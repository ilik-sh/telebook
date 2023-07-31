const Router = require('express')
const unitController = require('./unitController')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')
const { unitCreateValidator, unitIdBodyValidator } = require('./unitValidator')
const router = new Router

router.post('/', unitCreateValidator, validationMiddleware, unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', nameValidator, validationMiddleware, unitController.getOneByName)
router.get('/findById', unitIdBodyValidator, validationMiddleware, unitController.getOneById)
router.get('/findSubunits', unitIdBodyValidator, validationMiddleware, unitController.getSubunits)

module.exports = router