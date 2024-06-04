import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <ul>
                <li>ID - {post.id}</li>
                <li>UserID - {post.userId}</li>
                <li>Title - {post.title}</li>
                <li>Body - {post.body}</li>
            </ul>
        </div>
    );
};

export default PostComponent;