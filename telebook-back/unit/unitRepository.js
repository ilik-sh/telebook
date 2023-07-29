const { Unit } = require('../models/models')

const createUnit = (name, weight, parentId) => {
    Unit.create({name, weight, parentId})
}

const getUnits = () => {
    const units = Unit.findAll({
        attributes: {
            exclude: ['id', 'parentId']
        }
    })
    return units
}

const getUnitByName = (nameLike) => {
    const unit = Unit.findOne({
        attributes: {
            exclude: ['id', 'parentId']
        },
        where: {
            name: {
                [Op.like] : `%${nameLike}%`
            }
        }
    })
    return position
}

const getUnitById = (unitId) => {
    const unit = Unit.findOne({
        attributes: {
            exclude: ['id', 'parentId']
        },
        where: {
            name: {unitId}
        }
    })
    return position
}

const getSubunitsForUnit = (unitId) => {
    const units = Unit.findAll({
        attributes: {
            exclude: ['id', 'parentId']
        },
        where: {
            parentId: {unitId}
        }
    })
}



module.exports = {
    createUnit, 
    getUnits,
    getUnitByName,
    getSubunitsForUnit,
    getUnitById
}