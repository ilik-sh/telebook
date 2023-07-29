const { Unit } = require('../models/models')

const createUnit = (name, weight, parentId) => {
    Unit.create({name, weight, parentId})
}

const getUnits = () => {
    const units = Unit.findAll({
        attributes: {
            exclude: ['parentId']
        }
    })
    return units
}

const getUnitByName = (nameLike) => {
    const unit = Unit.findOne({
        attributes: {
            exclude: ['parentId']
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
            exclude: ['parentId']
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
            exclude: ['parentId']
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