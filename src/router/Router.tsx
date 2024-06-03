import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import UserPage from "../pages/UserPage";

export const routerCon = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {element:<AuthPage/>, index:true },
            {element:<CarsPage/>, path:'cars' },
            {element:<UserPage/>, path:'users'}
        ]}
])