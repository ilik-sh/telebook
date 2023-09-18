import { makeAutoObservable, runInAction } from "mobx"
import { fetchAllEmployees, fetchEmployeesForUnit } from "../api/employeeAPI"

export default class EmployeeStore {

    _employees = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchEmployeesAction = async (unitId) => {
        try {
            const fetchedEmployees = await fetchEmployeesForUnit(unitId)
            runInAction(() => {
                this._employees = fetchedEmployees
            })
        } catch {
            throw new Error("Error fetching employees")
        }
    }

    get employees() {
        return this._employees
    }

}

