import axios, {AxiosResponse} from "axios";
import {UserModel} from "../model/UserModel";
import {PostModel} from "../model/PostModel";


const axiosInstence = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const UserService = {
    getUsers: ():Promise<AxiosResponse<UserModel[]>> =>{
        return axiosInstence.get('/users')

    },
    getPostById: (id:string | undefined):Promise<AxiosResponse<PostModel[]>> =>{
      return axiosInstence.get('/users' + id + '/posts')
    }
}

export {
    UserService
}