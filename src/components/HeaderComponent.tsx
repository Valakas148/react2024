import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link> </li>
                <li><Link to={'users'}>to users</Link> </li>
                <li><Link to={'posts'}>to posts</Link> </li>
                <li><Link to={'comments'}>to comments</Link> </li>
                <li><Link to={'userpp'}>to userPosts</Link> </li>
                <li><Link to={'postAndComs'}>to postAndComs</Link> </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;