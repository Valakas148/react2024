import axios, {AxiosError} from "axios";
import {AuthModel} from "../models/AuthModel";
import {ITokenObtairPair} from "../models/ITokenObtairPair";
import {ICarsPaginatedModel} from "../models/ICarsPaginatedModel";
import {retriveLocalStorageData} from "./helpers/helper";


const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair1 = retriveLocalStorageData<ITokenObtairPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair1.access)
    }

    return request
})


const authService = {
    authentication : async (authData: AuthModel):Promise<boolean> =>{
        let response;
        try {
            response = await axiosInstance.post<ITokenObtairPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))
        }catch (e) {
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh);
    },

    refresh: async (refreshToken:string)=>{
        const response= await axiosInstance.post<ITokenObtairPair>('/auth/refresh',{refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },

}

const carsService = {
    getCars: async () =>{

        try{
            const response = await axiosInstance.get<ICarsPaginatedModel>('/cars')
            return response.data;
        }
        catch (e){
            const axiosError = e as AxiosError
            if (axiosError?.response?.status === 401){
                const refreshToken = retriveLocalStorageData<ITokenObtairPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carsService.getCars()
            }
        }

    }
}



export {
    authService,
    carsService
}