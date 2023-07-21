const Router = require('express')
const router = new Router

const employeeRouter = require('../employee/employeeRouter')
const unitRouter = require('../unit/unitRouter')
const positionRouter = require('../position/positionRouter')

router.use('/employee', employeeRouter)
router.use('/unit', unitRouter)
router.use('/position', positionRouter)

module.exports = router