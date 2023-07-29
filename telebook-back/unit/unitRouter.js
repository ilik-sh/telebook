const Router = require('express')
const unitController = require('./unitController')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')
const { unitCreateValidator, unitIdQueryValidator } = require('./unitValidator')
const router = new Router

router.post('/', unitCreateValidator, validationMiddleware, unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', nameValidator, validationMiddleware, unitController.getOne)
router.get('/findById/:id', unitIdQueryValidator, validationMiddleware, unitController.getOneById)
router.get('/findSubunits/:id', unitIdQueryValidator, validationMiddleware, unitController.getSubunits)

module.exports = router