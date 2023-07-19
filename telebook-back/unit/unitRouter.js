const Router = require('express')
const unitController = require('./unitController')
const router = new Router

router.post('/', unitController.create)
router.get('/')

module.exports = router