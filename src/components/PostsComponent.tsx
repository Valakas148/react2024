import React, {useEffect, useState} from 'react';
import {PostModel} from "../model/PostModel";
import {UserService} from "../services/user.api";

const PostsComponent = () => {

    const [posts, SetPosts] = useState<PostModel[]>()

    useEffect(() => {
        UserService.getPostById(1)
            .then()
    }, []);

    return (
        <div>

        </div>
    );
};

export default PostsComponent;