import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    user: IUser | null
}


const userIninitalState:UserSliceType ={
    users: [],
    isLoaded: false,
    user: null
}

const loadUsers = createAsyncThunk(
    'UserSlice/loadUsers',
    async (_, thunkAPI) =>{
        try {
            const users = await userService.getAll()
            console.log('test store111')
            return thunkAPI.fulfillWithValue(users)
        }
        catch (e){
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadUserById = createAsyncThunk(
    'UserSlice/loadUserById',
    async (id:string|undefined, thunkAPI)=>{
        if(id) {
            try {
                const user = await userService.getById(id)
                return thunkAPI.fulfillWithValue(user)
            } catch (e) {
                const error = e as AxiosError
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    }
)


export const userSlice = createSlice({
    name: 'UserSlice',
    initialState: userIninitalState,
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) =>{
                state.users = action.payload
                console.log('test store')
            })
            .addCase(loadUsers.rejected, (state,action)=>{
                //
            })
            .addCase(loadUserById.fulfilled, (state,action) =>{
                state.user = action.payload
            })
            .addCase(loadUserById.rejected, (state,action)=>{
                //
            })
            .addMatcher(isFulfilled(loadUsers, loadUserById), (state,action) =>{
                state.isLoaded = true
            })

})

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
}
