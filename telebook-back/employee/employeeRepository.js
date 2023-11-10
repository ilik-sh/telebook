const { Op } = require('sequelize')
const { Employee, Position, Unit } = require('../models/models')


const createEmployee = (name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId) => {
    Employee.create({
         name,
         pasport, 
         internal_phone, 
         work_phone, 
         mobile_phone, 
         email, 
         positionId, 
         unitId
    })
}

const getEmployees = () => {
    const employeeList = Employee.findAll({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        order: [
            [{model: Position}, 'weight', 'DESC']
        ]
    })

    return employeeList
}

const getEmployeeById = (employeeId) => {
    const employee = Employee.findOne({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        where: {
            id: employeeId
        }
    })

    return employee
}

const getEmployeeByName = (nameLike) => {
    const employee = Employee.findAll({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        where: {
            name: {
                [Op.iLike] : `%${nameLike}%`
            }
        },
        order: [
            [{model: Position}, 'weight', 'DESC']
        ]
    })

    return employee
}

const getEmployeesForUnit = (unitId) => {
    const employeeList = Employee.findAll({
        include: [
            {model: Unit, attributes: ['name']},
            {model: Position, attributes: ['name']}
        ],
        where: {
            unitId: unitId
        },
        order: [
            [{model: Position}, 'weight', 'DESC']
        ]
    })

    return employeeList
}

const deleteEmployee = (employeeId) => {
    const deletedEmployee = Employee.destroy({
        where: {
            id: employeeId
        }
    })

    return deletedEmployee
}

const updateEmployee = async (employeeId, name, pasport, internal_phone, work_phone, mobile_phone, email, positionId, unitId) => {
    const foundEmployee = await Employee.findOne({
        where: {
            id: employeeId
        }
    })
    
    foundEmployee.set({
        name: name ? name : foundEmployee.name,
        pasport: pasport ? pasport : foundEmployee.pasport, 
        internal_phone: internal_phone ? internal_phone : foundEmployee.internal_phone, 
        work_phone: work_phone ? work_phone : foundEmployee.work_phone, 
        mobile_phone: mobile_phone ? mobile_phone : foundEmployee.mobile_phone, 
        email: email ? email : foundEmployee.email, 
        positionId: positionId ? positionId : foundEmployee.positionId, 
        unitId: unitId ? unitId : foundEmployee.unitId
    })
    await foundEmployee.save()
    return foundEmployee
}

module.exports = {
     getEmployees, 
     getEmployeeByName, 
     getEmployeeById,
     getEmployeesForUnit,
     createEmployee, 
     deleteEmployee, 
     updateEmployee
}