import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps{
    post: IPost
}
const SinglePostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <p>Title: {post.title}</p>
        </div>
    );
};

export default SinglePostComponent;