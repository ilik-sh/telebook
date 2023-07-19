const Router = require('express')
const unitController = require('./unitController')
const router = new Router

router.post('/', unitController.create)
router.get('/', unitController.getAll)
router.get('/findByName', unitController.getOne)

module.exports = router