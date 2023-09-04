import { makeAutoObservable, runInAction } from "mobx"
import { fetchAllEmployees, fetchEmployeesForUnit } from "../http/employeeAPI"

export default class EmployeeStore {

    _employees = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchEmployeesAction = async (unitId) => {
        try {
            const fetchedEmployees = await fetchEmployeesForUnit(unitId)
            this._employees = fetchedEmployees
        } catch {
            throw new Error("Error fetching employees")
        }
    }

    fetchAllEmployeesAction = async () => {
        try {
            const fetchedEmployees = await fetchAllEmployees()
            console.log(fetchedEmployees)
            this._employees = fetchedEmployees
        } catch {
            throw new Error("Error fetching employees")
        }
    }

    get employees() {
        return this._employees
    }

}

