import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {

    return (
        <div>
            <ul>
                <li>ID - {comment.id}</li>
                <li>postId - {comment.postId}</li>
                <li>Name - {comment.name}</li>
                <li>Email - {comment.email}</li>
                <li>Body - {comment.body}</li>
            </ul>
        </div>
    );
};

export default CommentComponent;