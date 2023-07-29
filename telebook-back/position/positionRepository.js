const { Position } = require('../models/models')

const createPosition = (name, weight) => {
    Position.create({name, weight})
}

const getPositions = () => {
    const positions = Position.findAll({
        attributes: {
            exclude: ['id']
        }
    })
    return positions
}

const getPositionByName = (nameLike) => {
    const position = Position.findOne({
        attributes: {
            exclude: ['id']
        },
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