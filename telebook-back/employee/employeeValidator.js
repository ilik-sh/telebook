const { body } = require('express-validator')

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
    body('unitId').exists()
]

module.exports = {
    employeeCreateValidator,
    unitIdValidator
}