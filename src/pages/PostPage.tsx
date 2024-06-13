import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/PostSlice";
import SinglePostComponent from "../component/SinglePostComponent";

const PostPage = () => {

    let {id} = useParams()
    const dispatch = useAppDispatch()

    const {post} = useAppSelector(state => state.postsSlice)

    useEffect(() => {
        dispatch(postActions.loadPostById(id))
    }, [id]);

    return (
        <div>
            {post && <SinglePostComponent key={post.id} post={post}/>}
        </div>
    );
};

export default PostPage;