import PostComponent from "./PostComponent";
import {useStore} from "../../contex/ContexProvider";

const PostsComponent = () => {



    const {postsStore: {allPosts}, postsStore} = useStore()

    return (
        <div>
            {allPosts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;