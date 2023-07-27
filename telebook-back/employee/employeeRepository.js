const { Op } = require('sequelize')
const { Employee, Position, Unit } = require('../models/models')

const createEmployee = (name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId) => {
    Employee.create({name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId})
}

const getEmployees = () => {
    const employeeList = Employee.findAll({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        attributes: {
            exclude: ['id', 'positionId', 'unitId']
        },
        order: [
            [{model: Position}, 'weight', 'DESC']
        ]
    })
    return employeeList
}

const getEmployeeByName = (nameLike) => {
    const employee = Employee.findOne({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        attributes: {
            exclude: ['id', 'positionId', 'unitId']
        },
        where: {
            name: {
                [Op.like] : `${nameLike}%`
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
            exclude: ['id', 'positionId', 'unitId']
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