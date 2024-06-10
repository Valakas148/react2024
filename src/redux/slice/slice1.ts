import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}

const InitialState = {
    value: 0
}

export const Counter1Slice = createSlice({
    name: 'counter1',
    initialState: InitialState,
    reducers: {
        increment: (state, action:PayloadAction<number>) =>{
            state.value = state.value + action.payload
        },
        decrement: (state, action:PayloadAction<number>) =>{
            state.value = state.value - action.payload
        }
    }
})


export const {
    increment,
    decrement
} = Counter1Slice.actions
