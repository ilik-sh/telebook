import { api } from "./api";

export const unitApi = api.injectEndpoints({
    endpoints: builder => ({
        getSubunits: builder.query({
            query: (id) => `unit/findSubunits/${id}`
        }),
        getUnits: builder.query({
            query: () => 'unit/'
        }),
        getDeaneries: builder.query({
            query: () => 'unit/findDeaneries'
        }),
        getChairs: builder.query({
            query: () => 'unit/findChairs'
        }),
        createUnit: builder.mutation({
            query: (...unit) => ({
                url: '/',
                method: 'POST',
                body: unit
            })
        })
    })
})