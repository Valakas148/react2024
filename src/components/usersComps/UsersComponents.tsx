import React, {useEffect, useState} from 'react';
import {UserModel} from "../../model/UserModel";
import {UserService} from "../../services/user.api";
import UserComponent from "./UserComponent";

const UsersComponents = () => {

    const [users, SetUsers] = useState<UserModel[]>([])

    useEffect(() =>{
        UserService.getUsers()
            .then(value => SetUsers(value.data))
    },[])

    return (
        <div>

            {users.map(user =>
                <UserComponent key={user.id} user={user}/>
                )
            }

        </div>
    );
};

export default UsersComponents;