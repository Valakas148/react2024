import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {postService, userService} from "../../services/api.service";
import {AxiosError} from "axios";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean,
    post: IPost | null
}


const postsIninitalState:PostSliceType = {
    posts: [],
    isLoaded: false,
    post: null
}

const loadPosts = createAsyncThunk(
    'PostsSlice/loadPosts',
    async (_, thunkAPI)=>{
        try {
            const posts = await postService.getAll()
            return thunkAPI.fulfillWithValue(posts)
        }catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const loadPostById = createAsyncThunk(
    'PostSlice/loadPostById',
    async (id: string| undefined, thunkAPI) =>{
        if(id){
            try {
                const post = await postService.getById(id)
                return thunkAPI.fulfillWithValue(post)
            }catch (e) {
                const error = e as AxiosError
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    }
)


export const postsSlice = createSlice({
    name: 'PostsSlice',
    initialState: postsIninitalState,
    reducers: {
        changeLoadState: (state, action:PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled , (state, action) =>{
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected, (state,action)=>{
                //?????
            })
            .addCase(loadPostById.fulfilled, (state, action) =>{
                state.post = action.payload
            })
            .addCase(loadPostById.rejected, (state,action)=>{
                //?????
            })
            .addMatcher(isFulfilled(loadPosts, loadPostById), (state,action) =>{
                state.isLoaded = true
            })
})

export const postActions = {
    ...postsSlice.actions,
    loadPosts,
    loadPostById
}