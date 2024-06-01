import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

export const routerCon = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {element:<AuthPage/>, index:true },
            {element:<CarsPage/>, path:'cars' }
        ]}
])