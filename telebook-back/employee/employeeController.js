const ApiError = require('../error/ApiError')
const { getEmployees, createEmployee, getEmployeeByName, getEmployeesForUnit } = require('./employeeRepository')

class EmployeeController { 
    async createOne(req, res) {
            const { name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId } = req.body
            const employee = await createEmployee(name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId)
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

    async getForUnit(req, res, next) {
        const { unitId } = req.body
        const employeeList = getEmployeesForUnit(unitId)
        return res.json(employeeList)
    }
}

module.exports = new EmployeeController