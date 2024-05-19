import React, {FC} from 'react';
import {PostModel} from "../../model/PostModel";
import {NavLink, Outlet} from "react-router-dom";


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

            <NavLink to={post.id.toString() + '/comments'}>To comments</NavLink>
            <Outlet/>
        </div>
    );
};

export default PostComponent;