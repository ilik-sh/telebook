const { getEmployees, createEmployee, getEmployeeByName, getEmployeesForUnit, deleteEmployee, updateEmployee } = require('./employeeRepository')

class EmployeeController { 
    async createOne(req, res) {
            const { name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId } = req.body
            const employee = await createEmployee(name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId)
            return res.json(employee)
    }

    async getOne(req, res) {
            const { name } = req.query
            console.log(req.query)
            const employee = await getEmployeeByName(name)
            return res.json(employee)
    }

    async getAll(req, res) {
        const employeeList = await getEmployees()
        return res.json(employeeList)
    }

    async getForUnit(req, res) {
        const { unitId } = req.params
        const employeeList = await getEmployeesForUnit(unitId)
        return res.json(employeeList)
    }

    async delete(req, res) {
        const {employeeId} = req.params
        console.log(employeeId)
        const deletedEmployee = await deleteEmployee(employeeId)
        return res.json(deletedEmployee)
    }

    async update(req, res) {
        const { name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId } = req.body
        const {employeeId} = req.params
        const updatedEmployee = await updateEmployee(employeeId, name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId)
        return res.json(updatedEmployee)
    }
}

module.exports = new EmployeeController