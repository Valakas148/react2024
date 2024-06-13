import React, {useEffect} from 'react';
import SingleUserComponent from "../component/SingleUserComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/UserSlice";

const UserPage = () => {

    let {id} = useParams()
    const dispatch = useAppDispatch()

    const {user} = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(userActions.loadUserById(id))
    }, [id]);


    return (
        <div>
            {user && <SingleUserComponent key={user.id} user={user}/>}
        </div>
    );
};

export default UserPage;