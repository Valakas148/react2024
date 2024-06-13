import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps{
    user: IUser
}
const SingleUserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            <p>Name - {user.name}, username - {user.username}</p>
        </div>
    );
};

export default SingleUserComponent ;