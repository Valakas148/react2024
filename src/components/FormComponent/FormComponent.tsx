import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {PostValidators} from "../../validators/PostValidators";


interface IProps {
    id: number,
    title: string,
    body: string
}

const FormComponent = () => {

    const {
        register,
        handleSubmit,
        formState:{
            errors,
            isValid
        }} = useForm<IProps>({mode:'all', resolver: joiResolver(PostValidators)})


    const [value, SetValue] = useState<IProps>({title: '', body: '', id: 0})




    useEffect(() => {
        if (value.id && value.title && value.body) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: value.title,
                    body: value.body,
                    userId: value.id,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }, [value]);

    return (
        <div>
            <form onClick={handleSubmit(values => {
                //console.log(values)
                SetValue(values)
            })}>
                <input type='number' {...register('id')} />
                {errors.id && <p>{errors.id.message}</p>}
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