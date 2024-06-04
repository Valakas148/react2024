import React from 'react';
import {useContexProvider} from "../../contex/ContexProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const {commentsStore: {allComms}} = useContexProvider()


    return (
        <div>
            {allComms.map(comment => <CommentComponent key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default CommentsComponent;