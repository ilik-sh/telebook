import { $host } from ".";

export const createEmployee = async (employee) => {
    const {data} = await $host.post('api/employee', employee)
    return data
}

export const fetchRectorateEmployees = async () => {
    const {data} = await $host.get('api/employee/findForUnit' + 2)
    return data
}

export const fetchEmployeesForUnit = async (unitId) => {
    const {data} = await $host.get('api/employee/findForUnit/' + unitId)
    return data
}   

