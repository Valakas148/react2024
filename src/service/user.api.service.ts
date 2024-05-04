import axios from "axios";


let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {}
})

const getAllUsers = () =>{
    return axiosInstance.get('/users')
}

export {
    getAllUsers
}