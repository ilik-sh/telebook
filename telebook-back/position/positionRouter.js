const Router = require('express')
const positionController = require('./posiitionController')
const { positionNameValidator } = require('./positionValidator')
const validationMiddleware = require('../middleware/validationMiddleware')
const router = new Router

router.post('/', positionNameValidator, validationMiddleware, positionController.createOne)
router.get('/', positionController.getAll)
router.get('/findByName', positionNameValidator, validationMiddleware, positionController.getOne)

module.exports = router