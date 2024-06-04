import React, {FC} from 'react';
import {IPostCommentsModel} from "../../models/IPostCommentsModel";
import CommentComponent from "../Comments/CommentComponent";

interface IProps{
    post: IPostCommentsModel
}
const PostCommentComponent:FC<IProps> = ({post}) => {

    return (
        <div>
            <p>Title - {post.title}</p>
            {post.comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentComponent;