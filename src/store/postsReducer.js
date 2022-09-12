import { GET_POSTS, POSTS_LOADING } from "../actions/Types";

const initialState = {
    loading:false,
    message:"",
    error: false,
    posts:[],
    
};

const Posts = (state = initialState, action) => {
    switch(action.type){
        case POSTS_LOADING:
            return {
                ...state,
                loading:true
            };
        case GET_POSTS:{
            return {
                ...state,
                error:false,
                loading:false,
                message:"",
                posts:action.payload.posts
            };
        }
        default:
            return {
                ...state
            };
    }
};

export { Posts };