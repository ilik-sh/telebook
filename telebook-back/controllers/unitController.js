const { Unit, Employee, Position }  = require('../models/models')

class UnitController { 
    async create(req, res) {
        const { name } = req.body
        const unit = await Unit.create({name})
        return res.json(unit)
    }

    async getEmployees(req, res) {
        const { unitId } = req.body 
        const units = await Employee.findAll({
            include: [
                {model: Unit, attributes: ['name']},
                {model: Position, attributes: ['name']}
            ],
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt', 'positionId', 'unitId']
            },
            where: {
                unitId: unitId
            },
            order: [
                [{model: Position}, 'weight', 'ASC']
            ]
        })
        return res.json(units)
    }
}

module.exports = new UnitController