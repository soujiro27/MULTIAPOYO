import { GET_USERS, USERS_LOADING, USER_INFO } from "../actions/Types";

const initialState = {
    loading:false,
    message:"",
    error: false,
    users:[],
    userInfo: {}
};

const Users = (state = initialState, action) => {
    switch(action.type){
        case USERS_LOADING:
            return {
                ...state,
                loading:true
            };
        case GET_USERS:{
            return {
                ...state,
                error:false,
                loading:false,
                message:"",
                users:action.payload.users
            };
        }
        case USER_INFO:
            return{
                ...state,
                error:false,
                loading:false,
                message:"",
                userInfo:action.payload.userInfo
            };
        default:
            return {
                ...state
            };
    }
};

export { Users };