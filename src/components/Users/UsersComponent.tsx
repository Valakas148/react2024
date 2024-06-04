import React, {useContext, useEffect, useState} from 'react';
import {ApiService} from "../../services/api.service";
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "./UserComponent";
import {useContexProvider} from "../../contex/ContexProvider";

const UsersComponent = () => {

    const {usersStore: {allUsers}} = useContexProvider()

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/> )}
        </div>
    );
};

export default UsersComponent;