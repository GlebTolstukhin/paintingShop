import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "basket",
    initialState: {filter: ""},
    reducers: {
        toFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const {toFilter} = filterSlice.actions
export default filterSlice.reducer