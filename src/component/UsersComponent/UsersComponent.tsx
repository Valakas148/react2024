import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel";
import {getAllUsers} from "../../service/user.api.service";

const UsersComponent:FC = () => {

    const [user, SetUser] = useState<UserModel[]>([]);

    useEffect(() =>{
        getAllUsers().then(data => console.log(data))
    },[])

    return (
        <div>
            
            </div>
    );
};

export default UsersComponent;