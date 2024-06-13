import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPost";
import {useNavigate} from "react-router-dom";
interface IProps{
    post: IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li>ID: {post.id}</li>
                <li>UserId: {post.userId}</li>
                <li>Title:{post.title}</li>
                <li>Body: {post.body}</li>
                <button onClick={() => {
                    navigate(`${post.id}`)
                }}>details
                </button>
            </ul>
        </div>
    );
};

export default PostComponent;