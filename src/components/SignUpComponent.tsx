import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {UserModel} from "../models/UserModel";
import {userService} from "../services/api.services";

const SignUpComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<UserModel>()

    const [isUserState, setIsUserState] = useState<UserModel | undefined>()

    const registrate = async (userData:UserModel) => {
        const isUser = await userService.postUser(userData)
        setIsUserState(isUser)
    }


    return (
        <div>

            <form onSubmit={handleSubmit(registrate)}>
                <input type='text' {...register('username')} />
                <input type='text' {...register('password')}/>
                <button>Submit</button>

            </form>
        </div>
    );
};

export default SignUpComponent;