const Router = require('express')
const positionController = require('./posiitionController')
const { positionCreateValidator } = require('./positionValidator')
const { nameValidator } = require('../validators/commonValidator')
const validationMiddleware = require('../middleware/validationMiddleware')
const router = new Router

router.post('/', positionCreateValidator, validationMiddleware, positionController.createOne)
router.get('/', positionController.getAll)
router.get('/findByName', nameValidator, validationMiddleware, positionController.getOne)

module.exports = router