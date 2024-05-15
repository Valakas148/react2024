import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersComponents from "../components/UsersComponents";


export const routerCon = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {element:'Basic', index:true},
            {path:'hello', element:'Hello Layout 1'},
            {path:'123', element:'Cha Cha'},
            {path:'users', element: <UsersComponents/>,
            children: [
                {path:''}
            ]}
        ]}
])