import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthModel} from "../models/AuthModel";
import {authService} from "../services/api.services";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthModel>({defaultValues:{username:'userSZ1',password:'P@$$word1'}})

    const [isAuthState, setIsAuthState] = useState<boolean>(false)

    const authenticate = async (formData:AuthModel) =>{
        const isAuth = await authService.authentication(formData)
        setIsAuthState(isAuth)
    }


    return (
        <div>
            <div>
                {isAuthState ? <span> logged</span>: <span>account does not exist</span>}
            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type='text' {...register('username')} />
                <input type='text' {...register('password')}/>
                <button>Submit</button>

            </form>
        </div>
    );
};

export default FormComponent;