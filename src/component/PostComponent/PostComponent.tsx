import React, {FC, useState} from 'react';
import {PostModel} from "../../models/PostModel";
import {UserModel} from "../../models/UserModel";


type IProps = {
    content: PostModel
} & {children?: React.ReactNode}
const PostComponent: FC<IProps> = ({content}) => {


    return (
        <div>
            <h2>Post №{content.id} - {content.title} <br/> UserId - {content.userId} </h2>
            <h4>reactions - {content.reactions}</h4>
            <p>{content.body}</p>
            <ul>
                <li>{content.tags}</li>
            </ul>
        </div>

    );
};

export default PostComponent;

