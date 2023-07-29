const { body, query } = require('express-validator')

const unitCreateValidator = [
    body('name').exists(),
    body('weight').isNumeric(),
    body('parentId').optional()
]

const unitIdQueryValidator = [
    query('id').exists()
]



module.exports = {
    unitCreateValidator,
    unitIdQueryValidator
} 