import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Units'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_ROUTE
    }),
    endpoints: builder => ({
        getEmployees: builder.query({
            query: () => 'employee',
                
        })
    })
})
