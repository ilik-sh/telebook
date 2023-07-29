const Router = require('express')
const router = new Router
const employeeController = require('./employeeController')
const { employeeCreateValidator, unitIdValidator } = require('./employeeValidator')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')


router.post('/', employeeCreateValidator, validationMiddleware, employeeController.createOne)
router.get('/', employeeController.getAll)
router.get('/findForUnit', unitIdValidator, validationMiddleware, employeeController.getForUnit)
router.get('/findByName', nameValidator, validationMiddleware, employeeController.getOne)

module.exports = router