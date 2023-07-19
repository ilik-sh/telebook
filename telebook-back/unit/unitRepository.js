const { Unit, Employee, Position } = require('../models/models')

export const createUnit = (name) => {
    Unit.create({name})
}

export const getUnits = () => {
    const employees = Unit.findAll()
    return employees
}

