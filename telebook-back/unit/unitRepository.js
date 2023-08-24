const { Unit } = require('../models/models')
const { Op } =require ('sequelize')

const createUnit = (name, weight, parentId) => {
    const unit = Unit.create({name, weight, parentId})
    return unit 
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
    const unit = Unit.findAll({
        attributes: {
            exclude: ['parentId']
        },
        where: {
            name: {
                [Op.iLike] : `%${nameLike}%`
            }
        }
    })
    return unit
}

const getUnitById = (unitId) => {
    const unit = Unit.findOne({
        attributes: {
            exclude: ['parentId']
        },
        where: {
            id: unitId
        }
    })
    return unit
}

const getSubunitsForUnit = (unitId) => {
    const units = Unit.findAll({
        attributes: {
            exclude: ['parentId']
        },
        where: {
            parentId: unitId
        }
    })
    return units
}

const getDeaneries = () => {
    const deaneries = Unit.findAll({
        attributes: {
            exclude: ['parentId']
        },
        where: {
            name: {
                [Op.iLike] : '%факультет%'
            }
        }
    })
    return deaneries
}



module.exports = {
    createUnit, 
    getUnits,
    getUnitByName,
    getSubunitsForUnit,
    getUnitById,
    getDeaneries
}