const { body, param } = require('express-validator')
const { getEmployeeById } = require('./employeeRepository')
const ApiError = require('../error/ApiError')

const employeeCreateValidator = [
    body('name').exists().withMessage('No name provided'),
    body('pasport').exists().withMessage('No pasport provided'),
    body('internal_phone').optional().isLength({min:13}),
    body('work_phone').optional().isLength({min:13}),
    body('mobile_phone').optional().isLength({min:13}),
    body('email').isEmail().withMessage('No email provided'),
    body('positionId').exists(),
    body('unitId').exists()
]

const unitIdValidator = [
    param('unitId').exists().toInt()  
]

const employeeIdValidator = [
    param('employeeId').isInt().toInt().custom(async (employeeId) => {
        const employee = await getEmployeeById(Math.floor(employeeId))
        if (!employee) {
             throw new ApiError(500, "Не найден сотрудник")
        }
    })
]

module.exports = {
    employeeCreateValidator,
    unitIdValidator, 
    employeeIdValidator
}