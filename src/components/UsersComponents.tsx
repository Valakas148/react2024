import React, {useEffect, useState} from 'react';
import {UserModel} from "../model/UserModel";
import {UserService} from "../services/user.api";
import {useNavigate} from "react-router-dom";

const UsersComponents = () => {

    const [users, SetUsers] = useState<UserModel[]>([])

    useEffect(() =>{
        UserService.getUsers()
            .then(value => SetUsers(value.data))
    })


    const navigate = useNavigate()

    function Handler() {

    }

    return (
        <div>

            {users.map(user =>
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
            )
            }

        </div>
    );
};

export default UsersComponents;