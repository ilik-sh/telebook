const { body } = require('express-validator')

const positionCreateValidator = [
    body('name').exists(),
    body('weight').isNumeric()
]

module.exports = {
    positionCreateValidator
} 