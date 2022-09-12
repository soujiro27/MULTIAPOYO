import Joi from "joi";
import texts from "./text.json";

const login = () => {
    const schema = Joi.object({
        email:Joi.string().email({ tlds: { allow: false } }).required().error( errors => {
            errors.forEach( err => {
                switch(err.code){
                    case "string.empty":
                        err.message = texts.usernameRequired;
                        break;
                    default:
                        err.message = "Revisa que el formato sea el correcto";
                        break;
                }
            });
            return errors;
        }),
        password : Joi.string().required().error( errors => {
            errors.forEach( err => {
                switch(err.code){
                    case "string.empty":
                        err.message = texts.passswordRequired;
                        break;
                    default:
                        err.message = "Escribe tu password";
                        break;
                }
            });
            return errors;
        }),
    });
    return schema;
};

export { login };