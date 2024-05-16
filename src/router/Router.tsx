import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersComponents from "../components/usersComps/UsersComponents";
import PostsComponent from "../components/PostsComponent";
import TestPage from "../TestPage";


export const routerCon = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {element:'Basic', index:true},
            {path:'hello', element:'Hello Layout 1'},
            {path:'123', element:'Cha Cha'},
            {path:'users', element: <UsersComponents/>,
            children: [
                {path:`:id/posts`, element: <PostsComponent/>}
            ]},
            {path:'users/:id/posts', element: <PostsComponent/>},
            {path:'users/posts', element: <TestPage/>},
        ]}
])