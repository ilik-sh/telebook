const { Employee } = require('../models/models')

class EmployeeController { 
    async create(req, res) {
        const { name, phone, email, positionId, unitId } = req.body
        const employee = await Employee.create({name, phone, email, positionId, unitId})
        return res.json(employee)
    }

    async getAll(req, res) {
        const employeeList = await Employee.findAll()
        return res.json(employeeList)
    }

}

module.exports = new EmployeeController