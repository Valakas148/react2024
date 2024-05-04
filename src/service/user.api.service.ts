import axios, {AxiosResponse} from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/response/UserResponseModel";
import {PostModel} from "../models/PostModel";
import {PostResponseModel} from "../models/response/PostResponseModel";


let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UserResponseModel>> =>{
    return axiosInstance.get('/users')
}

const getPostsById = (id:number):Promise<AxiosResponse<PostResponseModel>> =>{
    return axiosInstance.get('/users/' + id + '/posts')
}



export {
    getAllUsers,
    getPostsById
}