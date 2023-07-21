const ApiError = require('../error/ApiError')
const { Employee } = require('../models/models')
// const { getEmployees, createEmployee, getEmployeeByName, getEmployeesForUnit } = require('./employeeRepository')

class EmployeeController { 
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }
    async createOne(req, res) {
        const { name, phone, email, positionId, unitId } = req.body
        const employee = await employeeRepository.createEmployee(name, phone, email, positionId, unitId)
        return res.json(employee)
    }

    async getOne(req, res, next) {
        const { name } = req.body
        if (!name) {
            return next(ApiError.badRequest('Не задан параметр'))
        }
        const employee = await employeeRepository.getEmployees
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