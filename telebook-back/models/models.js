const sequelize = require('../db')
const { DataTypes } = require('sequelize') 

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, allowNull: false}
})

const Unit = sequelize.define('unit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Position = sequelize.define('position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    weight: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING, allowNull: false}
})

Unit.hasMany(Employee)
Employee.belongsTo(Unit)

Position.hasMany(Employee)
Employee.belongsTo(Position)


module.exports = { 
    Employee, 
    Unit, 
    Position
}