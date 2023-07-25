const Router = require('express')
const unitController = require('./unitController')
const { unitNameValidator } = require('./unitValidator')
const validationMiddleware = require('../middleware/validationMiddleware')
const router = new Router

router.post('/', unitNameValidator, validationMiddleware, unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', unitNameValidator, validationMiddleware, unitController.getOne)

module.exports = router