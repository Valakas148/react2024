import axios, {AxiosResponse} from "axios";
import {IPostProps} from "../models/IPostProps";




let axiosInstence = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const PostService = {
    getAllPost: () => {
        return axiosInstence.get('/posts')
    },
    savePost: (value: IPostProps) => {
        return axiosInstence.post('/posts', value)
    }
}


export {
    PostService
}