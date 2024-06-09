import React from 'react';
import UserComponent from "./UserComponent";
import {useStore} from "../../contex/ContexProvider";

const UsersComponent = () => {

    const {usersStore: {allUsers}, usersStore} = useStore()

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/> )}
        </div>
    );
};

export default UsersComponent;