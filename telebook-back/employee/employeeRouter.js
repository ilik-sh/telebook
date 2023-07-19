const Router = require('express')
const router = new Router
const employeeController = require('./employeeController')


router.post('/', employeeController.createOne)
router.get('/', employeeController.getAll)
router.get('/findByName', employeeController.getOne)

module.exports = router