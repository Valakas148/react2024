import React, {useEffect, useMemo, useState} from 'react';
import {IUserPostsModelType} from "../../models/IUserPostsModel";
import UserPostComponent from "./UserPostComponent";
import {useStore} from "../../contex/ContexProvider";

const UserPostsComponent = () => {

    const {usersStore: {allUsers}, postsStore:{allPosts}} = useStore()
    const [userPosts, setUserPosts] = useState<IUserPostsModelType[]>([])

    const userPostsArray = useMemo(() =>{
        return ()=> {
            return allUsers.map(user=> {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            })
        }
    },[allUsers, allPosts])

    useEffect(() => {
        setUserPosts(userPostsArray)
    }, [userPostsArray]);


    return (
        <div>
            {userPosts.map(user => <UserPostComponent key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserPostsComponent;