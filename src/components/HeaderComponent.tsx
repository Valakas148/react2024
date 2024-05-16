import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <hr/>

            <NavLink to={'123'}>to 123</NavLink>
            <br/>

            <NavLink to={'hello'}>to hello</NavLink>

            <br/>

            <NavLink to={'users'}>to users</NavLink>

            <br/>

            <NavLink to={'/comments'}>to comments</NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;