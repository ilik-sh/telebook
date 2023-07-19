const { Employee } = require('../models/models')
const { getEmployees, createEmployee, getEmployeeByName, getEmployeesForUnit } = require('./employeeRepository')

class EmployeeController { 
    async createOne(req, res) {
        const { name, phone, email, positionId, unitId } = req.body
        const employee = await createEmployee(name, phone, email, positionId, unitId)
        return res.json(employee)
    }

    async getOne(req, res) {
        const { name } = req.body
        const employee = await getEmployeeByName(name)
        return res.json(employee)
    }

    async getAll(req, res) {
        const employeeList = await getEmployees()
        return res.json(employeeList)
    }

    async getForUnit(req, res) {
        const { unitId } = req.body
        const employeeList = getEmployeesForUnit(unitId)
        return res.json(employeeList)
    }
}

module.exports = new EmployeeController