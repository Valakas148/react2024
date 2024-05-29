import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";

export const routerCon = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {element:<AuthPage/>, index:true }
        ]}
])