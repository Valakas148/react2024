import React, {useEffect, useState} from 'react';
import {CommentModel} from "../../model/CommentModel";
import {UserService} from "../../services/user.api";
import CommentComponent from './CommentComponent';
import {useParams} from "react-router-dom";


const CommentsComponent = () => {


    const {id} = useParams()

    const [comments, SetComm] = useState<CommentModel[]>([])

    useEffect(() => {
        if(id) {
            UserService.getCommentsById(id)
                .then(value => SetComm(value.data))
        }
    }, [id]);

    return (
        <div>

            {comments.map(comment =>
                <CommentComponent key={comment.id} comment={comment} /> )}
        </div>
    );
};

export default CommentsComponent;