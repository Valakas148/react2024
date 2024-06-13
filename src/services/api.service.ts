import axios from "axios";
import {baseUrl, urls} from "../urls/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        console.log('test service')
        return response.data;
    },
    getById: async (id:string):Promise<IUser> => {
        const response = await axiosInstance.get(urls.users.byId(+id))
        return response.data
    }
}

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base)
        return response.data
    },
    getById: async (id:string):Promise<IPost> => {
        const response = await axiosInstance.get(urls.posts.byId(+id))
        return response.data
    }
}