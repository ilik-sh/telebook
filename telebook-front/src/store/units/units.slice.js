import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const unitsSlice = createSlice({
    name: 'units',
    initialState,
    reducers: {
        updateUser: (state, {payload: user}) => {
            
        }
    }
})