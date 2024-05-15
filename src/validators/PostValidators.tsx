import Joi from "joi";

export const PostValidators = Joi.object({
    userId: Joi.number().max(10).required().messages({
        'number.max' : '< 10'
    }),
    title: Joi.string().required().messages({
        'string.required': 'Check Check title'
    }),
    body: Joi.string().required().messages({
        'string.required': 'Check Check body'
    })
})