import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps{
    user: IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {


    return (
        <div>
            <ul>
                <li>ID - {user.id}</li>
                <li>Name - {user.name}</li>
                <li>UserName - {user.username}</li>
                <li>Email - {user.email}</li>
            </ul>
        </div>
    );
};

export default UserComponent;