import React, {useEffect, useMemo, useState} from 'react';
import {useContexProvider} from "../../contex/ContexProvider";
import {IPostCommentsModel} from "../../models/IPostCommentsModel";
import PostCommentComponent from "./PostCommentComponent";

const PostCommentsComponent = () => {

    const {postsStore: {allPosts}, commentsStore: {allComms}} = useContexProvider()
    const [postComms, setPostComms] = useState<IPostCommentsModel[]>([])

    const postCommsArray = useMemo(()=>{
        return ()=>{
            return allPosts.map(post => {
                return {...post, comments: allComms.filter(comm => comm.postId === post.id)}
            })
        }
    },[allPosts, allComms])

    useEffect(() => {
        setPostComms(postCommsArray)
    }, [postCommsArray]);

    return (
        <div>
            {postComms.map(post => <PostCommentComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostCommentsComponent;