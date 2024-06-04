import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";


const axiosIntense = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const ApiService = {
    getUsers: async ():Promise<AxiosResponse<IUserModel[]>> =>{
        return await axiosIntense.get<IUserModel[]>('/users')
    },
    getPosts: async ():Promise<AxiosResponse<IPostModel[]>> =>{
        return await axiosIntense.get<IPostModel[]>('/posts')
    },
    getComms: async ():Promise<AxiosResponse<ICommentModel[]>> =>{
        return await axiosIntense.get<ICommentModel[]>('/comments')
    }
}

export {
    ApiService
}