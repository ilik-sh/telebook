const { Position }  = require('../models/models')

class PositionController { 
    async create(req, res) {
        const { name, weight } = req.body
        const position = await Position.create({name, weight})
        return res.json(position)
    }

}

module.exports = new PositionController