import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import PostPage from "../page/PostPage";
import UserPage from "../page/UserPage";
import UserPostsPage from "../page/UserPostsPage";
import CommentPage from "../page/CommentPage";
import PostCommentsPage from "../page/PostCommentsPage";

export const routerCon = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children:[
        {path:'users', element: <UserPage/>},
        {path:'posts', element: <PostPage/>},
        {path:'userpp', element: <UserPostsPage/>},
        {path:'comments', element: <CommentPage/>},
        {path:'postAndComs', element: <PostCommentsPage/>}
    ]
}])