import React, {useEffect} from 'react';
import UsersComponent from "../component/UserComponents/UsersComponent";
import {useAppDispatch} from "../redux/store";
import {userActions} from "../redux/slices/UserSlice";

const UsersPage = () => {
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;