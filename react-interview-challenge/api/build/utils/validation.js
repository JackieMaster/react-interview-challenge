"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation = (schema) => {
    return (request, response, next) => {
        console.log(request);
        const result = schema.validate(request.body);
        console.log(result);
        const { error } = result;
        console.log("Getting into validation");
        console.log(request.body);
        if (error) {
            // Handle validation error
            console.log(error.message);
            response.status(400).json({ errors: error.details });
        }
        next();
    };
};
exports.default = validation;
