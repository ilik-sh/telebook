const Router = require('express')
const positionController = require('./posiitionController')
const router = new Router

router.post('/', positionController.createOne)
router.get('/', positionController.getAll)
router.get('/findByName', positionController.getOne)

module.exports = router