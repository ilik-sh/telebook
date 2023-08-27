const { param } = require('express-validator')

const nameValidator = [
    param('name').exists()
]

module.exports = {
    nameValidator
}
