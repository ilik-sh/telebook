export default class UnitStore {

    _units = []

    constructor() {
        
    }

    fetchSubunitsAction = async (unitId) => {
        try {
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    fetchDeaneriesAction = async () => {
        try {
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    fetchChairsAction = async () => {
        try {
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    get units() {
        return this._units
    }

}