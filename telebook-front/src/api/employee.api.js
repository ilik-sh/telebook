import { api } from "./api";


export const employeeApi = api.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            queryFn: async () => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/')
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
        getEmployeesForUnit: builder.query({
            queryFn: async (id) => {
                    try {
                        const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/findForUnit/' + id)
                        const data = await response.json()
                        return {data: data}
                    }
                    catch (e) {
                        return {error: e.message}
                    }
                }
        }),
        getEmployeeByName: builder.query({
            queryFn: async (name) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/findByName?' + new URLSearchParams({
                        name: name
                    }))
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }

        }),
        deleteEmployee: builder.mutation({
            queryFn: async (id) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/' + id, {
                        method: "DELETE"
                    })
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }), 
        updateEmployee: builder.mutation({
            queryFn: async (id, ...employee) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/' + id, {
                        method: "PUT", 
                        body: JSON.stringify(employee)
                    })
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }), 
        createEmployee: builder.mutation({
            queryFn: async (...employee) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'employee/', {
                        method: "POST",
                        body: JSON.stringify(employee)
                    })
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
    })
})

export const {
    useGetEmployeesQuery, 
    useGetEmployeesForUnitQuery, 
    useGetEmployeeByNameQuery, 
    useDeleteEmployeeMutation, 
    useUpdateEmployeeMutation, 
    useCreateEmployeeMutation} = employeeApi