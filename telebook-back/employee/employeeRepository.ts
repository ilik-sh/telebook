const { Op } = require('sequelize')
const { Employee } = require('../models/models')

const createEmployee = (name, phone, email, positionId, unitId) => {
    Employee.create({name, phone, email, positionId, unitId})
}

const getEmployees = () => {
    const employees = Employee.findAll()
    return employees
}

const getEmployeeByName = (nameLike) => {
    const employee = Employee.findOne({
        where: {
            name: {
                [Op.like] : `%${nameLike}%`
            }
        }
    })
    return employee
}

const getEmployeesForUnit = (unitId) => {
    const employeeList = Employee.findAll({
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
            [{model: Position}, 'weight', 'DESC']
        ]
    })

    return employeeList
}

module.exports = {
     getEmployees, 
     createEmployee, 
     getEmployeeByName, 
     getEmployeesForUnit 
}