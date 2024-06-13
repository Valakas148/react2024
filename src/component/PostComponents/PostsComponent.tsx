import React from 'react';
import {useAppSelector} from "../../redux/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {posts, isLoaded} = useAppSelector(state => state.postsSlice)

    return (
        <div>
            {
                isLoaded ? posts.map(post => <PostComponent key={post.id} post={post} />)
                    : <h3>Loading...</h3>
            }
        </div>
    );
};

export default PostsComponent;