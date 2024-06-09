import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useStore} from "../../contex/ContexProvider";

interface IProps{
    user: IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {


    const {usersStore:{setFavorite}} = useStore()

    return (
        <div>
            <ul>
                <li>ID - {user.id}</li>
                <li>Name - {user.name}</li>
                <li>UserName - {user.username}</li>
                <li>Email - {user.email}</li>
            </ul>
            <button onClick={()=>{
                setFavorite(user)
            }}>set as favorite</button>
        </div>
    );
};

export default UserComponent;