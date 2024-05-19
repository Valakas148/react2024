import axios, {AxiosResponse} from "axios";
import {UserModel} from "../model/UserModel";
import {PostModel} from "../model/PostModel";
import {CommentModel} from "../model/CommentModel";


const axiosInstence = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const UserService = {
    getUsers: ():Promise<AxiosResponse<UserModel[]>> =>{
        return axiosInstence.get('/users')

    },
    getPostById: (id:string):Promise<AxiosResponse<PostModel[]>> =>{
      return axiosInstence.get('/users/' + id + '/posts')
    },
    getComments: ():Promise<AxiosResponse<CommentModel[]>> => {
        return axiosInstence.get('/comments')
    },
    getCommentsById: (id:string):Promise<AxiosResponse<CommentModel[]>> => {
        return axiosInstence.get('/posts/' + id + '/comments')
    }
}

export {
    UserService
}