import { api } from "./api";

export const unitApi = api.injectEndpoints({
    endpoints: builder => ({
        getSubunits: builder.query({
            queryFn: async (id) => {
                    try {
                        const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/findSubunits/' + id)
                        const data = await response.json()
                        return {data: data}
                    }
                    catch (e) {
                        return {error: e.message}
                    }
                }
        }),
        getUnitById: builder.query({
            queryFn: async (id) => {
                    try {
                        const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/findById/' + id)
                        const data = await response.json()
                        return {data: data}
                    }
                    catch (e) {
                        return {error: e.message}
                    }
                }
        }),
        getUnits: builder.query({
            queryFn: async () => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit')
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
        getUnitTree: builder.query({
            queryFn: async () => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/tree')
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
        getDeaneries: builder.query({
            queryFn: async () => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/findDeaneries/')
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
        getChairs: builder.query({
            queryFn: async (id) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/findChairs')
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        }),
        createUnit: builder.mutation({
            queryFn: async (...unit) => {
                try {
                    const response = await fetch(process.env.REACT_APP_API_ROUTE + 'unit/', {
                        method: "POST", 
                        body: JSON.stringify(unit)
                    })
                    const data = await response.json()
                    return {data: data}
                }
                catch (e) {
                    return {error: e.message}
                }
            }
        })
    })
})

export const {
    useGetSubunitsQuery,
    useGetChairsQuery, 
    useGetUnitByIdQuery,
    useGetUnitsQuery,
    useGetDeaneriesQuery,
    useCreateUnitMutation,
    useGetUnitTreeQuery} = unitApi
