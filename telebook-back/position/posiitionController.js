const { getPositions, createPosition, getPositionByName}  = require('./positionRepository')

class PositionController { 
    async createOne(req, res) {
        const { name, weight } = req.body
        const position = await createPosition(name, weight)
        return res.json(position)
    }

    async getOne(req, res) {
        const { name } = req.body
        const position = await getPositionByName(name)
        return res.json(position)
    }

    async getAll(req, res) {
        const positionList = await getPositions()
        return res.json(positionList)
    }

}

module.exports = new PositionController