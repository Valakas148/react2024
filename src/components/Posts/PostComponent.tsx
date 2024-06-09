import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useStore} from "../../contex/ContexProvider";

interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {

    const {postsStore: {setFavoritePost}} = useStore()

    return (
        <div>
            <ul>
                <li>ID - {post.id}</li>
                <li>UserID - {post.userId}</li>
                <li>Title - {post.title}</li>
                <li>Body - {post.body}</li>
                <button onClick={()=>{
                    setFavoritePost(post)
                }}>Choose Post</button>
            </ul>
        </div>
    );
};

export default PostComponent;