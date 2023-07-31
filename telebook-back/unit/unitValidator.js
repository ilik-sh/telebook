const { body } = require('express-validator')

const unitCreateValidator = [
    body('name').exists(),
    body('weight').isNumeric(),
    body('parentId').optional()
]

const unitIdBodyValidator = [
    body('unitId').exists()
]

module.exports = {
    unitCreateValidator,
    unitIdBodyValidator
} 