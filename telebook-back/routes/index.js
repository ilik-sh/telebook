const Router = require('express')
const router = new Router
const employeeRouter = require('./employeeRouter')
const unitRouter = require('./unitRouter')
const positionRouter = require('./positionRouter')

router.use('/employee', employeeRouter)
router.use('/unit', unitRouter)
router.use('/position', positionRouter)

module.exports = router