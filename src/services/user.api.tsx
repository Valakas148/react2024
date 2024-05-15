import axios, {AxiosResponse} from "axios";
import {UserModel} from "../model/UserModel";


const axiosInstence = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const UserService = {
    getUsers: ():Promise<AxiosResponse<UserModel[]>> =>{
        return axiosInstence.get('/users')

    },
    getPostById: (id:number):Promise<AxiosResponse<UserModel[]>> =>{
      return axiosInstence.get('/users' + id + '/posts')
    }
}

export {
    UserService
}