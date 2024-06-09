import React from 'react';
import {useStore} from "../../contex/ContexProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const {commentsStore: {allComms}} = useStore()


    return (
        <div>
            {allComms.map(comment => <CommentComponent key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default CommentsComponent;