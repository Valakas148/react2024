import React, {FC} from 'react';
import {UserModel} from "../../model/UserModel";
import {useNavigate} from "react-router-dom";

type IProps = {
    user: UserModel
}

const UserComponent:FC<IProps> = ({user}) => {


    const navigate = useNavigate()
    function Handler() {
        navigate(user.id.toString() + '/posts', {state: {user}})
    }

    return (
        <div key={user.id}>
            <hr/>
            <ul>
                <li>№{user.id}</li>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>


            <button onClick={Handler}>Posts Info</button>

            <hr/>
        </div>
    );
};

export default UserComponent;