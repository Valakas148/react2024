import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {ApiService} from "../../services/api.service";
import PostComponent from "./PostComponent";
import {useContexProvider} from "../../contex/ContexProvider";

const PostsComponent = () => {


    const {postsStore: {allPosts}} = useContexProvider()

    return (
        <div>
            {allPosts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;