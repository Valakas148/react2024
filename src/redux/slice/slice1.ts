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
        },
        reset: (state) =>{
            state.value = 0
        },
        incrementPlus1: (state) =>{
            state.value = state.value + 1
        }
    }
})


export const {
    increment,
    decrement,
    reset,
    incrementPlus1
} = Counter1Slice.actions
