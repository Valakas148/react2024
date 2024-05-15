import React, {useEffect, useState} from 'react';
import {PostModel} from "../model/PostModel";
import {UserService} from "../services/user.api";

const PostsComponent = () => {

    const [posts, SetPosts] = useState<PostModel[]>()

    useEffect(() => {
        UserService.getPostById(1)
            .then((value) =>
                SetPosts(value.data))
    }, []);

    return (
        <div>
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