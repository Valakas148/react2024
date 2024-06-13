import React, {useEffect} from 'react';
import PostsComponent from "../component/PostComponents/PostsComponent";
import {useAppDispatch} from "../redux/store";
import {postActions} from "../redux/slices/PostSlice";

const PostsPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);


    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;