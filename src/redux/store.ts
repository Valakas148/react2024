import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/UserSlice";
import {postsSlice} from "./slices/PostSlice";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()


export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postsSlice: postsSlice.reducer
    }
})
