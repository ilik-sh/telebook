const { Unit } = require('../models/models')

const createUnit = (name) => {
    Unit.create({name})
}

const getUnits = () => {
    const units = Unit.findAll()
    return units
}

const getUnitByName = (nameLike) => {
    const unit = Unit.findOne({
        where: {
            name: {
                [Op.like] : `%${nameLike}%`
            }
        }
    })
    return position
}



module.exports = {
    createUnit, 
    getUnits,
    getUnitByName
}