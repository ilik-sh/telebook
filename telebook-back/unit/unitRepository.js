const { Unit } = require('../models/models')
const { Op } =require ('sequelize')

const createUnit = (name, weight, parentId) => {
    const unit = Unit.create({name, weight, parentId})
    return unit 
}

const getUnits = () => {
    const units = Unit.findAll({})
    return units
}

const getUnitByName = (nameLike) => {
    const unit = Unit.findAll({
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
        where: {
            id: unitId
        }
    })
    return unit
}

const getSubunitsForUnit = (unitId) => {
    const units = Unit.findAll({
        where: {
            parentId: unitId
        }
    })
    return units
}

const getDeaneries = () => {
    const deaneries = Unit.findAll({
        where: {
            name: {
                [Op.iLike]: `%факультет%`
            }
        }
    })
    return deaneries
}

const getChairs = () => {
    const chairs = Unit.findAll({
        where: {
            name: {
                [Op.iLike]: `%кафедра%`
            }
        }
    })
    return chairs
}

module.exports = {
    createUnit, 
    getUnits,
    getUnitByName,  
    getSubunitsForUnit,
    getUnitById,
    getDeaneries,
    getChairs
}