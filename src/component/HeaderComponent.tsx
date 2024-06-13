import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>to users</Link></li>
                <li><Link to={'posts'}>to posts</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;