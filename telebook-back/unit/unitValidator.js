const { body } = require('express-validator')

const unitNameValidator = [
    body('name').exists()
]

module.exports = {
    unitNameValidator
}