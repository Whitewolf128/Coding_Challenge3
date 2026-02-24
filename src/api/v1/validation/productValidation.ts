
import Joi, { ObjectSchema } from "joi";

// Post operation schemas organized by request part
export const postSchemas = {
    // POST /posts - Create new post
    create: {
        body: Joi.object({
            name: Joi.string().required().min(2).max(80),
            sku: Joi.string().required().pattern(/^[A-Z]{3}[0-9]{4}$/),
            quantity: Joi.number().required().integer().positive(),
            price: Joi.number().required().integer().positive().precision(2),
            category:  Joi.string().required().valid("electronics", "clothing", "food", "tools", "other"),
            content: Joi.string().required().messages({
                "any.required": "Content is required",
                "string.empty": "Content cannot be empty",
            }),
        }),
    },

    // PUT /posts/:id - Update post
    update: {
            name: Joi.string().required().min(2).max(80),
            quantity: Joi.number().required().integer().positive(),
            price: Joi.number().required().integer().positive().precision(2),
            category:  Joi.string().required().valid("electronics", "clothing", "food", "tools", "other"),
    },
};