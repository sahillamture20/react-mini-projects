// You can name this file by the name of your slice/feature

import { createSlice } from "@reduxjs/toolkit";

// Here counterSlice is name of the slice/feature
export const counterSlice = createSlice({
    initialState: 0,
    name: 'counter',
        reducers: {
            // these are reducres; do not confuse thenm with below actions
            increment: (state) => state + 1,
            decrement: (state) => state - 1
        }
});

// these are actions; rtk automatically create events for there actions; do not confuse them with above reducres
// reducres are there to handle actions
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;