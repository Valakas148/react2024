import React, {FC} from 'react';
import {PostModel} from "../../model/PostModel";


type IProps = {
    post: PostModel
}
const PostComponent:FC<IProps> = ({post}) => {

    return (
        <div>
            <ul> {post.id}
                <li> userId: {post.userId}</li>
                <li> title: {post.title}</li>
                <li> body: {post.body}</li>
            </ul>
        </div>
    );
};

export default PostComponent;