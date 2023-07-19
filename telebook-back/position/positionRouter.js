const Router = require('express')
const posiitionController = require('./posiitionController')
const router = new Router

router.post('/', posiitionController.create)

module.exports = router