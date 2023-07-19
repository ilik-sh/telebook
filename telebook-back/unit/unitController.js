const { Unit, Employee, Position }  = require('../models/models')

class UnitController { 
    async create(req, res) {
        const { name } = req.body
        const unit = await Unit.create({name})
        return res.json(unit)
    }

    async getAll(req, res) {
        const unitList = await getEmployees()
        return res.json(employeeList)
    }
}

module.exports = new UnitController