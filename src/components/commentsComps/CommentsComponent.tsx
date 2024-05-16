import React, {useEffect, useState} from 'react';
import {CommentModel} from "../../model/CommentModel";
import {UserService} from "../../services/user.api";
import CommentComponent from './CommentComponent';


const CommentsComponent = () => {

    const [comments, SetComm] = useState<CommentModel[]>([])

    useEffect(() => {
        UserService.getComments()
            .then(value => SetComm(value.data))
    }, []);

    return (
        <div>

            {/*{comments.map(comment: => )}*/}
            {comments.map(comment =>
                <CommentComponent comment={comment} /> )}
        </div>
    );
};

export default CommentsComponent;