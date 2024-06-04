import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ApiService} from "../services/api.service";
import {Contex} from "../contex/ContexProvider";
import {ICommentModel} from "../models/ICommentModel";

const MainLayout = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        ApiService.getUsers().then(value => setUsers(value.data))
        ApiService.getPosts().then(value => setPosts(value.data))
        ApiService.getComms().then(value => setComments(value.data))
    }, []);


    return (
        <div>

            <Contex.Provider value={{
                usersStore: {
                    allUsers: users
                },
                postsStore: {
                    allPosts: posts
                },
                commentsStore: {
                    allComms: comments
                }

            }}>

                <HeaderComponent/>
                <Outlet/>



            </Contex.Provider>

        </div>
    );
};

export default MainLayout;