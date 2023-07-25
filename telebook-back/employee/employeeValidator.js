const { body } = require('express-validator')

const employeeCreateValidator = [
    body('name').exists().withMessage('No name provided'),
    body('phone').isLength({min:13}),
    body('email').isEmail().withMessage('No email'),
    body('positionId').exists(),
    body('unitId').exists()
]

const employeeNameValidator = [
    body('name').exists()
]

module.exports = {
    employeeCreateValidator,
    employeeNameValidator
}