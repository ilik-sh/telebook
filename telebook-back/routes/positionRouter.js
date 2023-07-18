const Router = require('express')
const posiitionController = require('../controllers/posiitionController')
const router = new Router

router.post('/', posiitionController.create)

module.exports = router