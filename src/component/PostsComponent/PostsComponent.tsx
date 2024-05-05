import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../../models/PostModel";
import PostComponent from "../PostComponent/PostComponent";
import {getPostsById} from "../../service/user.api.service";
import styles from "./Posts.module.css";

interface IProps {
    contentId: number,
    //content: PostModel[]
}
const PostsComponent:FC<IProps> = ({contentId}) => {

    const [posts, SetPosts] = useState<PostModel[]>();

    useEffect(() =>{
        getPostsById(contentId).then((value) =>
            SetPosts(value.data.posts))
    },[contentId])

    return (
        <div className={styles.postsDiv}>
            {posts && posts.map((post: PostModel) => (
                <PostComponent key={post.id} content={post} />
            ))}
        </div>
    );
};

export default PostsComponent;


