export default class UnitStore {
    constructor() {
        this._units = []
        makeAutoObservable(this)
    }

    setUnits(units) {
        this._units = units
    }

    get units() {
        return this._units
    }
}