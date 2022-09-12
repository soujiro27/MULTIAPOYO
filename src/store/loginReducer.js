import { LOADING, ERROR, SIGN_IN } from "../actions/Types";

const initialState = {
    loading:false,
    message:"",
    error: false,
    token:""
};

const Login = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading:true
            };
        case ERROR:
            return {
                ...state,
                error:true,
                loading:false,
                message:action.payload.message
            };
        case SIGN_IN:{
            return {
                ...state,
                error:false,
                loading:false,
                message:"",
                token:action.payload.token
            };
        }
        default:
            return {
                ...state
            };
    }
};

export { Login };