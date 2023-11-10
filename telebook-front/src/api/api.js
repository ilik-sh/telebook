import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Unit', ],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_ROUTE
    }),
    endpoints: () =>({
       
    })
})
