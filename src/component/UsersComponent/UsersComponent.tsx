import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel";
import {getAllUsers} from "../../service/user.api.service";
import UserComponent from "../UserComponent/UserComponent";
import {PostModel} from "../../models/PostModel";


interface IProps{
    handleUserSelection?: (userId: number) => void
}
const UsersComponent:FC<IProps> = ({handleUserSelection}) => {

    const [users, SetUser] = useState<UserModel[]>([]);

    useEffect(() =>{
        getAllUsers().then(({data: {users}}) => SetUser(users))
    },[])


    return (
        <div>
            {users
                .map( value => (<UserComponent
                    key={value.id}
                    content={value}
                    handleUserSelection = {handleUserSelection}
                />))
            }
            </div>
    );
};

export default UsersComponent;