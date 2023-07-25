const Router = require('express')
const unitController = require('./unitController')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')
const router = new Router

router.post('/', nameValidator, validationMiddleware, unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', nameValidator, validationMiddleware, unitController.getOne)

module.exports = router