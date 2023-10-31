import { api } from "./api";

export const employeeApi = api.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            query: () => 'employee/'
        }),
        getEmployeesForUnit: builder.query({
            query: (id) => `employee/findForUnit/${id}`
        }),
        getEmployeeByName: builder.query({
            query: (name) => ({
                url: 'employee/findByName',
                params: {name}
            })
        }),
        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `employee/${id}`,
                method: 'DELETE'
            })
        }), 
        updateEmployee: builder.mutation({
            query: (id, ...employee) => ({
                url: `employee/${id}`,
                method: 'PUT',
                body: employee
            })
        }), 
        createEmployee: builder.mutation({
            query: (...employee) => ({
                url: 'employee/',
                method: 'POST',
                body: employee
            })
        }),
    })
})