import React, {useEffect, useState} from 'react';
import {PostModel} from "../../model/PostModel";
import {UserService} from "../../services/user.api";
import {useParams} from "react-router-dom";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {id} = useParams()

    const [posts, SetPosts] = useState<PostModel[]>([])

    useEffect(() => {
        UserService.getPostById(id)
            .then((value) =>
                SetPosts(value.data))
    }, [id]);

    return (
        <div>
            {posts.map(post =>
                <PostComponent post={post} /> )}
        </div>
    );
};

export default PostsComponent;