import React, {FC} from 'react';
import {CommentModel} from "../../model/CommentModel";


type IProps = {
    comment: CommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <ul> {comment.id}
                <li> postId: {comment.postId}</li>
                <li> name: {comment.name}</li>
                <li> email: {comment.email}</li>
                <li> body: {comment.body}</li>
            </ul>
        </div>
    );
};

export default CommentComponent;