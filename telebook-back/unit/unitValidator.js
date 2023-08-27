const { body, param } = require('express-validator')
const { getUnitById } = require('./unitRepository')

const unitCreateValidator = [
    body('name').exists(),
    body('weight').isNumeric(),
    body('parentId').optional()
]

const unitIdValidator = [
    param('unitId').isInt().toInt().custom(async (unitId) => {
        const unit = await getUnitById(Math.floor(unitId))
        if (!unit) {
             throw new ApiError(500, "Не найден отдел")
        }
    })
]

module.exports = {
    unitCreateValidator,
    unitIdValidator
} 