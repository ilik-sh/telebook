const { getUnits, createUnit, getUnitByName }  = require('./unitRepository')

class UnitController { 
    async create(req, res) {
        const { name } = req.body
        const unit = await createUnit(name)
        return res.json(unit)
    }

    async getAll(req, res) {
        const unitList = await getUnits()
        return res.json(unitList)
    }

    async getOne(req, res) {
        const { name } = req.body 
        const unit = await getUnitByName(name)
        return res.json(unit)
    }
}

module.exports = new UnitController