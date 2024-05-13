import Joi from "joi";

export const PostValidators = Joi.object({
    id: Joi.number().min(10).required().messages({
        'number.min' : '< 10'
    }),
    title: Joi.string().required().messages({
        'string.required': 'Check Check title'
    }),
    body: Joi.string().required().messages({
        'string.required': 'Check Check body'
    })
})