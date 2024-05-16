import React, {useEffect, useState} from 'react';
import {PostModel} from "../model/PostModel";
import {UserService} from "../services/user.api";
import {useParams} from "react-router-dom";

const PostsComponent = () => {

    const {id} = useParams()

    console.log(id)

    const [posts, SetPosts] = useState<PostModel[]>([])

    useEffect(() => {
        UserService.getPostById(id)
            .then((value) =>
                SetPosts(value.data))
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div> {post.id} </div>)
                    }
            <ul>
                <li>
                    userId: number,
                    id: number,
                    title: string,
                    body: string
                </li>
            </ul>
        </div>
    );
};

export default PostsComponent;