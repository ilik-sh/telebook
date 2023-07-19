const { Position } = require('../models/models')

const createPosition = (name, weight) => {
    Position.create({name, weight})
}

const getPositions = () => {
    const positions = Position.findAll()
    return positions
}

const getPositionByName = (nameLike) => {
    const position = Position.findOne({
        where: {
            name: {
                [Op.like] : `%${nameLike}%`
            }
        }
    })
    return position
}

module.exports = {
    createPosition, 
    getPositions,
    getPositionByName
}