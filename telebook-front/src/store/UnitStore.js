import { makeAutoObservable, runInAction } from "mobx"
import { fetchSubunitsForUnit, fetchDeaneries, fetchChairs } from "../http/unitAPI"

export default class UnitStore {

    _units = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchSubunitsAction = async (unitId) => {
        try {
            const fetchedSubunits = await fetchSubunitsForUnit(unitId)
            runInAction(() => {
                this._units = fetchedSubunits
            })
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    fetchDeaneriesAction = async () => {
        try {
            const fetchedDeaneries = await fetchDeaneries()
            runInAction(() => {
                this._units = fetchedDeaneries
            })
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    fetchChairsAction = async () => {
        try {
            const fetchedChairs = await fetchChairs()
            runInAction(() => {
                this._units = fetchedChairs
            })
            
        } catch {
            throw new Error("Error fetching units")
        }
    }

    get units() {
        return this._units
    }

}