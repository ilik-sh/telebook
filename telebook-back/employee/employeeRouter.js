const Router = require('express')
const router = new Router
const employeeController = require('./employeeController')
const { employeeCreateValidator, employeeNameValidator } = require('./employeeValidator')
const validationMiddleware = require('../middleware/validationMiddleware')


router.post('/', employeeCreateValidator, validationMiddleware, employeeController.createOne)
router.get('/', employeeController.getAll)
router.get('/findForUnit', employeeCreateValidator, validationMiddleware, employeeController.getForUnit)
router.get('/findByName', employeeNameValidator, validationMiddleware, employeeController.getOne)

module.exports = router