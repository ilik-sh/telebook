export default class EmployeeStore {

    _employees = []

    constructor() {
    }

    fetchEmployeesAction = async (unitId) => {
        try {
            
        } catch {
            throw new Error("Error fetching employees")
        }
    }

    get employees() {
        return this._employees
    }

}

