import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps{
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {

    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <li>ID: {user.id}</li>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <button onClick={() => {
                    navigate(`${user.id}`)
                }} >details</button>
            </ul>
        </div>
    );
};

export default UserComponent;