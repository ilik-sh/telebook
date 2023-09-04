const Router = require('express')
const router = new Router
const employeeController = require('./employeeController')
const { employeeCreateValidator, unitIdValidator, employeeIdValidator } = require('./employeeValidator')
const validationMiddleware = require('../middleware/validationMiddleware')
const { nameValidator } = require('../validators/commonValidator')


router.post('/', employeeCreateValidator, validationMiddleware, employeeController.createOne)
router.get('/', employeeController.getAll)
router.delete('/:employeeId', employeeIdValidator, validationMiddleware, employeeController.delete)
router.put('/:employeeId', employeeIdValidator, validationMiddleware, employeeController.update)
router.get('/findForUnit/:unitId', unitIdValidator, validationMiddleware, employeeController.getForUnit)
router.get('/findByName', nameValidator, validationMiddleware, employeeController.getOne)

module.exports = router