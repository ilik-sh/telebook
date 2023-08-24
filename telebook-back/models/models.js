const sequelize = require('../db')
const { DataTypes } = require('sequelize') 

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    pasport: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    internal_phone: {type: DataTypes.STRING, allowNull: true},
    work_phone: {type: DataTypes.STRING, allowNull: true},
    mobile_phone: {type: DataTypes.STRING, allowNull: true}
}, {createdAt: false, updatedAt: false })

const Unit = sequelize.define('unit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    weight: {type: DataTypes.INTEGER},
}, {createdAt: false, updatedAt: false })

const Position = sequelize.define('position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    weight: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING, allowNull: false},
}, {createdAt: false, updatedAt: false })

Unit.hasMany(Employee)
Employee.belongsTo(Unit)

Position.hasMany(Employee)
Employee.belongsTo(Position)

Unit.belongsTo(Unit, {as: 'parent', allowNull: true})

module.exports = { 
    Employee, 
    Unit, 
    Position
}