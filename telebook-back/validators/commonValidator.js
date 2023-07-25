const { body } = require('express-validator')

const nameValidator = [
    body('name').exists()
]

module.exports = {
    nameValidator
}
