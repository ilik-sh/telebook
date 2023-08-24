import { makeAutoObservable } from "mobx"

export default class EmployeeStore {
    constructor() {

        this._employees =[]

        makeAutoObservable(this)
    }

    

    setPositions(positions) {
        this._positions = positions
    }

    setEmployees(employees) {
        this._employees = employees
    }

    get units() {
        return this._units
    }

     get positions() {
        return this._positions
    }

    get employees() {
        return this._employees
    }
}