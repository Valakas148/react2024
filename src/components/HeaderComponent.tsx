import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>login</Link></li>
                <li><Link to={'cars'}>cars</Link> </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;