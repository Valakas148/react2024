import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {PostValidators} from "../../validators/PostValidators";
import {IPostProps} from "../../models/IPostProps";
import {PostService} from "../../services/post.api";

const FormComponent = () => {

    const {
        register,
        handleSubmit,
        formState:{
            errors,
            isValid
        }} = useForm<IPostProps>({mode:'all', resolver: joiResolver(PostValidators)})

    const [value, SetValue] = useState<IPostProps | null>(null)

    const save = (value:IPostProps) => {
        PostService
            .savePost(value)
            .then((post) =>
                console.log(post.data)
            );
    }

    return (
        <div>
            <form onClick={handleSubmit(save)}>
                <input type='number' {...register('userId')} />
                {errors.userId && <p>{errors.userId.message}</p>}
                <br/>
                <input type='text' {...register('title')} />
                {errors.title && <p>{errors.title.message}</p>}
                <br/>
                <input type='text' {...register('body')} />
                {errors.body && <p>{errors.body.message}</p>}
                <br/>
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;