import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import {ApiService} from "../services/api.service";
import {useStore} from "../contex/ContexProvider";


const MainLayout = () => {

    const {usersStore, usersStore:{favoriteUser}, commentsStore, postsStore,postsStore: {favoritePost}} = useStore()

    useEffect(() => {
        ApiService.getUsers().then(value => usersStore.loadUser(value.data))
        ApiService.getPosts().then(value => postsStore.loadPost(value.data))
        ApiService.getComms().then(value => commentsStore.loadComms(value.data))
    }, []);


    return (
        <div>

                <HeaderComponent/>
            <hr/>{(favoriteUser && <div>{favoriteUser.username} - {favoriteUser.name}</div>) || (favoritePost && <div>{favoritePost.id} - {favoritePost.title}</div>)}<hr/>
            <Outlet/>


        </div>
    );
};

export default MainLayout;