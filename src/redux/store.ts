import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {Counter1Slice} from "./slice/slice1";


export type RootRender = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<RootRender>()

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const store = configureStore({
    reducer: {
        slice1: Counter1Slice.reducer
    }
})
