const { getUnits, createUnit, getUnitByName, getSubunitsForUnit, getUnitById, getDeaneries }  = require('./unitRepository')

class UnitController { 
    async create(req, res) {
        const { name, weight, parentId } = req.body
        const unit = await createUnit(name, weight, parentId)
        return res.json(unit)
    }

    async getAll(req, res) {
        const unitList = await getUnits()
        return res.json(unitList)
    }

    async getOneByName(req, res) {
        const { name } = req.query
        const unit = await getUnitByName(name)
        return res.json(unit)
    }

    async getOneById(req, res) {
        const { unitId } = req.params
        const unit = await getUnitById(unitId)
        return res.json(unit)
    }

    async getSubunits(req, res) {
        const { unitId } = req.params
        const unitList = await getSubunitsForUnit(unitId)
        return res.json(unitList)
    }
}

module.exports = new UnitController