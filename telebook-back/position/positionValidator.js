const { body } = require('express-validator')

const positionNameValidator = [
    body('name').exists()
]

module.exports = {
    positionNameValidator
} 