const { query } = require('express-validator')

const nameValidator = [
    query('name').exists()
]

module.exports = {
    nameValidator
}
