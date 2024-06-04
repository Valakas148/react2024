import React, {FC} from 'react';
import {IUserPostsModelType} from "../../models/IUserPostsModel";
import PostComponent from "../Posts/PostComponent";

interface IProps{
    user: IUserPostsModelType
}
const UserPostComponent:FC<IProps> = ({user}) => {
    return (
        <div>
                <p>{user.username}</p>
                    {user.posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostComponent;